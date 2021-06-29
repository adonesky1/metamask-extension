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
} from '../../../helpers/constants/design-system';
import RecoveryPhraseChips from './recovery-phrase-chips';
// import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
// import Copy from '../../../components/ui/icon/copy-icon.component';
// import { useI18nContext } from '../../../hooks/useI18nContext';

const ConfirmRecoveryPhrase = ({ seedPhrase }) => {
  // const history = useHistory();
  // const t = useI18nContext();
  // const [copied, handleCopy] = useCopyToClipboard();
  // const [seedPhraseRevealed, setSeedPhraseRevealed] = useState(false);
  return (
    <div>
      <Box
        justifyContent={JUSTIFY_CONTENT.CENTER}
        textAlign={TEXT_ALIGN.CENTER}
        marginBottom={4}
      >
        <Typography variant={TYPOGRAPHY.H2} fontWeight={FONT_WEIGHT.BOLD}>
          Confirm Secret Recovery Phrase
        </Typography>
      </Box>
      <Box
        justifyContent={JUSTIFY_CONTENT.CENTER}
        textAlign={TEXT_ALIGN.CENTER}
        marginBottom={4}
      >
        <Typography variant={TYPOGRAPHY.H4}>
          Enter the missing words to confirm your Secret Recovery Phrase.
        </Typography>
      </Box>
      <RecoveryPhraseChips seedPhrase={seedPhrase} confirmPhase />
      <div className="recovery-phrase__footer">
        <Button
          rounded
          type="primary"
          className="recovery-phrase__footer--button"
          // onClick={() => {
          //   history.push();
          // }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ConfirmRecoveryPhrase;
