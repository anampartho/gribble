import React, { Component } from 'react';
import Container from './container';
import Row from './row';
import Column from './column';
import Input from './input';
import Select from './select';

export class Filters extends Component {
  render() {
    return (
      <React.Fragment>
        <Container extraClasses='filters'>
          <Row>
            <Column>
              <Input
                title='Search'
                placeholder='Search'
                onSearch={this.props.onSearch}
              ></Input>
            </Column>
            <Column>
              <Select id='type' title='Type' onChange={this.props.onChange}>
                <option defaultValue=''>Choose a Media Type</option>
                <option value='video'>Video</option>
                <option value='image'>Image</option>
              </Select>
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Filters;
