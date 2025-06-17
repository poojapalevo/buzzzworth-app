"use client";
import Link from "next/link";
export default function Em_buzz_sec() {


    return (
        <section className="em_buzzzworth_section service-card-sec">
            <div className="cus_container">
                <div className="section_info">
                    <div className="heaiding_box">
                        <h3 className="heaidng-2 slide_up_gsap">Let’s make <span>‘em buzzzworth-y</span></h3>
                    </div>


                    <div className="card_grid slide_up_gsap">
                        <div className="card_item">
                            <div className="services-card">
                                <div className="services-card-icn">
                                    <img src="assets/images/servic-card-icn1.png" alt="icon" />
                                </div>
                                <div className="services-card-content-wrapper">
                                    <div className="services-card-content">
                                        <h5 className="services-card-title">
                                            Social Media <br />
                                            Marketing
                                        </h5>
                                        <p className="services-card-subtitle">Through digital platforms and campaigns, engage audiences and promote your product or service.</p>
                                    </div>
                                    <div className="hashtags-wrap">
                                        <div className="hashtags-parent">
                                            <span className="services-card-hashtag">Social Media Marketing</span>
                                            <span className="services-card-hashtag">Social Content</span>
                                            <span className="services-card-hashtag">Influencer Marketing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-card-link">
                                    <a href="#commonForm"> Get Demo <img src="assets/images/svg/arrow-right.svg" alt="img" /> </a>
                                </div>
                            </div>
                        </div>
                        <div className="card_item">
                            <div className="services-card">
                                <div className="services-card-icn">
                                    <img src="assets/images/servic-card-icn2.png" alt="icon" />
                                </div>
                                <div className="services-card-content-wrapper">
                                    <div className="services-card-content">
                                        <h5 className="services-card-title">
                                            Performance <br />
                                            Marketing
                                        </h5>
                                        <p className="services-card-subtitle">These online marketing campaigns that contribute to drive results like clicks and support unique business models.</p>
                                    </div>
                                    <div className="hashtags-wrap">
                                        <div className="hashtags-parent">
                                            <span className="services-card-hashtag">Google Advirtising</span>
                                            <span className="services-card-hashtag">Media Advirtising</span>
                                            <span className="services-card-hashtag">Social Media Advirtising</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-card-link">
                                    <a href="#commonForm"> Get Demo <img src="assets/images/svg/arrow-right.svg" alt="img" /> </a>
                                </div>
                            </div>
                        </div>
                        <div className="card_item">
                            <div className="services-card">
                                <div className="services-card-icn">
                                    <img src="assets/images/servic-card-icn3.png" alt="icon" />
                                </div>
                                <div className="services-card-content-wrapper">
                                    <div className="services-card-content">
                                        <h5 className="services-card-title">
                                            Branding & <br />
                                            Communication
                                        </h5>
                                        <p className="services-card-subtitle">Brand communication happens whenever a customer interacts with the brand.</p>
                                    </div>
                                    <div className="hashtags-wrap">
                                        <div className="hashtags-parent">
                                            <span className="services-card-hashtag">Brand Stategy</span>
                                            <span className="services-card-hashtag">Logo design</span>
                                            <span className="services-card-hashtag">Brand Identity design</span>
                                            <span className="services-card-hashtag">Packeging design</span>
                                            <span className="services-card-hashtag">Marketing collaterals design</span>
                                            <span className="services-card-hashtag">Corporate Branding</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-card-link">
                                    <a href="#commonForm"> Get Demo <img src="assets/images/svg/arrow-right.svg" alt="img" /> </a>
                                </div>
                            </div>
                        </div>
                        <div className="card_item">
                            <div className="services-card">
                                <div className="services-card-icn">
                                    <img src="assets/images/servic-card-icn4.png" alt="icon" />
                                </div>
                                <div className="services-card-content-wrapper">
                                    <div className="services-card-content">
                                        <h5 className="services-card-title">
                                            Digital <br />
                                            Strategy
                                        </h5>
                                        <p className="services-card-subtitle">These online marketing campaigns that contribute to drive results like clicks and support unique business models.</p>
                                    </div>
                                    <div className="hashtags-wrap">
                                        <div className="hashtags-parent">
                                            <span className="services-card-hashtag">Google Advirtising</span>
                                            <span className="services-card-hashtag">Media Advirtising</span>
                                            <span className="services-card-hashtag">Social Media Advirtising</span>
                                            <span className="services-card-hashtag">AD platforms</span>
                                            <span className="services-card-hashtag">PPC Management</span>
                                            <span className="services-card-hashtag">campaigns objectives</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-card-link">
                                    <a href="#commonForm"> Get Demo <img src="assets/images/svg/arrow-right.svg" alt="img" /> </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="button_group slide_up_gsap">
                        <div className="section-CTA">
                            <Link href="/our-services" className="solid-btn">EXPLORE SERVICES</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
