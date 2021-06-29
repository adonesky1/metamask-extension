import React, { useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router';
import Box from '../../../components/ui/box';
import Button from '../../../components/ui/button';
import Typography from '../../../components/ui/typography';
import { debounce } from 'lodash';
import {
  TEXT_ALIGN,
  TYPOGRAPHY,
  JUSTIFY_CONTENT,
  FONT_WEIGHT,
} from '../../../helpers/constants/design-system';
import RecoveryPhraseChips from './recovery-phrase-chips';

const ConfirmRecoveryPhrase = ({ seedPhrase = '' }) => {
  const splitSeedPhrase = seedPhrase.split(' ');
  const indicesToCheck = [2, 3, 7];
  const [phraseElements, setPhraseElements] = useState({
    ...splitSeedPhrase,
    [indicesToCheck[0]]: '',
    [indicesToCheck[1]]: '',
    [indicesToCheck[2]]: '',
  });
  const [matching, setMatching] = useState(false);

  const validateRecoveryPhrase = (phrase) => {
    setMatching(Object.values(phrase).join(' ') === seedPhrase);
  };
  const debounceValidate = useMemo(
    () =>
      debounce(() => {
        validateRecoveryPhrase(phraseElements);
      }, 500),
    [phraseElements],
  );

  useEffect(() => {
    debounceValidate();
  }, [phraseElements, seedPhrase]);

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
      <RecoveryPhraseChips
        seedPhrase={splitSeedPhrase}
        confirmPhase
        setInputValue={setPhraseElements}
        inputValue={phraseElements}
        indicesToCheck={indicesToCheck}
      />
      <div className="recovery-phrase__footer">
        <Button
          rounded
          type="primary"
          className="recovery-phrase__footer--button"
          // onClick={() => {
          //   history.push();
          // }}
          disabled={!matching}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ConfirmRecoveryPhrase;
