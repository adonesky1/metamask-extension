import React from 'react';
import Chip from '../../../components/ui/chip';
import Box from '../../../components/ui/box';
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
import classnames from 'classnames';

const RecoveryPhraseChips = ({ seedPhrase, seedPhraseRevealed }) => {
  const seedPhraseSplit = seedPhrase.split(' ');
  let count = 0;
  return (
    <Box
      borderColor={COLORS.UI2}
      borderStyle={BORDER_STYLE.SOLID}
      padding={4}
      borderWidth={1}
      borderRadius={SIZES.MD}
      display={DISPLAY.GRID}
      className={classnames("recovery-phrase__chips", {
        'recovery-phrase__chips--hidden': !seedPhraseRevealed,
      } )}
      marginBottom={4}
    >
      {seedPhraseSplit.map((word) => {
        count++;
        return (
          <div className="recovery-phrase__chip-item">
            <div className="recovery-phrase__chip-item__number">
                {`${count}.`}
            </div>
            <Chip className={'recovery-phrase__chip'} borderColor={COLORS.UI3}>
              {word}
            </Chip>
          </div>
        );
      })}

      {!seedPhraseRevealed && (
          <div
            className="recovery-phrase__secret-blocker"
          >
            {/* <LockIcon width="28px" height="35px" fill="#FFFFFF" /> */}
            {/* <div className="reveal-seed-phrase__reveal-button">
              {t('clickToRevealSeed')}
            </div> */}
          </div>
        )}
    </Box>
  );
};

export default RecoveryPhraseChips;
