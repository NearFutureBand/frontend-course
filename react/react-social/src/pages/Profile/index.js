import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import { Card } from '../../components';

class Profile extends Component {

  state = {
    profileData: null,
    seconds: 0
  }

  intervalId = null;

  componentDidMount = async () => {
    console.log(this.props.match);
    const indexOfUser = this.props.match.params.index;
    const response = await axios.get(`http://localhost:3001/users/${indexOfUser}`);
    this.setState({ profileData: response.data });

    this.intervalId = setInterval(() => {
      console.log('Работаем')
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  render () {
    return (
      <div className="page">
        <div className="page-users">
          {this.state.seconds}
          {this.state.profileData && (
            <>
              <div>{this.state.profileData.name.first}</div>
              <span>{this.state.profileData.about}</span>
            </>
          )}
        </div>
      </div>
    )
  }
}

/*const Profile = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('mounted');
    let intervalId = setInterval(() => {
      console.log('Работаем')
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => {
      console.log('unmounted');
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    if (seconds === 10) {
      console.log('Вы на странице уже 10 секунд');
    }
  }, [seconds]);

  return (
    <div className="page">
      <div className="page-users">
        {seconds}
      </div>
    </div>
  )

}*/

export default Profile;