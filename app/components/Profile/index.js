import React from 'react';
import User from 'components/User';
import Artist from 'components/Artist';

class Profile extends React.Component { 
	 componentDidMount() {
	 	
	 	const userProfile = document.getElementsByClassName('user-wrapper')[0];
	 	const profileWrapper = document.getElementsByClassName('profile-wrapper')[0];

	 	console.log('profileWrapper', profileWrapper);

		const userPosition = userProfile.getBoundingClientRect();
		const profilePosition = profileWrapper.getBoundingClientRect();
	 	console.log('profilePosition', profilePosition);

	 	const artistElement = document.getElementsByClassName('artist');

	 	const userPositionW = userPosition.width;
	 	const userPositionH = userPosition.height;

	 	const profilePositionW = profilePosition.width;
	 	const profilePositionH = profilePosition.height;

	 	console.log('artistElement', artistElement.length);
	 	console.log('userPositionW', userPositionW);
	 	console.log('userPositionH', userPositionH);
	 	console.log('profilePositionW', profilePositionW);
	 	console.log('profilePositionH', profilePositionH);

	 	this.getPositionNumber(artistElement, profilePositionW, profilePositionH);

  }
  getPositionNumber(el, profileW, profileH) {
	 		
	 		const numEl = el.length;

	 		const profilePositionH = profileH;
	 		const profilePositionW = profileW;

	 		// const leftPostion = Math.floor(Math.random() * profilePositionW);
	 	  // const rightPosition = Math.floor(Math.random() * profilePositionH);
	 		// console.log('leftPostion', leftPostion);
	 		// console.log('rightPosition', rightPosition);
	 		console.log('numElements', numEl);

	 		//return numElements;
	}

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