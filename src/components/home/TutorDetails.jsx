import React from 'react';
import { Link } from 'react-router-dom';
import './detail.css';
import teacher1 from '../../images2/images/teacher1.jpg';

const TutorDetails = () => (
  <div id="RouterNavLink" className="details-container">
    <div className="image-container">
      <img src={teacher1} alt="Profile of tutor" className="single-image" />
    </div>
    <div className="details my-4">
      <h4 className="me-5 fs-7">name</h4>
      <table className="mr-5">
        <tr>
          <th>Speciality:</th>
          <td className="py-2 me-5 fs-5">Speciality</td>
        </tr>
        <tr>
          <th>Fee:</th>
          <td>fee</td>
        </tr>
      </table>
      <Link
        to="/new_appointment"
        className="btn btn-secondary mt-4 text-center"
      >
        Book Appointment
      </Link>
    </div>
  </div>
);

export default TutorDetails;
