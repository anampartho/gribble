import React, { Component } from 'react';
import Youtube from './youtube';

export class Lightbox extends Component {
  render() {
    return (
      <div className='lightbox' onClick={this.props.onLightboxClick}>
        {this.props.type === 'image' && (
          <img src={this.props.url} alt={this.props.alt} />
        )}
        {this.props.type === 'video' && <Youtube embedId={this.props.video} />}
      </div>
    );
  }
}

export default Lightbox;
