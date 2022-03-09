import Cookies from 'js-cookie';
import { isLogged } from '../services/user.service';

export const getToken = () => Cookies.get('token');

export const getUserState = async () => {
  const token = getToken();
  if (!token) {
    return {
      logged: false,
      token: null
    };
  }

  const checkUser = await isLogged({token});
  
  if (!checkUser || checkUser.status !== 200) {
    return {
      logged: false,
      token: null
    };
  }

  return {
    logged: true,
    token,
  };
};
