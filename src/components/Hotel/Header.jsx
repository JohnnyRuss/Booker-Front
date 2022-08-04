import { useState } from 'react';
import styles from './header.module.scss';
import { BTN } from '../Layouts';
import ReserveModal from './ReserveModal';
import { ImLocation2 } from 'react-icons/im';

function Header({ data }) {
  const [openResrveModal, setOpenResrveModal] = useState(false);
  const location = data?.location;

  function handleOpenReserve() {
    setOpenResrveModal(true);
    document.querySelector('body').style.overflow = 'hidden';
  }

  function handleCloseReserve(e) {
    e.stopPropagation();
    setOpenResrveModal(false);
    document.querySelector('body').style.overflow = 'scroll';
  }

  return (
    <div className={styles.heading}>
      <div className={styles.infoBox}>
        <h3 className={styles.title}>{data?.name}</h3>
        <p className={styles.adress}>
          <ImLocation2 /> {location?.adress},{location?.city},{location?.country}
        </p>
        <p className={styles.description}>{data?.title}</p>
        <p className={styles.offer}>
          book a stay over $114 at this property and get a free airport taxi
        </p>
      </div>
      <BTN
        caption='reserve or book now!'
        className={styles.btn}
        onClick={handleOpenReserve}
      />
      {openResrveModal && <ReserveModal handleCloseReserve={handleCloseReserve} id={data?._id} />}
    </div>
  );
}

export default Header;
