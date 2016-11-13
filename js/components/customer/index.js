import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}

class Customer extends Component {
  render() {
    let { params : { customerId }, customers } = this.props;
    let customer = customers.filter(cust => cust.id === customerId)[0];
    let name, age, gender;
    if (customer) {
      name = customer.name;
      age = customer.age;
      gender = customer.gender;
    }

    return (
      <div className={ styles.customer }>
        <div>
          <span className={ styles.name }>{ name } </span>
          <Button bsStyle="link">Delete Customer</Button>
        </div>
        <div>
          Age: { age }
        </div>
        <div>
          Gender: { gender === 'male' ? 'Male' : 'Female' }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Customer);
