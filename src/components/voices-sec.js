"use client";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Voices_sec() {
    const reviews = [
        {
            stars: 5,
            comment: `“We truly appreciate the dedication and creativity the Buzzzworth team has brought to the table. Your ability to manage tight timelines and still deliver exceptional outcomes has been commendable. At LG, we are committed to excellence, and it’s been refreshing to see a partner that matches that drive.”`,
            avatar: "assets/images/review-avatar.png",
            name: "LG India",
            designation: "Head - Marketing, Digital Marketing and CRM",
        },
        {
            stars: 3,
            comment: `“We want to extend our heartfelt thanks to the Buzzzworth team for the fantastic support in developing AFL’s Power Play theme video and launch assets. The creativity and commitment you brought to the table made all the difference.”`,
            avatar: "assets/images/review-avatar.png",
            name: "Axis Finance Ltd",
            designation: "Head - Marketing, Digital Marketing and CRM",
        },
        {
            stars: 4,
            comment: `“Working with Buzzzworth has been a game-changer for our social media. They helped us grow our followers and boost engagement quickly. The team is professional, responsive, and always delivers on time!
            Buzzzworth transformed our social media strategy. Their expertise and attention to detail are unmatched!”`,
            avatar: "assets/images/review-avatar.png",
            name: "Rexel India",
            designation: "Head - Marketing, Digital Marketing and CRM",
        },
    ];


    const brandLogos = [
        "assets/images/marquee-brand1.png",
        "assets/images/marquee-brand2.png",
        "assets/images/marquee-brand3.png",
        "assets/images/marquee-brand4.png",
        "assets/images/marquee-brand5.png",
        "assets/images/marquee-brand6.png",
        "assets/images/marquee-brand7.png",
        "assets/images/marquee-brand8.png"
    ];


    return (
        <section>
            <div className="voices-sec ">
                <div className="voices-heading ">
                    <h3>Voices <span>that back</span> our vision </h3>
                </div>
                <div className="review-wrap">
                    <Swiper spaceBetween={20} slidesPerView={3} className="review-slider">
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index} className="swiper-slide" style={{ height: 'auto' }}>
                                <div className="review-card">
                                    <div className="review-card-comma">
                                        <img src="assets/images/comma.svg" alt="quote" />
                                    </div>
                                    <div className="review-card-content">
                                        <div className="review-card-ratings">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <img key={i} src="assets/images/ratings.svg" alt="star" />
                                            ))}
                                        </div>
                                        <p className="review-card-comment">{review.comment}</p>
                                    </div>
                                        <div className="review-card-userdetail">
                                            <div className="review-card-user-avatar">
                                                <img src={review.avatar} alt={review.name} />
                                            </div>
                                            <div className="review-card-user-name">
                                                <h5>{review.name}</h5>
                                                <span>{review.designation}</span>
                                            </div>
                                        </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

                <div className="logo-scroller">
                    <div className="logo-scroller-content">
                        <div className="logo-scroller-items" role="marquee">
                            <div className="logo-scroller-row">
                                {brandLogos.map((logo, index) => (
                                    <div className="logo-scroller-item" key={index}>
                                        <span><img src={logo} alt={`brand-${index + 1}`} /></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}