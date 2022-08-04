import styles from './HeroComponents/hero.module.scss';
import { Description, SearchBar } from './HeroComponents';
import { BTN } from '../Layouts';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <Description />
        <BTN caption={'log in / register'} className={styles.regBtn} />
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;
