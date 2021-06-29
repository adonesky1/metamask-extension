import React, { useState } from 'react';
import classnames from 'classnames';
import Chip from '../../../components/ui/chip';
import Box from '../../../components/ui/box';
import Typography from '../../../components/ui/typography';
import {
  TEXT_ALIGN,
  TYPOGRAPHY,
  JUSTIFY_CONTENT,
  FONT_WEIGHT,
  COLORS,
  BORDER_STYLE,
  SIZES,
  DISPLAY,
} from '../../../helpers/constants/design-system';

const RecoveryPhraseChips = ({
  seedPhrase,
  seedPhraseRevealed,
  confirmPhase,
}) => {
  const [inputValue, setInputValue] = useState('');
  const seedPhraseSplit = seedPhrase.split(' ');
  const hideSeedPhrase =
    seedPhraseRevealed !== undefined && !seedPhraseRevealed;
  return (
    <Box
      borderColor={COLORS.UI2}
      borderStyle={BORDER_STYLE.SOLID}
      padding={4}
      borderWidth={1}
      borderRadius={SIZES.MD}
      display={DISPLAY.GRID}
      className="recovery-phrase__secret"
      marginBottom={4}
    >
      <div
        className={classnames('recovery-phrase__chips', {
          'recovery-phrase__chips--hidden': hideSeedPhrase,
        })}
      >
        {seedPhraseSplit.map((word, index) => {
          if (confirmPhase && [2, 3, 7].includes(index)) {
            return (
              <div className="recovery-phrase__chip-item">
                <div className="recovery-phrase__chip-item__number">
                  {`${index++}.`}
                </div>
                <Chip
                  className="recovery-phrase__chip"
                  borderColor={COLORS.UI3}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </div>
            );
          } else {
            return (
              <div className="recovery-phrase__chip-item">
                <div className="recovery-phrase__chip-item__number">
                  {`${index++}.`}
                </div>
                <Chip
                  className="recovery-phrase__chip"
                  borderColor={COLORS.UI3}
                >
                  {word}
                </Chip>
              </div>
            );
          }
        })}
      </div>

      {hideSeedPhrase && (
        <div className="recovery-phrase__secret-blocker">
          {/* <LockIcon width="28px" height="35px" fill="#FFFFFF" /> */}
          <Typography
            variant={TYPOGRAPHY.H6}
            color={COLORS.WHITE}
            className="recovery-phrase__reveal-button"
          >
            Make sure no one is watching your screen
          </Typography>
        </div>
      )}
    </Box>
  );
};

export default RecoveryPhraseChips;
