"use client";
import Header from "@/components/common/Header";
import ClassSwitcher from "@/components/common/layout";
import PageLayout from "@/components/common/pageLayout";
import ContactUs from "@/components/contactUsForm";
import Floating_cta from "@/components/Floating-cts";
import Footer from "@/components/Footer";
import Latest_blog from "@/components/latest_blogs";
import { useEffect } from "react";

export default function Blog_details() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const timer1 = setTimeout(() => {
                if (window.innerWidth > 991) {
                    document.body.classList.add("onLoadSection");
                }
            }, 2000);

            const timer2 = setTimeout(() => {
                const loader = document.querySelector(".page-loader");
                if (loader) {
                    loader.classList.add("fade-out");
                    setTimeout(() => {
                        loader.style.display = "none";
                        document.body.classList.remove("overflow_hidden");
                    }, 500);
                }
            }, 2000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, []);

    return (
        <>
            <PageLayout backgroundClass="white_background" showVideoBackground={false} >
                <div className="blogs-details-body">
                    <div className="blogs-banner-title-wrap">
                        <div className="blogs-banner-heading">
                            <h2 className="heading-3">The impact of color psychology in web design</h2>
                        </div>
                        <div className="blogs-banner-metadata-wrap">
                            <div className="blogs-metadata-left">
                                <p>work life</p>
                            </div>
                            <div className="blogs-metadata-right">
                                <ul className="blogs-metadata-list">
                                    <li className="blogs-metadata-listitem"> <img src="assets/images/svg/contact-icn.svg" alt="svg" />Wade Warren</li>
                                    <li className="blogs-metadata-listitem"> <img src="assets/images/svg/claender-icn.svg" alt="svg" />November 10, 2024</li>
                                    <li className="blogs-metadata-listitem"> <img src="assets/images/svg/clock-icn.svg" alt="svg" />9 min read</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="blogs-banner-img">
                        <img src="assets/images/blog-banner.png" alt="banner" />
                    </div>
                    <div className="blogs-details-content-wrapper">
                        <p>An abstract image showing a robotic hand and a human hand painting a canvas together, symbolizing AI-human collaboration.</p>
                        <div className="blogs-details-content">
                            <h3>Insights and Strategies</h3>
                            <p>The key to working with AI lies in understanding its limitations and using it to your advantage.</p>
                            <ul>
                                <li><img src="assets/images/right-mark.png" alt="img" />Intention or real they'd over their the that all of he there objects switching.</li>
                                <li><img src="assets/images/right-mark.png" alt="img" />Sign seemed business were for world mad in roasted then.</li>
                                <li><img src="assets/images/right-mark.png" alt="img" />Work opposite don't the odd expenses has high relays so and a honour.</li>
                                <li><img src="assets/images/right-mark.png" alt="img" />Finds tried title scale necessary orthographic what though.</li>
                            </ul>
                            <div className="blogs-qoutes-box">
                                <h4>"Creativity seems impossible until it's done. Every goal begins as a daunting challenge, yet persistence and faith have a way of transforming dreams into reality." <span>– Nelson Mandela</span></h4>
                            </div>
                        </div>
                        <div className="blogs-details-content">
                            <h3>As have to Achieves Always People</h3>
                            <p>History proves it: every time tech evolves, people panic about creativity dying. And every time, creatives win. Think photography, digital illustration, or 3D animation—they didn’t kill creativity, they expanded it. The same
                                is true with AI</p>
                            <p>Rather than replacing the human spark, AI simply removes roadblocks. It gives you draft options, creative alternatives, and a fast-forward button for exploring possibilities. If you’re still doing every step manually, you’re
                                working too hard. Let AI be your intern—then you get to play creative director.</p>

                            <div className="blogs-details-content-img">
                                <img src="assets/images/blog-banner-2.png" alt="banner" />
                            </div>

                            <div className="blogs-qoutes-box">
                                <h4>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it
                                    yet, keep looking. Don’t settle" <span>– Steve Jobs</span></h4>
                            </div>
                        </div>
                        <div className="blogs-details-content">
                            <h3>The Fixed Enormity, This Thousands Turner</h3>
                            <p> AI is fast. You’re human. That’s the perfect match. While AI can generate 100 logo options in seconds, only you can pick the one that moves a brand forward. While it can auto-tune a melody, only you can write the lyrics that
                                make someone cry.</p>

                        </div>
                    </div>
                </div>
                <Latest_blog />
                <Footer />
                <Floating_cta />
            </PageLayout>
        </>
    );
}
