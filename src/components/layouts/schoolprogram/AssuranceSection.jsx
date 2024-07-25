import React from 'react';


const assurances = [
  {
    title: 'High Quality Standards',
    description: 'We adhere to the highest quality standards to ensure that all our products and services meet and exceed expectations.',
    icon: '✅'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Our top priority is customer satisfaction. We strive to deliver exceptional service and support to ensure your complete satisfaction.',
    icon: '😊'
  },
  {
    title: 'Innovative Solutions',
    description: 'We are committed to innovation, continuously improving and offering cutting-edge solutions to meet the evolving needs of our clients.',
    icon: '💡'
  },
  {
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines and ensure timely delivery of all our products and services without compromising on quality.',
    icon: '⏰'
  },
  {
    title: 'Dedicated Support',
    description: 'Our dedicated support team is available around the clock to assist with any questions or issues, providing prompt and effective solutions.',
    icon: '🛠️'
  }
];

const AssuranceSection = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h2 className="text-lg">Our Assurance</h2>
          <p>
            At Otomatiks, we are committed to providing the highest level of service and support. Here’s what you can expect from us:
          </p>
        </div>
      </div>
      <div className="row">
        {assurances.map((assurance, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="assurance-item d-flex align-items-center p-4 shadow-sm rounded">
              <div className="assurance-icon me-4" style={{ fontSize: '3rem' }}>
                {assurance.icon}
              </div>
              <div>
                <h5 className="assurance-title">{assurance.title}</h5>
                <p className="assurance-description">{assurance.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssuranceSection;
