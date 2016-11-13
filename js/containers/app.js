import React from 'react';
import { Router, Route, Redirect, browserHistory, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import IndexComponent from '../components';
import Customer from '../components/customer/index';
import NewCustomer from '../components/customer/new-customer';
import Layout from '../components/layout';
import Home from '../components/home';

import { connect } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {renderDevTools} from '../utils/devTools';
import { Button } from 'react-bootstrap';

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
