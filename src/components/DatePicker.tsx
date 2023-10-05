import React from 'react';

import dayjs from 'dayjs';

import localeData from 'dayjs/plugin/localeData';

interface DatePicker extends React.HTMLAttributes<HTMLLabelElement> {}

const selectClasses =
  'px-2 py-1 rounded-sm border-[1px] border-gray-300 text-sm text-gray-400 outline-none';

dayjs.locale('pt-br');

dayjs.extend(localeData);

const currentDate = dayjs();

const DatePicker = React.forwardRef<HTMLLabelElement, DatePicker>(
  (props, ref) => {
    const [date, setDate] = React.useState({
      month: 2,
      year: 2023
    });

    const handleDate = dayjs(`${date.month}-01-${date.year}`);

    const allMonthDays = Array.from(
      { length: handleDate.daysInMonth() },
      (_, i) => ++i
    );

    const years = Array.from(
      { length: 105 },
      (_, i) => currentDate.get('year') - i
    );

    const updateDate = (key: string, value: string) =>
      setDate((prev) => ({ ...prev, [key]: Number(value) }));

    return (
      <label
        className="flex gap-2 w-full justify-center"
        ref={ref}
        {...props}
        // onChange={() => {
        //   console.log('hello');
        // }}
      >
        <select
          className={selectClasses}
          onChange={({ target }) => updateDate('month', target.value)}
          name="date-month"
          defaultValue={date.month}
        >
          {dayjs.months().map((value, index) => (
            <option value={index + 1} key={value}>
              {value}
            </option>
          ))}
        </select>

        <select className={selectClasses} name="date-day">
          {allMonthDays.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>

        <select
          className={selectClasses}
          name="date-year"
          onChange={({ target }) => updateDate('year', target.value)}
        >
          {years.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    );
  }
);

DatePicker.displayName = 'date-picker';

export default DatePicker;
