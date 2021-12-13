import React, { Component } from 'react';

export class Input extends Component {
  getInputClasses = () => {
    const { inputClasses } = this.props;
    let classes = 'form-control';
    classes += inputClasses ? ' ' + inputClasses : '';
    return classes;
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor=''>{this.props.title}</label>
        <input
          type={this.props.type}
          className={this.getInputClasses()}
          placeholder={this.props.placeholder}
          onChange={this.props.onSearch}
        />
        {this.props.children}
      </React.Fragment>
      // <label for="exampleFormControlInput1" class="form-label">Email address</label>
      // <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
    );
  }
}

export default Input;
