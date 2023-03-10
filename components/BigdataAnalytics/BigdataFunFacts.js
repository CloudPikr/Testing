import React from 'react';
import Link from 'next/link';

const BigdataFunFacts = () => {
    return (
        <div className="funfacts-area bg-image ptb-80">
			<div className="container">
				<div className="section-title">
					<h2>Maximise your investment in the Cloud.</h2>
					<div className="bar"></div>
					<p>CloudPikr provides unmatched experience and support to migrate your workload, build, maintain, and optimize your investment in the cloud so that you can lower cost, maintain required availability and performance levels.</p>
				</div>

				

				<div className="contact-cta-box">
					<h3>Have any question about us?</h3>
					<p>Don't hesitate to contact us</p>

                    <Link href="/contact">
					    <a className="btn btn-primary">Contact Us</a>
                    </Link>
				</div>
			</div>
		</div>
    )
}

export default BigdataFunFacts;  