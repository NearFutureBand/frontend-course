import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { UserCard } from '../../components';
import './styles.css';
import { IUserShortInfo } from '../../types/interfaces';

interface IState {
  users: Array<IUserShortInfo>;
}

class Users extends Component<{}, IState> {

  constructor (props: any) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount = async (): Promise<void> => {
    const response = await axios.get('http://localhost:3001/users');
    this.setState({users: response.data });
  }

  render () {
    return (
      <div className="page page-users">
        <h1>USERS</h1>
        {this.state.users.map((user) => {
          return (
            <Link to={`/users/${user.index}`} key={user._id}>
              <UserCard picture={user.picture} name={user.name} />
            </Link>
          );
        })}
        
      </div>
    );
  }
}

export default Users;
