import { createContext, useReducer, useEffect } from 'react';

const AuthState = {
  passport: null,
  user: JSON.parse(localStorage.getItem('user')),
  loading: false,
  error: null,
};

export const AuthContext = createContext({
  ...AuthState,
  dispatchAuth: ({ type, payload }) => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOG_IN_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LOG_IN_SUCCESS':
      const user = action.payload.data;
      return {
        ...state,
        user: user.user,
        passport: user.refreshToken,
        loading: false,
        error: null,
      };
    case 'LOG_OUT':
      localStorage.removeItem('user');
      localStorage.removeItem('refreshToken');
      console.log('runs');
      return {
        ...state,
        user: null,
        passport: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, AuthState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(authState.user));
    localStorage.setItem('refreshToken', JSON.stringify(authState.passport));
  }, [authState.user, authState.passport]);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        dispatchAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
