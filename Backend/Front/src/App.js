
import './App.css';
import React, { Component } from "react";
import Home from './home';
class App extends Component {
  state ={users:[] }

 
render(){
  return (
    <div className="App">     
      <Home />
    </div>
  );
}
}

export default App;
