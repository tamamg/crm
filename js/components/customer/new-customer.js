import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../../actions/HomeActions';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';
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
      name: '', age: 0,
    }
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }
  save() {
    let { name, age } = this.state;
    let { dispatch } = this.props;
    dispatch(addCustomer({ name, age }));
  }
  render() {
    return (
      <div className={ styles.customer }>
        <FormControl
          type="text"
          value={ this.state.name }
          placeholder="Customer name..."
          onChange={ this.handleChange.bind(this) }
        />
        <FormControl
          type="number"
          value={ this.state.age}
          placeholder="Customer age..."
          onChange={ this.handleAgeChange.bind(this) }
        />
        <Button onClick={ this.save.bind(this) }>Save</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewCustomer);
