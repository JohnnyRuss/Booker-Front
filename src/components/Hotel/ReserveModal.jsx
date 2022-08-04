import { useContext } from 'react';
import { uid } from 'uid';
import { SearchContext } from '../../context/SearchContext';

import styles from './reserveModal.module.scss';
import { useGetJSON } from '../../hooks';

function ReserveModal({ handleCloseReserve, id }) {
  const { date: orderedDate } = useContext(SearchContext);
  const { data } = useGetJSON(`/rooms/hotel/${id}`);

  // console.log(data);
  function generateDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dates = [];
    const date = new Date(start.getTime());

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  const dateRange = generateDateRange(orderedDate[0]?.startDate, orderedDate[0]?.endDate);

  const isAvailable = (N) =>
    N.some((date) => dateRange.includes(new Date(date).setHours(0, 0, 0, 0)));

  return (
    <div className={styles.modal} onClick={handleCloseReserve}>
      <div className={styles.reserveModal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>select your rooms</h3>
        <ul className={styles.roomsList}>
          {data?.map((room) => (
            <li key={uid(6)} className={styles.room}>
              <div className={styles.roomInfo}>
                <h4 className={styles.roomTitle}>{room?.title}</h4>
                <p>{room?.description}</p>
                <p>max people: {room?.maxPeople}</p>
                <p>${room.price}</p>
              </div>
              <ul className={styles.roomNums}>
                {room?.roomNumbers.map((roomNum) => (
                  <li key={uid(6)} className={styles.roomNumItem}>
                    <label htmlFor='' className={styles.roomNum}>
                      {roomNum.number}
                    </label>
                    <input
                      type='checkbox'
                      disabled={isAvailable(roomNum.unavailableDates)}
                      className={styles.roomNumInp}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReserveModal;
