import { useState } from 'react';
import styles from './auth.module.scss';
import { BTN } from '../Layouts';

function Registration() {
  const [credentials, setCredentials] = useState({
    userName: '',
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
    setCredentials({ email: '', password: '' });
    console.log(credentials);
  }
  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <div className={styles.inpBox}>
        <label className={styles.inpLabel} htmlFor='userName'>
          username
        </label>
        <input
          className={styles.inp}
          type='text'
          name='userName'
          placeholder='username'
          id='userName'
          value={credentials.userName}
          onChange={handleChange}
        />
      </div>
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

export default Registration;
