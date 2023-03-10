/* eslint-disable linebreak-style */
import { Link } from 'react-router-dom';
import './Splash.css';

const SplashScreen = () => (
  <section className="splash-screen">
    <div className="spash-logo">
      <h1>smart tutor app</h1>
    </div>
    <div className="welcome-text">
      <h2>Your modern learning software</h2>
    </div>
    <div className="register-btns">
      <Link to="/Login" className="btn login-btn">
        LOG IN
      </Link>
      <Link to="/register" className="btn login-btn">
        Create New Account
      </Link>
    </div>
  </section>
);

export default SplashScreen;
