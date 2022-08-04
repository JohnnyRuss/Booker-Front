import styles from './searchBar.module.scss';
import { FaUser } from 'react-icons/fa';
import { SearchBarOptionsItem } from './';

function SearchBarOptionsField({ openOption, openOptionsModal, options, handleOptions }) {
  return (
    <div className={styles.searchBarItem}>
      <FaUser />
      <span
        onClick={
          openOptionsModal
        }>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
      {openOption && (
        <div className={styles.options}>
          <SearchBarOptionsItem
            name='adult'
            calcTarget={options.adult}
            disabledUnder={1}
            handleOptions={handleOptions}
          />
          <SearchBarOptionsItem
            name='children'
            calcTarget={options.children}
            disabledUnder={0}
            handleOptions={handleOptions}
          />
          <SearchBarOptionsItem
            name='room'
            calcTarget={options.room}
            disabledUnder={1}
            handleOptions={handleOptions}
          />
        </div>
      )}
    </div>
  );
}

export default SearchBarOptionsField;
