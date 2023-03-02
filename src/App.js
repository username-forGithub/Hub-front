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
import ProtectedRoute from './routing/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route element={<ProtectedRoute />}>

          <Route path="/home" element={<Home />} />

        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
