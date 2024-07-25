import React, { useState } from 'react';

const OurJourney = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="our-journey section-padding">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Our Journey</h2>
          <p>A brief history of our milestones and achievements.</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={toggleCollapse}
            aria-expanded={isOpen}
            aria-controls="timelineContent"
          >
            {isOpen ? 'Hide Timeline' : 'Show Timeline'}
          </button>
        </div>
        <div className={`collapse ${isOpen ? 'show' : ''}`} id="timelineContent">
          <div className="position-relative">
            <div className="row">
              <div className="col-12">
                <div className="position-relative">
                  <div className="timeline">
                    <div className="timeline-item position-relative mb-4">
                      <div className="timeline-icon position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-flag"></i>
                      </div>
                      <div className="timeline-content ms-auto me-3 p-4 bg-light rounded shadow-sm">
                        <h4 className="mb-1">2024</h4>
                        <p>Started our journey with the launch of our first product.</p>
                      </div>
                    </div>
                    <div className="timeline-item position-relative mb-4">
                      <div className="timeline-icon position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-flag"></i>
                      </div>
                      <div className="timeline-content ms-auto me-3 p-4 bg-light rounded shadow-sm">
                        <h4 className="mb-1">2023</h4>
                        <p>Expanded our team and moved to a new office.</p>
                      </div>
                    </div>
                    <div className="timeline-item position-relative mb-4">
                      <div className="timeline-icon position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-flag"></i>
                      </div>
                      <div className="timeline-content ms-auto me-3 p-4 bg-light rounded shadow-sm">
                        <h4 className="mb-1">2022</h4>
                        <p>Reached 10,000 customers worldwide.</p>
                      </div>
                    </div>
                    <div className="timeline-item position-relative mb-4">
                      <div className="timeline-icon position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-flag"></i>
                      </div>
                      <div className="timeline-content ms-auto me-3 p-4 bg-light rounded shadow-sm">
                        <h4 className="mb-1">2021</h4>
                        <p>Launched our second product, receiving global recognition.</p>
                      </div>
                    </div>
                    <div className="timeline-item position-relative mb-4">
                      <div className="timeline-icon position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-flag"></i>
                      </div>
                      <div className="timeline-content ms-auto me-3 p-4 bg-light rounded shadow-sm">
                        <h4 className="mb-1">2020</h4>
                        <p>Opened our first international office in Europe.</p>
                      </div>
                    </div>
                  </div>
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
