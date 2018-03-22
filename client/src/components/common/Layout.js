import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Aside from './Aside';
import Footer from './Footer';
import Dashboard from '../Dashboard';
import CustomerListContainer from '../../containers/CustomerListContainer';
import CustomerAddEditContainer from '../../containers/CustomerAddEditContainer';

const Layout = ({ props }) => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar {...props} />
      <main className="main">
        <Breadcrumb />
        <Container fluid>
          <Switch>
            <Route path="/dashboard" name="Dashboard" component={Dashboard} />
            <Route path="/customers/:page" name="Customers" component={CustomerListContainer} />
            <Route path="/customers" name="Customers" component={CustomerListContainer} />
            <Route path="/add-edit-customer/:id" name="Add/Edit Customer" component={CustomerAddEditContainer} />
            <Route path="/add-edit-customer" name="Add/Edit Customer" component={CustomerAddEditContainer} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Container>
      </main>
      <Aside />
    </div>
    <Footer />
  </div>
);

export default Layout;