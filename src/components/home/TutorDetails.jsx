import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './detail.css';
import { getSTutorDetails } from '../../Redux/tutor/tutorReducer';

const TutorDetails = () => {
  const tutor = useSelector((state) => state.tutorReducer, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSTutorDetails());
  }, [dispatch]);

  const { id } = useParams();
  const index = tutor.findIndex((item) => item.id === +id);

  return (
    <div id="RouterNavLink" className="details-container" key={tutor.name}>
      <div className="image-container">
        <img
          src={tutor[index].image}
          alt="Profile of tutor"
          className="single-image"
        />
      </div>
      <div className="details my-4">
        <h4 className="me-5 fs-7">{tutor[index].name}</h4>
        <table className="mr-5">
          <tr>
            <th>Speciality: </th>
            <td className="py-2 me-5 fs-5">{tutor[index].description}</td>
          </tr>
          <tr>
            <th>Fee:</th>
            <td>{tutor[index].price}</td>
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
};

export default TutorDetails;
