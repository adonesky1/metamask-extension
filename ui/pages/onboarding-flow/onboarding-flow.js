import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import RecoveryPhraseReveal from './recovery-phrase/recovery-phrase-reveal'
import {
    INITIALIZE_SEED_PHRASE_ROUTE,
  } from '../../helpers/constants/routes';

const OnboardingFlow = () => {
    const history = useHistory();
    useEffect(() => {
        history.push(INITIALIZE_SEED_PHRASE_ROUTE)
    }, [])

const seedPhrase = 'ship agree price proud mango harbor document stage raise kitten initial invest'

  return (
    <div className="onboarding-flow__wrapper">
      <Switch>
        <Route
          path={INITIALIZE_SEED_PHRASE_ROUTE}
          render={(routeProps) => (
            <RecoveryPhraseReveal
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