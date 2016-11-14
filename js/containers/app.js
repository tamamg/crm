import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import configureStore from '../store/index';
import Customer from '../components/customer/index';
import NewCustomer from '../components/customer/new-customer';
import Layout from '../components/layout';

const store = configureStore();

export default React.createClass({
  render() {
    let { customers } = store.getState();
    let toCustomer = customers.length > 0 ? customers[0].id : 'new';

    return (
        <Provider store={ store }>
          <Router history={ browserHistory }>
            <Redirect from="/" to={ `/customers` } />
            <Route component={ Layout }>
              <Redirect from="customers" to={ `/customers/${toCustomer}` }/>
              <Route path="customers/:customerId" components={{ main: Customer }}/>
              <Route path="customer/new" components={{ main: NewCustomer }} />
            </Route>
          </Router>
        </Provider>
    );
  }
});
