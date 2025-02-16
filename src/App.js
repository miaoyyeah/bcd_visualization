import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/Home';
import HVAC from './components/HVAC';
import Lighting from './components/Lighting';
import SystemPerformance from './components/Performance';
import IoT from './components/IoT';
import './App.css';

const NavBar = ({ isCollapsed, toggleSidebar }) => (
  <div className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
    <button onClick={toggleSidebar} className="toggle-button">
      {isCollapsed ? '☰' : '×'}
    </button>
    {!isCollapsed && (
      <div>
        <h1>Intelligent Workplace</h1>
        <nav>
          <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#hvac">HVAC System</a></li>
          <li><a href="#lighting">Lighting System</a></li>
          <li><a href="#performance">Sensors and Monitoring</a></li>
          <li><a href="#iot">IoT Integration and Control</a></li>
          </ul>
        </nav>
      </div>
    )}
  </div>
);

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <NavBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Home isCollapsed={isCollapsed}/>
        <HVAC isCollapsed={isCollapsed} />
        <Lighting isCollapsed={isCollapsed}/>
        <SystemPerformance isCollapsed={isCollapsed}/>
        <IoT isCollapsed={isCollapsed}/>
      </div>
    </Router>
  );
};

export default App;