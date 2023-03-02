/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import insta from '../../images2/insta-icon-home.png';
import fb from '../../images2/fb-icon-home.png';
import twitter from '../../images2/twitter-icon-home.png';
import teacher1 from '../../images2/images/teacher1.jpg';

const social = [
  { icon: insta },
  { icon: fb },
  { icon: twitter },
];

const SingleTutor = () => (
  <div className="tutors1">
    <div className="image-div">
      <img src={teacher1} alt="Profile of tutor" className="tutors-images" />
    </div>
    <div className="tutors-data fw-bold">
      <h4>name</h4>
      <p>.........................</p>
      <p className="fw-bolder">speciality</p>
      <div className="social-net">
        {social.map((item) => (
          <a href="/" key={item.icon}>
            <img src={item.icon} alt="social" className="w-8" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default SingleTutor;
