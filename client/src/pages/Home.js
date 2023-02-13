import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState(null);

  const getUsersHandler = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/users');
      setUsers(res.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  }, []);

  useEffect(() => {
    getUsersHandler();
  }, [getUsersHandler]);

  return (
    <div className="center h-screen">
      {error && <div>{error}</div>}
      {users && (
        <ul className="lists">
          <h2>Users</h2>
          {users.data.users.map((el, i) => (
            <li key={i}>{el.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
