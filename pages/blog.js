import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import Link from 'next/link';
 
const Blog = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Recent Blog" />
            
            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog1.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 15, 2021
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Managed Clould Services</a>
                                        </Link>
                                    </h3>

                                    <span>By <a href="#">Admin</a></span>

                                    <p>Our Managed Clould Services are purpose-built to support teams 
with seeking that edge in the cloud,improving performance, reducing cost and availability.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog2.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 17, 2021
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a> Security & Compliance</a>
                                        </Link>
                                    </h3>

                                    <span>By <a href="#">Head of Security & Compliance</a></span>

                                    <p> As organizations embrace the scalability and flexibility of the cloud,
we evolve security, identity, and compliance into key business enablers. </p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog3.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 19, 2021
                                    </div>
                                </div>

                                <div className="blog-post-content"> 
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Clould Consulting</a>
                                        </Link>
                                    </h3>

                                    <span>By <a href="#">Clould Consulting Head</a></span>

                                    <p>Our Professional Services organization is a global team of experts
that can help you realize your desired business outcomes when using the our Cloud Services.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
		    </div>

            <Footer />
        </>
    )
}

export default Blog;