import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import UnitInput from '../unit-input';
import CurrencyDisplay from '../currency-display';
import {
  getValueFromWeiHex,
  getWeiHexFromDecimalValue,
  decimalToHex,
} from '../../../helpers/utils/conversions.util';
import { ETH, WEI } from '../../../helpers/constants/common';
import { useI18nContext } from '../../../hooks/useI18nContext';
import { useCurrency } from '../../../hooks/useCurrency';
import { 
  getIsMainnet, 
  getPreferences, 
  getCurrentCurrency, 
  getNativeCurrency, 
  getConversionRate,
} from '../../../selectors';
import { conversionUtil } from '.../../../helpers/utils/conversion-util';

/**
 * Component that allows user to enter currency values as a number, and props receive a converted
 * hex value in WEI. props.value, used as a default or forced value, should be a hex value, which
 * gets converted into a decimal value depending on the currency (ETH or Fiat).
 */

export const CurrencyInput = ({
  onChange,
  useFiat,
  value,
  fiatSuffix,
  nativeSuffix,
}) => {

// const currentCurrency = useSelector(getCurrentCurrency);
const nativeCurrency = useSelector(getNativeCurrency);
const conversionRate = useSelector(getConversionRate);
const { showFiatInTestnets } = useSelector(getPreferences)
const isMainnet = useSelector(getIsMainnet);
const hideFiat = !isMainnet && !showFiatInTestnets
const [isSwapped, setIsSwapped] = useState(false)

const [decimalValue, setDecimalValue] = useState(0)
const [hexValue, setHexValue] = useState('0x0')
const t = useI18nContext();
const { primary, secondary } = useCurrency({ inputValue: hexValue, isSwapped, userInput: true })


  const handleChange = decimalValue => {
    // got to figure out isHidden
    const fiatFirst = primary.currency !== nativeCurrency;
    const hexValue = fiatFirst ?
        getWeiHexFromDecimalValue({
          value: decimalValue,
          fromCurrency: nativeCurrency,
          conversionRate,
          invertConversionRate: true,
        })
      : getWeiHexFromDecimalValue({
          value: decimalValue,
          fromCurrency: nativeCurrency,
          fromDenomination: ETH,
          conversionRate,
        });

    setDecimalValue(decimalValue)
    setHexValue(hexValue);

    // if fiat we have to convert back to ETH value for gas calculation
    const onChangeValue = fiatFirst ? 
    conversionUtil(hexValue, {
      fromNumericBase: 'hex',
      toNumericBase: 'hex',
      numberOfDecimals: secondary.numberOfDecimals || 6,
      toCurrency: secondary.currency,
      conversionRate,
      invertConversionRate: true,
    })
    : hexValue;

    onChange(onChangeValue);
  };

  useEffect(() => {
    handleChange(decimalValue)
  }, [primary, secondary, handleChange])
  

  const renderConversionComponent = () => {
    let currency, numberOfDecimals;

    if (hideFiat) {
      return (
        <div className="currency-input__conversion-component">
          {t('noConversionRateAvailable')}
        </div>
      );
    }

    return (
      <CurrencyDisplay
        className="currency-input__conversion-component"
        currency={secondary.currency}
        // value={decimalToHex(secondary.value)}
        displayValue={secondary.value}
        numberOfDecimals={secondary.numberOfDecimals}
      />
    );
  }

    return (
      <UnitInput
        suffix={primary.currency}
        onChange={decimalVal => handleChange(decimalVal)}
        value={decimalValue}
        actionComponent={
          <div className="currency-input__swap-component" 
          onClick={
            () => {setIsSwapped(!isSwapped)} 
          } />
        }
      >
        {renderConversionComponent()}
      </UnitInput>
    );
}

CurrencyInput.contextTypes = {
  t: PropTypes.func,
};

CurrencyInput.propTypes = {
  conversionRate: PropTypes.number,
  currentCurrency: PropTypes.string,
  nativeCurrency: PropTypes.string,
  onChange: PropTypes.func,
  useFiat: PropTypes.bool,
  hideFiat: PropTypes.bool,
  value: PropTypes.string,
  fiatSuffix: PropTypes.string,
  nativeSuffix: PropTypes.string,
};