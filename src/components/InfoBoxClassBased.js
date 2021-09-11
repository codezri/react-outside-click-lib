import React from 'react';

export class InfoBox extends React.Component {
  render() {
    if(!this.props.show)
      return null; 
    return (
      <div className='info-box'>
        {this.props.message}
      </div> );
  }
}
