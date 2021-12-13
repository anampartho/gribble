import React, { Component } from 'react';

export class Lightbox extends Component {
  render() {
    return (
      <div className='lightbox' onClick={this.props.onLightboxClick}>
        <img src={this.props.url} alt={this.props.alt} />
      </div>
    );
  }
}

export default Lightbox;
