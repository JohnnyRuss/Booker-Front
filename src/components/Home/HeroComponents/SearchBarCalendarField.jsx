import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './searchBar.module.scss';
import { FaCalendarAlt } from 'react-icons/fa';

function SearchBarCalendarField({ openDateRange, openDateModal, date, setDate }) {
  return (
    <div className={`${styles.searchBarItem} ${styles.dateItem}`}>
      <FaCalendarAlt />
      <span onClick={openDateModal}>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
        date[0].endDate,
        'dd/MM/yyyy'
      )}`}</span>
      {openDateRange && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className={styles.dateRange}
        />
      )}
    </div>
  );
}

export default SearchBarCalendarField;
