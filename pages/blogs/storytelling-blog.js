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

            <PageBanner pageTitle='"STORY = SALE" - A Tale Of BRAND STORYtelling !!!' />

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/moodle-blog4.jpg" alt="image" />
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

                                    <p>Once upon a time……..</p>

                                    <p>This phrase itself brings back a lot of childhood memories transcending us to a different world of imagination. That’s the power of ‘Storytelling’. </p>

                                    <p>Different are the expectations for different types of businesses and their requirements. For an advertising company/platform, the number of clicks matters the most, while for some it’s the cost per sale.</p>

                                    <p>Stories can be an effective communication tool to convey messages to customers. As part of their stories, marketers have been using creative and emotional narratives, videos, influencer or customers’ personal experiences, abstract stories, etc. to position their brand in the market.  Examples of brands using stories as part of their marketing campaigns are – Amul, Google, Airbnb, Coca-Cola, etc.</p>

                                    <p>Generally, a story includes key characters, conflict/plot, action, climax and resolution. It is also important to know the target audience, the core message to be conveyed, the suitable marketing channel, and finally the type of story to be narrated, i.e. written, audio, video, digital or a combination.</p>

                                    <p>To create a memorable customer experience, the recipe for an appealing brand story should include a dash of ingredients like consumer empathy, authenticity, entertainment, creativity, personalization, providing support data, cohesiveness, etc. A bestselling brand story keeps the audience engaged, stimulates their minds, promotes sales and fosters brand loyalty. </p>
                                    
                                    <p>Emotions drive purchase more than logic. Stories being more relatable, enhance customer engagement and develop an eternal customer-brand bond. Effective storytelling can differentiate a brand from its competitors, as it creates a memorable identity of the brand for its consumers. </p>

                                    <p>Be it the COVID pandemic, Kerala floods, political elections, the IPL, etc., stories bring people together and create a sense of community. Even during eventful times, marketers use storytelling to show the humanitarian side of brands and create a sense of brand trust among their customers.</p>

                                    <p>To summarize, brand storytelling has become an integral part of marketing campaigns as it connects with customers on an emotional level, making them the advocates of the brand for a very long time. </p>

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
                                                    <img src="/images/blog-image/moodle-blog1.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>

                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Best Digital Marketing Company in India</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">October 15, 2021</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="/blogs/pandemic-era-blog">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">Digital Marketing during the Pandemic ERA !!!</span>
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