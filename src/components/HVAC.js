import React from 'react';
import temperature from '../assets/images/hvac/supply-return-water-temp.png';
import waterSystem from '../assets/images/hvac/thermal-water-system.jpg';
import ventilation from '../assets/images/hvac/ventilation-thermal-air-system.jpg';
import humidity from '../assets/images/hvac/humidity.png';
import electricity from '../assets/images/hvac/electricity.png';

const HVAC = ({ isCollapsed }) => (
  <section id="hvac" className={`section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
    <h2>HVAC System</h2>
    <p>The Intelligent Workplace is a living and lived-in laboratory for testing the performance and life cycle benefits of innovations in enclosure, mechanical, lighting, networking, and interior systems.</p>

    <h3>Heating, Cooling, and Ventilation</h3>
    <p>
      The Intelligent Workplace includes a comprehensive heating system designed to offset façade losses and improve indoor thermal comfort:
    </p>
    <ul>
      <li>A "radiant mullion" heating system utilizing campus steam, with 25 sets of 4 vertical mullions offset inside the windows throughout the facility.</li>
      <li>Eight radiant ceiling panels.</li>
      <li>Six electric resistance task heating panels from the JC Personal Environmental Modules.</li>
      <li>Heating of ventilation air through a SEMCO air handling desiccant unit, utilizing gas heating of preheated outside air.</li>
    </ul>

    <h3>Advanced Control System</h3>
    <p>
      To support research, the existing system was updated with an Apogee Building Automation System (BAS) connected to underfloor PXC controller boxes. This advanced system, with BacNet interfaces, acts as the central controller for heating, cooling, ventilation, lighting, and shading control.
    </p>
    <p>
      An increase in sensor density was also implemented to improve system performance monitoring:
    </p>
    <ul>
      <li>9 additional air temperature, humidity, and CO₂ sensors.</li>
      <li>42 surface temperature sensors on return water piping from mullions, radiant panels, and Coolwave paddle-coils.</li>
      <li>Three differential pressure sensors monitoring the mullion loop, radiant panel loop, and Coolwave loop.</li>
    </ul>


    <h3>Thermal Water Systems</h3>
    <div className="image-container">
      <img src={waterSystem} alt="Thermal Water System Diagram" />
      <p className="image-caption">Figure 1. Thermal Water System Diagram showing key components.</p>
    </div>

    <h3>Ventilation / Thermal Air Systems</h3>
    <div className="image-container">
      <img src={ventilation} alt="Venetilation / Thermal Air System Diagram" />
      <p className="image-caption">Figure 2. Ventilation / Thermal Air System Diagram showing key components.</p>
    </div>

    <h3>Performance Data</h3>
    <div className="image-container">
      <img src={temperature} alt="Supply and Return Water Temperature 2018" />
      <p className="image-caption">Figure 2. Supply and Return Water Temperature 2018 - Intelligent Workplace (CMU).</p>
    </div>

    <div className="image-container">
      <img src={humidity} alt="Indoor vs Outdoor Relative Humidity 2018" />
      <p className="image-caption">Figure 3. Indoor vs Outdoor Relative Humidity 2018 - Intelligent Workplace (CMU).</p>
    </div>

    <div className="image-container">
      <img src={electricity} alt="Electricity Consumption 2018" />
      <p className="image-caption">Figure 4. Electricity Consumption 2018 - Intelligent Workplace (CMU).</p>
    </div>

  </section>
);

export default HVAC;
