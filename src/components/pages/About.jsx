import React from 'react';
import { PageBanner,Counter, AboutComp,Features,Team,Review, OurJourney, HubsSection}  from '../layouts/about/index';
import Layout from '../../common/Layout';
import YourComponent from '../layouts/about/YourComponent';


const AboutMain = () => {
    return (
        <div className="about">       
            <Layout>       
                    <PageBanner
                        title="About us"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="About"
                        />
                    <Features />
                   
                    <Counter />
                    <OurJourney />
                    <AboutComp />
                   
                    
                    <Team />
                    <YourComponent />
                    <HubsSection />
                    <Review />
                    
            </Layout>
        </div>
    );
}

export default AboutMain;