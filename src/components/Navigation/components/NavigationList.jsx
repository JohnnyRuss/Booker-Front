import styles from './navigationList.module.scss';
import { FaBed, FaPlane, FaCarAlt, FaTaxi } from 'react-icons/fa';
import { MdAttractions } from 'react-icons/md';

function NavigationList() {
  return (
    <ul className={styles.heroNav}>
      <li className={styles.heroNavItem}>
        <FaBed /> stays
      </li>
      <li className={styles.heroNavItem}>
        <FaPlane /> flights
      </li>
      <li className={styles.heroNavItem}>
        <FaCarAlt /> car rental
      </li>
      <li className={styles.heroNavItem}>
        <MdAttractions /> attractions
      </li>
      <li className={styles.heroNavItem}>
        <FaTaxi /> airport taxis
      </li>
    </ul>
  );
}

export default NavigationList;
