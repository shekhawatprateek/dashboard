import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css'
import 'react-calendar/dist/Calendar.css';

function Calender() {
    const [value, onChange] = useState(new Date());

  return (
    <div className="calender">
      <Calendar
        onChange={onChange}
        value={value}
        />
    </div>
  );
}
  export default Calender