import axios from 'axios';
import React, { Component } from 'react';

class Users extends Component {

  state = {
    users: []
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3001/users');
    this.setState({users: response.data });
  }

  render () {
    return (
      <div className="page page-users">
        <h1>USERS</h1>
        {this.state.users.map((user) => {
          return (
            <span key={user._id}>{`${user.name.first} ${user.name.last}`}</span>
          );
        })}
        
      </div>
    );
  }
}

export default Users;
