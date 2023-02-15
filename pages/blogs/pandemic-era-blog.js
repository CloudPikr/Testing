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

            <PageBanner pageTitle="Pandemic Era Blog" />

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/moodle-blog5.jpg" alt="image" />
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

                                    <p>Not until very long ago, the normal daily life of an Indian household included activities like getting milk from the milkman, kids going to school, getting ready for work, buying vegetables from the local seller, mall hopping, catching up with friends for movie, dinner, etc.</p>

                                    <p>With the advent of COVID 19, the “new normal” being picking the milk packets ordered on some app, kids attending online classes, attending business meetings via Zoom/Google meet, getting vegetables delivered from some local vendor’s app, video calls with friends, watching the upcoming movies on various OTT platforms, etc. It can be said that people are still engaged in the same activities, the big difference being “everything done online” in their homes. </p>

                                    <p>In this period of uncertainty, businesses are experiencing unexpected revenue losses and deteriorating organic growth as everything has come to a standstill. More and more businesses are moving towards the online marketing arena to drive their customer engagement. However, the focus has shifted from paid marketing to organic social content. Bernard Marr from Forbes said: “In the coming months, businesses are going to become more reliant than ever on their digital strategy. Without wanting to sound too alarmist, in many cases, it will be the deciding factor in whether they make it through the tough times ahead.”</p>

                                    <p>Companies are concentrating more on organic digital marketing campaigns like creating and updating their websites, automated email contact, posting blogs and videos, and events like creating awareness about the pandemic and supporting their employees’ WFH issues. As per a research, marketers expect a 66% increase in social media content creation during the pandemic, followed by blog content at 57% and video production at 50%.</p>

                                    <p>During the pandemic, companies are cutting down costs in every area possible. Marketing being the most vulnerable one, is witnessing delayed product launches and campaigns; reduction in paid advertising activities, etc. To connect with their current and prospective customers, companies are moving towards one of the least expensive way of digital marketing i.e. going organic with customer oriented emails, enhancing their website experience, customer satisfaction surveys, and various other consumer engaging activities. SEO also plays a pivot role here as businesses are focusing on driving traffic from search engines to their websites.</p>

                                    <p>As per a Gartner report, “Consumers are no longer clicking through to sites from traditional ad formats, so marketing leaders must now adjust the messaging of ad creatives to enhance advertising effectiveness. Leading brands are leaning more on cost-effective alternatives, including direct and organic search traffic, and utilizing more linking strategies to drive traffic from frequented sites”.</p>

                                    <p>Targeting customers organically has proven to be the most cost effectively way even for small businesses in these crucial times. Local and small retailers are the worst hit in the pandemic, with people locked in their homes and almost everything is bought online. To combat this, many local mom and pop stores are coming up with online advertisements, guest blogs, emails and social media shout-outs, thus targeting their customers through organic marketing campaigns. Events like fairs, flea markets, exhibitions, workshops and similar events are conducted virtually, where marketers resort to organic content like blogs, videos, etc to attract customers.</p>
                                    
                                    <p>During the pandemic, when consumers are locked in their home and spend most of their time in the virtual world, digital marketers can benefit by engaging their audiences in providing relevant and insightful information. There has been a substantial increase in online activity across the globe. As per reports, in January 2021, online traffic increased by 39.7% y-o-y, and the global conversion rate also increased by 40.3% y-o-y. </p>

                                    <p>This is the time when consumers are low on their emotional quotient, and they want support, empathy and guidance from the marketers rather than plain advertising. Many businesses are focussing on building their brand credibility with compassion and the ‘human’ touch. Building customer trust is important during this time of distress. People nowadays believe strongly in customer opinions, ratings, recommendations and group discussions. There has been a steady increase in internet influencers, as people are yearning for the human contact amidst the lockdown phase. Providing reliable information organically and staying away from fake news and advertising, is likely to ensure high customer engagement and drive traffic.</p>    

                                    <p>Businesses are continuously monitoring and adapting to the change in the consumer behaviors in this hour of the pandemic and adjusting their digital marketing strategies accordingly. Brands which embrace these activities are here to stay long. This is the essence of organic digital marketing which is offering ‘what you believe in’ and bringing in customers naturally over time. As per Katy Sloan, Content Specialist and mom to Speak Mascot Dexter, “If anything, the presence of COVID-19 has taught us just how important a <a href="/digital-marketing-blog">digital marketing</a> presence can be. It allows you to communicate with your audience when other factors may be preventing you from interfacing with them in person. It's like a lifeline. Brands have learned that they should care about their virtual space just as much as a physical storefront. We've seen some pretty amazing adaptations take place." </p>


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
                                                    <img src="/images/blog-image/moodle-blog4.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>

                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">"STORY = SALE"​ - A Tale Of BRAND STORYtelling !!!</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">August 15, 2021</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            {/* <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">The golden rule of buying a phone as a gift</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 21, 2021</span>
                                                    </span>
                                                </span>

                                                <span className="image-next">
                                                    <img src="/images/blog-image/blog3.jpg" alt="image" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a> */}
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