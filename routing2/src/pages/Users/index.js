import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Loader from '../../components/Loader';
import './style.css';

function UsersPage() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="page">
      <div className="page-users">
        {loading && <Loader />}
        {users.map(user => (
          <Link
            to={`/users/:${user.index}`}
            key={user._id}
          >
            <Card
              picture={user.picture}
              name={user.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
