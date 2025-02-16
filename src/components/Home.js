import React from 'react';

const Home = ({ isCollapsed }) => (
  <section id="home" className={`section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
    <h2>The Intelligent Workplace — A Living Laboratory</h2>
    <p>
      The Intelligent Workplace at Carnegie Mellon University is a 7,000 sq ft living laboratory of component and subsystem innovations and the testing ground for the next generation of building systems integration for sustainability. Developed with leading practitioners and manufacturers of high-performance building systems, the Intelligent Workplace is an ongoing test bed for advances in building enclosure, mechanical, lighting, telecommunications, and interior systems as well as the next generation of building controls to support human health and productivity as well as the highest level of environmental sustainability.
    </p>
    <p>
      The Intelligent Workplace has the highest level of thermal, air, light, and plug load sensors and controllers of any university laboratory, supporting ongoing research on the impacts of grid, climate, and occupancy-based sensor and control networks for energy conservation and environmental quality.
    </p>
    <p>
      The Intelligent Workplace is one of the most sensored and controllable workplaces worldwide, shifting from traditional settings with one control for every 20 occupants to 20 controls for every occupant. With the emergence of wireless sensors and controllers and the Internet of Things (IoT), the IW is a testbed for the engagement of occupants as both sensors and controllers for the improvement of environmental quality and energy conservation.
    </p>
    <h3>Information Technology Enabled Sustainability Test-bed (ITEST)</h3>
    <p>
      The goal of the Information Technology Enabled Sustainability Test-bed (ITEST) is to integrate “state of the art” IT systems as well as sensing, actuating, and controlling technologies to enable effective performance of systems to achieve sustainability in building operations.
    </p>
    <h3>Research and Innovation Areas</h3>
    <p>
      Carnegie Mellon University's Intelligent Workplace has supported almost 20 years of graduate and undergraduate thesis projects, with path-breaking results in each of the following research areas:
    </p>
    <ul>
      <li>Advanced building systems research - developing and testing innovations in integrated mechanical, lighting, enclosure, and interior systems.</li>
      <li>Indoor environmental quality (IEQ) research - testing systems integrations that improve thermal comfort, acoustic quality, visual quality, and air quality.</li>
      <li>Environmental monitoring research - expanding the post-occupancy evaluation toolkits to include quantitative measurements of integrated environmental conditions (POE+M).</li>
      <li>Environmental controls research - demonstrating the potential for building occupants to act as sensors and controllers through innovations in IP addressable building systems for IEQ and energy savings.</li>
      <li>Lab and field-tested advanced software research - developing innovative algorithms and software tools for designing and operating buildings for the highest level of energy conservation and environmental quality, from BIM to BEM.</li>
    </ul>
    <p className="text-note">*Text above provided by Nathan Sawyer</p>
  </section>
);

export default Home;
