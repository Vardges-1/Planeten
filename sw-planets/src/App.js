 
import React from 'react';
import './App.css'
import Header from './components/header/Header';
import RandomPlanet from  './components/random-planet/random-planet';
import ItemList from './components/item-list/ItemList';
import PersonDetails from './components/person-details/person-details';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;