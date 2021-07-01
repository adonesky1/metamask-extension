import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import {
  INITIALIZE_SEED_PHRASE_ROUTE,
  INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE,
  INITIALIZE_CREATE_PASSWORD_ROUTE,
} from '../../helpers/constants/routes';
import ProgressBar from '../../components/app/step-progress-bar';
import ReviewRecoveryPhrase from './recovery-phrase/review-recovery-phrase';
import ConfirmRecoveryPhrase from './recovery-phrase/confirm-recovery-phrase';
import NewAccount from './new-account/new-account';

const OnboardingFlow = ({ createNewAccount }) => {
  const [seedPhrase, setSeedPhrase] = useState('');

  const history = useHistory();
  useEffect(() => {
    history.push(INITIALIZE_CREATE_PASSWORD_ROUTE);
    setSeedPhrase(
      'test test test test test test test test test teset test test',
    );
  }, []);

  // setSeedPhrase(
  //   'ship agree price proud mango harbor document stage raise kitten initial invest',
  // );

  //  const handleCreateNewAccount = async (password) => {
  //     try {
  //       const seedPhrase = await createNewAccount(password);
  //       this.setState({ seedPhrase });
  //     } catch (error) {
  //       throw new Error(error.message);
  //     }
  //   };

  return (
    <div className="onboarding-flow__wrapper">
      {/* <ProgressBar /> */}
      <Switch>
        <Route
          exact
          path={INITIALIZE_SEED_PHRASE_ROUTE}
          render={(routeProps) => (
            <ReviewRecoveryPhrase
              {...routeProps}
              seedPhrase={seedPhrase}
              //   verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
        <Route
          exact
          path={INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE}
          render={(routeProps) => (
            <ConfirmRecoveryPhrase
              {...routeProps}
              seedPhrase={seedPhrase}
              //   verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
        <Route
          exact
          path={INITIALIZE_CREATE_PASSWORD_ROUTE}
          render={(routeProps) => (
            <NewAccount
              {...routeProps}
              // seedPhrase={seedPhrase}
              //   verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default OnboardingFlow;
