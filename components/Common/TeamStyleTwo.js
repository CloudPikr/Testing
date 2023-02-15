import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const TeamStyleTwo = () => {
    return (
        <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                    <p>Meet our experts having decades of experience supporting cloud customers across multi-cloud- AWS, Google, OCI & Azure.</p>
                </div>
            
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src='/images/team-image/team1.jpg' alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Suchitra</h3>
                                    <span>Director of Operations </span>
                                </div>


                                <p>Suchitra holds Masters in Cyber Security and heads operations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src='/images/team-image/team2.jpg' alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Suneel</h3>
                                    <span>Engineering Leader</span>
                                </div>
                               
                          

                                <p>Suneel holds Masters Degree in Computer Science and heads Solution Engineering.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src='/images/team-image/team3.png' alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Varun</h3>
                                    <span>Migration Expert</span>
                                </div>

                               

                                <p>Varun heads migration services for multi cloud deployments.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src='/images/team-image/team4.png' alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Avi</h3>
                                    <span>Security Architect</span>
                                </div>

                               

                                <p>Avi is certified Cloud professional and heads Security Practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamStyleTwo;