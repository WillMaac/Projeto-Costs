import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/projects";

import Container from "./components/layouts/Container";
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Container customClass='min-heigth'>
        <Route  exact path = '/'>
        <Home />
        </Route>
        <Route   path = '/projects'>
        <Projects/>
        </Route>
        <Route path = '/contact'>
        <Contact/>
        </Route>
        <Route path = '/company'>
        <Company/>
        </Route>
        <Route path = '/newproject'>
        <NewProject/>
        </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
