import styles from './searchBar.module.scss';

function SearchBarOptionsItem({ handleOptions, calcTarget, disabledUnder, name }) {
  return (
    <div className={styles.optionItem}>
      <span className={styles.optKindOf}>{name}</span>
      <button
        className={styles.optBtn}
        disabled={calcTarget <= disabledUnder}
        name={name}
        data-operation='decrease'
        onClick={handleOptions}>
        -
      </button>
      <span className={styles.optCounter}>{calcTarget}</span>
      <button
        className={styles.optBtn}
        name={name}
        data-operation='increase'
        onClick={handleOptions}>
        +
      </button>
    </div>
  );
}

export default SearchBarOptionsItem;
