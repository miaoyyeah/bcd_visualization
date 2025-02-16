import React from 'react';

const IoT = ({ isCollapsed }) => (
  <section id="iot" className={`section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
    <h2>IoT Integration and Control</h2>
    <p>
      The Intelligent Workplace employs IoT (Internet of Things) technologies to seamlessly connect various building systems, such as HVAC, lighting, shading control, and plug load monitoring.
    </p>

    <h3>openHAB - The Central Controller</h3>
    <p>
      The IW originally deployed a version of openHAB on a Raspberry Pi. This open-source home automation platform serves as the central controller, integrating multiple systems and protocols to provide a unified automation framework.
    </p>
    <ul>
      <li>Centralized control of HVAC, lighting, shading, and environmental sensors.</li>
      <li>Support for multiple communication protocols such as MQTT, Modbus, and KNX.</li>
      <li>Flexible automation rules to optimize energy use and improve indoor environmental quality.</li>
    </ul>
    <p>
      With openHAB, the Intelligent Workplace can dynamically adjust its systems to respond to real-time conditions, improving efficiency and occupant comfort.
    </p>
  </section>
);

export default IoT;
