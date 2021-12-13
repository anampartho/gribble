import React, { Component } from 'react';

export class Container extends Component {
  getClasses = () => {
    const { extraClasses } = this.props;
    let classes = 'container';

    if (this.props.extraClasses) {
      classes += ' ' + extraClasses;
    }

    return classes;
  };
  render() {
    return <div className={this.getClasses()}>{this.props.children}</div>;
  }
}

export default Container;
