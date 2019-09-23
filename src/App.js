import React from 'react';
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import {choice,remove} from "./components/Helpers"
// import Helpers from './Helpers'
// import Food from "./components/Food"
import foods from './components/Food'


function App() {
let fruit = choice(foods);
alert(`I would like ${fruit}, please`);
alert(`Here you go:  ${fruit}`);
alert(`Delicious ! May I have another?`);


let remaining = remove(foods,fruit);
alert(`I'm sorry, we are all out. We have ${remaining.length} other foods left`)
 
  return (
    <div className="App">

    </div>
  );
}

export default App;
