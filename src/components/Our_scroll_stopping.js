"use client";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Our_scroll_stoping() {
    const data = [
        {
            img: "assets/images/socialcard11.png",
            text: "We received an overwhelming response from the customers. More than 80+ customers from various industries.",
            tags: "#rexel #aworldofenergy #nVentHoffman",
            time: "5 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb-b.svg",
        },
        {
            img: "assets/images/socialM1.jpg",
            time: "6 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb.svg",
        },
        {
            img: "assets/images/socialM2.jpg",
            time: "6 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb.svg",
        },
        {
            img: "assets/images/socialcard12.png",
            text: "We received an overwhelming response from the customers. More than 80+ customers from various industries.",
            tags: "#rexel #aworldofenergy #nVentHoffman",
            time: "6 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb-b.svg",
        },
        {
            img: "assets/images/socialM2.jpg",
            time: "7 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb.svg",
        },
        {
            img: "assets/images/socialM1.jpg",
            time: "9 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb.svg",
        },
        {
            img: "assets/images/socialcard13.png",
            text: "We received an overwhelming response from the customers. More than 80+ customers from various industries.",
            tags: "#rexel #aworldofenergy #nVentHoffman",
            time: "10 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb-b.svg",
        },
        {
            img: "assets/images/socialM1.jpg",
            time: "10 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb.svg",
        },
        {
            img: "assets/images/socialM2.jpg",
            time: "11 months ago",
            icon: "https://india.rexel.co.in/images/svg/fb.svg",
        },
        {
            img: "assets/images/socialcard11.png",
            text: "We received an overwhelming response from the customers. More than 80+ customers from various industries.",
            tags: "#rexel #aworldofenergy #nVentHoffman",
            time: "1 year ago",
            icon: "https://india.rexel.co.in/images/svg/fb-b.svg",
        },
    ];

    const Slide = () => {
        const slides = [];
        let i = 0;

        while (i < data.length) {
            if (i % 3 === 0){
                slides.push(
                    <SwiperSlide key={i} >
                        <div className="temp8-box1">
                            <div className="temp8-box1-img">
                                <img src={data[i].img} alt="Buzzzwoth India" />
                                <div className="temp8-overlay"></div>
                            </div>
                            <div className="temp8-box1-text">
                                <p>
                                    {data[i].text}
                                </p>
                                <a href="#">{data[i].tags}</a>
                                <div className="temp8-box1Social">
                                    <div className="temp8-box1SocialIcon f">
                                        <img src="https://india.rexel.co.in/images/svg/fb-b.svg" alt="FB" />
                                    </div>
                                    <div className="temp8-box1Time">
                                        <div className="temp8-box1TimeTitle">Buzzzwoth India</div>
                                        <div className="temp8-box1TimeHour">{data[i].time}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </SwiperSlide>
                );
                i += 1;
            } else {
                slides.push(
                    <SwiperSlide key={i} >
                        <div className="temp8-box2">
                            {[data[i], data[i + 1]]
                                .filter(Boolean) 
                                .map((card, idx) => (
                                    <div key={idx} className="temp8-box2-img">
                                        <img src={card.img} alt="Buzzzwoth India" />
                                        <div className="temp8-overlay"></div>
                                        <div className="temp8-box1Social">
                                            <div className="temp8-box1SocialIcon f">
                                                <img src="https://india.rexel.co.in/images/svg/fb.svg" alt="in" />
                                            </div>
                                            <div className="temp8-box1Time">
                                                <div className="temp8-box1TimeTitle">Buzzzwoth India</div>
                                                <div className="temp8-box1TimeHour">{card.time}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </SwiperSlide>
                );
                i += 2;
            }
        }

        return slides;
    }


    return (
        <section>
            <div className="temp-8">
                <div className="">
                    <h3 className="effect-fadeUp transform_none"><span>Our</span> scroll <span>stopping </span> side</h3>
                    <div className="temp-8Social ">
                        <div className="social">
                            <a href="https://www.facebook.com/RexelIndiaPvtLtd/" className="f aos-init" > <img
                                src="https://india.rexel.co.in/images/svg/fb-b.svg" alt="FB" /> </a>
                            <a href="https://www.instagram.com/rexelindiapvtltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                className="insta"> <img src="https://india.rexel.co.in/images/insta_white1.svg" alt="Insta" /> </a>
                            <a href="https://in.linkedin.com/company/rexel-india-pvt-ltd-" className="in"> <img
                                src="https://india.rexel.co.in/images/svg/linkDin-b.svg" alt="in" /> </a>
                            <a href="https://www.youtube.com/@RexelIndia/videos" className="tube"> <img
                                src="https://india.rexel.co.in/images/svg/tube-b.svg" alt="Insta" /> </a>
                        </div>
                    </div>
                </div>
                <div className="temp8-area effect-fadeUp transform_none">
                    <div className="temp8-areaSocial">
                        <div className="swiper temp-8-slider">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                            >
                                {Slide()}
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}