import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../actions';
import { Card } from '../../components';
import './style.css';

class ProfilePage extends Component {

  componentDidMount = () => {
    
    this.props.getUser(this.props.match.params.index);
  }

  render () {
    const { userData, loading} = this.props; 

    if (!userData && !loading) {
      return (
        <div>Не удалось загрузить данные пользователя</div>
      )
    }
  
    return (
      <div className="page">
        <div className="page-profile">
          {loading && <span>Loading...</span>}
          { userData && (
            <Card picture={userData.picture} name={userData.name} />
          )}
          <span className="text-field">{userData?.email}</span>
          <span className="text-field">{userData?.phone}</span>
          <span className="text-field">{userData?.about}</span>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    userData: state.profile.userData,
    loading: state.profile.loading,
  }
}


export default connect(mapStatetoProps, { getUser })(ProfilePage);
