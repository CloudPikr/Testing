import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const cloudhosting = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Cloud Hosting" />

      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>Cloud Hosting</h3>
                <p>
                  As define Cloud hosting makes websites and applications both
                  accessible using cloud resources. while traditional hosting
                  did not ,the solutions are not deployed on a single server.
                  Instead, a network of connected physical and virtual cloud
                  servers hosts the application or website both, with greater
                  scalability and flexibility .
                </p>

                <h3>Key features:</h3>
                <p>
                  Applications are deployed on a cloud network rather than an
                  on-premises, single server.
                </p>

                <p>Resources scale as user needs.</p>
                <p>
                  Organizations only pay for the resources which depend on thier
                  uses.
                </p>
                <p>Cloud hosting can support SQL (including MySQL).</p>
                <p>
                  Solutions are controlled and automated using APIs, web
                  portals, and mobile apps.
                </p>
              </div>
            </div>

            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/cloud-hosting2.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/cloud-hosting1.jpg"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3> Considerations for the cloud hosting</h3>

                <p>
                  <b>Security</b> <br/> Clients should consider for  provider with physical, network and system, application and data security options.
                </p>
                <p>
                  <b>Sensitive data </b>  <br/> Enterprises which  work with sensitive data may consider for separating data at the hardware level & using dedicated servers.
                </p>
                <p>
                  <b>Support</b>  <br/> Cloud hosting providers offer tools, some offer specialist services to help manage the cloud-hosted environment.
                </p>
                
                <p>
                  <b>Performance </b> <br/>  Latency can sometimes be  issue. Organizations should ensure that it  have reliable, sturdy Internet connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default cloudhosting;
