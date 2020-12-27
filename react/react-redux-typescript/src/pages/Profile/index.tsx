import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { UserCard } from '../../components';
import './styles.css';
import { IUser } from '../../types/interfaces';


interface IState {
  user: IUser | null;
}

interface RouteParams {
  index: string;
}

interface IProps extends RouteComponentProps<RouteParams> {};

class Profile extends Component<IProps, IState> {

  constructor (props: IProps) {
    super(props);

    this.state = {
      user: null,
    }
  }

  componentDidMount = async () => {
    const userIndex = this.props.match.params.index;
    const response = await axios.get(`http://localhost:3001/users/${userIndex}`);
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
