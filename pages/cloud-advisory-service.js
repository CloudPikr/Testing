import React from 'react'; 
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const DigitalMarketingDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Cloud Advisory Service" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Cloud Advisory Service</h3>
                                <p>
                                Cloud has changed how many organizations operate, allowing for and forcing rapid innovation for IT teams. In contrast, IT teams often lag and run with disparate/duplicative tooling, hybrid infrastructures, and outdated practices. In addition, obsolete methods often hold cloud adoption back due to concerns over risks and exposure related to the cloud. 

Cloud Service Providers often share their best practices and help customers lift their workloads to the cloud. However, there is always a gap between the organization's and the cloud's best practices that must fill.

The Cloud Advisory Service can help fill the gap by conducting a discovery session with Chief Information Security Officers (CISO/CSO) or Security team and making recommendations on improving the security posture for the given architecture or workload under consideration. Then, our experts can implement the recommendations to enhance your Cloud Security Posture.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/cloud-advisory-service.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>

                    <div className="separate"></div> 

                </div>
            </div>

            <Footer />
        </>
    );
};

export default DigitalMarketingDetails;