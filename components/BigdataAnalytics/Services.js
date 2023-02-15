import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Services = () => {
    return (
        <div className="bigdata-services-area ptb-80 bg-eef6fd">
            <div className="container">
                <div className="section-title">
                    <h2>Expertise at your disposal</h2>
					<div className="bar"></div>
                    <p>Whether you're looking to migrate your existing workloads to the cloud, build new cloud-native applications, or optimize your current cloud deployments, our team of experts is here to help.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-advisory-service">
                                    <a>Cloud Advisory Service</a>
                                </Link>
                                <br/>
                            </h3>
                            <p><br/>Whether you're looking to migrate your existing workloads to the cloud, build new cloud-native applications, or optimize your current cloud deployments, our team of experts is here to help.   </p>
                            
                            <Link href="/cloud-advisory-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/secure-design-architecture-service">
                                    <a>Cloud Migration Service</a>
                                </Link>
                            </h3>
                            <p>Cloud migration services refer to the process of moving applications, workloads, and data from on-premises infrastructure to the cloud. Organizations may choose to migrate to the cloud for a variety of reasons, including the desire to improve scalability, reduce costs, increase agility, and enhance security.</p>
                            
                            <Link href="/secure-design-architecture-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-governance-design-service">
                                    <a>Cloud Governance</a>
                                </Link>
                            </h3>
                            <p>CloudPikr ensures the safety and compliance of your data and systems in the cloud through expert security assessments and audits. We are committed to protecting your business and complying with regulations with our comprehensive cloud security and audit services.</p>
                            
                            <Link href="/cloud-governance-design-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/security-risk-assessment-service">
                                    <a>Security/Risk Assessment Service</a>
                                </Link>
                            </h3>
                            <p><br/>The purpose of this engagement is to make sure we protect the cloud tenancy from pre-existing conditions or vulnerabilities. </p>
                            
                            <Link href="/security-risk-assessment-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/iac-devops-integration-service">
                                    <a>IAC & DevOps</a>
                                </Link>
                            </h3>
                            <p>Cloud operations, DevOps, and DevSecOps are practices that aim to improve the efficiency and
effectiveness of cloud computing environments by aligning development, operations, and
security teams.</p>
                            
                            <Link href="/iac-devops-integration-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/compliance-evaluation-service">
                                    <a>Compliance(PCI/DSS, HIPAA, NIST, etc) Evaluation & Implementation Service</a>
                                </Link>
                            </h3>
                            <p>We help you assess requirements around compliance and design a solution that best fits the needed controls around the application</p>
                            
                            <Link href="/compliance-evaluation-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;  