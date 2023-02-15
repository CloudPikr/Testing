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

const Infrastructuremanagement = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Infrastructure Management" />

      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>Infrastructure Management</h3>
                <p>
                  Infrastructure Management and skilled resources are paramount
                  to successful adoption of emerging technologies.
                </p>
                <p>
                  We provide relevant expertise to ensure that company's core IT
                  infrastructure which can adapt to the market's dynamic needs,
                  prepare for the digital age and deliver business value.
                </p>
                <p>
                  We ensure the best service in Infrastructure Management
                  Services (IMS) is delivered with an enterprise governance
                  model tailored to meet individual client needs. This solution
                  covers level 1 application and infrastructure support along
                  with poly cloud provisioning & managed services. By combining
                  extreme with automation along with low & zero-touch AIOps, we
                  help enterprises drive efficiency in best way.
                </p>
                <p>
                  Infrastructure architects, business consultants and solutions
                  specialist’s clients globally, we deliver capabilities to
                  build, design, build, manage and innovate. We help drive
                  efficient operations and thrive in the digital age with IT
                  Infrastructure.
                </p>                 
              </div>
            </div>

            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/infrastructure-management.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row ">
            <div className="col-lg-6 services-details-image">
              <img
                src="/images/services-details-image/infrastructure-management2.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <h3>We follow the following services :-</h3>
                <h3>Core infrastructure services</h3>
                <p>Day-to-day infrastructure management, enhance  user experience, & provide real-time visibility on asset performance. Our services include:</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 
                  	Datacenter services (compute, storage, backup, archive)
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 	Network services (NOC, data, voice, video, contact center)
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 
                   	Data, web, and infrastructure applications (database, middleware, web, messaging & collaboration)
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 
                  Workplace services (ServiceDesk, Daa, desktop/laptop, mobile, VDI, app delivery)
                  <br /> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 
                  Cloud managed services (provisioning, support & managed services)
                  <br /> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 
                   	 Security services (IAM, GRC, SIEM, threat, vulnerability) 
                   
                </p>

                <h3>Allied services</h3>
                <p>
                IT asset management with services including data sciences to data platform modernization, and service desk support including:
                </p>
                <p><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>   	Data science and AI/ML (analytics, RPA, AI Ops)    <br />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> Directory and monitoring (patch management, job scheduling, software distribution, device and service monitoring)    <br />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>   ITAM (IT asset discovery, data evaluation and report, tooling)    <br />
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 	Data center modernization (platform transformation, data center consolidation )    <br />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> 	Service Desk & level 1 (voice, data, web, mail services integrated across application, infra)    <br />
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> ITSM and command center (Service Now, operating model design, directory, ITIL, SLA, reporting)  
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

export default Infrastructuremanagement;
