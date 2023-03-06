import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Topbar from './Navbar/Topbar';

const BarLayout = () => (
  <>
    <Topbar />
    <div className="container custom">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  </>
);

export default BarLayout;
