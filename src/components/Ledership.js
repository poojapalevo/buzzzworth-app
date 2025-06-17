"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Leadership() {

    return (
        <div className="Leadership-sec ">
            <div className="Leadership-heading ">
                <h3 className="heading-2 white-txt">Leadership <span>circle</span> </h3>
            </div>
            <div className="Leadership-cards-wrap">
                <div className="swiper leadership-slider">
                    <Swiper spaceBetween={10} slidesPerView={5} >
                    <SwiperSlide className="swiper-slide"  style={{height:'auto'}}>
                        <div className="Leadership-card card-1 transform_none" >
                            <div className="Leadership-card-img">
                                <img src="assets/images/asmita.png" alt="img" />
                            </div>
                            <div className="Leadership-card-content">
                                <div className="Leadership-card-heading">
                                    <span className="Leadership-card-subtitle">Founder, CEO</span>
                                    <h5 className="Leadership-card-title">Asmita Chauhan</h5>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"  style={{height:'auto'}}>
                        <div className="Leadership-card card-2 transform_none">
                            <div className="Leadership-card-img">
                                <img src="assets/images/aayushi.png" alt="img" />
                            </div>
                            <div className="Leadership-card-content">
                                <div className="Leadership-card-heading">
                                    <span className="Leadership-card-subtitle">Director Of Strategy</span>
                                    <h5 className="Leadership-card-title">Aayushi Rastogi</h5>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" style={{height:'auto'}}>
                        <div className="Leadership-card card-3 transform_none">
                            <div className="Leadership-card-img">
                                <img src="assets/images/amol.png" alt="img" />
                            </div>
                            <div className="Leadership-card-content">
                                <div className="Leadership-card-heading">
                                    <span className="Leadership-card-subtitle">Creative Director </span>
                                    <h5 className="Leadership-card-title">Amol Mendadkar</h5>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"  style={{height:'auto'}}>
                        <div className="Leadership-card card-4 transform_none">
                            <div className="Leadership-card-img">
                                <img src="assets/images/tushar.png" alt="img" />
                            </div>
                            <div className="Leadership-card-content">
                                <div className="Leadership-card-heading">
                                    <span className="Leadership-card-subtitle">Lead Designer - Social & Graphics</span>
                                    <h5 className="Leadership-card-title">Tushar Mane</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"  style={{height:'auto'}}>
                        <div className="Leadership-card card-5 transform_none">
                            <div className="Leadership-card-img">
                                <img src="assets/images/sudipta.png" alt="img" />
                            </div>
                            <div className="Leadership-card-content">
                                <div className="Leadership-card-heading">
                                    <span className="Leadership-card-subtitle"> Lead Motion Graphic Designer</span>
                                    <h5 className="Leadership-card-title">Sudipta Das</h5>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </div>
    );
}