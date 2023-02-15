import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from '@/utils/ActiveLink';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
 
const ServiceDetails = () => {
    return (
        <>
            <Navbar/>
            <br/>
        <div className="ml-services-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Solutions</span>
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                    <p>We provide best web & app development services in India</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image7.png" style={{width: "208px"}} alt="image" />
                            </div>
                            <h3>
                                <Link href="/aws-consulting">
                                    <a>AWS Consulting</a>
                                </Link>
                            </h3>
                            <p>We are certified with AWS Professionals. Our team has good experience in clould service.We Work as a team to provide clould expertise like migrating to clould or optimizing existing clould infrastructure.  </p>
                                 
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image8.png"  style={{width: "258px"}} alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-migration">
                                    <a>Cloud Migration</a>
                                </Link>
                            </h3>
                            <p>Cloud migration is the process of moving a company’s digital means, services, databases, IT resources, Cloud migration is also about moving from to another.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image9.png"  style={{width: "258px"}} alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-consulting">
                                    <a> Cloud Consulting </a>
                                </Link>
                            </h3>
                            <p>Cloud migration is the process of moving a company’s digital means, services, databases, IT resources, Cloud migration is also about moving from to another.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image-devops.png"   alt="image" />
                            </div>
                            <h3>
                                <Link href="/devops-consulting">
                                    <a>DevOps Consulting</a>
                                </Link>
                            </h3>
                            <p>We offer following  DevOps consulting services to our customers with services encompassing several capabilities, including iterative and incremental development </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image4.png"  style={{width: "198px"}} alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-security-and-compliance">
                                    <a> Cloud Security & Compliance </a>
                                </Link>
                            </h3>
                            <p>It is an art and science of complying with regulatory standards of usage of clould in accordance with industry guidelines and local, national, and international laws</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image6.png"  style={{width: "198px"}} alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-hosting">
                                    <a>Cloud Hosting </a>
                                </Link>
                            </h3>
                            <p>As define Cloud hosting makes websites and applications both accessible using cloud resources. while traditional hosting did not ,the solutions are not deployed on a single server </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image1.png"  style={{width: "198px"}}  alt="image" />
                            </div>
                            <h3>
                                <Link href="/infrastructure-management">
                                    <a>Infrastructure Management </a>
                                </Link>
                            </h3>
                            <p>We provide relevant expertise to ensure that company's core IT infrastructure which can adapt to the market's dynamic needs, prepare for the digital age and deliver business value</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image-siem.png"  style={{width: "258px"}} alt="image" />
                            </div>
                            <h3>
                                <Link href="/siem-solution">
                                    <a> SIEM Solution  </a>
                                </Link>
                            </h3>
                            <p>The Combining security information management (SIM) & security event management (SEM), security information & event management (SIEM) offers real-time monitoring & analysis of events as well as tracking and logging of auditing purposes. </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image6.png"  style={{width: "198px"}} alt="image" />
                            </div>
                            <h3>
                                <Link href="/qradar-consulting">
                                    <a>QRadar Consulting </a>
                                </Link>
                            </h3>
                            <p>Cloudpikr has specialized and experienced developers, with experiences in skill sets like ML, RPA, NLP, BI, Analytics DL & Cognitive Computing etc. </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
        <Footer />
    </>
    );
}

export default ServiceDetails;