import React from 'react';
import profile from './profile.jpg';
import './App.css';
import SlideDownNav from './components/sildedownnav';
import Bio from './components/bio';
import Projects from './components/projects';
import ContactMe from './components/contactme';

function App() {
  return (
    <div className="App">
      <SlideDownNav />
      <header className="App-header">
      <div className="cv-container">
        <div className="profile-section">
            <img src={profile} className="profile" alt="profile" />
            <h1 className="text-2xl font-semibold my-2">Oluwatobi Sobla</h1>
            <p className="text-lg">
              Enthusiastic and hardworking computer programmer skilled in C++, Python, and JavaScript,
              with expertise in software development tools and technologies such as Git and Visual Studio Code.
              Passionate about continuous learning and development.
            </p>
          </div>
        <div className="experience-section">
          <h2>Professional Experience</h2>
          <div className="job">
            <h3>Dunbia | Despatch Admin</h3>
            <p>2021 June 2022 – 19 October 2022</p>
            {/* Add key responsibilities and details */}
          </div>
          <div className="job">
            <h3>Farm Fresh Foods Limited | Food Production</h3>
            <p>June 2019 - Apr 2020</p>
            {/* Add key responsibilities and details */}
          </div>
        </div>
        <div className="volunteering-section">
          <h2>Volunteering</h2>
          <div className="role">
            <h3>Social Secretary of CompSoc</h3>
            <p>2020–2021</p>
            {/* Add details */}
          </div>
          <div className="role">
            <h3>Hall Exec for Oxley Resident</h3>
            <p>2019–2020</p>
            {/* Add details */}
          </div>
        </div>
      </div>
    </header>
    <Bio />
    <Projects />
    <ContactMe />

    </div>
  );
}

export default App;
