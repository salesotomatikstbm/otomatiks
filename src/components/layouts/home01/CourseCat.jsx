import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseCat01 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: [
                {
                    id: 1,
                    title: 'Robotics Courses',
                    img: 'assets/images/icon/icon1.png',
                    extraClassName: 'bg-1',
                },
                {
                    id: 2,
                    title: 'School Program',
                    img: 'assets/images/icon/icon2.png',
                    extraClassName: 'bg-2',
                },
                {
                    id: 3,
                    title: 'Robotics Workshops',
                    img: 'assets/images/icon/icon3.png',
                    extraClassName: 'bg-3',
                },
                {
                    id: 4,
                    title: 'Robotics Laboratory',
                    img: 'assets/images/icon/icon4.png',
                    extraClassName: 'bg-4',
                },
                {
                    id: 5,
                    title: 'Robotics Competitions',
                    img: 'assets/images/icon/icon5.png',
                    extraClassName: 'bg-5',
                },
            ]
        }
    }

    render() {
        return (
            <section className="course-category-3 section-padding">
                <div className="container">
                    <div className="row mb-70 justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-heading text-center">
                                <h2 className="font-lg">Our Offerings</h2>
                                <p>Our robotics offerings encompass a wide range of courses, from introductory programs for beginners to advanced courses that delve into cutting-edge technologies and applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            this.state.category.map((data, i) => (
                                <div className="col-xl col-lg-4 col-sm-6 mb-4" key={data.id}>
                                    <div className={`single-course-category style-3 ${data.extraClassName} d-flex flex-column h-100`}> 
                                        <div className="course-cat-icon">
                                            <img src={data.img} alt="" className="img-fluid"/>
                                        </div>

                                        <div className="course-cat-content mt-auto">
                                            <h4 className="course-cat-title">
                                                <Link to="#">{data.title}</Link>
                                            </h4>
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

export default CourseCat01;
