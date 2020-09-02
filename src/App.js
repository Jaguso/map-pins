import React from 'react';
import logo from './logo.svg';
import Maps from './components/maps/Maps';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Route exact path="/map" component={Maps} />
      </BrowserRouter>
    </div>
  );
}

export default App;
