import React, { Component } from 'react';
import Age from './Age';
import Gender from './Gender';

class Home extends Component {
    render() {
        return (
            <div className="App">    
                <Gender></Gender>    
             <p></p> 
      
                <Age></Age>
               <p></p>       
          </div>
        );
    }
}

export default Home;