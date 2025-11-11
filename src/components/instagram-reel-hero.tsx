/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function InstagramReelHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set muted to true via JavaScript (required for autoplay)
    video.muted = true;
    video.playsInline = true;

    // Ensure the video plays when loaded
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Video autoplay blocked, will play on user interaction:", error);

        // Fallback: play on any user interaction
        const playOnInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('scroll', playOnInteraction);
        };

        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('scroll', playOnInteraction, { once: true });
      }
    };

    // Try multiple times with different events
    playVideo();

    const handleCanPlay = () => playVideo();
    const handleLoadedData = () => playVideo();
    const handleLoadedMetadata = () => playVideo();

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlay);

    // Handle visibility change (play when tab becomes visible)
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        playVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlay);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className="dramatic-hero__video"
          preload="auto"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="dramatic-hero__overlay" />
      </div>
    </section>
  );
}
