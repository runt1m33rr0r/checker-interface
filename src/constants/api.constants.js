let api = 'http://localhost:8080';

if (process.env.REACT_APP_API_HOST) {
  api = process.env.REACT_APP_API_HOST;
}

const ENDPOINT = api;
export default ENDPOINT;
