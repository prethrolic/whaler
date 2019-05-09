import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';
import Menubar from './Menubar.js';
import Profile from './Profile.js'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import './assets/scss/_base.scss';
//import GoogleMapReact from 'google-map-react';
import MapPage from './MapPage.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

function App() {
  return (
    <Container fluid>
      <Row className='justify-content-sm-center outer-wrap'>
        <Col xs={12} sm={8} md={6} lg={4} className='page-wrap'>
          <Page />
          <Menubar />
        </Col>
      </Row>
    </Container>
  );
}

const Page = () => (
  <Switch>
      <Route exact path='/' component={MapPage} />
      <Route path='/redeem' component={Profile} />
      <Route path='/profile' component={Profile} />
  </Switch>
)

export default withRouter(App);
