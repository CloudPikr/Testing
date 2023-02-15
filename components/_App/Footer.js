import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import FloatingWhatsApp from 'react-floating-whatsapp';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <FloatingWhatsApp 
            phoneNumber="17372180471"
            accountName="Cloud Pikr"
            avatar="images/cloudpikr-02.png"
            allowEsc
            allowClickAway
            notification
            notificationSound         
             /> 

              <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/it-startup">
                                    <a>
                                        <img src="/images/cloudpikr-logo-1.png" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p> */}
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/about">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/features">
                                        <a>Features</a>
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/pricing">
                                        <a>Our Pricing</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/blog">
                                        <a>Latest News</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                {/* <li>
                                    <Link href="/faq">
                                        <a>FAQ's</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">
                                        <a>Terms & Condition</a>
                                    </Link>
                                </li>                                
                                <li>
                                    <Link href="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Contact</h3>
                            
                            <ul className="footer-contact-info">
                                {/* <li> 
                                    <Icon.MapPin />
                                    27 Division St, New York, <br /> NY 10002, USA
                                </li> */}
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:info@gmail.com">info@cloudpikr.com</a>
                                </li>
                                {/* <li> 
                                    <img src="/images/zalo-seeklogo.svg" alt="" />
                                    Zalo: <a href onClick={e=> e.preventDefault()}>+ (714) 923 333 444</a>
                                </li> */}
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:+1 7372180471">+1 (737) 218-0471</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li> 
                                    <a href="https://www.facebook.com/cloudpikr" className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </a> 
                                </li>
                                {/* <li>
                                    <a href="https://www.twitter.com/" className="twitter" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li> */}
                                <li>
                                    <a href="https://www.instagram.com/cloudpikr/" className="instagram" target="_blank">
                                        <Icon.Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/cloudpikr/" className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} cloudpikr. {/* All rights reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a> */}</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 