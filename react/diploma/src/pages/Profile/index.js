import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation, useParams, Link } from 'react-router-dom';

import { getUser } from '../../actions';
import { Card } from '../../components';
import { getIsUserLoggedIn, getProfile, getProfileLoading, getLoggedInUser } from '../../selectors';
import { ROUTES } from '../../constants';
import './style.css';

const Profile = () => {
  const dispatch = useDispatch();

  const { index: userIndex } = useParams();

  const isUserLoggedIn = useSelector(getIsUserLoggedIn);
  const profile = useSelector(getProfile);
  const loading = useSelector(getProfileLoading);
  const loggedInUser = useSelector(getLoggedInUser);

  const location = useLocation();

  const isMe = useMemo(() => location?.pathname === ROUTES.ME, [location?.pathname]);

  const userData = useMemo(() => isMe ? loggedInUser : profile, [loggedInUser, profile, isMe]);

  useEffect(() => {
    if (!isMe) {
      dispatch(getUser(userIndex));
    }
  }, [dispatch, userIndex, isMe]);

  if (!userData && !loading) {
    return (
      <div>Не удалось загрузить данные пользователя</div>
    )
  }

  return (
    <div className="page">
      <div className="page-profile">
        {isMe && (<h2>Welcome back!</h2>)}
        {loading && <span>Loading...</span>}
        { userData && (
          <Card picture={userData.picture} name={userData.name} />
        )}
        <span className="text-field">{userData?.email}</span>
        <span className="text-field">{userData?.phone}</span>
        <span className="text-field">{userData?.about}</span>

        {(!userData?.isFriend && !isMe) && (
          <button>Start friendship</button>
        )}

        <div>
          <h3>Friends: </h3>
          <div>
            {(userData?.friends || []).map((friend) => (
              <>
                <Link key={friend.index} to={`users/${friend.index}`}>
                  <Card {...friend} />
                </Link>
                <button>Remove friend</button>
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
