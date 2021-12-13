import React, { Component } from 'react';
import Card from './card';
import getMedia from '../services/fakeImageVideoServices';
import Container from './container';
import Row from './row';
import Pagination from './pagination';
import Filters from './filters';
import { paginate } from '../utils/paginate';

export class Medias extends Component {
  state = {
    medias: [],
    pageSize: 9,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({
      medias: getMedia(),
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelect = (e) => {
    let medias = getMedia();
    let type = e.target.value;

    if (type === 'video' || type === 'image') {
      medias = medias.filter((media) => media.type === type);
    }

    this.setState({ medias });
  };

  render() {
    const { length: mediaCount } = this.state.medias;
    const { pageSize, currentPage, medias: allMedia } = this.state;

    const medias = paginate(allMedia, currentPage, pageSize);

    return (
      <React.Fragment>
        <Filters onChange={this.handleSelect} />
        <Container>
          <Row extraClasses='media-row'>
            {medias.map((media) => {
              return (
                <Card
                  url={media.url}
                  overlayTitle={media.overlayTitle}
                  title={media.author}
                  key={media._id}
                />
              );
            })}
            <Pagination
              itemsCount={mediaCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Medias;
