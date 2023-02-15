import React from 'react';
import Link from 'next/link';

const DiscoverArea = () => {
    return (
        <div className="discover-area ptb-80">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 services-right-image">
                            <img 
                                src="/images/services-right-image/book-self.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="book-self"
                            />
                           
                            <img 
                                src="/images/services-right-image/box.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="box"
                            />
                         
                            <img 
                                src="/images/services-right-image/chair.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="chair"
                            /> 
                            
                            <img 
                                src="/images/services-right-image/cloud.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="cloud"
                            />
                   
                            <img 
                                src="/images/services-right-image/cup.png"
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="cup"
                            />
               
                            <img 
                                src="/images/services-right-image/flower-top.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="flower"
                            />
                     
                            <img 
                                src="/images/services-right-image/head-phone.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="head-phone"
                            />
                  
                            <img 
                                src="/images/services-right-image/monitor.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="monitor"
                            />
                
                            <img 
                                src="/images/services-right-image/mug.png"
                                className="animate__animated animate__rotateIn animate__delay-0.2s" 
                                alt="mug"
                            />
           
                            <img 
                                src="/images/services-right-image/table.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="table"
                            />
                    
                            <img 
                                src="/images/services-right-image/tissue.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="tissue"
                            />
                   
                            <img 
                                src="/images/services-right-image/water-bottle.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="water-bottle"
                            />
                
                            <img 
                                src="/images/services-right-image/wifi.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="wifi"
                            />
                        
                            <img 
                                src="/images/services-right-image/cercle-shape.png"
                                className="bg-image rotateme" 
                                alt="shape"
                            />
                         
                            <img 
                                src="/images/services-right-image/service-right-main-pic.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            />
                        </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="discover-content">
                            <h2>We do Multi Cloud </h2>
                            <p>We have decades of expertise in multi cloud environments, We have helped companies achieve their cloud stratgey across AWS, GCP , Azure, and OCI.</p>

                            <Link href="#">
                                <a className="btn btn-primary">Discover More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics-shape1">
                <img src="/images/bigdata-analytics/analytics-shape1.png" alt="image" />
            </div>
        </div>
    )
}

export default DiscoverArea;  