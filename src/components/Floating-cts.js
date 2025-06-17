"use client";


export default function Floating_cta() {

    return (
        <div className="floating-CTA-wrap">
                <button className="floating-CTA">
                    <span className="floating-CTA-arrow"></span>
                </button>
                <div className="floating-links-wrap">
                    <a href="https://api.whatsapp.com/send?phone=918691005079" className="floating-links">
                        <div className="floating-links">
                            <div className="floating-links-img"><img src="assets/images/floating-icon-1.png" alt="image" /></div>
                            <div className="floating-links-text">
                                <p>Get In Touch</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="floating-links form-link">
                        <div className="floating-links">
                            <div className="floating-links-img"><img src="assets/images/floating-icon-2.png" alt="image" /></div>
                            <div className="floating-links-text">
                                <p>Chat With Us </p>
                            </div>
                        </div>
                    </a>
                </div>


            </div>
    );
}