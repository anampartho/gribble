import React, { Component } from 'react';
import Lightbox from './lightbox';

export class Card extends Component {
  state = {
    lightboxOpen: false,
  };

  getThumb = (url) => {
    let imageSplit = url.split('.jpg');
    return `${imageSplit[0]}-thumb.jpg`;
  };

  handleLightbox = (e) => {
    e.preventDefault();
    const { lightboxOpen } = this.state;

    if (lightboxOpen) {
      this.setState({ lightboxOpen: false });
    } else {
      this.setState({ lightboxOpen: true });
    }
  };

  render() {
    const imageUrl = this.getThumb(this.props.url);

    return (
      <React.Fragment>
        <div className='card col-sm-12 col-md-4 col-lg-3'>
          <a href={imageUrl} onClick={this.handleLightbox}>
            <div className='card-image-container'>
              <h5 className='card-title'>{this.props.overlayTitle}</h5>
              <img className='img-fluid' src={imageUrl} alt={this.props.alt} />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{this.props.title}</h5>
            </div>
          </a>
        </div>
        {this.state.lightboxOpen && (
          <Lightbox
            url={this.props.url}
            onLightboxClick={this.handleLightbox}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Card;
