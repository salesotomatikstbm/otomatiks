import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCogs, FaPeopleArrows, FaFlask } from 'react-icons/fa';

const RoboticsKit = () => {
  return (
    <section className="robotics-kit py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className=" mb-3">Why Robotics for Kids</h2>
          <p>
            Discover the benefits of robotics education for children and how it fosters essential skills for their future.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow rounded-lg">
              <div className="card-body d-flex flex-column align-items-center">
                <FaCogs size={60} className="text-primary mb-3" />
                <h5 className="card-title">Problem-Solving Skills</h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut delectus labore quisquam eius, neque odio? Debitis aspernatur, eos aut modi provident, quo nesciunt exercitationem odio voluptatem doloribus reprehenderit quaerat.
                
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow rounded-lg">
              <div className="card-body d-flex flex-column align-items-center">
                <FaPeopleArrows size={60} className="text-primary mb-3" />
                <h5 className="card-title">Teamwork and Collaboration</h5>
                <p className="card-text">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea beatae in, tenetur nostrum omnis libero, porro fuga eius aperiam, facere dolorum alias dolor nobis explicabo labore. Vero doloremque consequuntur optio!
               
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow rounded-lg">
              <div className="card-body d-flex flex-column align-items-center">
                <FaFlask size={60} className="text-primary mb-3" />
                <h5 className="card-title">STEM Skills Development</h5>
                <p className="card-text">
                 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis exercitationem consectetur, culpa expedita ad, ab corrupti ea, dolorum ipsam iusto at. Enim at sed reprehenderit consequuntur inventore repudiandae placeat.
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsKit;
