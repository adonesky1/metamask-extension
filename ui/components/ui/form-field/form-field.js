import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../../ui/typography/typography';
import Box from '../../ui/box/box';
import {
  COLORS,
  TEXT_ALIGN,
  DISPLAY,
  TYPOGRAPHY,
  FONT_WEIGHT,
} from '../../../helpers/constants/design-system';

import NumericInput from '../../ui/numeric-input/numeric-input.component';
import InfoTooltip from '../../ui/info-tooltip/info-tooltip';

export default function FormField({
  titleText,
  titleUnit,
  tooltipText,
  titleDetail,
  error,
  onChange,
  value,
  numeric,
}) {
  return (
    <div
      className={classNames('form-field__row', {
        'form-field__row--error': error,
      })}
    >
      <label>
        <div className="form-field__row-heading">
          <div className="form-field__row-heading-title">
            {titleText && (
              <Typography
                tag={TYPOGRAPHY.H6}
                fontWeight={FONT_WEIGHT.BOLD}
                variant={TYPOGRAPHY.H6}
                boxProps={{ display: DISPLAY.INLINE_BLOCK }}
              >
                {titleText}
              </Typography>
            )}
            {titleUnit && (
              <Typography
                tag={TYPOGRAPHY.H6}
                variant={TYPOGRAPHY.H6}
                color={COLORS.UI4}
                boxProps={{ display: DISPLAY.INLINE_BLOCK }}
              >
                {titleUnit}
              </Typography>
            )}
            <InfoTooltip position="top" contentText={tooltipText} />
          </div>
          {titleDetail && (
            <Box
              className="form-field__row-heading-detail"
              textAlign={TEXT_ALIGN.END}
            >
              {titleDetail}
            </Box>
          )}
        </div>
        {numeric ? (
          <NumericInput error={error} onChange={onChange} value={value} />
        ) : (
          <input
            className={classNames('form-field__input', {
              'form-field__input--error': error,
            })}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          />
        )}
        {error && (
          <Typography
            color={COLORS.ERROR1}
            variant={TYPOGRAPHY.H7}
            className="form-field__row-error"
          >
            {error}
          </Typography>
        )}
      </label>
    </div>
  );
}

FormField.propTypes = {
  titleText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleUnit: PropTypes.string,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleDetail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number,
};

FormField.defaultProps = {
  titleText: '',
  titleUnit: '',
  tooltipText: '',
  titleDetail: '',
  error: '',
  onChange: undefined,
  value: 0,
};
