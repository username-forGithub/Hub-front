import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../main.css';
import logo from '../../images2/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <Link
        to="/home"
      >
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </div>
    <div className="links-container">
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active link' : 'link')}
            to="/home"
          >
            Tutors
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active link' : 'link')}
            to="/add_tutor"
          >
            Add Tutor
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active link' : 'link')}
            to="/my_appointments"
          >
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active link' : 'link')}
            to="/new_appointment"
          >
            New Appointment
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active link' : 'link')}
            to="/delete_tutor"
          >
            Delete Tutor
          </NavLink>
        </li>
        <button type="button" className="btn btn-danger btn-sm">Logout</button>
      </ul>
    </div>
    <br />
    <br />
    <br />
    <p className="copyright">&copy; Microverse 2022</p>
  </nav>
);

export default Navbar;
