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
import AddTutor from './components/Home/AddTutor';
import BookAppointment from './components/Appointments/BookAppointment';
import MyAppointments from './components/Appointments/MyAppointments';

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
          <Route path="/add_tutor" element={<AddTutor />} />
          <Route path="/new_appointment" element={<BookAppointment />} />
          <Route exact path="/my_appointments" element={<MyAppointments />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
