import React from 'react';
import profile from './profile.jpg';
import './App.css';
import SlideDownNav from './components/sildedownnav';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import ContactMe from './components/contactme';
import Footer from './components/footer';
import Home from './components/home'; 
import GooeyBackground from './components/gooeybackground';
function App() {
  return (
    <div className="App">
      <GooeyBackground />
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
