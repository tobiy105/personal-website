import React from 'react';
import profile from './profile.jpg';
import './App.css';
import SlideDownNav from './components/sildedownnav';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import ContactMe from './components/contactme';
import Footer from './components/footer'; 

function App() {
  return (
    <div className="App">
      <SlideDownNav />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />

    </div>
  );
}

export default App;
