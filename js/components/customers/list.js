import React, { Component, PropTypes } from 'react';
import styles from '../../../css/app.css';
import Customer from './item';

export default class CustomersList extends Component {
  render() {
    let { customers } = this.props;
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

CustomersList.propTypes = {
  customers: PropTypes.array
};

CustomersList.defaultProps = {
  customers: []
};
