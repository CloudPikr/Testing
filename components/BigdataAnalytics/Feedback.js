import React from 'react'; 

const Feedback = () => {
    return (
        <div className="bigdata-feedback-area pt-80 pb-50">
            <div className="container">
                <div className="section-title">
                    <h2>What Users Saying</h2>
                    <div className="bar"></div>
                    <p>At CloudPikr we take our customers seriously and work closely with their team to make sure we meet their expectations and bring success which matters to them.</p>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-feedback-box">
                            <div className="feedback-desc">
                                <p>CloudPikr experts have helped us save 40% off the Cloud expense by properly assessing our cloud deployment and optimizing the environment using their tooling and expertise.</p>
                            </div>

                            <div className="client-info">
                                <img src="/images/author1.jpg" alt="image" />
                                <h3>Field CISO</h3>
                                <span>Insurance Provider</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-feedback-box">
                            <div className="feedback-desc">
                                <p>CloudPikr helped us meet our security and compliance needs which were missing from our initial cloud deployment. Their team of experts worked closely with our Security team, gathered our requirements, and found gaps using a deep discovery process. As a result of the engagement, we got to know the gaps which must be fulfilled in order to meet required security and compliance needs around HIPAA and PCI.</p>
                            </div>

                            <div className="client-info">
                                <img src="/images/author2.jpg" alt="image" />
                                <h3>Security Architect</h3>
                                <span>Finance customer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-feedback-box">
                            <div className="feedback-desc">
                                <p>CloudPikr team helped us with last-minute Go-Live readiness and identified an architectural flaw in our cloud deployment that could have caused data loss in one of the critical application databases. It was remediated with a step-by-step procedure and tested to make sure our design meets the availability requirements for our tier 1 application.</p>
                            </div>

                            <div className="client-info"> 
                                <img src="/images/author3.jpg" alt="image" />
                                <h3>Database Architect</h3>
                                <span>Major healthcare provider</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;  