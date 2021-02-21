import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Frontpage from './frontpage/Frontpage';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Gameservers from './frontpage/Gameservers';
import { Theme, useMediaQuery } from '@material-ui/core';
import Footer from './components/Footer';

function App() {
  const isWide = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const isUltraWide = useMediaQuery((theme: Theme) => theme.breakpoints.only('xl'));

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Frontpage}></Route>
            <Route exact path="/gameservers">
              <Gameservers isWide={isWide} isUltraWide={isUltraWide}></Gameservers>
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </React.Fragment>
  )
}

export default App;
