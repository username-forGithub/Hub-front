/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './add_tutor.css';

const AddTutor = () => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [fee, setFee] = useState('');

  const [image, setImage] = useState('');

  const tutorsName = document.getElementById('name');
  const tutorsSpeciality = document.getElementById('speciality');
  const tutorsFee = document.getElementById('fee');
  const tutorsImage = document.getElementById('image');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tutors = new FormData();
    tutors.append('tutor[name]', name);
    tutors.append('tutor[image]', image);
    tutors.append('tutor[speciality]', speciality);
    tutors.append('tutor[fee]', fee);

    const { id } = user;

    dispatch(createDoctorAction(tutors, id));
    tutorsName.value = '';
    tutorsSpeciality.value = '';
    tutorsFee.value = '';
    tutorsImage.value = '';
    navigate('/tutors');
  };

  return (
    <section className="tutor-section">
      <div className="tutor-container">
        <h3 className="tutor-title">Add A Tutor</h3>
        <form onSubmit={handleSubmit} className="tutor-form">
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
            type="file"
            name="image"
            id="image"
            className="form-control"
            placeholder="Enter an image url link"
            required
            onChange={(e) => setImage(e.target.files[0])}
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
          <input type="submit" value="Submit" className="button1 btn btn-secondary" />
        </form>
      </div>
    </section>
  );
};
export default AddTutor;
