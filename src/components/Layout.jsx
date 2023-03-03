import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Topbar from './Navbar/Topbar';

const BarLayout = () => (
  <>
    <Topbar />
    <div className="containe custom">
      <Navbar />
      <Outlet />
    </div>
  </>
);

export default BarLayout;
