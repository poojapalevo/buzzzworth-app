"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function OurStrategic() {

    return (
        <div className="temp5 em-buzz-sec ">
            <h3 className="heading-2 effect-fadeUp"><span>Our strategic </span>belief system</h3>

            <div className="container-area">
                <div className="em-buzzz-card-wrapper">
                    <div className="swiper em-card-slider">
                        <Swiper spaceBetween={10} slidesPerView={5}>
                            <SwiperSlide className="swiper-slide" style={{height:'auto'}}>
                                <div className="em-card card-1">
                                    <div className="belief-system-cardimg">
                                        <img src="assets/images/beleif-cardicn-1.png" alt="img" />
                                    </div>
                                    <div className="em-card-conent-wrap">
                                        <div className="em-card-conent">
                                            <h5 className="em-card-title">Empathy <br />Led Strategy</h5>
                                            <p className="em-card-subtitle">We believe great ideas begin with understanding of consumers, cultures, and contexts</p>
                                        </div>
                                    </div>
                                    <div className="card-bg1">
                                        <img src="./assets/images/cardbgcolor1.png" alt="img" />
                                    </div>
                                    <div className="card-bg2">
                                        <img src="./assets/images/cardbgcolor2.png" alt="img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" style={{height:'auto'}}>
                                <div className="em-card card-2">
                                    <div className="belief-system-cardimg">
                                        <img src="assets/images/beleif-cardicn-2.png" alt="img" />
                                    </div>
                                    <div className="em-card-conent-wrap">
                                        <div className="em-card-conent">
                                            <h5 className="em-card-title">Curiosity Over <br /> Assumption </h5>
                                            <p className="em-card-subtitle">We question more, research deeper, and listen harder</p>
                                        </div>
                                    </div>
                                    <div className="card-bg1">
                                        <img src="./assets/images/cardbgcolor3.png" alt="img" />
                                    </div>
                                    <div className="card-bg2">
                                        <img src="./assets/images/cardbgcolor4.png" alt="img" />
                                    </div>
                                    <div className="card-bg3">
                                        <img src="./assets/images/cardbgcolor5.png" alt="img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" style={{height:'auto'}}>
                                <div className="em-card card-3">
                                    <div className="belief-system-cardimg">
                                        <img src="assets/images/beleif-cardicn-3.png" alt="img" />
                                    </div>
                                    <div className="em-card-conent-wrap">
                                        <div className="em-card-conent">
                                            <h5 className="em-card-title">Impact in Every <br />Interaction</h5>
                                            <p className="em-card-subtitle">Put your brand where the buzz lives. Get discovered, shared, memed, and remembered — for all the right reasons.</p>
                                        </div>

                                    </div>
                                    <div className="card-bg1">
                                        <img src="./assets/images/cardbgcolor6.png" alt="img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" style={{height:'auto'}}>
                                <div className="em-card card-4">
                                    <div className="belief-system-cardimg">
                                        <img src="assets/images/beleif-cardicn-4.png" alt="img" />
                                    </div>
                                    <div className="em-card-conent-wrap">
                                        <div className="em-card-conent">
                                            <h5 className="em-card-title">Innovation <br />with Intention</h5>
                                            <p className="em-card-subtitle">We disrupt with purpose, crafting ideas that move both brands and behaviour</p>
                                        </div>

                                    </div>
                                    <div className="card-bg1">
                                        <img src="./assets/images/cardbgcolor7.png" alt="img" />
                                    </div>
                                    <div className="card-bg2">
                                        <img src="./assets/images/cardbgcolor8.png" alt="img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" style={{height:'auto'}}>
                                <div className="em-card card-5">
                                    <div className="belief-system-cardimg">
                                        <img src="assets/images/beleif-cardicn-5.png" alt="img" />
                                    </div>
                                    <div className="em-card-conent-wrap">
                                        <div className="em-card-conent">
                                            <h5 className="em-card-title">Relevance with <br />Responsibility</h5>
                                            <p className="em-card-subtitle">We don’t chase trends, we tap into what matters, when it matters most</p>
                                        </div>

                                    </div>
                                    <div className="card-bg1">
                                        <img src="./assets/images/cardbgcolor9.png" alt="img" />
                                    </div>
                                    <div className="card-bg2">
                                        <img src="./assets/images/cardbgcolor10.png" alt="img" />
                                    </div>
                                    <div className="card-bg3">
                                        <img src="./assets/images/cardbgcolor11.png" alt="img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}