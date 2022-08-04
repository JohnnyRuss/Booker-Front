import axios from 'axios';

const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

const unRestrictedRoutes = axios.create({
  // baseURL: 'http://localhost:6600/api/v1',
  baseURL: 'https://booker13.herokuapp.com/api/v1',
  withCredentials: true,
  headers: {
    authorization: `Bearer ${refreshToken}`,
  },
});
// https://booker13.herokuapp.com/
const restrictedRoutes = axios.create({
  baseURL: 'https://booker13.herokuapp.com/api/v1',
  // baseURL: 'http://localhost:6600/api/v1',
  withCredentials: true,
  headers: {
    authorization: `Bearer ${refreshToken}`,
  },
});

const refresher = axios.create({
  baseURL: 'https://booker13.herokuapp.com/api/v1/authentication/refresh',
  // baseURL: 'http://localhost:6600/api/v1/authentication/refresh',
  withCredentials: true,
  headers: {
    authorization: `Bearer ${refreshToken}`,
  },
  method: 'POST',
});

unRestrictedRoutes.interceptors.response.use(
  (response) => response,
  async (err) => {
    const config = err.config;
    const error = err.response.data;

    if (error.statusCode === 401 && error.message === 'you are not authenticated' && refreshToken)
      return reAuthenticate(config);

    return Promise.reject(err);
  }
);

export { unRestrictedRoutes, restrictedRoutes };

async function reAuthenticate(config) {
  const data = await refresher();
  localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
  return unRestrictedRoutes(config);
}
