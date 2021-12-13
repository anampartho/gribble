import React, { Component } from 'react';
import Container from './container';

export class Navbar extends Component {
  render() {
    return (
      <header>
        <Container>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a href='/' className='brand'>
              Gribble
            </a>
          </div>
        </Container>
      </header>
    );
  }
}

export default Navbar;
