import React from 'react';
import temperature from '../assets/images/sensors/temperature.jpg';
import co2 from '../assets/images/sensors/co2.jpg';

const Performance = ({isCollapsed}) => (
    <section id="performance" className={`section ${isCollapsed ? 'collapsed' : 'expanded'}`}>
    <div>
      <h2>Sensors and Monitoring</h2>
      <div className="image-container">
      <img src={temperature} alt="Indoor vs Outdoor Temperature 2018" />
      <p className="image-caption">Figure 3. Indoor vs Outdoor Temperature 2018 - Intelligent Workplace (CMU).</p>
    </div>

    <div className="image-container">
      <img src={co2} alt="CO₂ Readings 2018" />
      <p className="image-caption">Figure 4. CO₂ Readings 2018 - Intelligent Workplace (CMU).</p>
    </div>
    </div>
    </section>
);

export default Performance;
