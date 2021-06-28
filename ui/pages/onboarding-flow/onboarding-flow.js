import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import RecoveryPhraseReveal from './RecoveryPhrase/RecoveryPhraseReveal'
import {
    INITIALIZE_SEED_PHRASE_ROUTE,
  } from '../../helpers/constants/routes';

const OnboardingFlow = () => {
    const history = useHistory();
    useEffect(() => {
        history.push(INITIALIZE_SEED_PHRASE_ROUTE)

    })

  return (
    <div className="onboarding-flow__wrapper">
      <Switch>
        <Route
          path={INITIALIZE_SEED_PHRASE_ROUTE}
          render={(routeProps) => (
            <RecoveryPhraseReveal
            //   {...routeProps}
            //   seedPhrase={seedPhrase}
            //   verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default OnboardingFlow;