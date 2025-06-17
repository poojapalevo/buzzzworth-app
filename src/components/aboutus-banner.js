"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

export default function AboutUs_banner() {

    return (
        <div className=" aboutus-banner ">
            <div className="aboutus-banner-heading">
                <h3 className="heading-2 ">We’re <span>not just marketers</span><br />
                    <span> we’re brand </span>evolutionists<span> who craft </span><br />
                    <span class="slide-wrap">
                        out of box strategies that
                        <div className="aboutus-slider-wrapper">
                            {/* <div className="swiper aboutus-banner-slider"> */}
                            <Swiper
                                direction="vertical"
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}
                                modules={[Pagination, Autoplay]}
                                mousewheel
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2000, // 3 seconds between slides
                                    disableOnInteraction: false, // keeps autoplay after user swipes
                                }}
                                speed={300}
                                className="aboutus-banner-slider"
                            >
                                <SwiperSlide className="swiper-slide">
                                    <div className="slide-card slide-bg1">
                                        <div className="slide-card-img">
                                            <img src="assets/images/ab-slideicn-6.png" alt="img" />
                                        </div>
                                        <h3 className="slide-card-title">connect</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="slide-card slide-bg2">
                                        <div className="slide-card-img">
                                            <img src="assets/images/ab-slideicn-1.png" alt="img" />
                                        </div>
                                        <h3 className="slide-card-title">Convert</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="slide-card slide-bg3">
                                        <div className="slide-card-img">
                                            <img src="assets/images/ab-slideicn-2.png" alt="img" />
                                        </div>
                                        <h3 className="slide-card-title">Compel</h3>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                            {/* </div> */}
                        </div>
                    </span>

                </h3>
            </div>
        </div>
    );
}