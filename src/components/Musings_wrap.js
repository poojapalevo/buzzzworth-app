"use client";

export default function Musings_wrap() {
    const musings = [
        {
            tag: "Artificial Intelligence",
            title: "Why AI won't steal your creativity",
            desc: "AI’s fast. You’re faster. Here’s why your messy, human imagination will always outrun a perfect algorithm",
            Res_img: "assets/images/musings-mob-img1.png",
            img: 'assets/images/musings1.png'
        },
        {
            tag: "Social Media",
            title: <>Scroll-stopping content: <span>myth or marketing science?</span></>,
            desc: "Viral isn't luck. It’s design. Let’s break down why some ideas explode - and others get left on read",
            Res_img: "assets/images/musings-mob-img2.png",
            img: 'assets/images/musings1.png'
        },
        {
            tag: "Marketing Trend",
            title: <>From buzzwords to virality: <span>trends that’ll actually matter in 2025</span></>,
            desc: "Spoiler: It’s not just about ‘authenticity’ anymore. See what’s really about to shake brands awake this ye",
            Res_img: "assets/images/musings-mob-img4.png",
            img: 'assets/images/musings1.png'
        },
        {
            tag: "Social Media",
            title:<>Clicks don’t lie, <span>but they do ghost you!</span></>,
            desc: "What happens when performance peaks but loyalty flatlines? Let’s talk metrics, meaning, and making every click count",
            Res_img: "assets/images/musings-mob-img3.png",
            img: 'assets/images/musings1.png'
        },
        {
            tag: "ORM,ial Listening",
            title: <>Don’t Wait <span>To Go Viral For The Wrong Reasons</span></>,
            desc: "What happens when performance peaks but loyalty flatlines? Let’s talk metrics, meaning, and making every click count",
            Res_img: "assets/images/musings-mob-img5.png",
            img: 'assets/images/musings1.png'
        },
    ];

    return (
        <section>
            <div className="temp10 musings-mob-wrap">
                <h3 className="effect-fadeUp transform_none">Buzzzworth-y <span>musings</span></h3>
                <div className="temp10-area effect-fadeUp transform_none">
                    <div className="temp10-gridArea">
                        <div className="temp10Leftcard">
                            {musings[0] && (
                                <><img src={musings[0].img} alt="AI" />
                                    <div className="temp10Text">
                                        <span className="temp10Card-tag">{musings[0].tag}</span>
                                        <h5>{musings[0].title}</h5>
                                        <p>{musings[0].desc}</p>
                                        <a href="#" className="musings-card-link">
                                            Read More <img src="assets/images/arrowright.png" alt="arrow" />
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="temp10midcard">

                                {musings[1] &&( <> <div className="temp10Card scroll-stopMain" style={{background:musings[1].img}}>
                                    <div className="temp10Text temp10TextAbsu">
                                        <span className="temp10Card-tag">{musings[1].tag}</span>
                                        <h6>{musings[1].title}</h6>
                                        <small>{musings[1].desc}</small>
                                        <a href="#" className="musings-card-link">
                                            Read More <img src="assets/images/arrowright.png" alt="arrow" />
                                        </a>
                                    </div>
                                </div>
                                </>)}
                                {musings[2]&&(<>
                                    <div className="temp10Card marketMain">
                                    <img src="assets/images/musings3.png" alt="Trend" className="market-img" />
                                    <div className="temp10Text temp10TextAbsu market">
                                        <span className="temp10Card-tag">{musings[2].tag}</span>
                                        <h6>{musings[2].title}</h6>
                                        <small>{musings[2].desc}</small>
                                        <a href="#" className="musings-card-link">
                                            Read More <img src="assets/images/arrowright.png" alt="arrow" />
                                        </a>
                                    </div>
                                </div>
                                </>)}

                        </div>

                        <div className="temp10Rightcard">

                                {musings[3]&&(<>
                                    <div className="temp10Card" style={{ background: "#f3e9e3" }} >
                                        <img src="assets/images/musings4.png" alt="Ghost Clicks" className="gost-img" />
                                        <div className="temp10Text temp10TextAbsu gost">
                                            <span className="temp10Card-tag">{musings[3].tag}</span>
                                            <h6>{musings[3].title}</h6>
                                            <small>{musings[3].desc}</small>
                                            <a href="#" className="musings-card-link">
                                                Read More <img src="assets/images/arrowright.png" alt="arrow" />
                                            </a>
                                        </div>
                                    </div>
                                    </>)}
                                    {musings[4]&&(<>
                                    <div className="temp10Card ormMain">
                                    <div className="temp10Text temp10TextAbsu orm">
                                        <span className="temp10Card-tag">{musings[4].tag}</span>
                                        <h6>{musings[4].title}</h6>
                                        <small>{musings[4].desc}</small>
                                        <a href="#" className="musings-card-link">
                                            Read More <img src="assets/images/arrowright.png" alt="arrow" />
                                        </a>
                                    </div>
                                </div>
                                </>)}
                        </div>
                    </div>

                    {/* Mobile Swiper Section */}
                    <div className="musings-mobile-sec">
                        <div className="musings-slider-wrapper">
                            <div className="swiper musings-mob-slider">
                                <div className="swiper-wrapper">
                                    {musings.map((item, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <div className={`musings-card m-card${index + 1}`}>
                                                <div className="musings-card-img">
                                                    <img src={item.img} alt="mobile card" />
                                                </div>
                                                <div className="musings-card-content">
                                                    <span className="musings-card-tag">{item.tag}</span>
                                                    <h4 className="musings-card-title"> {item.title} </h4>
                                                    <p className="musings-card-subtitle">{item.desc}</p>
                                                    <a href="#" className="musings-card-link">
                                                        Read More <img src="assets/images/arrowright.png" alt="arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
