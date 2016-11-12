import React, { Component } from 'react';
import styles from '../../../css/app.css';
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
