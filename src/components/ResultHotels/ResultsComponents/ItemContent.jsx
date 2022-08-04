import { uid } from 'uid';
import styles from './itemContent.module.scss';

function ItemContent({ data }) {
  const dataName = data?.name?.length > 45 ? `${data?.name?.slice(0, 45)}...` : data?.name;
  const dataTitle = data?.title?.length > 80 ? `${data?.title?.slice(0, 80)}...` : data?.title;

  return (
    <div className={styles.content}>
      <h2 className={styles.title} title={data?.name}>
        {dataName}
      </h2>
      <p className={styles.mainFeature} title={data?.title}>
        {dataTitle}
      </p>
      <div className={styles.featureListParagraph}>
        <ul className={styles.featureList}>
          {data?.features?.map((feature) => (
            <li className={styles.featureListItem} key={uid(6)}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <span className={styles.cancellation}>free cancellation</span>
      <p className={styles.cancellationInfo}>
        you can cancel later, so lock in this great pricetoday!
      </p>
    </div>
  );
}

export default ItemContent;
