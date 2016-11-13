import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import { FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { addCustomer } from '../../actions/customers/add';

function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}

class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', age: '', gender: 'male'
    }
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }
  handleGenderChange(gender) {
    this.setState({ gender });
  }
  save() {
    let { name, age, gender } = this.state;
    let { dispatch } = this.props;
    dispatch(addCustomer({ name, age, gender }));
  }
  render() {
    let { name, age, gender } = this.state;
    return (
      <div className={ styles.customer }>
        <FormControl
          type="text"
          value={ name }
          placeholder="Customer name..."
          onChange={ this.handleChange.bind(this) }
        />
        <FormControl
          type="number"
          value={ age }
          placeholder="Customer age..."
          onChange={ this.handleAgeChange.bind(this) }
        />
        <DropdownButton onSelect={ this.handleGenderChange.bind(this) }
                        title={ gender === 'male' ? 'Male' : 'Female' }
                        id="bg-justified-dropdown">
          <MenuItem eventKey="male">Male</MenuItem>
          <MenuItem eventKey="female">Female</MenuItem>
        </DropdownButton>
        <Button onClick={ this.save.bind(this) }>Save</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewCustomer);
