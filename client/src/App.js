import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

axios.defaults.withCredentials = true; //it's for getting and storing cookies in browser for future request

export const URL = 'http://localhost:8000/';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
