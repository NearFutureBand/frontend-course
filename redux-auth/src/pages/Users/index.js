import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card } from '../../components';
import './style.css';
import { getUsers } from '../../actions';

class UsersPage extends Component {

  componentDidMount = () => {
    this.props.getUsers();
  }

  render () {
    return (
      <div className="page">
        <div className="page-users">
          {this.props.usersFromRedux.map((item, i) => {
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

const mapStateToProps = (state) => {
  return {
    usersFromRedux: state.users.users,
    loading: state.users.loading,
  }
}

export default connect( mapStateToProps, { getUsers })  (UsersPage);