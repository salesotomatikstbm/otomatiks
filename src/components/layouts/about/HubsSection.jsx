import React from 'react';

const districts = [
  'Chennai',
  'Kallakurichi',
  'Coimbatore',
  'Madurai',
  'Salem',
  'Tiruchirappalli',
  'Erode',
  'Dindigul',
  'Tirunelveli',
  'Vellore'
];

const HubsSection = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Hubs</h2>
      <div className="text-center">
        {districts.map((district, index) => (
          <React.Fragment key={index}>
            <span className="mx-2">{district}</span>
            {index < districts.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HubsSection;
