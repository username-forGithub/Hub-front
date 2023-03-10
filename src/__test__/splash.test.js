/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import SplashScreen from '../components/Splash/Splash';

describe('Splash screen tests', () => {
  it('renders correctly', () => {
    const tree = render(

      <BrowserRouter>
        <SplashScreen />
      </BrowserRouter>
      ,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Splash page has a sign up link', () => {
    const register = render(
      <>

        <BrowserRouter>
          <SplashScreen />
        </BrowserRouter>

      </>,
    );

    expect(register.findByText('Sign up')).toBeTruthy();
  });

  it('Splash page has a log in link', () => {
    const register = render(
      <>

        <BrowserRouter>
          <SplashScreen />
        </BrowserRouter>

      </>,
    );

    expect(register.findByText('Log in')).toBeTruthy();
  });
});
