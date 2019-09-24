import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Props from './components/Props'
import State from './components/State'
import Destructure from './components/Destructuring'
import FunctionClick from './components/EventHandler'
import EventHandler from './components/EventHandler';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet></Greet>
      <Welcome/>

      <Props name = "john">
        <p> This is children Props</p>
      </Props>
      <Props name = "doe">
        <button>Action</button>
      </Props>

      <State>
        <button>Change the state</button>
      </State> */}

      {/* <Destructure name = "chris evans" nickName = "Captain America"></Destructure> */}
      {/* <EventHandler /> */}
        {/* <ClassClick /> */}
        <EventBind />
        {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
