import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../components';
import './style.css';
import { getUsers, sortUsersByName } from '../../actions';
import { getUserList } from '../../selectors';

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUserList);
  
  const [showIds, setShowIds] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const sortUsers = useCallback(() => {
    dispatch(sortUsersByName);
  }, [dispatch]);
  
  return (
    <div className="page">
      <div className="page-users">
        <button onClick={sortUsers}>Sort by name</button>
        <button
          onClick={() => setShowIds(showIds)}
        >
          {showIds ? 'Hide ID' : 'Show ID'}
        </button>
        {users.map((item, i) => {
          return (
            <Link
              className='user-list-item'
              key={item._id}
              to={`/users/${item.index}`}
            >
              <Card
                picture={item.picture}
                name={item.name}
                index={item.index}
                id={item._id}
                showId={showIds}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Users;