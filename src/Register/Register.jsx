/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../Redux/user/user';
import './register.css';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      },
    };
    console.log(userInfo);
    dispatch(userSignUp(userInfo));
    event.target.reset();
    navigate('/login');
  };

  return (
    <div className="my-form">
      <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            className="form-input form-control"
            placeholder="Enter your name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            className="form-input form-control"
            placeholder="Enter your email address"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            className="form-input form-control"
            placeholder="Enter your email address"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Confirm Password</label>
          <br />
          <input
            type="password"
            className="form-input form-control"
            placeholder="Enter your email address"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <input
          type="submit"
          value="Register"
          className="button1 btn btn-secondary"
        />
      </form>
    </div>
  );
};

export default RegisterScreen;
