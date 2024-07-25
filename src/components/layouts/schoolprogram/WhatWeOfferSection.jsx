import React from 'react';

const offerings = [
  {
    title: 'Quality Education',
    description: 'Our curriculum is designed to provide a strong foundation in core subjects, preparing students for future academic success.',
    icon: '📚' // You can replace this with an icon component if preferred
  },
  {
    title: 'Extracurricular Activities',
    description: 'We offer various extracurricular activities to help students develop their interests and skills outside the classroom.',
    icon: '🎨'
  },
  {
    title: 'Modern Facilities',
    description: 'Our state-of-the-art facilities include science labs, libraries, sports arenas, and more to enhance the learning experience.',
    icon: '🏫'
  },
  {
    title: 'Personalized Attention',
    description: 'We focus on individual student needs, offering personalized support and guidance to help each student achieve their potential.',
    icon: '👩‍🏫'
  },
  {
    title: 'Community Engagement',
    description: 'Our programs encourage students to actively participate in community service and develop a sense of social responsibility.',
    icon: '🌍'
  }
];

const WhatWeOfferSection = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h2 className="font-lg">What We Offer</h2>
          <p>
            Discover the range of services and opportunities we provide to ensure a holistic and enriching educational experience.
          </p>
        </div>
      </div>
      <div className="row">
        {offerings.map((offering, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <div className="mb-3" style={{ fontSize: '3rem' }}>
                  {offering.icon}
                </div>
                <h5 className="card-title">{offering.title}</h5>
                <p className="card-text">{offering.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
