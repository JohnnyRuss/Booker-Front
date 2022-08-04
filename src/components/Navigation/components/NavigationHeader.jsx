import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import { unRestrictedRoutes } from '../../../lib/axios-config';

import styles from './navigationHeader.module.scss';
import { BTN } from '../../Layouts';

function NavigationHeader() {
  const navigate = useNavigate();
  const { user, dispatchAuth } = useContext(AuthContext);

  async function logOut() {
    try {
      await unRestrictedRoutes.post('/authentication/logout');
      dispatchAuth({ type: 'LOG_OUT' });
      navigate('/');
    } catch {}
  }

  return (
    <div className={styles.navigation}>
      <Link to='/'>
        <span className={styles.logo}>booker</span>
      </Link>
      {!user && (
        <>
          <Link to='/register' className={styles.btn}>
            <BTN caption='register' />
          </Link>
          <Link to='login' className={styles.btn}>
            <BTN caption='login' />
          </Link>
        </>
      )}
      {user && (
        <>
          <p className={styles.userName}>{user.userName}</p>
          <BTN caption='log out' onClick={logOut} />
        </>
      )}
    </div>
  );
}

export default NavigationHeader;
