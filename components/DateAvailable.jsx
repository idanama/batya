// import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateAvailable({ handleDateChange, value }) {
  /** const [form, setForm] = useState({
    date_available: new Date(),
  }); */
  // const handleDateChange = (date) => {
  //   setForm({ ...form, date_available: date });
  // };
  return (
    <DatePicker
      minDate={new Date()}
      selected={value}
      name="date_available"
      onChange={handleDateChange}
    />
  );
}
