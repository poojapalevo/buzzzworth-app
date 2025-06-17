"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About_video() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          video.muted = !entry.isIntersecting;
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    const animateVideo = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(video);

      if (window.innerWidth >= 992) {
        gsap.set(video, { opacity: 1, y: 0, scale: 0.5 });
        gsap.to(video, {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".buzz_zoom_in",
            pin: true,
            end: `+=${window.innerHeight}`,
            scrub: 3,
            // markers: true
          },
        });
      } else {
        gsap.set(video, { opacity: 0, y: 50 });
        gsap.to(video, {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".buzz_zoom_in",
            pin: true,
            end: `+=${window.innerHeight}`,
            scrub: 3,
            // markers: true
          }
        });
      }
    };

    // Initial and on resize
    animateVideo();
    window.addEventListener("resize", animateVideo);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", animateVideo);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="video_section buzz_zoom_in">
      <div className="cus_container_fluid">
        <div className="sec_vid_wrapper">
          <video
            ref={videoRef}
            className="buzz_about_video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/assets/images/buzzworth-shortreel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
