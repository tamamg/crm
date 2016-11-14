import React, { Component } from 'react';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import CustomersList from './list';
import { Link } from 'react-router'

class CustomersSidebar extends Component {
  render() {
    let { customers } = this.props;
    let linkStyle = {
      fontSize: 18, display: 'block', textAlign: 'center',
      marginTop: 20, marginBottom: 20, backgroundColor: 'grey',
      borderRadius: 4
    };
    return (
      <div className={ styles.customers }>
        <Link style={ linkStyle } to={`/customer/new`} > New Customer </Link>
        <CustomersList customers={ customers }/>
      </div>
    );
  }
}

export default connect(({ customers }) => ({ customers }))(CustomersSidebar);
