import React, { Component } from 'react';

class Process extends Component {
    constructor(props){
        super(props);
        this.state = {
            process: [
                {
                    id: 1,
                    step: '01',
                    title: 'Robotics Curriculum',
                    text: 'Hands-on robot design and building. Builds STEM skills and creativity.',
                    extraName: 'bg-1',
                },
                {
                    id: 2,
                    step: '02',
                    title: 'Robotics Workshop',
                    text: 'Hands-on learning for better understanding. Encourages innovation and problem-solving.',
                    extraName: 'bg-2',
                },
                {
                    id: 3,
                    step: '03',
                    title: 'Robotics Laboratory',
                    text: 'Practical application of robotics knowledge. Fosters hands-on learning and innovation.',
                    extraName: 'bg-3',
                },
                {
                    id: 4,
                    step: '04',
                    title: 'Get Certificate',
                    text: 'Receive a certificate for your achievements.',
                    extraName: 'bg-1',
                }
            ]
        }
        
    }
    render() {
        return (
            <section className="work-process-section">
                <div className="container">
                    <div className="row mb-40 justify-content-between">
                        <div className="col-xl-5">
                            <div className="section-heading text-center text-lg-start mb-4 mb-xl-0">
                             
                                <h2 className="font-lg">School Program</h2>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <p className="text-center text-lg-start">Learning robotics in schools fosters critical thinking and problem-solving skills while engaging students in STEM fields, preparing them for a technology-driven future and potential careers in robotics and automation.</p>
                        </div>
                    </div>
            
                    <div className="row">
                        {
                        this.state.process.map((data,i) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={data.id}>
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
            </section>
            
       
     
        );
    }
}

export default Process;
