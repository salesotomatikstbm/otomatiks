import React from 'react';
import {PageBanner,CourseGrid, RoboticsKit}  from '../layouts/courses/index';

import Layout from '../../common/Layout';
import { HubsSection, Review } from '../layouts/about';

const CourseOne = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Course"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course"
                    />
                    <RoboticsKit />
                <CourseGrid />

                <HubsSection />
                <Review />
            </Layout>  
        </div>
    );
}

export default CourseOne;