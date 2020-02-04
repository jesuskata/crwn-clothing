// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import { HomePage } from './pages/HomePage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  </div>
);

export default App;
