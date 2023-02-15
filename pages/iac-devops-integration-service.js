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

            <PageBanner pageTitle="IAC & DevOps" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>IaC & DevOps</h3>
                                <p>
                                <p>
                                Cloud operations, DevOps, and DevSecOps are practices that aim to improve the efficiency and effectiveness of cloud computing environments by aligning development, operations, and security teams.
                                </p>
                                </p>
                                <p>
                                Cloud operations focus on the day-to-day management of cloud resources, including tasks such as deployment, monitoring, and maintenance. DevOps is a set of practices that aims to improve the collaboration and communication between development and operations teams, with the goal of enabling faster and more efficient software delivery. DevSecOps is a variant of DevOps that emphasizes the integration of security practices into the development and operations process.
                                </p>
                                <p>
                                By adopting cloud operations, DevOps, or DevSecOps practices, organizations can:
                               
                                    <ol style={{ listStyleType: 'decimal' }}>
                                        <li> Improve efficiency: By automating tasks and processes, organizations can reduce the time and effort required to manage cloud resources. </li>
                                        <li> Increase agility: By enabling faster software delivery, organizations can respond more quickly to changing business needs.</li>
                                        <li> Improve security: By integrating security practices into the development and operations process, organizations can reduce the risk of security breaches.</li>
                                        <li> Increase collaboration: By fostering better communication and collaboration between teams, organizations can improve their overall productivity and effectiveness.</li>
                                    </ol>
                                </p>
                                <p>
                                To implement cloud operations, DevOps, or DevSecOps practices, organizations may need to adopt tools and technologies such as infrastructure as code (IaC), configuration management tools, continuous integration, and delivery (CI/CD) pipelines, and monitoring and logging solutions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/iac-devops-integration-service.png"
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