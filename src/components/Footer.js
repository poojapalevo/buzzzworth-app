"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Footer() {
  useEffect(() => {
    const marquees = document.querySelectorAll('.buzzz_marquee');
    if (!marquees || marquees.length === 0) return;

    marquees.forEach((item) => {
      const marqueeInner = item.querySelector('.buzzz_marquee__inner');
      const marqueeContent = marqueeInner?.querySelector('.buzzz_marquee__content');
      if (!marqueeInner || !marqueeContent) return;

      const duration = parseFloat(item.getAttribute('data-marquee-duration')) || 30;

      // Clone the content for infinite scrolling
      const marqueeContentClone = marqueeContent.cloneNode(true);
      marqueeInner.appendChild(marqueeContentClone);

      // Animate both original and clone
      const marqueeContentAll = marqueeInner.querySelectorAll('.buzzz_marquee__content');

      marqueeContentAll.forEach((element) => {
        gsap.to(element, {
          x: '-101%',
          repeat: -1,
          duration: duration,
          ease: 'linear'
        });
      });
    });
  }, []);

  return (
    <div className="temp9">
      <div className="footer-sec">
        <img className="footersticker1" src="assets/images/footer-sticker-1.gif" alt="img" />
        <img className="footersticker2" src="assets/images/footer-stickers-2.png" alt="img" />
        <img className="footersticker3" src="assets/images/footer-stickers-3.png" alt="img" />
        <img className="footersticker4" src="assets/images/footer-stickers-4.png" alt="img" />
        <img className="footersticker5" src="assets/images/footer-stickers-5.png" alt="img" />

        <div className="footer-content">
          <div className="footer-conten-top">
            <h4 className="footer-subtitle">Let’s build something scroll-stopping</h4>

            <div className="buzzz_marquee" data-marquee-duration="30">
              <div className="buzzz_marquee__inner footer-title">
                <div className="buzzz_marquee__content">
                  <ul className="marquee-content">
                    <li className="footer-title-text">
                      <a href="tel:+918691005079">Schedule <span>a call</span></a>
                    </li>
                    <li className="footer-title-text">
                      <a href="mailto:hello@buzzzworth.com">Email <span>Us</span></a>
                    </li>
                    <li className="footer-title-text">
                      <a href="tel:+918691005079">Schedule <span>a call</span></a>
                    </li>
                    <li className="footer-title-text">
                      <a href="mailto:hello@buzzzworth.com">Email <span>Us</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-conten-bottom">
            <div className="footer-links-wrap">
              <ul className="footer-links-list">
                <li className="footer-link"><a href="javascript:void(0)">About Us</a></li>
                <li className="footer-link"><a href="javascript:void(0)">Services</a></li>
                <li className="footer-link"><a href="javascript:void(0)">Contact us</a></li>
              </ul>

              <ul className="footer-links-list social-links">
                <li className="footer-link">
                  <a href="javascript:void(0)">
                    <div className="footer-img-wrap in">
                      <img className="footer-icn" src="assets/images/svg/in-solid.svg" alt="img" />
                    </div>
                    <span>Linkedin</span>
                    <div className="arrow-wrap">
                      <img className="arrow-img1" src="assets/images/footer-arrow.png" alt="icon" />
                      <img className="arrow-img2" src="assets/images/footer-arrow.png" alt="icon" />
                    </div>
                  </a>
                </li>

                <li className="footer-link">
                  <a href="javascript:void(0)">
                    <div className="footer-img-wrap fb">
                      <img className="footer-icn" src="assets/images/svg/fb-solid.svg" alt="img" />
                    </div>
                    <span>Facebook</span>
                    <div className="arrow-wrap">
                      <img className="arrow-img1" src="assets/images/footer-arrow.png" alt="icon" />
                      <img className="arrow-img2" src="assets/images/footer-arrow.png" alt="icon" />
                    </div>
                  </a>
                </li>

                <li className="footer-link">
                  <a href="javascript:void(0)">
                    <div className="footer-img-wrap insta">
                      <img className="footer-icn" src="assets/images/svg/instagram.svg" alt="img" />
                    </div>
                    <span>Instagram</span>
                    <div className="arrow-wrap">
                      <img className="arrow-img1" src="assets/images/footer-arrow.png" alt="icon" />
                      <img className="arrow-img2" src="assets/images/footer-arrow.png" alt="icon" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-policy-wrap">
              <a href="javascript:void(0)">© 2025 Buzzzworth Digital Limited. All rights Reserved</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
