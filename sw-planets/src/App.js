import React, { Component } from 'react';
import Header from './components/header/Header';
import ErrorBoundry from './components/error-boundry/error-boundry';
import SwapiService from "./services/swapi-service";
import { PersonList, PlanetList, StarshipList } from './components/sw-components/item-list';
import './App.css';
import  PersonDetails from './components/sw-components/person-details';
import  PlanetDetails from './components/sw-components/planet-details ';
import  StarshipDetails from './components/sw-components/starship-details';
import { SwapiServiceProvider } from './components/swapi-service-context/swapi-service-context';


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
       <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />
            <PersonList />
            <StarshipList />          
            <PlanetList />        
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}