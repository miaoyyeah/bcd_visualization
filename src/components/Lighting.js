import React from 'react';
import lightingInstallation from '../assets/images/lighting/lighting-installation.jpg';
import lightingCirculation from '../assets/images/lighting/lighting-circulation.jpg';

const Lighting = ({ isCollapsed }) => (
  <section id="lighting" className={`section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
    <h2>Lighting System</h2>
    
    <h3>Static Design Data</h3>
    <p>
      The lighting system in the Intelligent Workplace was developed through a partnership between Siemens, CMU, Osram/Sylvania, and Encelium. This collaboration led to the replacement of ballasts, lamps, and the installation of a central lighting control system.
    </p>
    <ul>
      <li><strong>Manufacturer:</strong> Siemens Corporation, Osram/Sylvania</li>
      <li><strong>System Components:</strong> Integrated LED track lights, daylight sensors, occupancy sensors, dimming ballasts</li>
      <li><strong>Physical Location:</strong> Installed throughout the 7000 sq ft Intelligent Workplace</li>
      <li><strong>System Configuration:</strong> Encelium lighting control system integrated with Apogee for full automation and zone control</li>
    </ul>

    <div className="image-container">
      <img src={lightingInstallation} alt="Lighting Floor Plan" />
      <p className="image-caption">Figure 7. Floor Plan of the Lighting Installation - Intelligent Workplace (CMU).</p>
    </div>

    <h3>Lighting Control Strategies for Circulation Areas</h3>
    <p>
      The circulation area lighting is controlled through the following two strategies:
    </p>
    <ul>
      <li>
        **Manual Switches at Entrances:** Two hard-wired switches (marked with purple circles) are placed at each main entrance. When users enter the office, they can manually turn on circulation lights for a short duration. These lights will automatically turn off based on a timer, personal control software, or touchscreen settings.
      </li>
      <li>
        **Nighttime Occupancy-Based Activation:** When office lights turn off at night (based on scheduling, occupancy sensors, or manual commands), circulation lights will automatically turn on for a short period, ensuring safe exit from the workplace. This timer-based activation is managed through the Apogee Insight software, utilizing the Bacnet Interface for full system integration.
      </li>
    </ul>

    <h3>Energy Savings in Circulation Areas</h3>
    <p>
      Due to the ability of daylight to provide sufficient illumination for safe circulation, lighting energy use for circulation areas in the Intelligent Workplace is mostly limited to nighttime hours. The implementation of responsive controls has resulted in:
    </p>
    <ul>
      <li>Over **50% reduction** in circulation lighting energy consumption.</li>
      <li>Automated controls that reduce unnecessary energy use while maintaining occupant safety.</li>
      <li>Integration with Bacnet Interface for a seamless and adaptive lighting environment.</li>
    </ul>

    <div className="image-container">
      <img src={lightingCirculation} alt="Lighting Floor Plan" />
      <p className="image-caption">Figure 8. Floor Plan of the Lighting Circulation - Intelligent Workplace (CMU).</p>
    </div>

  </section>
);

export default Lighting;
