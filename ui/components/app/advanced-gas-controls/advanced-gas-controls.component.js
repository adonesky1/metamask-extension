import React, { useContext, useState } from 'react';

import { I18nContext } from '../../../contexts/i18n';
import Typography from '../../ui/typography/typography';
import {
  FONT_WEIGHT,
  TYPOGRAPHY,
  COLORS,
} from '../../../helpers/constants/design-system';
import AdvancedGasControlsRow from './advanced-gas-controls-row.component';
import FormField from '../../ui/form-field';

export default function AdvancedGasControls() {
  const t = useContext(I18nContext);

  const [gasLimit, setGasLimit] = useState('');
  const [maxPriorityFee, setMaxPriorityFee] = useState(0);
  const [maxFee, setMaxFee] = useState(0);

  // Used in legacy version
  const [gasPrice, setGasPrice] = useState(0);

  return (
    <div className="advanced-gas-controls">
      <FormField
        titleText={t('gasLimit')}
        onChange={setGasLimit}
        tooltipText=""
        titleDetail={<button>test</button>}
        value={gasLimit}
      />
      {true ? (
        <>
          <FormField
            titleText={t('maxPriorityFee')}
            titleUnit="(GWEI)"
            tooltipText=""
            numeric
            onChange={setMaxPriorityFee}
            value={maxPriorityFee}
            titleDetail={
              <>
                <Typography
                  tag="span"
                  color={COLORS.UI4}
                  variant={TYPOGRAPHY.H8}
                  fontWeight={FONT_WEIGHT.BOLD}
                >
                  {t('gasFeeEstimate')}:
                </Typography>{' '}
                <Typography
                  tag="span"
                  color={COLORS.UI4}
                  variant={TYPOGRAPHY.H8}
                ></Typography>
              </>
            }
          />
          <AdvancedGasControlsRow
            titleText={t('maxFee')}
            titleUnit="(GWEI)"
            tooltipText=""
            onChange={setMaxFee}
            value={maxFee}
            titleDetailText={
              <>
                <Typography
                  tag="span"
                  color={COLORS.UI4}
                  variant={TYPOGRAPHY.H8}
                  fontWeight={FONT_WEIGHT.BOLD}
                >
                  {t('gasFeeEstimate')}:
                </Typography>{' '}
                <Typography
                  tag="span"
                  color={COLORS.UI4}
                  variant={TYPOGRAPHY.H8}
                ></Typography>
              </>
            }
          />
        </>
      ) : (
        <>
          <AdvancedGasControlsRow
            titleText={t('gasPrice')}
            titleUnit="(GWEI)"
            onChange={setGasPrice}
            tooltipText=""
            titleDetailText=""
            value={gasPrice}
          />
        </>
      )}
    </div>
  );
}
