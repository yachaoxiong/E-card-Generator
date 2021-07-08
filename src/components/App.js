import React from 'react';
import './App.css';
import Home from './Home';
import ECard from './ECard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/ECard'>
            <ECard />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
