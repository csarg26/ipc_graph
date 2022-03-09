import axios from 'axios';
import { API_URL } from '../constants';

export const isLogged = ({token}) => {
    const url: string = `${API_URL}auth/islogged`;
    return axios.get(url, {
        headers: {
            'Authorization': token,
            'Content-Type': "application/json",
        }
    })
    .then(res=>res)
    .catch(e=>{
        console.log('Ha ocurrido un error', e);
    });
}

export const loginUser = (params) => {
    const url: string = `${API_URL}auth/login`;
    return axios.post(url, params)
    .then(res=>res.data)
    .catch(e=>{
        console.log('Ha ocurrido un error', e);
        
        return {
            error: e.response.status === 401 ? e.response.data : 'Error!! Try again'
        };
    });
}
