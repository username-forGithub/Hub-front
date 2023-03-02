/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import SplashScreen from '../components/Splash/Splash';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className='unauthorized'>
        {/* <h1>Unauthorized :(</h1> */}
        {/* <span>
          <NavLink to='/login'>Login</NavLink>
          to gain access
        </span> */}
        <SplashScreen />
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
