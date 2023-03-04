/* eslint-disable linebreak-style */
import { useState } from 'react';
import './bookappointment.css';

function BookAppointment() {
  const [city, setCity] = useState('');
  const [appointmenTime, setTime] = useState('');
  const [tutorId, setId] = useState('');

  const handleChange = (event) => {
    const getTarget = event.target;
    const inputvalue = getTarget.value;
    switch (getTarget.name) {
      case 'city':
        setCity(inputvalue);
        return city;
      case 'appointmenTime':
        setTime(inputvalue);
        return appointmenTime;
      case 'tutorId':
        setId(inputvalue);
        return tutorId;
      default:
        return 'yes';
    }
  };
  return (
    <section className="appointments-section">
      <div className="appointments-container">
        <h3 className="appointments-title">Book an Appointment</h3>
        <form className="appointments-form">
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="Enter city"
            required
          />
          <input
            className="form-control"
            id="datetime"
            type="datetime-local"
            name="appointmenTime"
            value={appointmenTime}
            min="2022-08-17T00:00"
            max="2050-08-17T00:00"
            onChange={handleChange}
            required
          />
          <select id="tutor" value={tutorId} onChange={handleChange} name="tutorId" className="select">
            <option value="">Select your tutor</option>

          </select>
          <input type="submit" value="Book Appointment" className="button1 btn btn-secondary" />
        </form>
      </div>
    </section>
  );
}

export default BookAppointment;
