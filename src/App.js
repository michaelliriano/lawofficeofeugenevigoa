import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PageWrapper from './Components/PageWrapper';
import Home from './Components/Home';
import Service from './Components/Service';

function App() {
  return (
    <Router>
      <div className='App'>
        <PageWrapper />
      </div>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Service} />
    </Router>
  );
}

export default App;
