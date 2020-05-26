import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <div>Не удалось загрузить юзера</div>
    )
  }

  return (
    <div className="page">
      {loading && <span>Loading...</span>}
      PROFILE PAGE
      <span>{userData?.about}</span>
    </div>
  );
}

export default ProfilePage;
