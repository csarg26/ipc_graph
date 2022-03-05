import axios from 'axios';
import { IPC_URL } from '../constants';

export const fetchIpc = () => {
    const url: string = IPC_URL;
    return axios.get(url)
    .then(res=>res.data)
    .catch(e=>{
        console.log('Ha ocurrido un error', e);
    });
}
