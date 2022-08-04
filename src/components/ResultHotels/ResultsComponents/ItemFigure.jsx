import styles from './itemFigure.module.scss';

function ItemFigure({ img }) {
  return (
    <figure className={styles.figure}>
      <img src={img} alt={img} className={styles.image} />
    </figure>
  );
}

export default ItemFigure;
