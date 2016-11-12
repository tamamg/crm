import React, { Component } from 'react';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import Customer from './item';


export default class CustomersList extends Component {
  render() {
    let { customers } = this.props;
    console.log('****', customers)
    customers = customers.map((customer) => {
      return <Customer key={ customer.id } customer={ customer }/>;
    });

    return (
      <div className={ styles.list }>
        { customers }
      </div>
    );
  }
}

//export default connect(mapStateToProps)(CustomersList);
