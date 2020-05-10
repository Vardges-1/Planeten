import React from 'react';
import { withRouter } from 'react-router-dom';
import  {PersonList}  from '../sw-components/item-list';
import  PersonDetails from '../sw-components/person-details';
import Row from '../row/row';


const PeoplePage = ({ history, match }) => {

    const { id } = match.params;
  
    return (
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />} />
    );
  };
  
  export default withRouter(PeoplePage);