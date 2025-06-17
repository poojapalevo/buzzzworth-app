"use client";

import Header from "./Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PageLayout({
  children,
  backgroundClass = "",
  showVideoBackground = false,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const smootherRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    requestAnimationFrame(() => {
      if (!smootherRef.current && window.innerWidth > 991) {
        smootherRef.current = ScrollSmoother.create({
          wrapper: ".scroll-wrapper",
          content: ".scroll-content",
          smooth: 1.5,
          effects: true,
        });
      }

      document.body.classList.add("onLoadSection");
      document.body.classList.remove("overflow_hidden");
      setIsLoading(false);
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  return (
    <>
      <div className={`page-loader ${!isLoading ? "fade-out" : ""}`} style={{display:!isLoading ? 'none':''}}>
        <img src="/assets/images/loader-img.gif" alt="loading" className="loader_img" />
      </div>

      <div className="main_warpper">
        <div className="body_fixed_background">
          <div className="mainBackground-area">
            <div className={`overlay ${backgroundClass}`}></div>
            {showVideoBackground && (
              <video
                className="background-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/assets/images/sec-bg.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        <Header />

        <div className="overlay_wrapper_sc">
          <div className="scroll-wrapper">
            <div className="scroll-content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
