/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './tutors.css';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import SingleTutor from './SingleTutor';

const Home = () => (
  <div className="main-tutor-container">
    <div className="header">
      <h1 className="header-1">AVAILABLE Tutors</h1>
      <p className="header-2"> Please select a tutor</p>
    </div>
    <div>
      <Link to="/tutor_details/">
        <SingleTutor />
        <SingleTutor />
        <SingleTutor />
      </Link>
    </div>
  </div>
);

export default Home;
