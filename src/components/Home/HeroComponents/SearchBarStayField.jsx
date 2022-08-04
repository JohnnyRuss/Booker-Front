import { FaBed } from 'react-icons/fa';
import styles from './searchBar.module.scss';

function SearchBarStayField({ setDestination, destination }) {
  return (
    <div className={`${styles.searchBarItem} ${styles.stayItem}`}>
      <FaBed />
      <input
        type='data'
        placeholder='where are you going ?'
        className={styles.stayInput}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
    </div>
  );
}

export default SearchBarStayField;
