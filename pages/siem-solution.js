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

const siemsolution = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="SIEM Solution" />

      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>SIEM Solution</h3>
                <p>
                  The Combining security information management (SIM) & security
                  event management (SEM), security information & event
                  management (SIEM) offers real-time monitoring & analysis of
                  events as well as tracking and logging of auditing purposes.
                </p>

                <p>
                  Put simply, SIEM is a security solution which helps
                  organizations recognize potential security threats and
                  vulnerabilities before they have a chance for disrupt business
                  operations. It surfaces user behavior anomalies and uses
                  artificial intelligence to automate many of the manual
                  processes associated with threat detection & incident response
                  and it has become a staple in security operation centers for
                  security and compliance management use cases.
                </p>

                <p>
                  It has matured to become the log management tools which
                  preceded it. Today, SIEM offers advanced user & entity
                  behavior analytics (UEBA) thanks to the power of AI & machine
                  learning. It is very highly efficient data orchestration
                  system for managing ever-evolving threats as well as
                  regulatory compliance & reporting.
                </p>
              </div>
            </div>

            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/siem-solution1.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row ">
            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/siem-solution.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3> How does SIEM work?</h3>

                <p>
                  the most basic level, SIEM solutions perform some level of
                  data aggregation, consolidation & sorting functions in order
                  to identify threats and adhere to data compliance
                  requirements. While some solution vary in capability, most
                  offer the same core set of functionalities:
                </p>
                <p>
                  <b>Log Management </b> <br /> SIEM captures event data from a
                  wide range of source with across an organization’s entire
                  network. Logs and flow data from users, assets ,applications,
                  cloud environments, & networks is collected, stored and
                  analyzed in real-time, giving IT & security teams the ability
                  to automatically manage their network's event log and network
                  flow data in one centralized location.
                </p>
                <p>
                  SIEM solutions also integrate by third-party threat
                  intelligence feeds in order to correlate their internal
                  security data against previously recognized threat signatures
                  & profiles. Integration with real-time threat feeds enable
                  teams to block and detect new types of attack signatures.
                </p>
                <p>
                  <b>Event Correlation and Analytics</b> <br /> Event
                  correlation is an essential part of SIEM solution. Utilizing
                  advanced analytics to identify & understand intricate data
                  patterns, event correlation provides insights to quickly
                  locate & mitigate potential threats to business security. SIEM
                  solutions significantly improve mean time to detect for IT
                  security teams by offloading the manual workflows associated
                  with the in-depth analysis of security events.
                </p>

                <p>
                  <b>Incident Monitoring and Security Alerts </b> <br /> they
                  enable centralized of on-premise & cloud based infrastructure,
                  This solution may be able to identify all entities. This
                  allows SIEM technology to monitor for security incidents
                  across all connected devices, users,& applications while
                  classifying abnormal behavior as it is detected in the
                  network. Using customizable, predefined correlation all rules,
                  administrators can be alerted & take appropriate actions to
                  mitigate it before it materializes into more significant
                  security issues.
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

export default siemsolution;
