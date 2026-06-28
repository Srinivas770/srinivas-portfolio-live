"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { withBasePath } from "@/lib/basePath";

export default function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // All 12 images from public/images/Gallery with real pixel dimensions
  const galleryImages = [
    { src: withBasePath("/images/Gallery/1.jpg"), w: 2252, h: 4000 }, // portrait 9:16
    { src: withBasePath("/images/Gallery/2.jpg"), w: 1080, h: 1920 }, // portrait 9:16
    { src: withBasePath("/images/Gallery/20240511_181347.jpg"), w: 6752, h: 12000 }, // portrait 9:16
    { src: withBasePath("/images/Gallery/20240615_120757_013.jpg"), w: 2252, h: 4000 }, // portrait 9:16
    { src: withBasePath("/images/Gallery/20240615_120912_003.jpg"), w: 2252, h: 4000 }, // portrait 9:16
    { src: withBasePath("/images/Gallery/3.jpg"), w: 9000, h: 12000 }, // portrait 3:4
    { src: withBasePath("/images/Gallery/4.jpg"), w: 2252, h: 4000 }, // portrait 9:16
    { src: withBasePath("/images/Gallery/5jpg.jpg"), w: 2252, h: 4000 }, // portrait 9:16
    { src: withBasePath("/images/Gallery/IMG_0118.PNG"), w: 1290, h: 1569 }, // near-square tall
    { src: withBasePath("/images/Gallery/IMG_0119.PNG"), w: 1290, h: 976 }, // landscape
    { src: withBasePath("/images/Gallery/Snapchat-403151647.jpg"), w: 2052, h: 3648 }, // portrait 9:16
  ];

  const milestones = [
    { num: "01", label: "Championship", title: "National Yoga Olympics", desc: "Top honors at the premier national gathering for yoga excellence, demonstrating superior postural precision." },
    { num: "02", label: "Achievements", title: "25+ Compitations", desc: "Consistent high performance across various compitations, validating mastery and focus." },
    { num: "03", label: "Research", title: "Osteoarthritis Study", desc: "In-depth focusing on the therapeutic effects of specific asanas on joint health." },
    { num: "04", label: "Certification", title: "300hr Instructor", desc: "Advanced certification covering philosophy, anatomy, and advanced practice methods." },
  ];

  return (
    <>
      <style>{`
        :root { scroll-behavior: smooth; }

        .reveal-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .reveal-item.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-item:nth-child(1) { transition-delay: 0ms; }
        .reveal-item:nth-child(2) { transition-delay: 80ms; }
        .reveal-item:nth-child(3) { transition-delay: 160ms; }
        .reveal-item:nth-child(4) { transition-delay: 240ms; }
        .reveal-item:nth-child(5) { transition-delay: 320ms; }
        .reveal-item:nth-child(6) { transition-delay: 400ms; }

        /* ── True masonry via CSS columns ── */
        .masonry-grid {
          columns: 4;
          column-gap: 10px;
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 10px;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
        }
        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .masonry-item:hover img {
          transform: scale(1.04);
        }
        @media (max-width: 1024px) { .masonry-grid { columns: 3; } }
        @media (max-width: 640px)  { .masonry-grid { columns: 2; } }

        .video-overlay-btn {
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          transition: all 0.3s ease;
        }
        .video-overlay-btn:hover {
          background: rgba(255,255,255,0.22);
          transform: scale(1.08);
        }

        .milestone-card {
          border-left: 1px solid transparent;
          transition: border-color 0.4s ease, background 0.4s ease;
        }
        .milestone-card:hover {
          border-left-color: var(--color-primary, #6b7c3a);
          background: rgba(107, 124, 58, 0.04);
        }

        .ticker-marquee {
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-track {
          display: inline-flex;
          animation: marquee 24s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5">
          <span className="font-headline-md text-xl md:text-headline-md text-primary">Srinivas Prasad R</span>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-body-md text-body-md" href="/">Home</Link>
            <Link className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-body-md text-body-md" href="/yoga">Yoga</Link>
            <Link className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-body-md text-body-md" href="/fitness">Fitness</Link>
            <Link className="text-primary font-bold border-b-2 border-primary font-body-md text-body-md" href="/gallery">Gallery</Link>
          </div>
          <MobileNav activePage="gallery" />
        </div>
      </nav>

      <main className="pt-32 overflow-hidden">

        {/* ── Hero Marquee Banner ── */}
        <section className="mb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-item">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-[0.25em] uppercase block mb-4"></span>
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-display-lg-mobile lg:text-display-lg text-on-surface leading-none">
                Gallery<br /><span className="text-primary italic">&amp; Legacy</span>
              </h1>
            </div>
            <p className="font-body-lg text-on-surface-variant max-w-xs text-sm leading-relaxed opacity-70 md:text-right">
              A curated visual record of practice, discipline, and milestones earned through years of dedication.
            </p>
          </div>

          {/* Scrolling ticker */}
          <div className="ticker-marquee border-t border-b border-primary/10 py-4 mt-8">
            <div className="ticker-track">
              {["Yoga", "Fitness", "Combat Arts", "Strength", "Mobility", "Discipline", "Mindfulness", "Karate", "Muay Thai", "MMA", "Wellness", "Yoga", "Fitness", "Combat Arts", "Strength", "Mobility", "Discipline", "Mindfulness", "Karate", "Muay Thai", "MMA", "Wellness"].map((t, i) => (
                <span key={i} className="text-primary/30 font-serif italic text-2xl mx-8">
                  {t} <span className="text-primary/15 not-italic font-sans text-sm mx-3">◆</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Masonry Gallery — all 12 local images ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
          <div className="masonry-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="masonry-item">
                <img src={img.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Video Feature Section ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 reveal-item">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-[0.25em] uppercase block mb-3">In Motion</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface leading-none"> <span className="text-primary italic">Captured</span></h2>
            </div>
            <p className="text-on-surface-variant text-sm opacity-60 max-w-xs md:text-right leading-relaxed">Raw moments from the CAGE.</p>
          </div>

          {/* Video Player */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-black shadow-2xl" style={{ aspectRatio: "16/9" }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={withBasePath("/images/Video.MP4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <span className="text-white/50 text-xs uppercase tracking-widest">Srinivas Prasad R</span>
                <p className="text-white font-headline-md text-lg font-bold mt-1">Glimpse From Cage</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={togglePlay}
                  className="video-overlay-btn w-12 h-12 rounded-full flex items-center justify-center text-white"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  <span className="material-symbols-outlined text-xl">{isPlaying ? "pause" : "play_arrow"}</span>
                </button>
                <button
                  onClick={toggleMute}
                  className="video-overlay-btn w-12 h-12 rounded-full flex items-center justify-center text-white"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  <span className="material-symbols-outlined text-xl">{isMuted ? "volume_off" : "volume_up"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Milestones ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
          <div className="mb-12 reveal-item">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.25em] uppercase block mb-3"></span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Professional <span className="text-primary italic">Milestones</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/8 rounded-2xl overflow-hidden">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-card bg-surface p-10 reveal-item">
                <span className="font-serif text-5xl text-primary/10 block mb-6">{m.num}</span>
                <span className="text-primary font-label-caps text-xs uppercase tracking-widest block mb-3">{m.label}</span>
                <h3 className="font-headline-md text-lg text-on-surface font-bold mb-4">{m.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-80">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center bg-surface-container-lowest rounded-t-3xl border-t border-outline/5">
        <span className="font-headline-lg text-headline-lg text-primary tracking-wide mb-4">Srinivas Prasad R</span>
        <p className="font-headline-md text-xl md:text-2xl text-on-surface-variant max-w-3xl italic font-bold leading-relaxed mb-12 px-4">
          &ldquo;I shape my body with strength, my movement with grace, and my life with discipline&rdquo;
        </p>
        <div className="w-16 h-[1px] bg-primary/20 mb-8"></div>
        <p className="font-body-md text-body-md text-on-surface-variant opacity-60 leading-relaxed">
          © 2026 Srinivas Prasad R.<br />Strength • Balance • Mindfulness
        </p>
      </footer>
    </>
  );
}
