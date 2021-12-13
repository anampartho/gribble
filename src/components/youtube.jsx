import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Youtube extends Component {
  render() {
    return (
      <div className='video-responsive'>
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/${this.props.embedId}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    );
  }
}

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Youtube;
