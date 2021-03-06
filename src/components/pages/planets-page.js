import React, { Component } from 'react';
import { PlanetList } from '../sw-components/item-list';
import  PlanetDetails from '../sw-components/planet-details ';
import Row from '../row/row';

class PlanetsPage extends Component {

    state = {
        selectedItem: null
    };
    
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    }
    

    render() {
        const { selectedItem } = this.state;

        return (
            <Row 
            left={ <PlanetList onItemSelected={this.onItemSelected}  /> }
            right={ <PlanetDetails  itemId={selectedItem} />}
            />
        );
    }
}

export default PlanetsPage;
