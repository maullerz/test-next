import React, { useState, useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from 'store'
import history from 'services/routerHistory'

import Dashboard from 'modules/common/pages/Dashboard'

import 'assets/styles/index.pcss'

// import RootRoutes from './RootRoutes'

const App = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        {/* <Route path="/account/*" component={RootRoutes} /> */}
        <Route path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
