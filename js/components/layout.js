import React, { Component, PropTypes } from 'react';
import styles from '../../css/app.css';
import CustomersSidebar from './customers';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    company: state.company
  };
}

class Layout extends Component {
  render () {
    const { main, company } = this.props;

    return (
      <div className={ styles.crm }>
        <div className={ styles.header }>
          { company.brandName }
        </div>
        <div className={ styles.main }>
          <CustomersSidebar/>
          { main }
        </div>
       </div>
    )
  }
}

Layout.propTypes = {
  main: PropTypes.element,
  company: PropTypes.object
};

export default connect(mapStateToProps)(Layout)
