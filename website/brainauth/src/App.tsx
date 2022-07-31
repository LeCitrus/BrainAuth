import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Forms} from "./Form"

function App() {
  return (
    <div className="App">
      <Forms onSubmit={({firstName, lastName}) =>{
        console.log(firstName, lastName)

      }}/>
    </div>
  );
}

export default App;
