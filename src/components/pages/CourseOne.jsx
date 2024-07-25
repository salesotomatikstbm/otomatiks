import React from 'react';
import {PageBanner,CourseGrid}  from '../layouts/courses/index';

import Layout from '../../common/Layout';

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
                <CourseGrid />
            </Layout>  
        </div>
    );
}

export default CourseOne;