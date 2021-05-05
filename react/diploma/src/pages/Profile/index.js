import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation, useParams, Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

import { getUser, addFriend } from '../../actions';
import { Card } from '../../components';
import { getIsUserLoggedIn, getProfile, getProfileLoading, getLoggedInUser, getToken } from '../../selectors';
import { ROUTES } from '../../constants';
import './style.css';

const Profile = () => {
  const dispatch = useDispatch();

  const { index: userIndex } = useParams();

  const isUserLoggedIn = useSelector(getIsUserLoggedIn);
  const profile = useSelector(getProfile);
  const loading = useSelector(getProfileLoading);
  const loggedInUser = useSelector(getLoggedInUser);
  const token = useSelector(getToken);

  const location = useLocation();
  const history = useHistory();

  const isMe = useMemo(() => location?.pathname === ROUTES.ME, [location?.pathname]);

  const userData = useMemo(() => isMe ? loggedInUser : profile, [loggedInUser, profile, isMe]);

  useEffect(() => {
    if (!isMe) {
      dispatch(getUser(userIndex));
    }
  }, [dispatch, userIndex, isMe]);

  const onAddFriend = useCallback(() => {
    
    if (!token) {
      Swal.fire({
        icon: 'info',
        title: 'Sign in to add friends!',
        showConfirmButton: false,
        timer: 1500
      });
      history.push(ROUTES.SIGNIN);
      return;
    }

    dispatch(addFriend(token, userIndex));

  }, [token, userIndex, history, dispatch]);

  if (!userData && !loading) {
    return (
      <div>Не удалось загрузить данные пользователя</div>
    )
  }

  return (
    <div className="page">
      <div className="page-profile">
        <div className='white-block'>
          {isMe && (<h2>Welcome back!</h2>)}
          {loading && <span>Loading...</span>}
          {userData && (
            <Card picture={userData.picture} name={userData.name} />
          )}
        </div>
        <div className='white-block'>
          <div className="text-field">{userData?.email}</div>
          <div className="text-field">{userData?.phone}</div>
          <div className="text-field">{userData?.about}</div>
        </div>
        <div className='white-block'>
          {(!userData?.isFriend && !isMe) && (
            <button onClick={onAddFriend}>Start friendship</button>
          )}
          <h3>Friends: </h3>
          <div>
            {(userData?.friends || []).map((friend) => (
              <>
                <Link key={friend.index} to={`/users/${friend.index}`}>
                  <Card {...friend} />
                </Link>
                {isMe && <button>Remove friend</button>}
              </>
            ))}
            {userData?.friends?.length === 0 && <span>no friends yet :(</span>}
          </div>
        </div>
        
      </div>
      {(isMe && !isUserLoggedIn) && (
        <Redirect to={ROUTES.SIGNIN} />
      )}
      {!isMe && userIndex == loggedInUser?.index && (
        <Redirect to={ROUTES.ME} />
      )}
    </div>
  )
}

export default Profile;
