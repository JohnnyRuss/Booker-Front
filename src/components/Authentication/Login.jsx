import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { unRestrictedRoutes } from '../../lib/axios-config';

import styles from './auth.module.scss';
import { BTN } from '../Layouts';

function Login() {
  const { dispatchAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatchAuth({ type: 'LOG_IN_START' });

      const { data } = await unRestrictedRoutes.post('/authentication/login', credentials);

      dispatchAuth({ type: 'LOG_IN_SUCCESS', payload: data });
      setCredentials({ email: '', password: '' });

      navigate('/');
    } catch (error) {
      dispatchAuth({ type: 'LOG_IN_FAIL', payload: error.response.data });
    }
  }

  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <div className={styles.inpBox}>
        <label className={styles.inpLabel} htmlFor='email'>
          email
        </label>
        <input
          className={styles.inp}
          type='email'
          name='email'
          placeholder='email adress'
          id='email'
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inpBox}>
        <label className={styles.inpLabel} htmlFor='password'>
          password
        </label>
        <input
          className={styles.inp}
          type='password'
          name='password'
          placeholder='password'
          id='pasword'
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <BTN caption='submit' type='submit' className={styles.authBtn} />
    </form>
  );
}

export default Login;
