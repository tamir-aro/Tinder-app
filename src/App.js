import React from 'react';
import logo from './logo512.png';
import './App.css';
import Age from './Components/Age';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home'

function App() {

  const routing = (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"></img>
        <Route exact path="/" component={Home} />
        <Route path="/Search" component={Age} />
        </header>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

return (
  <div>

  </div>
  ); 
}
export default App;
