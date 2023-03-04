/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React from 'react';

import './appointment.css';

const MyAppointments = () => {
  return (
    <div className="appoint">
      <section className="appointment-container">

        <div className="notice-container">
          <h2 className="title">MY APPOINTMENTS</h2>
          <h4 className="notice">No Appointments Available</h4>
        </div>

        <ul className="my-appointments">
          <li className="title">MY APPOINTMENTS</li>

          <li className="appointment">
            <div>
              <h4>
                mr Bree
              </h4>
              <p>appointment city</p>
            </div>

            <button type="button" onClick={() => handleDelete(appoint.id)} className="appointment-btn">Cancel</button>
          </li>

        </ul>

      </section>
    </div>
  );
};

export default MyAppointments;
