import React, { Component } from 'react';
import styles from '../../css/app.css';
import { connect } from 'react-redux';
import CustomersSection from './customers';

function mapStateToProps(state) {
  return {
    company: state.company,
    customers: state.customers
  };
}

class Crm extends Component {
  render() {
    let { company } = this.props;
    return (
      <div className={ styles.crm }>
        <div className={ styles.header }>
          { company.brandName }
        </div>
        <div className={ styles.main }>
          <CustomersSection/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Crm)
