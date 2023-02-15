import React from 'react';
import Navbar from "@/components/_App/Navbar";
// import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const About = () => {
    return (
        <>
            <Navbar />

            <br/>
            <PageBanner pageTitle="About Us" />

            <div className="about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-us-cloudpikr.webp" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>Why Cloud Pikr</h2>
                                    <div className="bar"></div>
                                </div>

                                <p>CloudPikr is a Business Management  that designs, builds and operates services and solutions to its clients to reach SPANCO (Suspect, Prospect, Approach, Negotiations, Close, & Order). Thus, providing complete digital solutions and beyond to improve efficiency, increase productivity and optimize costs.</p>

                                <p>It’s a powerful perception that can transform first time customers into brand advocates, impacting your business in a substantial way. Building a brand is a step by step process. At CloudPikr , we start with a six-step process that guides our work: Design, Strategy, Digital Marketing, Social Media Marketing, Content & Website development. </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-inner-area">
                        <div className="row justify-content-start">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Planning</h3>
                                    <p>Planning of the project is very crucial for every project as it is blueprint of the reasons so CloudPikr  is using deep analysis, tools and study the nature of the project which provides best solutions.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Organising</h3>
                                    <p>By using the best feasible assets and resources in the sequencial and logical manner for the project CloudPikr provides you the best results.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Directing & Controlling</h3>
                                    <p>Desired outcome would be achieved only if good direction and controlling involved in the project, CloudPikr  have own ERP and timeline Softwares which helps to provide the project with the effective solutions.</p>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Feedback & Testing</h3>
                                    <p>CloudPikr  is always get in touch with the clients in every phase of the project to get feedback and reviews for customer satisfaction and handed over project after doing fully functional testing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Team /> */}

            {/* <Partner /> */}

            <FunFactsArea />
            
            <Footer />
        </>
    )
}

export default About;