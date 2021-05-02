import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation, useParams } from 'react-router-dom';

import { getUser } from '../../actions';
import { Card } from '../../components';
import { getIsUserLoggedIn, getProfile, getProfileLoading, getLoggedUser } from '../../selectors';
import { ROUTES } from '../../constants';
import './style.css';

const Profile = () => {
  const dispatch = useDispatch();

  const { index: userIndex } = useParams();

  const isUserLoggedIn = useSelector(getIsUserLoggedIn);
  const profile = useSelector(getProfile);
  const loading = useSelector(getProfileLoading);
  const myData = useSelector(getLoggedUser);

  const location = useLocation();

  const isMe = useMemo(() => location?.pathname === ROUTES.ME, [location?.pathname]);

  const userData = useMemo(() => isMe ? myData : profile, [myData, profile, isMe]);

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
        {loading && <span>Loading...</span>}
        { userData && (
          <Card picture={userData.picture} name={userData.name} />
        )}
        <span className="text-field">{userData?.email}</span>
        <span className="text-field">{userData?.phone}</span>
        <span className="text-field">{userData?.about}</span>
      </div>
      {(isMe && !isUserLoggedIn) && (
        <Redirect to={ROUTES.SIGNIN} />
      )}
    </div>
  )
}

export default Profile;
