import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import {
  INITIALIZE_SEED_PHRASE_ROUTE,
  INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE,
  INITIALIZE_CREATE_PASSWORD_ROUTE,
} from '../../helpers/constants/routes';
import ReviewRecoveryPhrase from './recovery-phrase/review-recovery-phrase';
import ConfirmRecoveryPhrase from './recovery-phrase/confirm-recovery-phrase';
import ProgressBar from '../../components/app/step-progress-indicator'


const OnboardingFlow = () => {
  const history = useHistory();
  useEffect(() => {
    history.push(INITIALIZE_SEED_PHRASE_ROUTE);
  }, []);

  const seedPhrase =
    'ship agree price proud mango harbor document stage raise kitten initial invest';

   const handleCreateNewAccount = async (password) => {
      const { createNewAccount } = this.props;
  
      try {
        const seedPhrase = await createNewAccount(password);
        this.setState({ seedPhrase });
      } catch (error) {
        throw new Error(error.message);
      }
    };

  return (
    <div className="onboarding-flow__wrapper">
      <ProgressBar />
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
            <ConfirmRecoveryPhrase
              {...routeProps}
              seedPhrase={seedPhrase}
              //   verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default OnboardingFlow;
