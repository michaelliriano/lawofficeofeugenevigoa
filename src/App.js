import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PageWrapper from './Components/PageWrapper';
import Home from './Components/Home';
import About from './Components/Eugene';
import Testimonials from './Components/Testimonials';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import LegalService from './Components/legalService';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className='App'>
        <PageWrapper />
      </div>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={LegalService} />
      <Route exact path='/about-me' component={About} />
      <Route exact path='/testimonials' component={Testimonials} />
      <Route exact path='/FAQ' component={FAQ} />
      <Route exact path='/footer' component={Footer} />
      <Route exact path='/contact' component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
