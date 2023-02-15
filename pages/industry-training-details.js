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
 
const IndustryTrainingDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="" />
 
            <div className="services-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Digital Marketing</h3>
                                <p>
                                Backed by a team of experienced professionals, our strategic services meet the needs of all types and sizes of clients - from small startups to large firms - and deliver lasting changes with measurable growth.
                                </p>

                                <p>
                                We help brands find new ways to stay connected with their consumers through our unique approach of being digital first.
                                </p>

                                <p>
                                Please get in touch with us today to learn how MooDle Consultancy can help your future success.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/services-details1.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        {/* <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/services-details-image/services-details2.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div> */}

                        {/* <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>

                                <div className="services-details-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                        Which material types can you work with?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                        Is Smart Lock required for instant apps?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                        Can I have multiple activities in a single feature?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default IndustryTrainingDetails;