import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  formatCurrency,
  getValueFromWeiHex,
} from '../helpers/utils/confirm-tx.util';
import {
  getCurrentCurrency,
  getConversionRate,
  getNativeCurrency,
  getPreferences,
  getShouldShowFiat,
} from '../selectors';
import { useUserPreferencedCurrency } from './useUserPreferencedCurrency'
import { PRIMARY, SECONDARY, ETH, GWEI, WEI } from '../helpers/constants/common';
import { conversionUtil } from '../helpers/utils/conversion-util';

export function useCurrency({
  inputValue,
  isSwapped,
  userInput,
}) {
  const currentCurrency = useSelector(getCurrentCurrency);
  const nativeCurrency = useSelector(getNativeCurrency);
  const conversionRate = useSelector(getConversionRate);
  const { useNativeCurrencyAsPrimaryCurrency } = useSelector(getPreferences)
  const showFiat = useSelector(getShouldShowFiat);

  const { currency: primaryCurrency, 
    numberOfDecimals: primaryNumberOfDecimals, 
  } = useUserPreferencedCurrency(isSwapped ? SECONDARY : PRIMARY)
  
  const { currency: secondaryCurrency, 
    numberOfDecimals: secondaryNumberOfDecimals, 
  } = useUserPreferencedCurrency(isSwapped ? PRIMARY : SECONDARY)
  
  let primaryValue, secondaryValue;
  const value = useMemo(() => {
    if(primaryCurrency === nativeCurrency){

    // native currency is primary
    primaryValue = conversionUtil(inputValue, {
      fromNumericBase: 'hex',
      toNumericBase: 'dec',
      fromDenomination: WEI,
      numberOfDecimals: primaryNumberOfDecimals || 6,
    });

    secondaryValue = getValueFromWeiHex({
      value: inputValue,
      fromCurrency: nativeCurrency,
      toCurrency: secondaryCurrency,
      conversionRate,
      numberOfDecimals: secondaryNumberOfDecimals || 2,
    });
  } else {
    // preferred/fiat is primary
    primaryValue = getValueFromWeiHex({
      value: inputValue,
      fromCurrency: nativeCurrency,
      toCurrency: primaryCurrency,
      conversionRate,
      numberOfDecimals: primaryNumberOfDecimals || 2,
    });
    
    // native currency is secondary
    secondaryValue = conversionUtil(inputValue, {
      fromNumericBase: 'hex',
      toNumericBase: 'dec',
      fromDenomination: WEI,
      numberOfDecimals: secondaryNumberOfDecimals || 6,
      fromCurrency: userInput ? undefined : nativeCurrency,
      toCurrency: secondaryCurrency,
      conversionRate,
      invertConversionRate: true,
    });
  }

  return {
    primary: {
      currency: primaryCurrency.toUpperCase(), 
      value: primaryValue, 
      formatted: formatCurrency(primaryValue, primaryCurrency) 
    },
    secondary: { 
      currency: secondaryCurrency.toUpperCase(), 
      value: secondaryValue,
      formatted: formatCurrency(secondaryValue, secondaryCurrency),  
      // isHidden: !showFiat,
    }
  }
}, [inputValue, isSwapped]);
  
return value;

}
