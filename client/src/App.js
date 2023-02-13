import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

axios.defaults.withCredentials = true; //it's for getting and storing cookies in browser for future request

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
