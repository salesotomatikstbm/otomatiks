import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [
                {
                    id: 1,
                    videoUrl: 'https://www.youtube.com/embed/8j9k3Nw4jpo', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 2,
                    videoUrl: 'https://www.youtube.com/embed/8j9k3Nw4jpo', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 3,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 4,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 5,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 6,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 7,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 8,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 9,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                },
                {
                    id: 10,
                    videoUrl: 'https://www.youtube.com/embed/2GOwZnxwNeE', // Corrected YouTube embed URL
                    title: 'Otomatiks Event',
                }
            ]
        }
    }

    render() {
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <section className="team section-padding">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-lg-8 col-xl-8">
                            <div className="section-heading text-center text-lg-start">
                                <h2 className="font-lg">Check Out Our Videos</h2>
                                <p>Robotica event provides opportunity for students to exchange ideas and demonstrate innovative robotic creations.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="text-center text-lg-end">
                                <a href="https://www.youtube.com/@otomatiks5317" target="_blank" className="btn btn-main-outline rounded">All Videos <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>

                      
                            <Slider {...sliderSettings}>
                                {this.state.team.map((data) => (
                                    <div className="team" key={data.id}>
                                    
                                            <iframe
                                                src={data.videoUrl}
                                                title={data.title}
                                                className="img-fluid p-2"
                                                style={{ width: '110%', height: '300px', borderRadius: '25px' }}
                                                allowFullScreen
                                            ></iframe>
                                           
                                    </div>
                                ))}
                            </Slider>
                      
                 
                </div>
            </section>
        );
    }
}

export default Team;
