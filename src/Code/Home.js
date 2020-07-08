import React from 'react';
import '../App.css';
import Header from "./Header.js"
import Navbar from "./Navbar.js"
import Latest from "./Latest.js"
import Explore from "./Explore.js"
import Know from "./Know.js"
import Footer from "./Footer.js"
import Community from './Community';
import DevNotes from './DevNotes';
import Choose from './Choose';
import CreatorSpotlight from './CreatorSpotlight.js';
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Know />
      <Latest/>
      <Explore />
      <Choose />
      <CreatorSpotlight/>
      <Community />
      <DevNotes />
      <Footer />
    </div>
  );
}
export default Home;
