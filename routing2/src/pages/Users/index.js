import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Card } from '../../components';
import './style.css';

const UsersPage = () => {

  const [ users, setUsers ] = useState([]);
  
  useEffect(() => {

    const getUsers = async () => {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    }
    getUsers();
    
  }, []); // componentDidMount

  return (
    <div className="page">
      <div className="page-users">
        {users.map((item, i) => {
          return (
            <Link
              key={item._id}
              to={`/users/${item.index}`}
            >
              <Card
                picture={item.picture}
                name={item.name}
                index={item.index}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default UsersPage;