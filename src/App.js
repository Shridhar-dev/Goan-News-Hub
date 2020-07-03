import React from 'react';
import './App.css';
import Header from "./Header.js"
import Navbar from "./Navbar.js"
import Latest from "./Latest.js"
import Explore from "./Explore.js"
import Photogeek from "./Photogeek.js"
import Know from "./Know.js"
import Footer from "./Footer.js"
import Startups from './Startups';
import Bloggers from './Bloggers';
import Podcast from './Podcast';
import Community from './Community';
import DevNotes from './DevNotes';
import MemeKing from './MemeKing';
import Choose from './Choose';
import Home from './Home';
import {Route , Switch} from 'react-router-dom';
import ComingSoon from './comingsoon';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/photography" component={Photogeek}/>
        <Route exact path="/podcast" component={Podcast}/>
        <Route exact path="/memes" component={MemeKing}/>
        <Route exact path="/bloggers" component={Bloggers}/>
        <Route exact path="/startups" component={Startups}/>
        <Route exact path="/comingsoon" component={ComingSoon}/>
      </Switch>
      {/*
      <Navbar />
      <Header />
      <Know />
      <Latest/>
      <Explore />
      <Choose />
      <Bloggers/>
      <Podcast />
      <MemeKing />
      <Startups />
      <Community />
      <DevNotes />
      <Footer />
      */}
    </div>
  );
}

export default App;
