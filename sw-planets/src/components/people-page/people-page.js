import React, { Component } from 'react';
import ItemList from '../item-list/ItemList';


import './people-page.css';
import SwapiService from "../../services/swapi-service";
import ItemDetails from '../item-details/item-details';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';




export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}