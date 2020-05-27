import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Card } from '../../components';
import './style.css';

class UsersPage extends Component {

  state = {
    users: [],
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3001/users');
    this.setState({ users: response.data });
  }

  render () {
    return (
      <div className="page">
        <div className="page-users">
          {this.state.users.map((item, i) => {
            return (
              <Link
                key={item._id}
                to={`/users/${item.index}`}
              >
                <Card
                  picture={item.picture}
                  name={item.name}
                  index={item.index}
                />
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default UsersPage;