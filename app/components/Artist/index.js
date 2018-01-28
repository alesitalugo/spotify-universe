import React from 'react';

class Artist extends React.Component { 
  render() {
    return (
      <div className='artists-wrapper'>
       	<div className='artist triangle large'>
       		<div className='artist-asset triangle'></div>
       	</div>
        <div className='artist pentagon small'>
          <div className='artist-asset pentagon'></div>
        </div>
        <div className='artist trapezoid large'>
          <div className='artist-asset trapezoid'></div>
        </div>
        <div className='artist parallelogram medium'>
          <div className='artist-asset parallelogram'></div>
        </div>
        <div className='artist triangle--equilater small'>
          <div className='artist-asset triangle--equilater'></div>
        </div>
      </div>
    );
  }
}

export default Artist;
