import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as HomeActions from '../../actions/HomeActions';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import CustomersList from './list';
import { Link } from 'react-router'

function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}

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

export default connect(mapStateToProps)(CustomersSidebar);
