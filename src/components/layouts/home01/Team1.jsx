import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Team1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [
                {
                    id: 1,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg', // Replace with actual image URLs
                    title: 'Otomatiks Event 1',
                },
                {
                    id: 2,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 2',
                },
                {
                    id: 3,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 3',
                },
                {
                    id: 4,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 4',
                },
                {
                    id: 5,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 5',
                },
                {
                    id: 6,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 6',
                },
                {
                    id: 7,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 7',
                },
                {
                    id: 8,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 8',
                },
                {
                    id: 9,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 9',
                },
                {
                    id: 10,
                    imageUrl: 'https://otomatiks.com/wp-content/uploads/2023/05/ERA6666.jpg',
                    title: 'Otomatiks Event 10',
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
                                <h2 className="font-lg">Our Event</h2>
                                <p>Robotica event provides an opportunity for students to exchange ideas and demonstrate innovative robotic creations.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="text-center text-lg-end">
                                <a href="https://www.youtube.com/@otomatiks5317" target="_blank" className="btn btn-main-outline rounded">All Photos <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <Slider {...sliderSettings}>
                        {this.state.team.map((data) => (
                            <div className="team" key={data.id}>
                                <img
                                    src={data.imageUrl}
                                    alt={data.title}
                                    className="img-fluid p-2"
                                    style={{ width: '100%', height: '300px', borderRadius: '25px' }}
                                />
                                <p className="text-center mt-2">{data.title}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Team1;
