"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Heading_section() {
  useEffect(()=>{
      const { innerHeight } = window;
        gsap.fromTo(
  ".heading_sections .heading_col",
  {
    scale: .5, 
    opacity:0.2  // Start from scale 0
  },
  {
    scale: 1,   // End at scale 1
    opacity:1,
    duration: 3,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".heading_sections",
      pin: true,
      end: `+=${innerHeight * 1.3}`,
      scrub: 3
    }
  }
);
    })


    return (
        <section className="heading_sections">
            <div className="heading_parent">
                <div className="heading_col">
                    <h2 className="">
                        <span> Big goals? </span>Tough briefs?
                    </h2>
                </div>
            </div>
        </section>
    );
}
