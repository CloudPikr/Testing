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

            <PageBanner pageTitle="Security/Risk Assessment Service" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Security/Risk Assessment Service</h3>
                                <p>
                                The purpose of this engagement is to make sure we protect the cloud tenancy from pre-existing conditions or vulnerabilities. We use standard tooling provided by vendors and best practices to gather data from cloud tenancy and compare it with industry-specific compliance such as CIS/NIST. Gathering data to highlight specific areas of concern against a checklist helps find security holes or weaknesses. We make sure the customer knows them, and documents it, by doing this we maintain a security posture throughout the engagement and ensure vulnerabilities are prevented or quickly caught and remediated.  Security assessments identify weaknesses and failures in security that are commonly exploited by malicious actors. Working with the project teams to understand the architecture and design of the project, security assessments help identify, analyze, and remediate security challenges based on the most egregious issues. As part of the engagement, we provide an assessment document with clearly defined criteria and findings with remediation guidelines. Specific focus areas for this assessment: Perimeter Security, Network Security, Host Security, Application Access Security, Data Security, and vendor-specific Cloud-native security such as CSPM, SIEM, and Monitoring.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/security-risk-assessment-service.png"
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