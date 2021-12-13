import React, { Component } from 'react';

export class Row extends Component {
  getExtraClasses = () => {
    let classes = 'row';
    const { extraClasses } = this.props;
    if (this.props.extraClasses) {
      classes += ' ' + extraClasses;
    }

    return classes;
  };
  render() {
    return <div className={this.getExtraClasses()}>{this.props.children}</div>;
  }
}

export default Row;
