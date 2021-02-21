import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Frontpage from './frontpage/Frontpage';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Gameservers from './frontpage/Gameservers';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Frontpage}></Route>
          <Route exact path="/gameservers" component={Gameservers}></Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  </ThemeProvider>
);

export default App;
