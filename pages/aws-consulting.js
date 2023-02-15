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
 
const Awsconsulting = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Aws Consulting" />
 
            <div className="services-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Aws Consulting</h3>
                                <p>
                                We are certified with AWS Professionals. Our team has good experience in clould service.
                                </p>

                                <p>
                                We Work as a team to provide clould expertise like migrating to clould or optimizing existing clould infrastructure. 
                                </p>

                                <p>
                                We provide you with sustainable business advantages. Our team with specialized skills and experience can help you achieve those results. The AWS Professional Services organization is a global team of experts that can help you realize your desired business. We work together with our team and chosen member of the AWS Partner to execute your enterprise cloud computing initiatives.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img 
                               src="/images/services-details-image/aws-consulting-webp.webp"
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/aws-consulting-jpeg.jpg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <p>Our Professional Services’ offerings use a unique methodology based on Amazon’s Clould Server  which help you complete projects faster and more reliably, while based on  accounting for evolving expectations and dynamic team structures along the way Our Professional offerings help you achieve specific outcomes related to enterprise cloud adoption. Each offering delivers with activities, best practices, documentation reflecting our experience supporting hundreds of customers in their journey to AWS Cloud.</p>
                                <p>We provide global specialty practices to support your efforts in focused areas with cloud computing. Our Specialty practices deliver targeted guidance through the best practices, frameworks & tools, other services across solution, technology, and industry subject areas. Their deep expertise helps to take advantage of business benefits available with the AWS Cloud.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Awsconsulting;