import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import {
  INITIALIZE_SEED_PHRASE_ROUTE,
  INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE,
} from '../../helpers/constants/routes';
import ReviewRecoveryPhrase from './recovery-phrase/review-recovery-phrase';
import ConfirmRecoveryPhrase from './recovery-phrase/confirm-recovery-phrase';

const OnboardingFlow = () => {
  const history = useHistory();
  useEffect(() => {
    history.push(INITIALIZE_SEED_PHRASE_ROUTE);
  }, []);

  const seedPhrase =
    'ship agree price proud mango harbor document stage raise kitten initial invest';

  return (
    <div className="onboarding-flow__wrapper">
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
      </Switch>
    </div>
  );
};

export default OnboardingFlow;
