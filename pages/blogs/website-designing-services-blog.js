import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';

const BlogDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Website Designing Services" />

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/moodle-blog2.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> September 31, 2021
                                            </li>
                                            <li>
                                                <Icon.User /> <a href="#">Steven Smith</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Introduction</h2>

                                    <p>MooDle Consultancy is one of the leading website designing service providers in India and we are committed to providing the best solutions to our valued customers in order to meet their objectives. Taking your business online and making you known globally across different channels is what we do best.</p>

                                    <p>We are counted among the topmost Website developers of India offering website designing, web development and a broad range of web solutions to corporate and small businesses.</p>

                                    {/* <blockquote>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                        <cite>Tom Cruise</cite>
                                    </blockquote> */}

                                    {/* <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                    <ul className="block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog8.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog7.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog9.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul> */}

                                    <h3>Our website designing services</h3>

                                    {/* <ul className="features-list">
                                        <li><Icon.Check /> Scientific Skills For getting a better result</li>
                                        <li><Icon.Check /> Communication Skills to getting in touch</li>
                                        <li><Icon.Check /> A Career Overview opportunity Available</li>
                                        <li><Icon.Check /> A good Work Environment For work</li>
                                    </ul> */}
                                    <p>Our website designing services are projected in such a way that our clients get the best of all worlds – high quality, cost-effective and speedy service without compromising on their requirements. We maintain the utmost level of professionalism at every stage of design to ensure that both you and your online identity are looked after by our experts. We ensure that your site is easy to navigate and user friendly so that visitors find your site interesting and start getting in touch with you.</p>

                                    <h3>A business website should be a perfect</h3>
                                    <p>Your business website should be a perfect reflection of who you are and what you do. Get a custom web design for your site to impress potential new customers, search engines and more. Focused on your goals, we'll work closely with you to create the best online image for your business at a price that's right for your budget.</p>

                                    <p>If you want to get more clients, your business website needs to be perfect. I can help you with that. Every business is different, so every website is different. Whether you're selling expensive cars or investing in the stock market, I can always help you create a website that works for your business goals, and fits your business brand.Why Do You Need to Design the Website?</p>

                                    <p>A website is one of the most important elements of your brand identity online. It serves as a critical business card for establishing trust and credibility, and it’ll help make your presence known to potential new customers.

                                        As the online world has become more prominent than ever, having a website that represents your business is an absolute necessity. Customized website development services ensure that you have the right platform to make an impact through aesthetics and usability.</p>


                                    <h3>Our website designing services</h3>

                                    <ul className="features-list">
                                        <li><Icon.Check /> Marketing your business online</li>
                                        <li><Icon.Check /> Essential responsibility of businesses to potential customers</li>
                                        <li><Icon.Check /> The design and content of your website provides visitors with their first impressions of you and your company.</li>
                                        <li><Icon.Check /> Website that illustrates your company or product in an easily comprehensible and professional manner.</li>
                                        <li><Icon.Check /> The website should be attractive, approachable, easy to use, and well-designed to appeal to your targeted consumers.</li>
                                    </ul>

                                    <p>Are you a startup small business looking for a clean, professional, eye-catching and great looking website? We are here to help you with that. Our professional website design services create a perfectly polished image of your company while converting visitors into paying customers. Our responsive websites display perfectly on any device; desktop, laptop, tablet or Smartphone.</p>

                                    <p>We are a team of highly experienced website designers who offer professional web design services to companies interested in developing an interactive presence. We work with web developers, startups, small businesses, e-businesses and corporate clients alike. We implement only the best practices of modern web design to produce high-quality website designs tailored specifically to your business needs.</p>

                                    <p>Come and create YOUR own brand story through &nbsp;
                                        <b><a href="https://www.moodleconsultancy.com/">MooDle Consultancy</a></b>.</p>

                                    <p>For more digital marketing services, follow us on &nbsp;
                                        <b><a href="https://www.facebook.com/MooDleConsultancy">Facebook,</a></b> &nbsp;
                                        <b><a href="https://www.linkedin.com/company/moodle-consultancy/">LinkedIn</a></b> and &nbsp;
                                        <b><a href="https://www.instagram.com/moodleconsultancy/">Instagram</a></b> 
                                    </p>
                                </div>

                                {/* <div className="article-footer">
                                    <div className="article-tags">
                                        <a href="#">Fashion</a>
                                        <a href="#">Smart</a>
                                        <a href="#">Marketing</a>
                                        <a href="#">Games</a>
                                        <a href="#">Travel</a>
                                    </div>
                                </div> */}

                                <div className="startp-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href="#">
                                                {/* <span className="image-prev">
                                                    <img src="/images/blog-image/blog2.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span> */}

                                                {/* <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Don't buy a tech gift until you read these rules</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 21, 2021</span>
                                                    </span>
                                                </span> */}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="/blogs/performance-marketing-blog">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">Performance Marketing – A Win-Win Solution for Everyone</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">December 21, 2022</span>
                                                    </span>
                                                </span>

                                                <span className="image-next">
                                                    <img src="/images/blog-image/blog3.jpg" alt="image" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    {/* <h3 className="comments-title">2 Comments:</h3> */}

                                    {/* <ol className="comment-list">
                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/client-image/client1.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Jones</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        April 24, 2019 at 10:59 am
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </article>

                                            <ol className="children">
                                                <li className="comment">
                                                    <article className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/client-image/client2.jpg" className="avatar" alt="image" />
                                                                <b className="fn">Steven Smith</b>
                                                                <span className="says">says:</span>
                                                            </div>

                                                            <div className="comment-metadata">
                                                                April 24, 2019 at 10:59 am
                                                            </div>
                                                        </footer>

                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>

                                                        <div className="reply">
                                                            <a href="#" className="comment-reply-link">Reply</a>
                                                        </div>
                                                    </article>
                                                </li>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src="/images/client-image/client3.jpg" className="avatar" alt="image" />
                                                                    <b className="fn">Sarah Taylor</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    April 24, 2019 at 10:59 am
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <a href="#" className="comment-reply-link">Reply</a>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/client-image/client4.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Doe</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        April 24, 2019 at 10:59 am
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </article>

                                            <ol className="children">
                                                <li className="comment">
                                                    <article className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/client-image/client5.jpg" className="avatar" alt="image" />
                                                                <b className="fn">James Anderson</b>
                                                                <span className="says">says:</span>
                                                            </div>

                                                            <div className="comment-metadata">
                                                                April 24, 2019 at 10:59 am
                                                            </div>
                                                        </footer>

                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>

                                                        <div className="reply">
                                                            <a href="#" className="comment-reply-link">Reply</a>
                                                        </div>
                                                    </article>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol> */}

                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked
                                                <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" cols="45" rows="5" maxLength="65525" required="required"></textarea>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" name="url" />
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post Comment" />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            {/* <BlogSidebar /> */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BlogDetails;