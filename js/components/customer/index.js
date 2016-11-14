import React, { Component, PropTypes } from 'react';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteCustomer } from '../../actions/customers/delete';

function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}

class Customer extends Component {

  delete() {
    let { params : { customerId }, dispatch } = this.props;
    dispatch(deleteCustomer(customerId));
  }

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
          <Button onClick={ this.delete.bind(this) } bsStyle="link">Delete Customer</Button>
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

Customer.propTypes = {
  customers: PropTypes.array
};

Customer.defaultProps = {
  customers: []
}

export default connect(({ customers }) => ({ customers }))(Customer);
