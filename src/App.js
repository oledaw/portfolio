import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Skills from './pages/SkillsPage/Skills'
import { Navbar, Timeline } from './components';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/portfolio" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
