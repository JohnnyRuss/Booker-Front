import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SearchContext } from '../../context/SearchContext';

import styles from './SideBarComponents/sideBar.module.scss';
import InputField from './SideBarComponents/InputField';
import DateField from './SideBarComponents/DateField';
import Options from './SideBarComponents/Options';
import { BTN } from '../Layouts';

function SideBar() {
  const { dispatchSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [routeProps, setRouteProps] = useState({ ...location.state });

  function handleOptions(e) {
    const { name: target, value } = e.target;
    setRouteProps((prevState) => ({
      ...prevState,
      [target]: +value,
    }));
  }

  function handleSideBarSearch() {
    dispatchSearch({ type: 'SET_STATE', payload: { ...routeProps } });
    navigate('/hotels', { state: { ...routeProps } });
  }

  return (
    <div className={styles.sideBar}>
      <p className={styles.title}>Search</p>
      <InputField
        label='destination'
        id='destination'
        placeholder='destination'
        value={routeProps.destination}
        setDestination={handleOptions}
      />
      <DateField routeProps={routeProps} setRouteProps={setRouteProps} />
      <Options options={routeProps} handleOptions={handleOptions} value={routeProps} />
      <BTN caption='search' className={styles.btn} onClick={handleSideBarSearch} />
    </div>
  );
}

export default SideBar;
