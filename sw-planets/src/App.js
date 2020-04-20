import React, { Component } from 'react';
import Header from './components/header/Header';
import RandomPlanet from './components/random-planet/random-planet';
import ErrorBoundry from './components/error-boundry/error-boundry';
import SwapiService from "./services/swapi-service";
import { PersonList, PlanetList, StarshipList } from './components/sw-components/item-list';
import './App.css';
import { PersonDetails, PlanetDetails, StarshipDetails } from './components/sw-components/details';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

 



    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />
          <PersonList />
          <StarshipList />          
          <PlanetList />        
        </div>
      </ErrorBoundry>
    );
  }
}