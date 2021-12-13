import React, { Component } from 'react';
import Card from './card';
import getMedia from '../services/fakeImageVideoServices';
import Container from './container';
import Row from './row';

export class Medias extends Component {
  state = {
    medias: getMedia(),
  };
  render() {
    return (
      <Container>
        <Row>
          {this.state.medias.map((media) => {
            return (
              <Card
                url={media.url}
                overlayTitle={media.overlayTitle}
                title={media.author}
                key={media._id}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Medias;
