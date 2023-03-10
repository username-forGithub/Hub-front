/* eslint-disable linebreak-style */
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';

describe('Log in tests', () => {
  it('renders correctly', () => {
    const tree = render(

      <BrowserRouter>
        <Login />
      </BrowserRouter>,

    );
    expect(tree).toMatchSnapshot();
  });

  it('Log in page has log in button', () => {
    const login = render(
      <>

        <BrowserRouter>
          <Login />
        </BrowserRouter>

      </>,
    );

    expect(login.findByText('Log in')).toBeTruthy();
  });

  it('Log in page has a sign up link', () => {
    const login = render(
      <>

        <BrowserRouter>
          <Login />
        </BrowserRouter>

      </>,
    );

    expect(login.findByText('Sign Up')).toBeTruthy();
  });
});
