import axios from 'axios';
import React, { Component } from 'react';

import { UserCard } from '../../components';
import './styles.css';

class Profile extends Component {

  state = {
    user: null,
  }

  componentDidMount = async () => {
    const response = await axios.get(`http://localhost:3001/users/${this.props.match.params.index}`);
    this.setState({ user: response.data });
  }

  render () {
    const { user } = this.state;
  
    return (
      <div className="page page-profile">
        <h1>PROFILE</h1>
        { user && (
          <UserCard name={user.name} picture={user.picture} />
        )}
        
        <span>index: {user?.index}</span>
        <p>{user?.about}</p>
      </div>
    );
  }
}

export default Profile;
