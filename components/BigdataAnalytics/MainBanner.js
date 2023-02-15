import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const MainBanner = () => {
    return (
        <div className="bigdata-analytics-banner">
            <div className="container">
                <div className="bigdata-analytics-content">
                    <h1>Transforming IT for the Cloud Era</h1>
                    <p>Modernize and adapt an organization's information technology infrastructure 
                        to take advantage of the capabilities and benifits offered by cloud computing.
                        We migrate workloads and data to the cloud, implement cloud-native technologies 
                        and practices, and re-architect IT systems to be more agile, scalable, and secure.  
                        The ultimate goal is to enable the organization to be more efficient, flexible,
                        and responsive to the dynamic needs of the business.</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">Get Started</a>
                    </Link>
                </div>
            </div>

            <div className="banner-boxes-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                     <img src="/images/cloud.png" />
                                </div>
                                <h3>Cloud Consulting</h3>
                                <p>Solution for all cloud migrations</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                <img src="/images/backup.png" />
                                </div>
                                <h3>Cloud Security & audit</h3>
                                <p>Security & Complaince</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                <img src="/images/enterprise.png" />
                                </div>
                                <h3>Managed Cloud Services</h3>
                                <p>We provide Day 1 & Day 2 services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;  