import { useLocation } from 'react-router-dom';
import styles from './components/navigation.module.scss';
import NavigationHeader from './components/NavigationHeader';
import NavigationList from './components/NavigationList';

function Navigation() {
  const { pathname } = useLocation();
  const candidateRoutes = ['login', 'register'].some((route) => pathname.includes(route));

  return (
    !candidateRoutes && (
      <nav className={styles.navContainer}>
        <NavigationHeader />
        <NavigationList />
      </nav>
    )
  );
}

export default Navigation;
