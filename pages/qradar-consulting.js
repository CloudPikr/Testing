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

const qradarconsulting = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="QRadar Consulting" />

      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>QRadar Consulting</h3>
                <p>
                  This Cyber security threats now has been becoming more
                  advanced and more persistent. This demands for amount of
                  effort by security analysts to sift through with uncounted
                  incidents .This QRadar Security Information makes easy to
                  remediate threats with easy & faster while maintaining your
                  bottom line. QRadar Security Information prioritizes is a
                  high-fidelity alerts to help you catch threats that others
                  simply miss it.
                </p>

                <p>
                  <b>Detect targeted threats</b>
                  QRadar SIEM provides visibility across a hybrid cloud. QRadar
                  Security Information correlates hybrid cloud data to show the
                  attacker’s path threat intelligence to validate the source of
                  the attack as a known command and control center.
                </p>
              </div>
            </div>

            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/qradar-consulting.jpg"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row ">
            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/qradar-consulting1.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3> Catch threats SIEM and AI</h3>

                <p>
                  QRadar analytics monitor threat network & user behavior
                  anomalies to prioritize where immediate attention &
                  remediation is needed. When these threat actors trigger
                  multiples detections analytics, move across the network or
                  change their behaviors, QRadar Security Information will track
                  each tactic and technique being used. More important, it will
                  correlate, track and identify related activities throughout a
                  kill chain for a single high-fidelity case which automatically
                  prioritized.
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

export default qradarconsulting;
