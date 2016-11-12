import React, { Component } from 'react';
import styles from '../../css/app.css';
import CustomersSection from './customers';

export default class Layout extends Component {
  render () {
    const { main, params, customers } = this.props;
    // let customerId = params.customerId ? params.customerId : null;
    // let customer = customers.filter(customer => customerId === customer.id)[0];

    return (
      <div className={ styles.crm }>
        <div className={ styles.header }>
          { 'sdsdsds' }
        </div>
        <div className={ styles.main }>
          <CustomersSection/>
          { main }
        </div>
       </div>
    )
  }
}
