import React from 'react';
import buildingImage from '../assets/images/building.jpg';
import soaIcon from '../assets/images/soaIcon.svg';

const Home = ({ isCollapsed }) => (
  <section id="home" className={`section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
    <svg
          enableBackground="new 0 0 350 95.2"
          version="1.1"
          viewBox="0 0 350 95.2"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          width="300px"
        >
          <path
            d="m334.1 93.2v-11.3h14.6v-1.5h-14.6v-11.4h15.6v-1.5h-17.5v27.3h17.8v-1.5h-15.9zm-13.6-10.8c1.4-0.7 2.5-1.6 3.3-2.8s1.1-2.6 1.1-4.1c0-1.6-0.4-3-1.1-4.2-0.8-1.2-1.9-2.1-3.3-2.8s-3.1-1-5.1-1h-9.7v27.3h1.9v-11.4h7.8c0.6 0 1.1 0 1.6-0.1l7.1 11.5h2.2l-7.4-11.8c0.6-0.2 1.1-0.4 1.6-0.6m-5.2-0.6h-7.7v-12.8h7.7c1.6 0 3 0.3 4.1 0.8 1.2 0.5 2 1.3 2.6 2.2 0.6 1 0.9 2.1 0.9 3.4s-0.3 2.4-0.9 3.3-1.5 1.7-2.6 2.2c-1.1 0.6-2.5 0.9-4.1 0.9m-20.2 3.7c0 1.6-0.4 3-1.2 4.2s-2 2.2-3.4 2.9c-1.5 0.7-3.1 1.1-5 1.1s-3.6-0.4-5-1.1c-1.5-0.7-2.6-1.7-3.4-2.9s-1.2-2.6-1.2-4.2v-18h-1.9v18.1c0 1.8 0.5 3.5 1.5 5s2.4 2.6 4.1 3.4 3.7 1.3 6 1.3 4.3-0.4 6-1.3c1.7-0.8 3.1-2 4.1-3.4 1-1.5 1.5-3.1 1.5-5v-18.1h-1.9v18zm-49.8-16.5h10v25.7h1.9v-25.7h10v-1.5h-22v1.5zm-22.8 1.2c1.7-1 3.6-1.4 5.7-1.4 1.4 0 2.7 0.2 3.9 0.6s2.2 1 3.1 1.7 1.6 1.5 2.2 2.3c0.6 0.9 0.9 1.8 1.1 2.7h2c-0.2-1.1-0.7-2.2-1.3-3.3s-1.5-2-2.5-2.9c-1-0.8-2.3-1.5-3.7-2s-3-0.8-4.7-0.8c-2.6 0-4.9 0.6-6.9 1.7-2 1.2-3.6 2.8-4.7 4.9s-1.7 4.6-1.7 7.4 0.6 5.3 1.7 7.4 2.7 3.7 4.7 4.9 4.3 1.7 6.9 1.7c1.8 0 3.3-0.3 4.7-0.8s2.6-1.2 3.7-2c1-0.9 1.9-1.8 2.5-2.9s1.1-2.1 1.3-3.2h-2c-0.2 0.9-0.6 1.8-1.1 2.7-0.6 0.9-1.3 1.7-2.2 2.3-0.9 0.7-1.9 1.2-3.1 1.7-1.2 0.4-2.5 0.6-3.9 0.6-2.1 0-4-0.5-5.7-1.4s-3.1-2.3-4.2-4.2c-1-1.8-1.6-4.1-1.6-6.8s0.5-4.9 1.6-6.8c1.1-1.8 2.5-3.2 4.2-4.1m-29.1 11.7h14.6v-1.5h-14.6v-11.4h15.6v-1.5h-17.5v27.3h17.9v-1.5h-15.9v-11.4zm-30.5-12.9h10v25.7h1.9v-25.7h10v-1.5h-22v1.5zm-8.4 25.8h1.9v-27.3h-1.9v27.3zm-10.6-14.5h-18.9v-12.8h-2v27.3h1.9v-12.9h18.9v12.9h1.9v-27.3h-1.9v12.8zm-45.7-10.1c1.7-1 3.6-1.4 5.7-1.4 1.4 0 2.7 0.2 3.9 0.6s2.2 1 3.1 1.7 1.6 1.5 2.2 2.3c0.6 0.9 0.9 1.8 1.1 2.7h2c-0.2-1.1-0.7-2.2-1.3-3.3s-1.5-2-2.5-2.9c-1-0.8-2.3-1.5-3.7-2s-3-0.8-4.7-0.8c-2.6 0-4.9 0.6-6.9 1.7-2 1.2-3.6 2.8-4.7 4.9s-1.7 4.6-1.7 7.4 0.6 5.3 1.7 7.4 2.7 3.7 4.7 4.9 4.3 1.7 6.9 1.7c1.8 0 3.3-0.3 4.7-0.8s2.6-1.2 3.7-2c1-0.9 1.9-1.8 2.5-2.9s1.1-2.1 1.3-3.2h-2c-0.2 0.9-0.6 1.8-1.1 2.7-0.6 0.9-1.3 1.7-2.2 2.3-0.9 0.7-1.9 1.2-3.1 1.7-1.2 0.4-2.5 0.6-3.9 0.6-2.1 0-4-0.5-5.7-1.4s-3.1-2.3-4.2-4.2c-1-1.8-1.6-4.1-1.6-6.8s0.5-4.9 1.6-6.8c1.1-1.8 2.5-3.2 4.2-4.1m-17.7 12.2c1.4-0.7 2.5-1.6 3.3-2.8s1.1-2.6 1.1-4.1c0-1.6-0.4-3-1.1-4.2-0.8-1.2-1.9-2.1-3.3-2.8s-3.1-1-5.1-1h-9.7v27.3h1.9v-11.4h7.8c0.6 0 1.1 0 1.6-0.1l7.1 11.5h2.2l-7.4-11.8c0.6-0.2 1.1-0.4 1.6-0.6m-5.1-0.6h-7.7v-12.8h7.7c1.6 0 3 0.3 4.1 0.8 1.2 0.5 2 1.3 2.6 2.2 0.6 1 0.9 2.1 0.9 3.4s-0.3 2.4-0.9 3.3-1.5 1.7-2.6 2.2c-1.1 0.6-2.5 0.9-4.1 0.9m-28.6-14.3-11.4 27.3h2l3.6-8.8h13.7l3.6 8.7h2l-11.3-27.2h-2.2zm-5.1 17 6.1-14.9h0.2l6 14.9h-12.3zm-29.4-2.2h-12.3v1.5h33.9v-1.5h-21.6zm157-21.1v-27.3h-1.9v24.3h-0.2l-20-24.3h-1.9v27.3h1.9v-24.2h0.2l20 24.2h1.9zm-37.4-1.4c2-1.2 3.6-2.8 4.7-4.9s1.7-4.6 1.7-7.4-0.6-5.3-1.7-7.4-2.7-3.7-4.7-4.9-4.3-1.7-6.9-1.7-4.9 0.6-6.9 1.8-3.6 2.8-4.7 4.9-1.7 4.5-1.7 7.4c0 2.8 0.6 5.3 1.7 7.4s2.7 3.7 4.7 4.9 4.3 1.8 6.9 1.8c2.6-0.1 4.9-0.7 6.9-1.9m-16.9-5.7c-1-1.9-1.4-4-1.4-6.6 0-2.5 0.5-4.7 1.5-6.6s2.3-3.3 4-4.3 3.7-1.5 5.9-1.5 4.2 0.5 5.9 1.5 3.1 2.5 4 4.3c1 1.9 1.5 4 1.5 6.6 0 2.5-0.5 4.7-1.5 6.6s-2.3 3.3-4 4.3-3.7 1.5-5.9 1.5-4.2-0.5-5.9-1.5c-1.8-1-3.1-2.4-4.1-4.3m-7.1 5.6h-15.4v-25.8h-1.9v27.3h17.3v-1.5zm-41.1-25.8v27.3h17.2v-1.5h-15.3v-25.8h-1.9zm-7.5 1.6v-1.5h-17.5v27.3h17.9v-1.5h-16v-11.5h14.6v-1.5h-14.6v-11.3h15.6zm-52.9 2.4h0.2l11.4 23.3h1.8l11.4-23.3h0.2v23.3h1.8v-27.3h-2.2l-12.1 24.9h-0.2l-12.1-24.9h-2.1v27.3h1.8v-23.3zm202.8-11.8h-15.9v-11.3h14.6v-1.5h-14.6v-11.4h15.6v-1.5h-17.5v27.3h17.9v-1.6zm-28.5 1.5h1.9v-27.2h-1.9v27.2zm-26.7-1.3c2 1.2 4.4 1.7 7.1 1.7 2.4 0 4.5-0.5 6.4-1.4s3.3-2.3 4.4-4 1.6-3.8 1.6-6.2v-1.5h-11.9v1.5h10c0 2-0.4 3.8-1.3 5.2-0.9 1.5-2.1 2.7-3.7 3.5s-3.4 1.2-5.5 1.2c-2.3 0-4.3-0.5-6.1-1.5-1.7-1-3.1-2.5-4-4.3-1-1.9-1.4-4.1-1.4-6.6s0.5-4.7 1.4-6.6c1-1.9 2.3-3.3 4-4.3s3.7-1.5 5.9-1.5c1.5 0 2.8 0.2 3.9 0.6 1.2 0.4 2.2 1 3.1 1.7s1.6 1.5 2.2 2.3c0.6 0.9 1 1.8 1.2 2.7h2c-0.2-1.1-0.7-2.2-1.3-3.2-0.6-1.1-1.5-2-2.5-2.9s-2.3-1.5-3.7-2-3-0.8-4.8-0.8c-2 0-3.8 0.3-5.4 1s-3 1.6-4.2 2.8-2.1 2.7-2.7 4.4-1 3.6-1 5.8c0 2.8 0.6 5.3 1.7 7.4 1 2.2 2.5 3.8 4.6 5m-11.9-0.2h-15.9v-11.3h14.6v-1.5h-14.6v-11.4h15.6v-1.5h-17.5v27.3h17.9v-1.6zm-48.6-22.7h0.2l20 24.2h1.9v-27.2h-1.9v24.3h-0.2l-20-24.3h-1.9v27.3h1.9v-24.3zm-26.5 12.8h7.8c0.6 0 1.1 0 1.6-0.1l7.1 11.5h2.2l-7.4-11.8c0.6-0.2 1.1-0.3 1.6-0.6 1.4-0.7 2.5-1.6 3.3-2.8s1.2-2.6 1.2-4.1c0-1.6-0.4-3-1.2-4.2s-1.9-2.1-3.3-2.8-3.1-1-5.1-1h-9.7v27.3h1.9v-11.4zm7.7-14.3c1.6 0 3 0.3 4.1 0.8 1.2 0.5 2.1 1.3 2.7 2.3s0.9 2.1 0.9 3.4-0.3 2.4-0.9 3.3-1.5 1.7-2.6 2.2-2.5 0.8-4.1 0.8h-7.8v-12.8h7.7zm-34.3 17h13.7l3.6 8.7h2l-11.4-27.2h-2.2l-11.3 27.2h2l3.6-8.7zm6.8-16.4h0.2l6.1 14.9h-12.4l6.1-14.9zm-35.2 23.8c2 1.2 4.3 1.7 6.9 1.7 1.8 0 3.3-0.3 4.7-0.8s2.6-1.2 3.7-2c1-0.9 1.9-1.8 2.5-2.9s1.1-2.1 1.3-3.2h-2c-0.2 0.9-0.6 1.8-1.2 2.7s-1.3 1.7-2.2 2.3c-0.9 0.7-1.9 1.2-3.1 1.7-1.2 0.4-2.5 0.6-3.9 0.6-2.1 0-4-0.5-5.7-1.4s-3.1-2.3-4.2-4.2c-0.8-1.8-1.3-4.1-1.3-6.8s0.5-4.9 1.5-6.8c1-1.8 2.4-3.2 4.2-4.2 1.7-1 3.6-1.4 5.7-1.4 1.4 0 2.7 0.2 3.9 0.6s2.2 1 3.1 1.7 1.6 1.5 2.2 2.3c0.6 0.9 0.9 1.8 1.2 2.7h2c-0.2-1.1-0.7-2.2-1.3-3.3s-1.5-2-2.5-2.9c-1-0.8-2.3-1.5-3.7-2s-3-0.8-4.7-0.8c-2.8 0.1-5.1 0.7-7.1 1.8-2 1.2-3.6 2.8-4.7 4.9s-1.7 4.6-1.7 7.4 0.6 5.3 1.7 7.4 2.7 3.7 4.7 4.9"
            clipRule="evenodd"
            fill="gray"
            fillRule="evenodd"
          />
        </svg>
    <h2>The Intelligent Workplace — A Living Laboratory</h2>
    <img src={soaIcon} className="SOA-svg" alt="SOA Logo" />
    <div className="image-container">
      <img src={buildingImage} style={{width: "100%"}} alt="Carnegie Mellon University, Intelligent Workplace" />
      <p className="image-caption">Figure 1. Carnegie Mellon University, Intelligent Workplace.</p>
    </div>
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
