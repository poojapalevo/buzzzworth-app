"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
export default function Latest_blog() {

    return (
        <div className="letest-blogs-sec about-us-bg">
            <div className="letest-blogs-heading">
                <h2 className="heading-3">Latest <span>Blogs</span></h2>
            </div>

            <div className="letest-blogs-wrapper">
                <div className="swiper letest-blogs-slider">
                    <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                            >
                        <SwiperSlide>
                            <div className="letest-blogs-card">
                                <div className="blog-card-img">
                                    <img src="assets/images/letestblog-img1.png" alt="image" />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-card-subtitle">Technology | 13 Sept, 2024 </span>
                                    <h4 className="blog-card-title">Why AI won't steal your creativity</h4>
                                    <p className="blog-card-description">AI’s fast. You’re faster. Here’s why your messy, human imagination will always outrun a perfect algorithm</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="letest-blogs-card">
                                <div className="blog-card-img">
                                    <img src="assets/images/letestblog-img2.png" alt="image" />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-card-subtitle">Technology | 13 Sept, 2024 </span>
                                    <h4 className="blog-card-title">Clicks don’t lie, but they do ghost you!</h4>
                                    <p className="blog-card-description">What happens when performance peaks but loyalty flatlines? Let’s talk metrics, meaning.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="letest-blogs-card">
                                <div className="blog-card-img">
                                    <img src="assets/images/letestblog-img3.png" alt="image" />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-card-subtitle">Technology | 13 Sept, 2024 </span>
                                    <h4 className="blog-card-title">Clicks don’t lie, but they do ghost you!</h4>
                                    <p className="blog-card-description">What happens when performance peaks but loyalty flatlines? Let’s talk metrics, meaning.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="letest-blogs-card">
                                <div className="blog-card-img">
                                    <img src="assets/images/letestblog-img4.png" alt="image" />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-card-subtitle">Technology | 13 Sept, 2024 </span>
                                    <h4 className="blog-card-title">Clicks don’t lie, but they do ghost you!</h4>
                                    <p className="blog-card-description">What happens when performance peaks but loyalty flatlines? Let’s talk metrics, meaning.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="letest-blogs-card">
                                <div className="blog-card-img">
                                    <img src="assets/images/letestblog-img5.png" alt="image" />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-card-subtitle">Technology | 13 Sept, 2024 </span>
                                    <h4 className="blog-card-title">Clicks don’t lie, but they do ghost you!</h4>
                                    <p className="blog-card-description">What happens when performance peaks but loyalty flatlines? Let’s talk metrics, meaning.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
}