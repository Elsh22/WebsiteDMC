import React, { useState } from 'react';
import CountUp from 'react-countup';
import Trigger from 'react-scroll-trigger';
import './InfoSectionStyles.css'

const InfoSection = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Trigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
      <div className="info-section">
        <div className="info-column">
          <h3>
            {visible ? <CountUp end={600} duration={2} /> : 0}
          </h3>
          <p>Black Males Helped in Graduating</p>
        </div>
        <div className="info-column">
          <h3>
            {visible ? <CountUp end={89.9} decimals={1} duration={2} /> : 0}
          </h3>
          <p>Retention Rate in the African American Male Initiative</p>
        </div>
        <div className="info-column">
          <h3>
            {visible ? <CountUp end={2.87} decimals={2} duration={2} /> : 0}
          </h3>
          <p>Average GPA in the African American Male Initiative</p>
        </div>
      </div>
    </Trigger>
  );
};

export default InfoSection;
