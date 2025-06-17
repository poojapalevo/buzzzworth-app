"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

export default function BannerSection() {
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const timer = setTimeout(() => {
      const items = gsap.utils.toArray(".banner_item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bw_anner_section",
          start: "top top",
          end: "top -150%",
          scrub: true,
          pin: true,
          markers: false,
          anticipatePin: 1,
        },
      });

      items.forEach((item, index) => {
        tl.to(items, {
          duration: 2,
          onUpdate: () => {
            items.forEach((el, i) => {
              el.classList.toggle("show", i === index);
            });
          },
        });
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bw_anner_section banner_section mobile_hide">
      <div className="cus_container_fluid">
        <div className="banner_container">
          <div className="banner_content">
            <div className="bw_banner_mob_slider">
              <div className="banner_inner_warpper">

                {/* Banner Item 1 */}
                <div className="banner_item sticker-animate sticker-rotate-animate">
                  <img src="/assets/images/st5.png" alt="" className="vector_img vector_img_1" />
                  <img src="/assets/images/st1.gif" alt="" className="vector_img vector_img_2" />
                  <img src="/assets/images/st3.png" alt="" className="vector_img vector_img_3" />
                  <img src="/assets/images/st4.gif" alt="" className="vector_img vector_img_4" />
                  <img src="/assets/images/st6.png" alt="" className="vector_img vector_img_6" />
                  <img src="/assets/images/st7.png" alt="" className="vector_img vector_img_7" />
                  <img src="/assets/images/st3.png" alt="" className="vector_img vector_img_8" />
                  <img src="/assets/images/st6.png" alt="" className="vector_img vector_img_9" />
                  <img src="/assets/images/st8.png" alt="" className="vector_img vector_img_10" />
                  <img src="/assets/images/st9.png" alt="" className="vector_img vector_img_11" />
                  <img src="/assets/images/st10.png" alt="" className="vector_img vector_img_12" />
                  <img src="/assets/images/st11.png" alt="" className="vector_img vector_img_13" />
                  <img src="/assets/images/st12.png" alt="" className="vector_img vector_img_14" />
                  <div className="banner_heading_title">
                    <h2 className="heading-centerPageT">
                      Ideas that <span><br /> outlive trends</span>
                    </h2>
                  </div>
                </div>

                {/* Banner Item 2 */}
                <div className="banner_item sticker-rotate-animate">
                  <img src="/assets/images/st5.png" alt="" className="vector_img vector_img_1" />
                  <img src="/assets/images/st1.gif" alt="" className="vector_img vector_img_2" />
                  <img src="/assets/images/st3.png" alt="" className="vector_img vector_img_3" />
                  <img src="/assets/images/st4.gif" alt="" className="vector_img vector_img_4" />
                  <img src="/assets/images/st6.png" alt="" className="vector_img vector_img_6" />
                  <img src="/assets/images/st7.png" alt="" className="vector_img vector_img_7" />
                  <img src="/assets/images/st3.png" alt="" className="vector_img vector_img_8" />
                  <img src="/assets/images/st6.png" alt="" className="vector_img vector_img_9" />
                  <img src="/assets/images/st8.png" alt="" className="vector_img vector_img_10" />
                  <img src="/assets/images/st9.png" alt="" className="vector_img vector_img_11" />
                  <img src="/assets/images/st10.png" alt="" className="vector_img vector_img_12" />
                  <img src="/assets/images/st11.png" alt="" className="vector_img vector_img_13" />
                  <img src="/assets/images/st12.png" alt="" className="vector_img vector_img_14" />
                  <div className="banner_heading_title">
                    <h2 className="heading-centerPageT">
                      <span>Strategy</span> meets <span>shareability</span>
                    </h2>
                  </div>
                </div>

                {/* Banner Item 3 */}
                <div className="banner_item">
                  <img src="/assets/images/cocaCola.png" alt="" className="trust_brands trust_brands_1" />
                  <img src="/assets/images/legrandLogo.png" alt="" className="trust_brands trust_brands_2" />
                  <img src="/assets/images/schindlerLogo.png" alt="" className="trust_brands trust_brands_3" />
                  <img src="/assets/images/axislogo1.png" alt="" className="trust_brands trust_brands_4" />
                  <img src="/assets/images/hulLogo.png" alt="" className="trust_brands trust_brands_5" />
                  <img src="/assets/images/miLogo.png" alt="" className="trust_brands trust_brands_6" />
                  <img src="/assets/images/viewsoniclogo.png" alt="" className="trust_brands trust_brands_7" />
                  <img src="/assets/images/lglogo.png" alt="" className="trust_brands trust_brands_8" />
                  <img src="/assets/images/kinetix.png" alt="" className="trust_brands trust_brands_9" />
                  <div className="banner_heading_title">
                    <h2 className="heading-centerPageT">
                      <span>Brands</span> that trust <span>the buzzz</span>
                    </h2>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
