import React, { useState } from 'react';

const OurJourney = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const timelineData = [
    { id: 1, year: '2024 A brief history of our milestones and achievements. ', content: 'Started our journey with the launch of our first product.' },
    { id: 2, year: '2023 A brief history of our milestones and achievements.', content: 'Expanded our team and moved to a new office.' },
    { id: 3, year: '2022 A brief history of our milestones and achievements.', content: 'Reached 10,000 customers worldwide.' },
    { id: 4, year: '2021 A brief history of our milestones and achievements.', content: 'Launched our second product, receiving global recognition.' },
    { id: 5, year: '2020 A brief history of our milestones and achievements.', content: 'Opened our first international office in Europe.' },
  ];

  return (
    <section className="our-journey section-padding">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Our Journey</h2>
          <p>A brief history of our milestones and achievements.</p>
        </div>
        <div className="position-relative">
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <div className="timeline">
                  {timelineData.map(item => (
                    <div className="timeline-item position-relative mb-4" key={item.id}>
                      <div className="position-absolute  d-flex align-items-center justify-content-center">
                       
                      </div>
                      <div className="timeline-content ms-auto me-3 p-4  ">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="mb-1" style={{ textDecoration: 'none' }}>{item.year}</h4>
                          <button
                            className="btn btn-link"
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={openItem === item.id}
                            style={{ textDecoration: 'none' }}
                          >
                            {openItem === item.id ? 'Hide' : 'Show'}
                          </button>
                        </div>
                        {openItem === item.id && <p className="mt-2">{item.content}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
