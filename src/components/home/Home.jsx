/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './tutors.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleTutor from './SingleTutor';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-tutor-container">
      <div className="header">
        <h1 className="header-1">AVAILABLE Tutors</h1>
        <h2 className="header-2 mt-5">No tutors available</h2>
      </div>

      <>
        <div className="header">
          <h1 className="header-1">AVAILABLE Tutors</h1>
          <p className="header-2"> Please select a tutor</p>
        </div>
        <div className="tutors-li">
          <Carousel
            responsive={responsive}
            className="carousel-container"
            infinite
          >
            <div>
              <Link to="/tutor_details/">
                <SingleTutor />
                <SingleTutor />
                <SingleTutor />
              </Link>
            </div>
          </Carousel>
        </div>
      </>

    </div>
  );
};

export default Home;
