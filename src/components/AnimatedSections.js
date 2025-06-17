"use client";

import { useEffect } from "react";

export default function SectionScroller() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");
    let current = 0;
    let isScrolling = false;

    const isDesktopView = () => window.innerWidth > 991;

    const showSection = (index) => {
      if (index < 0 || index >= sections.length || isScrolling) return;

      isScrolling = true;

      const prevIndex = current;
      sections[prevIndex]?.classList.remove("sec-parent");
      sections[prevIndex]?.classList.add("prev-parent");
      sections[index]?.classList.add("sec-parent");

      setTimeout(() => {
        sections[prevIndex]?.classList.remove("prev-parent");
      }, 1000);

      if (index === 2) {
        header?.classList.add("second-active");
      } else if (index === 0 || index <= 2) {
        header?.classList.remove("second-active");
      }

      current = index;

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const setupScrollEvents = () => {
      if (!isDesktopView()) return;

      sections[0]?.classList.add("sec-parent");

      const onWheel = (e) => {
        if (!isDesktopView()) return;
        if (e.deltaY > 0) {
          showSection(current + 1);
        } else {
          showSection(current - 1);
        }
      };

      const onKeyDown = (e) => {
        if (!isDesktopView()) return;
        if (e.key === "ArrowDown") showSection(current + 1);
        if (e.key === "ArrowUp") showSection(current - 1);
      };

      let touchStartY = 0;
      let touchEndY = 0;

      const onTouchStart = (e) => {
        if (!isDesktopView()) return;
        touchStartY = e.changedTouches[0].screenY;
      };

      const onTouchEnd = (e) => {
        if (!isDesktopView()) return;
        touchEndY = e.changedTouches[0].screenY;
        handleTouchGesture();
      };

      const handleTouchGesture = () => {
        const threshold = 50;
        if (isScrolling) return;
        if (touchStartY - touchEndY > threshold) {
          showSection(current + 1);
        } else if (touchEndY - touchStartY > threshold) {
          showSection(current - 1);
        }
      };

      window.addEventListener("wheel", onWheel);
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchend", onTouchEnd);

      // Cleanup
      return () => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend", onTouchEnd);
      };
    };

    const cleanupScrollEvents = setupScrollEvents();

    return () => {
      if (cleanupScrollEvents) cleanupScrollEvents();
    };
  }, []);

  useEffect(() => {
    const updateBodyClass = () => {
      if (window.innerWidth > 991) {
        setTimeout(() => {
          
          document.body.classList.add("onLoadSection");
        }, 1000);
      } else {
        document.body.classList.remove("onLoadSection");
      }
    };

    updateBodyClass();

    window.addEventListener("resize", updateBodyClass);

    return () => {
      window.removeEventListener("resize", updateBodyClass);
    };
  }, []);

  return null;
}
