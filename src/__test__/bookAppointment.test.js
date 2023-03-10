/* eslint-disable linebreak-style */
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookAppointment from '../components/Appointments/BookAppointment';

describe('Book Appointment form tests', () => {
  it('renders correctly', () => {
    const tree = render(

      <BrowserRouter>
        <BookAppointment />
      </BrowserRouter>,

    );
    expect(tree).toMatchSnapshot();
  });

  it('Book Appointment page has a "Book Appointment" button', () => {
    const register = render(
      <>

        <BrowserRouter>
          <BookAppointment />
        </BrowserRouter>

      </>,
    );

    expect(register.findByText('Book Appointment')).toBeTruthy();
  });
});
