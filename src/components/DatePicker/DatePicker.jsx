import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="custom-date-picker">
      <i className="fa fa-calendar"></i>

      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="M-d-yyyy"
        className="date-input"
        calendarStartDay={0}
      />
    </div>
  );
}

export default DatePicker
