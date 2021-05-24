import { useSelector } from 'react-redux';
import {
  getPreferences,
  getNativeCurrency,
  getCurrentCurrency,
} from '../selectors';
import { PRIMARY, SECONDARY, ETH } from '../helpers/constants/common';

/**
 * Defines the shape of the options parameter for useUserPreferencedCurrency
 * @typedef {Object} UseUserPreferencedCurrencyOptions
 * @property {number} [numberOfDecimals]     - Number of significant decimals to display
 * @property {number} [ethNumberOfDecimals]  - Number of significant decimals to display
 *                                             when using ETH
 * @property {number} [fiatNumberOfDecimals] - Number of significant decimals to display
 *                                            when using fiat
 */

/**
 * Defines the return shape of useUserPreferencedCurrency
 * @typedef {Object} UserPreferredCurrency
 * @property {string} currency         - the currency type to use (eg: 'ETH', 'usd')
 * @property {number} numberOfDecimals - Number of significant decimals to display
 */

/**
 * useUserPreferencedCurrency
 *
 * returns an object that contains what currency to use for displaying values based
 * on the user's preference settings, as well as the significant number of decimals
 * to display based on the currency
 * @param {"PRIMARY" | "SECONDARY"} type - what display type is being rendered
 * @param {UseUserPreferencedCurrencyOptions} opts - options to override default values
 * @return {UserPreferredCurrency}
 */
export function useUserPreferencedCurrency(type, opts = {}) {
  const nativeCurrency = useSelector(getNativeCurrency);
  const currentCurrency = useSelector(getCurrentCurrency);
  const { useNativeCurrencyAsPrimaryCurrency } = useSelector(getPreferences);

  let currency, numberOfDecimals;
  if (
    (type === PRIMARY && useNativeCurrencyAsPrimaryCurrency) ||
    (type === SECONDARY && !useNativeCurrencyAsPrimaryCurrency)
  ) {
    // use native currency
    currency = nativeCurrency;
    numberOfDecimals = opts.numberOfDecimals || opts.ethNumberOfDecimals || 4;
  } else if (
    (type === SECONDARY && useNativeCurrencyAsPrimaryCurrency) ||
    (type === PRIMARY && !useNativeCurrencyAsPrimaryCurrency)
  ) {
    // use preferred currency
    currency = currentCurrency;
    numberOfDecimals = opts.numberOfDecimals || opts.fiatNumberOfDecimals || 2;
  }

  return { currency, numberOfDecimals };
}
