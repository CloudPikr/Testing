import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div> 
                            <h3>Mail Here</h3>
                            <p><a href="mailto:sales@cloudpikr.com">Sales: sales@cloudpikr.com</a></p>
                            <p><a href="mailto:info@cloudpikr.com">Information : info@cloudpikr.com</a></p>
                            <p><a href="mailto:suchitra@cloudpikr.com">HR Info: suchitra@cloudpikr.com</a></p>

                            <p style={{visibility:'hidden'}}><a href="mailto:info@cloudpikr.com">info@cloudpikr.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <p></p>
                            <h3>Visit Here</h3>
                            <p></p>
                            <p>13001 Zen Villa Dr, Austin,TX, 78739</p>
                            <p></p>
                            <p style={{visibility:'hidden'}}>13001 Zen Villa Dr, Austin,TX, 78739</p>
                            <p></p>
                            <br/><br/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>Call Here</h3>                           
                            <p>Phone: <a href="tel:+1 737 207 0295">+1 737 207 0295</a></p>
                            <br/><br/> <br/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  