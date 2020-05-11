import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';

function UsersPage() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    //const response = await axios.get('http://localhost:3000/users');
  }, []);

  return (
    <div className="page page-users">
      {}
    </div>
  );
}

export default UsersPage;
