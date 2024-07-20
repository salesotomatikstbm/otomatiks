import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
        <section className="banner-style-4 banner-padding">
            <div class="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <div className="banner-content ">
                            <span className="subheading">Shape Your Child’s Future</span>
                            <h1>Upgrade your learning Skills & Upgrade your life</h1>
                            <p className="mb-40"> Our robotics classes are designed to help you discover the potential of this exciting field with the guidance of our experienced instructors.</p>

                            <div className="btn-container">
                                <Link to="#" className="btn btn-main rounded">Our Courses</Link>
                                <Link to="#" className="btn btn-white rounded ms-2">Get In Touch </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <div className="banner-img-round mt-5 mt-lg-0 ps-5">
                            <img src="assets/images/banner/banner_img.png" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Banner;

