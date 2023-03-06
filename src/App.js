/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import SplashScreen from './components/Splash/Splash';
import Home from './components/home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import ProtectedRoute from './routing/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import BarLayout from './components/Layout';
import TutorDetails from './components/home/TutorDetails';
import AddTutor from './components/home/AddTutor';
import store from './Redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<BarLayout />}>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/home" element={<Home />} />
              <Route path="/tutor_details/:id" element={<TutorDetails />} />
              <Route path="/add_tutor" element={<AddTutor />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
