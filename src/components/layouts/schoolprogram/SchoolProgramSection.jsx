import React from 'react';


const SchoolProgramSection = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h2 className="font-lg">Our School Program</h2>
          <p>
            Welcome to our school program section. Here, you'll find detailed information about our educational offerings, including curriculum highlights, extracurricular activities, and more. We are dedicated to providing a comprehensive learning experience tailored to the needs of every student.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Curriculum Overview</h5>
              <p>
                Our curriculum is designed to foster a love for learning and provide students with the skills needed for academic success and personal growth.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Extracurricular Activities</h5>
              <p className="card-text">
                We offer a wide range of extracurricular activities to enhance students' social skills, creativity, and physical fitness.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Community Involvement</h5>
              <p className="card-text">
                Our program encourages students to participate in community service and build a sense of responsibility and empathy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolProgramSection;
