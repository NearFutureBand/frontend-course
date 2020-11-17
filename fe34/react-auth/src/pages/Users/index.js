import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {

  state = {
    users: []
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3001/users');
    this.setState({users: response.data });
  }

  render () {
    console.log(this.props);
    return (
      <div className="page page-users">
        <h1>USERS</h1>
        {this.state.users.map((user) => {
          return (
            <Link to={`/users/${user.index}`} key={user._id}>
              <span >{`${user.name.first} ${user.name.last}`}</span>
            </Link>
          );
        })}
        
      </div>
    );
  }
}

export default Users;
