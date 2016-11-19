import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import { initializeStore } from '../store';
import Customer from '../components/customer/index';
import NewCustomer from '../components/customer/new-customer';
import Layout from '../components/layout';

const store = initializeStore();

export default React.createClass({
  render() {
    let { customers: { list } } = store.getState();
    let toCustomer = list.length > 0 ? list[0].id : 'new';

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
