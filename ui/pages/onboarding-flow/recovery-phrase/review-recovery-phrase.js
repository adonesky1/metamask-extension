import { history } from 'globalthis/implementation';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Box from '../../../components/ui/box';
import Button from '../../../components/ui/button';
import Typography from '../../../components/ui/typography';
import { INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE } from '../../../helpers/constants/routes';
import {
  TEXT_ALIGN,
  TYPOGRAPHY,
  JUSTIFY_CONTENT,
  FONT_WEIGHT,
} from '../../../helpers/constants/design-system';
import RecoveryPhraseChips from './recovery-phrase-chips';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import Copy from '../../../components/ui/icon/copy-icon.component';
import { useI18nContext } from '../../../hooks/useI18nContext';

const RecoveryPhrase = ({ seedPhrase }) => {
  const history = useHistory();
  const t = useI18nContext();
  const [copied, handleCopy] = useCopyToClipboard();
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
        seedPhrase={seedPhrase.split(' ')}
        seedPhraseRevealed={seedPhraseRevealed}
      />
      <div className="recovery-phrase__footer">
          {seedPhraseRevealed ? (
            <div className="recovery-phrase__footer--copy">
                <Button
                  onClick={() => {
                    handleCopy(seedPhrase);
                  }}
                  icon={copied ? null : <Copy size={20} color="#3098DC" />}
                  className="recovery-phrase__footer--copy--button"
                >
                  {copied ? t('copiedExclamation') : t('copyToClipboard')}
                </Button>
              <Button
                rounded
                type="primary"
                className='recovery-phrase__footer--button'
                onClick={() => {
                  history.push(INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE);
                }}
              >
                Next
              </Button>
            </div>
          ) : (
            <Button
              rounded
              type="primary"
              className='recovery-phrase__footer--button'
              onClick={() => {
                setSeedPhraseRevealed(true);
              }}
            >
              Reveal Recovery Phrase
            </Button>
          )}
      </div>
    </div>
  );
};

export default RecoveryPhrase;
