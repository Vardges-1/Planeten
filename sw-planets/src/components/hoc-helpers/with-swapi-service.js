import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';



const withSwapiService = (Wrapped, mapMethodsToProps) => {

    return (props) => {
      return (
        <SwapiServiceConsumer>
          {
            (swapiService) => {
              console.log(mapMethodsToProps)
              const serviceProps = mapMethodsToProps? mapMethodsToProps(swapiService): {};

              return(
                <Wrapped {...props} {...serviceProps}/>
              );
            }
          }
        </SwapiServiceConsumer>
      );
    }
  };

  export default withSwapiService;