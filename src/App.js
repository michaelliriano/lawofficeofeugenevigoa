import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Eugene } from './Components/Eugene';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Eugene />
    </div>
  );
}

export default App;
