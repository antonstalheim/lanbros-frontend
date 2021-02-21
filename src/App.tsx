import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Frontpage from './frontpage/Frontpage';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Gameservers from './frontpage/Gameservers';
import { Theme, useMediaQuery } from '@material-ui/core';

function App() {
  const isWide = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Frontpage}></Route>
            <Route exact path="/gameservers">
              <Gameservers isWide={isWide}></Gameservers>
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  )
}

export default App;
