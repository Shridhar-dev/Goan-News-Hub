import React from 'react';
import './App.css';
import Photogeek from "./Code/Photogeek.js"
import Startups from './Code/Startups';
import Bloggers from './Code/Bloggers';
import Podcast from './Code/Podcast';
import MemeKing from './Code/MemeKing';
import Home from './Code/Home';
import {Route , Switch} from 'react-router-dom';
import ComingSoon from './Code/comingsoon';
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
