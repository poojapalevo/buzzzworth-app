"use client";

import Link from "next/link";


export default function OurService_banner() {

    return (
        <div className="banner-inn">
            <img src="assets/images/contact-banner.jpg" alt="banner inn" />

            <div className="bannerInn-textArea">
                <div className="bannerInn-text">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-list-item"><Link href="/home">Home</Link></li>
                        <li className="breadcrumb-list-item active">Our Services</li>
                    </ul>
                    <div className="bannerInn-heading">
                        <h2>Our <small>services</small></h2>
                        <p>Smart thinking. Sharp execution. Everything you need to build buzz, brand love, and business impact.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}