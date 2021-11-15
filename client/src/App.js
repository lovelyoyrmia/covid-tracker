import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About, Contact, PageNotFound } from './pages'
import Home from './Home'
import './App.css'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
