/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tutors.css';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import SingleTutor from './SingleTutor';
import { getAllTutor } from '../../Redux/tutor/tutorReducer';

const Home = () => {
  const tutors = useSelector((state) => state.tutorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTutor());
  }, [dispatch]);

  return (
    <div className="main-tutor-container">
      <div className="header">
        <h1 className="header-1">AVAILABLE Tutors</h1>
        <p className="header-2"> Please select a tutor</p>
      </div>
      <div>
        {tutors.map((tutor) => (
          <Link key={tutor.name} to="/tutor_details">
            <SingleTutor data={tutor} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
