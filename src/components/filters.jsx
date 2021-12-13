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
              <Input title='Search' placeholder='Search'></Input>
            </Column>
            <Column>
              <Select id='type' title='Type'>
                <option defaultValue='1'>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Select>
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Filters;
