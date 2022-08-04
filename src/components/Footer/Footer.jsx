import { useLocation } from 'react-router-dom';
import styles from './footer.module.scss';

function Footer() {
  const { pathname } = useLocation();
  const candidateRoutes = ['login', 'register'].some((route) => pathname.includes(route));
  return (
    !candidateRoutes && (
      <footer className={styles.footer}>
        <div className={styles.footerList}>
          <ul>
            <li>countries</li>
            <li>regions</li>
            <li>cities</li>
            <li>districts</li>
            <li>airports</li>
            <li>hotels</li>
          </ul>
          <ul>
            <li>countries</li>
            <li>regions</li>
            <li>cities</li>
            <li>districts</li>
            <li>airports</li>
            <li>hotels</li>
          </ul>
          <ul>
            <li>countries</li>
            <li>regions</li>
            <li>cities</li>
            <li>districts</li>
            <li>airports</li>
            <li>hotels</li>
          </ul>
          <ul>
            <li>countries</li>
            <li>regions</li>
            <li>cities</li>
            <li>districts</li>
            <li>airports</li>
            <li>hotels</li>
          </ul>
          <ul>
            <li>countries</li>
            <li>regions</li>
            <li>cities</li>
            <li>districts</li>
            <li>airports</li>
            <li>hotels</li>
          </ul>
        </div>
        <p className={styles.copy}>&copy; copyright in 2022</p>
      </footer>
    )
  );
}

export default Footer;
