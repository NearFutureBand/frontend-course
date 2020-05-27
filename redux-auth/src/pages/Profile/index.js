import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { Card } from '../../components';
import './style.css';

const ProfilePage = (props) => {

  const [ userData, setUserData ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true); //старт запросв
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${props.match.params.index}`);
        setUserData(response.data);
        setLoading(false);//успех запроса
      } catch (err) {
        console.log(err);
        setLoading(false);//ошибка запроса
      }
    }
    getUser();
  }, [props.match.params.index]);

  useEffect(() => {
    console.log('userData changed');
  }, [userData]);

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
    </div>
  );
}

export default ProfilePage;
