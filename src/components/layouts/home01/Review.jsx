import React, { Component } from 'react';
import Slider from "react-slick";
import { HomeTestimonial } from '../../../utils/script';

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: 'assets/images/clients/testimonial-avata-01.jpg',
                    text: 'The robotics course was super fun and educational. I learned how to build and program my own robot!',
                    name: 'Arjun',
                    designation: '6th Grade Student',
                },
                {
                    id: 2,
                    img: 'assets/images/clients/testimonial-avata-02.jpg',
                    text: 'I loved every part of the robotics class. It made me more interested in science and technology.',
                    name: 'Priya',
                    designation: '7th Grade Student',
                },
                {
                    id: 3,
                    img: 'assets/images/clients/testimonial-avata-03.jpg',
                    text: 'Building robots was amazing! The instructors were very helpful and I made new friends too.',
                    name: 'Rahul',
                    designation: '8th Grade Student',
                },
                {
                    id: 4,
                    img: 'assets/images/clients/testimonial-avata-04.jpg',
                    text: 'This robotics course was the best. I can’t wait to join the next level and learn more cool stuff!',
                    name: 'Sneha',
                    designation: '6th Grade Student',
                },
                {
                    id: 5,
                    img: 'assets/images/clients/testimonial-avata-03.jpg',
                    text: 'The projects were really fun and I learned a lot about programming and electronics very helpful and I made new friends too.',
                    name: 'Sharma',
                    designation: '7th Grade Student',
                },
            ]
        }
        
    }

    render() {
        
        return (

            <section className="testimonial-4 section-padding bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading text-center mb-50">
                                <h2 className="font-lg">Our Students Says</h2>
                                <p>Discover Your Perfect Program In Our Courses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-12">
                            <div className="testimonials-slides">
                                <Slider {...HomeTestimonial} >
                                {
                                    this.state.testimonial.map((data,i) => (
                                        <div class="testimonial-item" key={data.id}>
                                            <div class="testimonial-inner">
                                                <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
                                                
                                                    <div class="testimonial-text mb-30">
                                                        {data.text}
                                                    </div>

                                                    <div class="client-info d-flex align-items-center">
                                                        <div class="client-img">
                                                            <img src={data.img} alt="" class="img-fluid"/>
                                                        </div>
                                                        <div class="testimonial-author">
                                                            <h4>{data.name}</h4>
                                                            <span class="meta">{data.desigantion}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                                    
                                </Slider>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
        );
    }
}

export default Review;
