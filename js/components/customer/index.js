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
    let { params : { customerId }, customers, dispatch } = this.props;
    dispatch(deleteCustomer(customerId)).then(data => {
      customers = customers.filter(customer => customer.id !== customerId);
      let path = customers.length > 0 ? `/customers/${customers[0].id}` : 'customer/new';
      this.props.history.push(path);
    });
  }

  render() {
    let { params : { customerId }, customers } = this.props;
    let customer = customers.filter(cust => cust.id === customerId)[0];
    let name, age, gender, imageUrl;
    if (customer) {
      name = customer.name;
      age = customer.age;
      gender = customer.gender;
      imageUrl = customer.imageUrl;
    }

    return (
      <div className={ styles.customer }>
        <div>
          <span className={ styles.name }>{ name } </span>
          <Button onClick={ this.delete.bind(this) } bsStyle="link">Delete Customer</Button>
        </div>
        <img style={{ width: 70, height: 70, marginRight: 15 }} src={ imageUrl } />
        <div style={{ display: 'inline-block' }}>
          <div>
            Age: { age }
          </div>
          <div>
            Gender: { gender === 'male' ? 'Male' : 'Female' }
          </div>
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

export default connect(({ customers: { list } }) => ({ customers: list }))(Customer);
