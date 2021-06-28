import React from 'react';
import { Switch, Route } from 'react-router-dom';

const OnboardingFlow = () => {
  return (
    <div className="onboarding-flow__wrapper">
      <Switch>
        {/* <Route
          path={INITIALIZE_SEED_PHRASE_ROUTE}
          render={(routeProps) => (
            <SeedPhrase
              {...routeProps}
              seedPhrase={seedPhrase}
              verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
        <Route
          path={INITIALIZE_BACKUP_SEED_PHRASE_ROUTE}
          render={(routeProps) => (
            <SeedPhrase
              {...routeProps}
              seedPhrase={seedPhrase}
              verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
        <Route
          path={INITIALIZE_SEED_PHRASE_INTRO_ROUTE}
          render={(routeProps) => (
            <SeedPhrase
              {...routeProps}
              seedPhrase={seedPhrase}
              verifySeedPhrase={verifySeedPhrase}
            />
          )}
        />
        <Route
          path={INITIALIZE_CREATE_PASSWORD_ROUTE}
          render={(routeProps) => (
            <CreatePassword
              {...routeProps}
              onCreateNewAccount={this.handleCreateNewAccount}
              onCreateNewAccountFromSeed={this.handleImportWithSeedPhrase}
            />
          )}
        />
        <Route path={INITIALIZE_SELECT_ACTION_ROUTE} component={SelectAction} />
        <Route
          path={INITIALIZE_UNLOCK_ROUTE}
          render={(routeProps) => (
            <Unlock {...routeProps} onSubmit={this.handleUnlock} />
          )}
        />
        <Route
          exact
          path={INITIALIZE_END_OF_FLOW_ROUTE}
          component={EndOfFlow}
        />
        <Route exact path={INITIALIZE_WELCOME_ROUTE} component={Welcome} />
        <Route
          exact
          path={INITIALIZE_METAMETRICS_OPT_IN_ROUTE}
          component={MetaMetricsOptInScreen}
        />
        <Route exact path="*" component={FirstTimeFlowSwitch} /> */}
      </Switch>
    </div>
  );
};

export default OnboardingFlow;