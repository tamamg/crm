import React, { Component } from 'react';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import CustomersList from './list';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class CustomersSidebar extends Component {

  navigateNewCustomer() {
    this.props.history.push('/customer/new');
  }

  render() {
    let { customers } = this.props;
    let buttonStyle = {
      fontSize: 18, display: 'block',
      marginTop: 20, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto'
    };
    return (
      <div className={ styles.customers }>
        <Button  style={ buttonStyle } onClick={ this.navigateNewCustomer.bind(this) } bsStyle="primary">New Customer</Button>
        <CustomersList customers={ customers }/>
      </div>
    );
  }
}

export default connect(({ customers: { list} }) => ({ customers: list }))(CustomersSidebar);
