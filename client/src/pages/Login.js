import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL } from '../App';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${URL}api/v1/users/login`, {
        email: formData.email,
        password: formData.password,
      });
      navigate('/');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="center h-screen">
      <form onSubmit={handleSubmit} className=" form">
        <div className="column">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="column">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
