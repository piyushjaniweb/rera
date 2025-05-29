import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Solutions from "./components/Solutions";
import Blogs from "./components/Blogs";
import Trending from "./components/Trending";
import Creator from "./components/Creator";

export default function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStrokeDashoffset = () => {
    const circleLength = 2 * Math.PI * 24;
    return circleLength - (circleLength * scrollPercentage) / 100;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getStrokeColor = () => {
    return scrollPercentage > 0 ? "#22d1b6" : "gray";
  };

  return (
    <div className="">
      <HeroSection />
      <Solutions />
      <Blogs />
      <Trending/>
      <Creator/>


      {/* {scrollPercentage > 0 && (
        <div
          className="back-to-top right-aligned primary-color scroll-position-style active"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <span
            className="icon-arrow-up text-primary"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "20px",
              // color: primary,
            }}
          >
            ↑
          </span>

          <svg height="50" width="50" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="23"
              style={{
                fill: "none",
                stroke: getStrokeColor(),
                strokeWidth: "2",
                strokeDasharray: `${2 * Math.PI * 24}`,
                strokeDashoffset: getStrokeDashoffset(),
                transition: "stroke-dashoffset 0.3s ease, stroke 0.3s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            <circle
              cx="25"
              cy="25"
              r="22"
              style={{
                fill: "rgba(0, 0, 0, 0.5)",
                strokeWidth: "2",
              }}
            />
          </svg>
        </div>
      )} */}

    </div>
  );
}
