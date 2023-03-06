import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './detail.css';
import { getAllTutor } from '../../Redux/tutor/tutorReducer';

const TutorDetails = () => {
  const tutors = useSelector((state) => state.tutorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTutor());
  }, [dispatch]);

  return tutors.map((tutor) => (
    <div id="RouterNavLink" className="details-container" key={tutor.name}>
      <div className="image-container">
        <img
          src={tutor.image}
          alt="Profile of tutor"
          className="single-image"
        />
      </div>
      <div className="details my-4">
        <h4 className="me-5 fs-7">{tutor.name}</h4>
        <table className="mr-5">
          <tr>
            <th>Speciality: </th>
            <td className="py-2 me-5 fs-5">{tutor.description}</td>
          </tr>
          <tr>
            <th>Fee:</th>
            <td>{tutor.price}</td>
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
  ));
};

export default TutorDetails;
