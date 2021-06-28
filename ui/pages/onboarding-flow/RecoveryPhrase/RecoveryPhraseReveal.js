import React from 'react';
import Box from '../../../components/ui/box';
import Typography from '../../../components/ui/typography'
import {
  TEXT_ALIGN,
  TYPOGRAPHY,
  JUSTIFY_CONTENT,
  FONT_WEIGHT,
} from '../../../helpers/constants/design-system';

const RecoveryPhraseReveal = ({ seedPhrase }) => {
  return (
    <div>
      <Box
        justifyContent={JUSTIFY_CONTENT.CENTER}
        textAlign={TEXT_ALIGN.CENTER}
        marginBottom={24}
      >
        <Typography variant={TYPOGRAPHY.H2} fontWeight={FONT_WEIGHT.BOLD}>
          Write down your Secret Recovery Phrase
        </Typography>
      </Box>
      <Box
        justifyContent={JUSTIFY_CONTENT.CENTER}
        textAlign={TEXT_ALIGN.CENTER}
      >
        <div className="onboarding-flow__subheader">
          Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access.
        </div>
      </Box>
      <Box
        justifyContent={JUSTIFY_CONTENT.SPACE_BETWEEN}
        textAlign={TEXT_ALIGN.LEFT}
      >
        <div>Tips:</div>
        <ul className="onboarding-flow__tips">
          <li>Save in a password manager</li>
          <li>Store in a bank vault</li>
          <li>Store in a safe deposit box</li>
          <li>Write down and store in multiple secret places</li>
        </ul>
      </Box>
    </div>
  );
};

export default RecoveryPhraseReveal;
