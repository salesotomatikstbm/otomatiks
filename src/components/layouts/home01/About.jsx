import React, { Component } from 'react';


class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            process: [
                {
                    id: 1,
                    step: '01',
                    title: 'Beginner',
                    text: 'Learn basic electronics and robot navigation with the Scoobot kit.',
                    extraName: 'bg-1',
                },
                {
                    id: 2,
                    step: '02',
                    title: 'Advanced',
                    text: 'Master programming concepts and develop custom codes.',
                    extraName: 'bg-2',
                },
                {
                    id: 3,
                    step: '03',
                    title: 'Expert',
                    text: 'Build and code Android apps to control your robot.',
                    extraName: 'bg-3',
                },
                {
                    id: 4,
                    step: '04',
                    title: 'Earn Your Robotics Certificate',
                    text: 'Complete the course to receive your robotics certificate.',
                    extraName: 'bg-1',
                }
            ],
        }
        
        
    }


    render() {
        return (
        <section className="work-process section-padding">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-xl-8">
                        <div className="section-heading ">
                            <h2 className="font-lg">Robotics Courses</h2>
                            <p>Robotics courses provide students with a strong foundation in robot design, programming, and real-world applications, preparing them for careers in automation and emerging technologies.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-xl-7 pe-xl-5 col-lg-12">
                        <div className="row">
                            {
                                  this.state.process.map((data,i) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={data.id}>
                                        <div className="step-item ">
                                            <div className={`step-number ${data.extraName}`}>{data.step}</div>
                                            <div className="step-text">
                                                <h5>{data.title}</h5>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>

                                  ))
                            }
                            
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="video-section mt-3 mt-xl-0">
                            <div className="video-content">
                                <img src="/assets/images/bg/office01.jpg" alt="" className="img-fluid"/>
                                <a href="https://youtu.be/oQgAF359sh8?si=molGvTNLMYHgZwe7" data-lightbox="https://youtu.be/3nQNiWdeH2Q" className="video-icon video-popup">
                                    <i className="fa fa-play"></i>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        );
    }
}

export default About;
