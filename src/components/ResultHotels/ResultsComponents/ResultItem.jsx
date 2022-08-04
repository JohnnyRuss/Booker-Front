import { Link } from 'react-router-dom';
import styles from './resultItem.module.scss';
import ItemFigure from './ItemFigure';
import ItemContent from './ItemContent';
import ItemActions from './ItemActions';

function ResultItem({ data }) {
  return (
    <Link to={data._id} className={styles.resultItem}>
      <ItemFigure img={data?.images?.optimized[0]} />
      <ItemContent data={data} />
      <ItemActions data={data} />
    </Link>
  );
}

export default ResultItem;
