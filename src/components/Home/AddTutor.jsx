/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTutor } from '../../Redux/tutor/tutorReducer';

import './add_tutor.css';

const AddTutor = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [fee, setFee] = useState('');
  const [image, setImage] = useState('');
  const [city, setCity] = useState('');

  const formRef = useRef();

  const tutorsName = document.getElementById('name');
  const tutorsSpeciality = document.getElementById('speciality');
  const tutorsFee = document.getElementById('fee');
  const tutorsImage = document.getElementById('image');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const tutorInfo = {
      name: data.name,
      image: data.image,
      price: +data.fee,
      description: data.speciality,
      city: data.city,
      user_id: 2,
    };

    dispatch(addTutor(tutorInfo));
    tutorsName.value = '';
    tutorsSpeciality.value = '';
    tutorsFee.value = '';
    tutorsImage.value = '';
    navigate('/home');
  };

  return (
    <section className="tutor-section">
      <div className="tutor-container">
        <h3 className="tutor-title">Add A Tutor</h3>
        <form
          ref={formRef}
          onSubmit={(e) => handleSubmit(e)}
          className="tutor-form"
        >
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <input
            className="form-control"
            id="speciality"
            type="text"
            name="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            placeholder="Enter your speciality"
            required
          />
          <input
            type="text"
            name="image"
            value={image}
            id="image"
            className="form-control"
            placeholder="Enter an image url link"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="number"
            name="fee"
            id="fee"
            value={fee}
            className="form-control"
            placeholder="Enter your fee"
            required
            onChange={(e) => setFee(e.target.value)}
          />
          <input
            type="text"
            name="city"
            id="fee"
            value={city}
            className="form-control"
            placeholder="Enter your city"
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="button1 btn btn-secondary"
          />
        </form>
      </div>
    </section>
  );
};
export default AddTutor;
