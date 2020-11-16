import AuthWithAxios from './AuthWithAxios';
import Users from './Users';
import React, { Component } from 'react';

const routes = {
  auth: {
    routeName: 'auth',
    component: <AuthWithAxios />,
    name: 'Authentication'
  },
  users: {
    routeName: 'users',
    component: <Users />,
    name: 'Users'
  }
};

class Navigator extends Component {

  state = {
    currentPage: 'auth'
  }

  render () {
    return (
      <div>
        <nav>
          {Object.values(routes).map((item) => {
            return (
              <button
              onClick={() => this.setState({ currentPage: item.routeName})}
            >{item.name}</button>
            )
          })}
        </nav>
        {routes[this.state.currentPage].component}
      </div>
    );
  }
}

export default Navigator;
