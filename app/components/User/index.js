import React from 'react';

class User extends React.Component { 
  render() {
    return (
      <div className='user-wrapper'>
       	<div className='user-personal'>
       		<div className='user-personal--asset'></div>
       		<p className='user-personal--name'>Luisin</p>
       	</div>
      </div>
    );
  }
}

export default User;
