import React from 'react';
import { Switch, Route, BrowserRouter as Router,
  } from 'react-router-dom';

import AuthDataProvider  from './context/AuthDataProvider';
import PrivateRoute from './Routes/PrivateRoute';


import Main from './layouts/Main';
import Login from './pages/Login';

const App = () => {

  return <Router basename="/"> 
    <AuthDataProvider>
      <Switch>
        <PrivateRoute path="/" component={Main} />
        <Route path='/login' component={Login} />
      </Switch>
    </AuthDataProvider>
  </Router>;
}

export default App;
