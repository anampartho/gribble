import React, { Component } from 'react';

export class Select extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor=''>{this.props.title}</label>
        <select
          name={this.props.name}
          id={this.props.id}
          className='form-select'
          onChange={this.props.onChange}
        >
          {this.props.children}
        </select>
      </React.Fragment>
    );
  }
}

export default Select;
