import axios from 'axios';
import React, { Component } from 'react';
import './styles.css';

class Profile extends Component {

  state = {
    user: null,
  }

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3001/users/6");
    this.setState({ user: response.data });
  }

  render () {
    console.log(this.props);
    const { user } = this.state;
  
    return (
      <div className="page page-profile">
        <span>{user?.index}</span>
        <span>{user?.about}</span>
      </div>
    );
  }
}

export default Profile;
