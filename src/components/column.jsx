import React, { Component } from 'react';

export class Column extends Component {
  render() {
    return <div className='col'>{this.props.children}</div>;
  }
}

export default Column;
