/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from 'react-hook-form';

import './login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = () => {
    console.log('login success');
  };

  return (
    <div className="my-form">
      <form onSubmit={handleSubmit(submitForm)}>
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
        <button type="submit" className="btn btn-success mt-2">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
