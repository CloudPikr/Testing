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

            <PageBanner pageTitle="Cloud Migration Service" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Cloud Migration Service Service</h3>
                                <p>
                                
Cloud migration refers to the process of moving applications, workloads, and data from on-premises infrastructure to the cloud. Organizations may choose to migrate to the cloud for a variety of reasons, including the desire to improve scalability, reduce costs, increase agility, and enhance security.
There are several approaches to cloud migration, including:
                                <ol style={{ listStyleType: 'decimal' }}>
                                    <li>Lift and shift: This approach involves moving existing applications and workloads to the cloud without making significant changes to the application itself. This can be an attractive option for organizations that want to take advantage of the benefits of the cloud but do not have the resources or time to re-architect or re-platform their applications.</li>
                                    <li>Re-platform: This approach involves making changes to the application to take advantage of cloud-native features and capabilities. This may include migrating the application to a different operating system or database or implementing cloud-specific technologies such as containers or serverless functions.</li>
                                    <li>Re-architect: This approach involves fundamentally redesigning the application to take advantage of the cloud. This may involve breaking the application into smaller, independent components that can be scaled and managed separately, or implementing a microservices architecture.</li>
                                </ol>
Regardless of the approach chosen, successful cloud migrations typically involve thorough planning and testing to ensure that the application performs as expected in the new environment.
. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/secure-design-architecture-service.png"
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