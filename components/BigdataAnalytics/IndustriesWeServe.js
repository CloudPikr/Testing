import React from 'react';
import Link from 'next/link';

const IndustriesWeServe = () => {
    return (
        <div className="industries-serve-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Industries We Serve</h2>
					<div className="bar"></div>
                   
                </div>  
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                        <div className="icon">
                            <img src="images/fav1.png" style={{width: "50px"}} ></img>   </div>
                            AWS Cloud Migration
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                            <img src="images/fav2.png" style={{width: "50px"}} ></img> 
                            </div>
                            Cloud SIEM Migration
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                            <img src="images/fav3.png" style={{width: "50px"}} ></img> 
                            </div>
                            QRadar Setup
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                            <img src="images/fav4.png" style={{width: "50px"}} ></img> 
                            </div>
                            Google Cloud Solution
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                            <img src="images/fav5.png" style={{width: "50px"}} ></img> 
                            </div>
                            Oracle Cloud Migration
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                            <img src="images/fav6.png" style={{width: "50px"}} ></img> 
                            </div>
                            Database Solution
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                            <img src="images/fav7.png" style={{width: "50px"}} ></img> 
                            </div>
                            Automation of Industries
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                            <img src="images/fav8.png" style={{width: "50px"}} ></img> 
                            </div>
                            Banking & Insurance
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics-shape2">
                <img src="/images/bigdata-analytics/vector.png" alt="image" />
            </div>
        </div>
    )
}

export default IndustriesWeServe;  