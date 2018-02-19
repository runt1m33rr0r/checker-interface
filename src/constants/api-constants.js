let api = 'http://192.168.1.101:8080';

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_API_HOST) {
  api = process.env.REACT_APP_API_HOST;
}

const ENDPOINT = api;
export default ENDPOINT;
