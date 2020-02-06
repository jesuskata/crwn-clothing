// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/Shop';
import { Header } from './components/Header';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/contact" component={ShopPage} />
    </Switch>
  </div>
);

export default App;
