/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function InstagramReelHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure the video plays when loaded
    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    };

    // Try to play immediately
    playVideo();

    // Also try to play when metadata is loaded
    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('canplay', playVideo);

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <section className="dramatic-hero">
      <div className="dramatic-hero__background">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="dramatic-hero__video"
          preload="auto"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="dramatic-hero__overlay" />
      </div>
    </section>
  );
}
