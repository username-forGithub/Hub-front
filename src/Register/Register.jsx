/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import './register.css';

const RegisterScreen = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = () => {};

  return (
    <div className="my-form">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            className="form-input form-control"
            {...register('firstName')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            className="form-input form-control"
            {...register('email')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            className="form-input form-control"
            {...register('password')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Confirm Password</label>
          <br />
          <input
            type="password"
            className="form-input form-control"
            {...register('confirmPassword')}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success btn-block">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
