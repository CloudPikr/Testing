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

const cloudconsulting = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Cloud Consulting" />

      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>Cloud Consulting</h3>
                <p>We provide following Clould Consulting Services</p>

                <p>
                  <b> Public Clould Consulting Services :-</b> Enjoy the ease of
                  use and maintenance, flexible pricing, and near-unlimited
                  scalability
                </p>

                <p>
                  <b> Private Clould Consulting Services :- </b>Leverage
                  superior security and privacy and zero latency for local apps.
                </p>
                <p>
                  <b> Hybrid Clould Consulting Services :-</b> Combine the best
                  of two worlds: public and private clouds.
                </p>
                <p>
                  <b> Multi Clould Consulting Services :- </b>Capitalize on the
                  unique offers from a variety of cloud vendors
                </p>
              </div>
            </div>

            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/cloud-consulting-png.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/cloud-consulting-png1.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3> Why Using Cloud Computing Consulting</h3>

                <p>
                  <b>Cloud adoption strategy :-</b> cloud-native app and cloud
                  data warehouse development.
                </p>
                <p>
                  <b>Feasibility assessment </b> includes TCO and ROI
                  estimation.
                </p>
                <p>
                  
                  <b>Consultations for the C-suite </b> to help and challenges
                  of cloud migration, define the skills and trainings required
                  for the project's success, if you choose the right cloud
                  services.
                </p>
                <p>
                 
                  <b>Legacy infrastructure migration to the cloud </b> via
                  replatforming, rehosting & refactoring.
                </p>
                <p>
                  <b>Cloud and hybrid infrastructure configuration </b> for code
                  reviews.
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

export default cloudconsulting;
