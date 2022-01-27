import React, { Component }  from 'react';

import logo from './logo.svg';
import './App.css';
import Cats from './components/Cats';

function App() {
  return (
    <div className="App">
      <header className="App-header">Cats
      </header>
      <Cats />
    </div>
  );
}

export default App;
