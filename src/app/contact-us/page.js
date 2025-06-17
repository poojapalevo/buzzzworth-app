"use client"
import Header from "@/components/common/Header";
import ClassSwitcher from "@/components/common/layout";
import PageLayout from "@/components/common/pageLayout";
import ContactUs from "@/components/contactUsForm";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

export default function Contact_us() {

  return (
    <>
      <PageLayout backgroundClass="about-us-bg" showVideoBackground={false} >
      <div className="banner-inn">
        <img src="assets/images/contact-banner.jpg" alt="banner inn" />
        <div className="bannerInn-textArea">
          <div className="bannerInn-text">
            <ul className="breadcrumb-list">
              <li className="breadcrumb-list-item">
                <Link href="/home">Home</Link>
              </li>
              <li className="breadcrumb-list-item active">get in touch</li>
            </ul>
            <div className="bannerInn-heading">
              <h2>
                Get in <small>touch</small>
              </h2>
              <p>Your thoughts matter. Share them with us today.
                        We’re here to help, collaborate, and create.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-sec">
        <div className="info-left">
          <h4 className="info-title">
            <span>Contact</span> Information
          </h4>
        </div>
        <div className="info-right">
          <div className="contact-info-card contact-info-left">
            <div className="contact-label">Email Address</div>
            <div className="contact-value">hello@buzzzworth.com</div>
            {/* <div className="contact-hours">
              Assistance hours: <br />
              Monday - Friday 6 am to 8 pm EST
            </div> */}
          </div>
          <div className="contact-info-card contact-info-right">
            <div className="contact-label">Number</div>
            <div className="contact-value">(+91) 86910 05079</div>
            {/* <div className="contact-hours">
              Assistance hours: <br />
              Monday - Friday 6 am to 8 pm EST
            </div> */}
          </div>
        </div>
      </div>
      <section className="white_background">
        <ContactUs Title={<><span>we’re always just a </span>  <br /> click away!</>} />
      </section>
      <Footer />
      </PageLayout>
    </>
  );
}
