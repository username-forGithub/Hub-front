/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import insta from '../../images2/insta-icon-home.png';
import fb from '../../images2/fb-icon-home.png';
import twitter from '../../images2/twitter-icon-home.png';

const social = [{ icon: insta }, { icon: fb }, { icon: twitter }];

const SingleTutor = (props) => {
  const { data } = props;
  return (
    <div className="tutors1">
      <div className="image-div">
        <img
          src={data.image}
          alt="Profile of tutor"
          className="tutors-images"
        />
      </div>
      <div className="tutors-data fw-bold">
        <h4>{data.name}</h4>
        <p>.........................</p>
        <p className="fw-bolder">Speciality:</p>
        <p className="fw-bolder">{data.description}</p>
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
};

export default SingleTutor;
