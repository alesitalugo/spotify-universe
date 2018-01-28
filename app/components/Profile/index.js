import React from 'react';
import User from 'components/User';
import Artist from 'components/Artist';

class Profile extends React.Component { 


  render() {
    return (
	    <div className='profile-wrapper'>
	      <User></User>
	      <Artist></Artist>
	    </div>
    );
  }
}

export default Profile;
