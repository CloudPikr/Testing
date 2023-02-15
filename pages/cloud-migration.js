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
 
const cloudmigration = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Cloud Migration" />
 
            <div className="services-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Cloud Migration </h3>
                                <p>
                                Cloud migration is the process of moving a company’s digital means, services, databases, IT resources, Cloud migration is also about moving from to another.
                                </p>

                                <p>
                                Companies want to move on from server to another due to outdated and increasingly inefficient, such as aging  with firewall appliances, or to abandon  solutions that are no longer operating at optimum capacity. This is why because there are many organizations are, making a partial migration to the cloud.
                                </p>

                                <p>
                                We know it very well that cloud migration is a very critical for real-time and updated performance and efficiency. As such,this  process requires careful analysis, for planning and execution to ensure the cloud solution's compatibility as per your business requirements.  
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/Cloud-Migration-3.jpg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/Cloud-Migration-2.webp"
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <p>When considering with this  strategy for migrating to the cloud, it is very important to understand that this is not just about getting there, it’s also about what you do when you get there. The process of cloud migration is making companies ask the popular question: what is application you want to  modernization?</p>

                                <p>There are many answered along the way, and businesses of all sizes require assistance in making their cloud journeys. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default cloudmigration;