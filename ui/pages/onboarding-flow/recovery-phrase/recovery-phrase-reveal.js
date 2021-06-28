import { history } from 'globalthis/implementation';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Box from '../../../components/ui/box';
import Button from '../../../components/ui/button';
import Typography from '../../../components/ui/typography';
import {
  TEXT_ALIGN,
  TYPOGRAPHY,
  JUSTIFY_CONTENT,
  FONT_WEIGHT,
  BLOCK_SIZES,
  ALIGN_ITEMS,
} from '../../../helpers/constants/design-system';
import RecoveryPhraseChips from './recovery-phrase-chips';

const RecoveryPhraseReveal = ({ seedPhrase }) => {
  const history = useHistory();
  const [seedPhraseRevealed, setSeedPhraseRevealed] = useState(false);
  return (
    <div>
      <Box
        justifyContent={JUSTIFY_CONTENT.CENTER}
        textAlign={TEXT_ALIGN.CENTER}
        marginBottom={4}
      >
        <Typography variant={TYPOGRAPHY.H2} fontWeight={FONT_WEIGHT.BOLD}>
          Write down your Secret Recovery Phrase
        </Typography>
      </Box>
      <Box
        justifyContent={JUSTIFY_CONTENT.CENTER}
        textAlign={TEXT_ALIGN.CENTER}
        marginBottom={4}
      >
        <Typography variant={TYPOGRAPHY.H4}>
          Write down this 12-word Secret Recovery Phrase and save it in a place
          that you trust and only you can access.
        </Typography>
      </Box>
      <Box
        justifyContent={JUSTIFY_CONTENT.SPACE_EVENLY}
        textAlign={TEXT_ALIGN.LEFT}
        marginBottom={4}
        className="recovery-phrase__tips"
      >
        <Typography variant={TYPOGRAPHY.H4} fontWeight={FONT_WEIGHT.BOLD}>
          Tips:
        </Typography>
        <ul>
          <li>
            <Typography variant={TYPOGRAPHY.H4}>
              Save in a password manager
            </Typography>
          </li>
          <li>
            <Typography variant={TYPOGRAPHY.H4}>
              Store in a bank vault
            </Typography>
          </li>
          <li>
            <Typography variant={TYPOGRAPHY.H4}>
              Store in a safe deposit box
            </Typography>
          </li>
          <li>
            <Typography variant={TYPOGRAPHY.H4}>
              Write down and store in multiple secret places
            </Typography>
          </li>
        </ul>
      </Box>
      <RecoveryPhraseChips
        seedPhrase={seedPhrase}
        seedPhraseRevealed={seedPhraseRevealed}
      />
      <Box
        width={BLOCK_SIZES.HALF}
        justifyContent={JUSTIFY_CONTENT.CENTER}
        alignItems={ALIGN_ITEMS.CENTER}
        marginTop={4}
      >
        {seedPhraseRevealed ? (
          <Button
            rounded
            type="primary"
            // onClick={() => {
            //   history.push();
            // }}
          >
            Next
          </Button>
        ) : (
          <Button
            rounded
            type="primary"
            onClick={() => {
              setSeedPhraseRevealed(true);
            }}
          >
            Reveal Recovery Phrase
          </Button>
        )}
      </Box>
    </div>
  );
};

export default RecoveryPhraseReveal;
