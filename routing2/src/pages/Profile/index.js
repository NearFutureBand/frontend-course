import React from 'react';
import './style.css';

const ProfilePage = (props) => {
  return (
    <div className="page page-profile">
      user profile {props.match.params.index}
    </div>
  )
}

export default ProfilePage;