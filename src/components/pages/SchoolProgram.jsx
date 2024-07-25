import React from 'react';
import { AssuranceSection, PageBanner, SchoolProgramSection, WhatWeOfferSection}  from '../layouts/schoolprogram/index';
import Layout from '../../common/Layout';
import { HubsSection, Review, YourComponent } from '../layouts/about';



const schoolprogram = () => {
    return (
        <div className="about">       
            <Layout>       
                    <PageBanner
                        title="school Program"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="About"
                        />
                   <SchoolProgramSection />
                <WhatWeOfferSection />
                <AssuranceSection />
                <YourComponent />
                <HubsSection />
                <Review />
            </Layout>
        </div>
    );
}

export default schoolprogram;