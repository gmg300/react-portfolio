import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Connect from './pages/Connect';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper>
        <Route exact path="/" component={Profile} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/connect" component={Connect} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
