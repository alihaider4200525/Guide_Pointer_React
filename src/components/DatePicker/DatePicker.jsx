import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="custom-date-picker">
      <div className="custom-date-picker">

        <i className="fa fa-calendar calendar-icon"></i>

        <ReactDatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="M-d-yyyy"
          className="date-input"
        />

      </div>
    </div>
  );
}

export default DatePicker
