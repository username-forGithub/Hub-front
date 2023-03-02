/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SplashScreen from './components/Splash/Splash';
import Home from './components/Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import ProtectedRoute from './routing/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import BarLayout from './components/Layout';
import TutorDetails from './components/Home/TutorDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<BarLayout />}>

          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutor_details" element={<TutorDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
