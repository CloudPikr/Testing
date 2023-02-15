import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const BlogPost = () => {
    return (
        <div className="blog-area pt-80 pb-50">
			<div className="container">
				<div className="section-title">
					<h2>Recent Blog</h2>
					<div className="bar"></div>
					 
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-box bg-f4faff">
                            <div className="entry-thumbnail">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-image/blog1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li><a href="#">Admin</a></li>
                                        <li>August 15, 2022</li>
                                    </ul>
                                </div>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>Managed Clould Services</a>
                                    </Link>
                                </h3>
                                <p>Our Managed Clould Services are purpose-built to support teams 
with seeking that edge in the cloud,improving performance, reducing cost and availability.</p>

                                <Link href="/blog-details">
                                    <a className="learn-more-btn">
                                        Read Story <Icon.Plus />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-box bg-f4faff">
                            <div className="entry-thumbnail">
                                <Link href="/blog-details">
                                    <a><img src="/images/blog-image/blog2.jpg" alt="image" /></a>
                                </Link>
                            </div>

                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li><a href="#">Admin</a></li>
                                        <li>August 18, 2021</li>
                                    </ul>
                                </div>

                                <h3>
                                    <Link href="/blog-details">
                                        <a> Security & Compliance</a>
                                    </Link>
                                </h3>
                                <p>As organizations embrace the scalability and flexibility of the cloud,
we evolve security, identity, and compliance into key business enablers. </p>
                                
                                <Link href="/blog-details">
                                    <a className="learn-more-btn">
                                        Read Story <Icon.Plus />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-box bg-f4faff">
                            <div className="entry-thumbnail">
                                <Link href="/blog-details">
                                    <a><img src="/images/blog-image/blog3.jpg" alt="image" /></a>
                                </Link>
                            </div>

                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li><a href="#">Admin</a></li>
                                        <li>August 15, 2022</li>
                                    </ul>
                                </div>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>Clould Consulting</a>
                                    </Link>
                                </h3>
                                <p>Our Professional Services organization is a global team of experts
that can help you realize your desired business outcomes when using the our Cloud Services.</p>
                                
                                <Link href="/blog-details">
                                    <a className="learn-more-btn">
                                        Read Story <Icon.Plus />
                                    </a>
                                </Link>
                            </div>
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
			<div className="shape6 rotateme">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
			<div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
			<div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    )
}

export default BlogPost;  