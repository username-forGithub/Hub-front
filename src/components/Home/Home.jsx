/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './tutors.css';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import SingleTutor from './SingleTutor';

const Home = () => (

  <div className="main-tutor-container">
    <div className="header custom-header text-center fw-bold">
      <h1 className="header-1">AVAILABLE Tutors</h1>
      <p className="header-2"> Please select a tutor</p>
    </div>
    <div>
      <div className="row">
        <div className="col-md">
          <Link to="/tutor_details/">
            <SingleTutor />
          </Link>
        </div>
        <div className="col-md">
          <Link to="/tutor_details/">
            <SingleTutor />
          </Link>
        </div>
        <div className="col-md">
          <Link to="/tutor_details/">
            <SingleTutor />
          </Link>
        </div>
      </div>

    </div>
  </div>

);

export default Home;
