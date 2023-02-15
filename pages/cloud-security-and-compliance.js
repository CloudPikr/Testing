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

const Awsconsulting = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Cloud Security & Compliance" />

      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h4>Cloud Security & Compliance</h4>
                <p>
                  “It is an art and science of complying with regulatory
                  standards of usage of clould in accordance with industry
                  guidelines and local, national, and international laws.”
                </p>
                <h3>Cloud Compliance</h3>
                <p>
                  Once any company is based on in the cloud, it should be
                  concerned with how the cloud provider will help the company.
                </p>
                <p>
                  Businesses sometimes find themselves in the cloud may be long
                  butbefore they planned on it, there should be a self-service
                  interface so it may easy for the customer to set up & change,
                  and exit from cloud services.
                </p>
                <p>
                  however, is who at the customers’s business will do this. As
                  it could be anyone that day. All that is needed is a corporate
                  credit card, and a department can be off to the races putting
                  data in the cloud. The term for this is not new; it is shadow
                  IT. This term is getting a lot of uses now-a- days.
                </p>

                <h3>Cloud Governance</h3>
                <p>
                Governance oversight provided to  business by senior executives and the board of directors . Cloud unanswered questions about business goals and objectives that make managing a cloud and its security very difficult to be understand.
                </p>

                <p>
                Company ever gets into a cloud, it should consider what should be its goals and objectives are. The goals and objectives should be guided with regulations, and contracts. cloud governance directs employees down the correct path to assist the company in achieving goals and objectives.
                </p>

              </div>
            </div>

            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/cloud-governance3.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/cloud-governance.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
              <h3>Contracts</h3>
                <p>
                Contracts define a formal agreement between parties. When a company enters into for contract, it's obligated to live up to the terms. 
                </p>
                <p>
                A business should be also check by any contracts with the customers outline what the company can or can't do with the cloud. 
                </p>

                <h3>Standards</h3>
                <p>
                Many businesses use standards such as ISO 9000 , ISO 9000:2015 ISO 27001 or as a foundation for implementing security controls. If any business decides ISO 27001 as its standard, the company needs to train employees so the proper skills and.
                </p>
                <h3>Audits</h3>
                <p>
                One way to assess the level of compliance with laws, regulations, and contracts is to have an audit. Audits can be internal or external. An internal audit, completed by the business’ own auditors, provides a self-assessment to determine its level of compliance. The results of an internal audit can be viewed as skewed since the auditors could be biased in their conclusions.
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

export default Awsconsulting;
