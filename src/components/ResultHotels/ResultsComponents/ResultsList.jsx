import styles from './resultsList.module.scss';
import ResultItem from './ResultItem';

function ResultsList({ data }) {
  return (
    <div className={styles.resultsList}>
      {data?.map((result) => (
        <ResultItem data={result} key={result._id} />
      ))}
    </div>
  );
}

export default ResultsList;
