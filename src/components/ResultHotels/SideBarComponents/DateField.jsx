import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import InputField from './InputField';

function DateField({ routeProps, setRouteProps }) {
  const [openDateRange, setOpenDateRange] = useState(false);
  return (
    <>
      <InputField
        label='check in date'
        id='date'
        onClick={() => setOpenDateRange((prevState) => !prevState)}
        value={
          routeProps?.date
            ? `${format(routeProps.date?.[0]?.startDate, 'dd/MM/yyyy')} to ${format(
                routeProps.date?.[0]?.endDate,
                'dd/MM/yyyy'
              )}`
            : `${format(new Date(Date.now()), 'dd/MM/yyyy')} to ${format(
                new Date(Date.now()),
                'dd/MM/yyyy'
              )}`
        }
      />
      {openDateRange && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) =>
            setRouteProps((prevState) => ({ ...prevState, date: [item.selection] }))
          }
          moveRangeOnFirstSelection={false}
          ranges={routeProps.date}
        />
      )}
    </>
  );
}

export default DateField;
