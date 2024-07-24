import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: 'flaticon-teacher',
                    title: 'Expert Instructors',
                    text: 'Learn from industry experts in the field of robotics and automation.'
                },
                {
                    id: 2,
                    icon: 'flaticon-layer',
                    title: 'Hands-On Development',
                    text: 'Engage in practical, hands-on projects to develop your robotics skills.'
                },
                {
                    id: 3,
                    icon: 'flaticon-video-camera',
                    title: 'Interactive Online Learning',
                    text: 'Access interactive lessons and tutorials to learn robotics from anywhere.'
                },
                {
                    id: 4,
                    icon: 'flaticon-lifesaver',
                    title: 'Lifetime Support',
                    text: 'Receive continuous support and resources for your robotics journey.'
                }
            ]
        }
    }

    render() {
        return (
            <section className="features-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="section-heading mb-50 ">
                                <h2 className="font-lg">Transform Your Life</h2>
                                <p>Discover Your Perfect Program In Our Courses.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {this.state.features.map((data) => (
                            <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6" key={data.id}>
                                <div className="feature-item feature-style-top hover-shadow rounded border-0">
                                    <div className="feature-icon">
                                        <i className={data.icon}></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>{data.title}</h4>
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
