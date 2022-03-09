/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import { getUserState } from './User';

export const AuthDataContext = createContext(null);

const initialAuthData = { logged: false, token: null };

const AuthDataProvider = (props) => {
  const [authData, setAuthData] = useState(initialAuthData);
  const history = useHistory();

  const fetchUserData = async () => {
    const currentAuthData = await getUserState();
    if (currentAuthData) {
      setAuthData(currentAuthData);
    }
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(()=>{
    if(authData.logged){
      history.push('/');
    }
  }, [authData]);

  const onLogout = () => {
    Cookies.remove('token');
  };

  const onLogin = async (token) => {
    Cookies.set('token', token);
    setAuthData({
      logged: true,
      token: token
    });
  };

  const authDataValue = { ...authData, onLogin, onLogout };

  return <AuthDataContext.Provider value={authDataValue} {...props}>
    {props.children}
  </AuthDataContext.Provider>;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
