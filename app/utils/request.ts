import axios, {AxiosRequestConfig} from 'axios';

const request = axios.create({
  baseURL: '',
  headers: {'Access-Control-Allow-Origin': '*'},
});

export default request;
