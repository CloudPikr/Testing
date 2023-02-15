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
            <Navbar/>

            <PageBanner pageTitle="Cloud Governance" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Cloud Governance </h3>
                                <p>
                                Cloud governance is the process of establishing and maintaining control over the use and management of cloud computing resources within an organization. It involves setting policies, standards, and procedures to ensure that the use of cloud resources aligns with the organization's business objectives and compliance requirements.
Effective cloud governance is critical for ensuring that cloud resources are used efficiently, securely, and in a way that maximizes the benefits of the cloud. It helps organizations to optimize costs, improve security and compliance, and ensure that the use of cloud resources aligns with the organization's overall strategy. 
                                </p>
                                <p>
                                Some key elements of cloud governance include: 
                                <ol style={{ listStyleType: 'decimal' }}>
                                    <li>Cloud policies: Establishing clear policies for the use of cloud resources helps to ensure that they are used in a consistent and compliant manner. These policies can cover topics such as security, access controls, data management, and resource allocation.</li>
                                    <li>Cloud standards: Setting standards for the use of cloud resources helps to ensure that they are deployed and configured in a consistent and reliable manner. This can include standards for things like architecture, security controls, and data management.</li>
                                    <li>Cloud procedures: Developing procedures for the use of cloud resources can help to ensure that they are used efficiently and effectively. These procedures can cover topics such as resource allocation, deployment, and management.</li>
                                    <li>Cloud monitoring and reporting: Monitoring the use of cloud resources and regularly reporting on their usage can help to ensure that they are being used efficiently and effectively. This can include monitoring for things like resource utilization, cost optimization, and security compliance.</li>
                                </ol>
By implementing effective cloud governance practices, organizations can ensure that their use of cloud resources aligns with their business objectives and compliance requirements, while also maximizing the benefits of the cloud.
 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/cloud-governance-design-service.png"
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