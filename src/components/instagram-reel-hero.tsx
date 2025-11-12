/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function InstagramReelHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video properties
    video.muted = true;
    video.playsInline = true;
    video.defaultMuted = true;

    // Attempt to play the video
    const attemptPlay = async () => {
      try {
        // Small delay to ensure video is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        const playPromise = video.play();

        if (playPromise !== undefined) {
          await playPromise;
          console.log("Video autoplay successful");
        }
      } catch (error) {
        console.log("Video autoplay blocked:", error);

        // Fallback: play on any user interaction
        const playOnInteraction = async () => {
          try {
            await video.play();
            console.log("Video started on user interaction");
          } catch (e) {
            console.log("Failed to play on interaction:", e);
          }
        };

        // Add interaction listeners
        const events = ['click', 'touchstart', 'scroll', 'mousemove', 'keydown'];
        events.forEach(event => {
          document.addEventListener(event, playOnInteraction, { once: true });
        });
      }
    };

    // Try to play immediately
    attemptPlay();

    // Also try when video is ready
    const handleCanPlayThrough = () => {
      if (video.paused) {
        attemptPlay();
      }
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        attemptPlay();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
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
