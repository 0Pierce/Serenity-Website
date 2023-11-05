// routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

const routes = (
  <Switch>
    <Route path="./src/components/about" component={About} />
    <Route path="/contact" component={Contact} />
    {/* Add more routes for other pages if needed */}
  </Switch>
);

export default routes;




