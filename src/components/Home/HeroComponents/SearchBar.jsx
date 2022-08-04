import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchContext } from '../../../context/SearchContext';

import styles from './searchBar.module.scss';
import { BTN } from '../../Layouts';
import { SearchBarStayField, SearchBarCalendarField, SearchBarOptionsField } from './';

function SearchBar() {
  const { dispatchSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const [destination, setDestination] = useState('');

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  function handleOptions(e) {
    //prettier-ignore
    const {dataset: { operation }, name: target} = e.target;
    setOptions((prevState) => ({
      ...prevState,
      [target]: operation === 'decrease' ? (options[target] -= 1) : (options[target] += 1),
    }));
  }

  function handleSearch() {
    dispatchSearch({ type: 'SET_STATE', payload: { ...options, destination, date } });
    navigate('/hotels', { state: { destination, date, ...options } });
  }

  const [openOption, setOpenOption] = useState(false);
  const [openDateRange, setOpenDateRange] = useState(false);

  function openOptionsModal() {
    if (openDateRange) setOpenDateRange(false);
    setOpenOption((prevState) => !prevState);
  }

  function openDateModal() {
    if (openOption) setOpenOption(false);
    setOpenDateRange((prevState) => !prevState);
  }

  return (
    <div className={styles.searchBar}>
      <SearchBarStayField setDestination={setDestination} destination={destination} />
      <SearchBarCalendarField
        date={date}
        setDate={setDate}
        openDateRange={openDateRange}
        openDateModal={openDateModal}
      />
      <SearchBarOptionsField
        options={options}
        handleOptions={handleOptions}
        openOption={openOption}
        openOptionsModal={openOptionsModal}
      />
      <BTN caption='search' onClick={handleSearch} className={styles.searchBtn} />
    </div>
  );
}

export default SearchBar;
