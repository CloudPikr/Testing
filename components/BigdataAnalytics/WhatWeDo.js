import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area ptb-80">
			<div className="container">
				<div className="section-title">
					<h2>What We Do</h2>
					<div className="bar"></div>
					 
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-what-we-do-box">
							<div className="icon">
                                <i className="flaticon-monitor"></i>
                            </div>
                            <h3>
                                <Link href="/cloud-consulting">
                                    <a>Cloud Consulting</a>
                                </Link>
                            </h3>
                            <p>CloudPikr helps businesses navigate the complex world of cloud computing,delivering expert guidance and support for optimizing and modernizing their IT infrastructure.Whether you're looking to migrate your existing workloads to the cloud,build new cloud-native applications, or optimize your current cloud deployments,our team of experts is here to help.</p>

                            <Link href="/cloud-consulting">
                                <a className="read-more-btn">
                                    <Icon.ArrowRight /> Read More
                                </a>
                            </Link>
						</div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-what-we-do-box">
							<div className="icon">
                                <i className="flaticon-idea"></i>
                            </div>
                            
                            <h3>
                                <Link href="/cloud-migration">
                                    <a>Cloud Security & Audit</a>
                                </Link>
                            </h3>

                            <p>CloudPikr ensures the safety and compliance of your data and systems in the cloud through expert security assessments and audits. We are committed to protecting your business and complying with regulations with our comprehensive cloud security and audit services.</p> 
                            <Link href="/cloud-migration">
                                <a className="read-more-btn">
                                    <Icon.ArrowRight /> Read More
                                </a>
                            </Link>
						</div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-what-we-do-box">
							<div className="icon">
                                <i className="flaticon-software"></i>
                            </div>
                            <h3>
                                <Link href="/cloud-security-and-compliance">
                                    <a>Managed Cloud Services</a>
                                </Link>
                            </h3>
                            <p>CloudPikr guarantees smooth operation and uptime of your cloud infrastructure with expert assistance and troubleshooting. We are devoted to keeping your cloud environment running at peak performance with round-the-clock monitoring and maintenance.</p>

                            <Link href="/cloud-security-and-compliance">
                                <a className="read-more-btn">
                                    <Icon.ArrowRight /> Read More
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default WhatWeDo;  