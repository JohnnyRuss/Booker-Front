import styles from './btn.module.scss';

function BTN({ className, caption, onClick, type = 'buutton' }) {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick} type={type}>
      {caption}
    </button>
  );
}

export default BTN;
