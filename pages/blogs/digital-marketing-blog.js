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

            <PageBanner pageTitle="Best Digital Marketing Company in India" />

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/moodle-blog1.jpg" alt="image" />
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

                                    <p>A leading digital marketing company in India, we offer a range of services including SEO services, SMO services, SEM, online brand building and website promotion services. The internet is flooded with SEO companies claiming to optimize your indexed pages in the major search engines. While many of them offer cheap or free packages, they do not guarantee any results. Our promise lies in our work, as every client is treated with the care and dedication that we provide to all our clients regardless of their size.

                                        The best digital marketing services company in India. The world has now evolved and there are many new ways to reach out to your customers, build a brand name, and give your business exposure.</p>

                                    <p>Moodle– is a leading Digital Marketing Company in India, we help you to deliver your content via various online channels such as Google, Bing, Yahoo, YouTube and other search engines and social media sites like Facebook, Twitter, LinkedIn, Instagram etc. We can come up with real-time strategies which enable your brand to grow from strength to strength. Our marketing specialists craft unique digital strategies for every client individually and take care of every aspect of your <a href="/digital-marketing">digital marketing</a> campaign with passion.</p>

                                    <p>Businesses are reaching more people through digital marketing. More than half of the world's population has Internet access, and many countries now require a digital strategy to be competitive. Digital marketing is now an essential business function.We have established a reputation for doing exceptionally creative website design, web development, mobile app development, and internet marketing. Contact us now to get started on your next project, consultation is free!</p>

                                    <p>You have something to say, we have the technology, expertise and experience to help you increase traffic, grow your business and maximize brand awareness. We're digital marketing specialists and we can help you win with social media.</p>

                                    <p>We work with small and medium-sized businesses, as well as international companies to develop offline and online strategies in order to increase brand recognition and increase customer engagement. Our team is committed to achieving exceptional results for each of our clients</p>

                                    <h3>Our Digital Marketing Services</h3>

                                    <p>We leverage our vast experience in online marketing to help you take control of your online reputation, increase site traffic, boost customer loyalty and conversions, and finally drive a positive ROI for your business.</p>

                                    <p>Every aspect of our digital marketing services is custom-tailored to suit your unique needs and goals, providing solutions that are reliable, consistent, and scalable. Our core services include advanced strategies for search engine optimization (SEO), social media management, and search engine marketing (SEM). As an industry leader, we provide content creation, conversion tracking and analysis, PPC cost management, web design optimization, advanced brand management strategies, and mobile marketing solutions. Each digital marketing solution is built with a foundation of superior customer service and guided by our passion for excellence.</p>

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
                                                <span className="image-prev">
                                                    <img src="/images/blog-image/blog2.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>

                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Performance Marketing – A Win-Win Solution for Everyone</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">December 20, 2021</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">"STORY = SALE"​ - A Tale Of BRAND STORYtelling !!!</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">August 15, 2021</span>
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