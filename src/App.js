import React from 'react';
import logo from './logo.svg';
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
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Know />
      <Latest/>
      <Explore />
      <Photogeek />
      <Bloggers/>
      <Podcast />
      <Startups />
      <Community />
      <DevNotes />
      <Footer />
    </div>
  );
}

export default App;
