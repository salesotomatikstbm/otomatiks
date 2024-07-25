import React from 'react';

import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

import {Banner, Counter, CourseGrid01,CourseCat01,About,CourseGridPopular, Features,Team,Review,Cta,Process, Team1}  from '../layouts/home01/index';
import { HubsSection } from '../layouts/about';



const HomeOne = () => {
    return (
        <div className="home-page">       
            <HeaderOne/>
                <Banner />
                <Counter />
               
                <CourseCat01 />
                {/* <CourseGrid01 /> */}
                <About />
                <Process />
                {/* <CourseGridPopular /> */}
                <Features />
                <Team1 />
                <Team />
                <HubsSection />
                <Review />
                <Cta />    
            <FooterOne/>  
        </div>
    )
}

export default HomeOne;