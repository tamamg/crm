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

class CustomersSection extends Component {
  render() {
    let { customers } = this.props;
    return (
      <div className={ styles.customers }>
        <Button style={{ display: 'block', marginTop: 40, marginLeft: 'auto', marginRight: 'auto' }} bsStyle="primary">
          <Link style={{ fontSize: 18 }} to={`/customer/new`} > New Customer </Link>
        </Button>
        <CustomersList customers={ customers }/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CustomersSection);
