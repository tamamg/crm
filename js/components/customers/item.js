import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class Customer extends Component {
  render() {
    let { customer } = this.props;
    return (
      <div>
        <Link style={{ fontSize: 18 }} to={`/customers/${customer.id}`} > {customer.name} </Link>
      </div>
    );
  }
}

Customer.propTypes = {
  customer: PropTypes.object
};
