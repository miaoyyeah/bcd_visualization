import React from 'react';
import temperature from '../assets/images/sensors/04_temperature.png';
import co2 from '../assets/images/sensors/05_co2.png';

const Performance = ({isCollapsed}) => (
    <section id="performance" className={`section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
    <div>
      <h2>Sensors and Monitoring</h2>
      <div className="image-container">
      <img src={temperature} alt="Indoor vs Outdoor Temperature 2018" />
      <p className="image-caption">Figure 9. Indoor vs Outdoor Temperature 2018 - Intelligent Workplace (CMU).</p>
    </div>

    <div className="image-container">
      <img src={co2} alt="CO₂ Readings 2018" />
      <p className="image-caption">Figure 10. CO₂ Readings 2018 - Intelligent Workplace (CMU).</p>
    </div>
    </div>
    </section>
);

export default Performance;
