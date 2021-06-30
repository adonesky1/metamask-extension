import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useNewMetricEvent } from '../../../hooks/useMetricEvent';
import { useI18nContext } from '../../../hooks/useI18nContext';
import TextField from '../../../components/ui/text-field';
import Button from '../../../components/ui/button';
import { INITIALIZE_SELECT_ACTION_ROUTE } from '../../../helpers/constants/routes';
import Typography from '../../../components/ui/typography';
import {
  TEXT_ALIGN,
  TYPOGRAPHY,
  JUSTIFY_CONTENT,
  FONT_WEIGHT,
} from '../../../helpers/constants/design-system';

export default function NewAccount({ onSubmit }) {
  const t = useI18nContext();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const goBackEvent = useNewMetricEvent({
    event: 'Go Back from Onboarding Create',
    category: 'Onboarding',
  });

  const submitPasswordEvent = useNewMetricEvent({
    event: 'Submit Password',
    category: 'Onboarding',
  });

  const isValid = () => {
    if (!password || !confirmPassword || password !== confirmPassword) {
      return false;
    }

    if (password.length < 8) {
      return false;
    }

    return !passwordError && !confirmPasswordError;
  };
  const handlePasswordChange = (password) => {
    let passwordError = '',
      confirmPasswordError = '';
    if (password && password.length < 8) {
      passwordError = t('passwordNotLongEnough');
    }

    if (confirmPassword && password !== confirmPassword) {
      confirmPasswordError = t('passwordsDontMatch');
    }

    setPassword(password);
    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);
  };

  const handleConfirmPasswordChange = (confirmPassword) => {
    let confirmPasswordError = '';
    if (password !== confirmPassword) {
      confirmPasswordError = t('passwordsDontMatch');
    }

    setConfirmPassword(confirmPassword);
    setConfirmPasswordError(confirmPasswordError);
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    if (!isValid()) {
      return;
    }

    try {
      await onSubmit(password);

      submitPasswordEvent();

      history.push(INITIALIZE_SEED_PHRASE_INTRO_ROUTE);
    } catch (error) {
      setPasswordError(error.message);
    }
  };

  const onTermsKeyPress = ({ key }) => {
    if (key === ' ' || key === 'Enter') {
      setTermsChecked(!termsChecked);
    }
  };

  return (
    <div className="new-account__wrapper">
      {/* <div className="new-account__create-back">
        <a
          onClick={(e) => {
            e.preventDefault();
            goBackEvent();
            history.push(INITIALIZE_SELECT_ACTION_ROUTE);
          }}
          href="#"
        >
          {`< ${t('back')}`}
        </a>
      </div> */}
      <Typography variant={TYPOGRAPHY.H2} fontWeight={FONT_WEIGHT.BOLD}>
        {t('createPassword')}
      </Typography>
      <Typography variant={TYPOGRAPHY.H4} align={TEXT_ALIGN.CENTER}>
        This passcode will unlock your MetaMask wallet only on this device.
        MetaMask can not recover this passcode.
      </Typography>
      <form className="new-account__form" onSubmit={handleCreate}>
      <div className='new-account__form__create-password-input'>
      <button className='new-account__form__create-password-input__show-button' onClick={() => { setShowPassword(true) }}>show</button>
        <TextField
          id="create-password"
          label={t('newPassword')}
          type={showPassword ? "text" : "password"}
          className="new-account__input"
          value={password}
          onChange={(event) => handlePasswordChange(event.target.value)}
          error={passwordError}
          autoFocus
          autoComplete="new-password"
          margin="normal"
          fullWidth
          largeLabel
          //   secondaryAdornment={<button onClick={() => { setShowPassword(true) }}>show</button>}
          />
          </div>
        <TextField
          id="confirm-password"
          label={t('confirmPassword')}
          type="password"
          className="new-account__input"
          value={confirmPassword}
          onChange={(event) => handleConfirmPasswordChange(event.target.value)}
          error={confirmPasswordError}
          autoComplete="confirm-password"
          margin="normal"
          fullWidth
          largeLabel
        />
        <div
          className="new-account__checkbox-container"
          onClick={() => setTermsChecked(!termsChecked)}
        >
          <div
            className="new-account__checkbox"
            tabIndex="0"
            role="checkbox"
            onKeyPress={onTermsKeyPress}
            aria-checked={termsChecked}
            aria-labelledby="ftf-chk1-label"
          >
            {termsChecked ? <i className="fa fa-check fa-2x" /> : null}
          </div>
          <span id="ftf-chk1-label" className="new-account__checkbox-label">
            {t('acceptTermsOfUse', [
              <a
                onClick={(e) => e.stopPropagation()}
                key="new-account__link-text"
                href="https://metamask.io/terms.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="new-account__link-text">{t('terms')}</span>
              </a>,
            ])}
          </span>
        </div>
        <Button
          type="primary"
          className="new-account__button"
          disabled={!isValid() || !termsChecked}
          onClick={handleCreate}
        >
          {t('create')}
        </Button>
      </form>
    </div>
  );
}
