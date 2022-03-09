import React from 'react';
import { Route } from 'react-router-dom';
import { useAuthDataContext } from '../context/AuthDataProvider';
import Login from '../pages/Login';


const PrivateRoute = ({ component, ...options }) => {
  const user = useAuthDataContext();
  const finalComponent = user.logged ? component : Login;

  return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute;
