"use client";
import { useEffect } from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Fitness() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active", "opacity-100", "translate-y-0"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .glass-card, .matrix-card").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5">
          <Link className="font-headline-md text-xl md:text-headline-md text-primary font-bold tracking-tight" href="/">Srinivas Prasad R</Link>
          <div className="hidden md:flex items-center gap-10">
            <Link className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300" href="/">Home</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300" href="/yoga">Yoga</Link>
            <Link className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary" href="/fitness">Fitness</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300" href="/gallery">Gallery</Link>
          </div>
          <MobileNav activePage="fitness" />
        </div>
      </nav>

      <main className="pt-28 md:pt-32">
        {/* Philosophy Section */}
        <section className="px-margin-mobile md:px-margin-desktop pb-12" id="philosophy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left: Text */}
            <div className="flex flex-col gap-8 justify-center">
              <div>
                <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest mb-4 block">My Essence</span>
                <h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-6">Movement Philosophy</h2>
                <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant leading-relaxed text-justify">
                  I believe that true fitness goes beyond temporary aesthetics; it is about building a body that is as resilient as it is functional. My training methodology bridges modern biomechanical science with martial discipline to cultivate power, mobility, and recovery. By focusing on structural integrity and conscious movement, I help you build a physical foundation that lasts a lifetime.
                </p>
              </div>
            </div>

            {/* Right: Pillars */}
            <div className="flex flex-col gap-6 justify-center">
              {[
                { num: "01", title: "Athletic Balance", desc: "Equating high intensity with strategic recovery protocols to support long-term skeletal health and prevent injury." },
                { num: "02", title: "Movement Precision", desc: "Treating every repetition as a form of movement meditation, prioritizing biomechanical alignment and precise muscle engagement." },
              ].map((pillar) => (
                <div key={pillar.num} className="border-t border-primary/10 pt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-2xl md:text-4xl text-primary italic font-semibold">{pillar.num}</span>
                    <h3 className="font-headline-md text-lg md:text-headline-md text-on-surface">{pillar.title}</h3>
                  </div>
                  <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed text-justify">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialty Images */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["/images/f1.PNG", "/images/f2.jpeg", "/images/f3.PNG"].map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl h-[280px] sm:h-[380px] md:h-[550px] shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* Discipline Matrix */}
        <section className="pt-12 pb-8 md:pt-20 md:pb-10 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50" id="matrix">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest mb-4 block">Competencies</span>
              <h2 className="font-display-lg text-3xl md:text-display-lg-mobile lg:text-display-lg text-on-surface">The Discipline Matrix</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: "Combat Arts & Striking", sub: "Martial heritage & full contact discipline",
                  skills: [
                    { name: "Muay Thai", label: "Striking Mastery", pct: 92 },
                    { name: "Karate (Shotokan)", label: "1st Dan Black Belt", pct: 90 },
                    { name: "MMA", label: "Welterweight Category", pct: 88 },
                  ],
                },
                {
                  title: "Movement & Performance", sub: "Biomechanical strength & pedagogy",
                  skills: [
                    { name: "Teaching & Mentoring", label: "Lead Educator", pct: 98 },
                    { name: "Fitness Training", label: "Advanced Physiology", pct: 95 },
                    { name: "Strength & Conditioning", label: "Overload Systems", pct: 85 },
                  ],
                },
                {
                  title: "Therapeutics & Care", sub: "Somatic release & wellness guidance",
                  skills: [
                    { name: "Communication", label: "Client Coaching", pct: 96 },
                    { name: "Nutritional Counselling", label: "Metabolism Fueling", pct: 86 },
                    { name: "Hydro & Massage", label: "Somatic Release", pct: 82 },
                  ],
                },
              ].map((cat) => (
                <div key={cat.title} className="flex flex-col gap-6">
                  <div className="border-b border-primary/10 pb-4">
                    <h4 className="font-headline-md text-lg md:text-xl text-primary font-bold">{cat.title}</h4>
                    <p className="text-xs text-on-surface-variant opacity-60 mt-1">{cat.sub}</p>
                  </div>
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex justify-between items-baseline">
                        <span className="font-body-md font-semibold text-on-surface text-sm">{skill.name}</span>
                        <span className="font-serif text-xs text-primary italic font-semibold">{skill.label}</span>
                      </div>
                      <div className="h-[2px] bg-primary/5 w-full rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Accolades */}
            <div className="mt-20 md:mt-24 border-t border-primary/10 pt-16 md:pt-20">
              <div className="mb-10 md:mb-12">
                <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest mb-4 block">Milestones</span>
                <h3 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface">Accolades &amp; Legacy</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { num: "01", label: "Championship", title: "Runner-up MMA", desc: "Regional Professional Mixed Martial Arts Championships — Welterweight Category.", footer: "Certified Recognition", dark: false },
                  { num: "02", label: "Striking Excellence", title: "Runner-up Muay Thai", desc: "Open Invitational Striking Championship — Outstanding Technique Award.", footer: "Technical Mastery", dark: false },
                  { num: "03", label: "Legacy", title: "Black Belt", desc: "Achieved 1st Dan Black Belt in Karate — Shotokan Style through years of dedication.", footer: "Lifetime Achievement", dark: true },
                ].map((acc) => (
                  <div
                    key={acc.num}
                    className={`group p-8 md:p-10 rounded-3xl relative overflow-hidden transition-all duration-500 ${acc.dark ? "bg-primary hover:shadow-2xl" : "border border-primary/10 hover:border-primary/30 hover:bg-surface-container-lowest"}`}
                  >
                    <div className={`flex flex-col justify-between h-full gap-6 ${acc.dark ? "text-on-primary" : ""}`}>
                      <div>
                        <span className={`font-serif text-4xl md:text-5xl block mb-4 ${acc.dark ? "text-white/20" : "text-primary/10 group-hover:text-primary/30 transition-colors"}`}>{acc.num}</span>
                        <span className={`font-label-caps text-xs uppercase tracking-widest mb-2 block ${acc.dark ? "text-white/70" : "text-primary"}`}>{acc.label}</span>
                        <h4 className={`font-headline-md text-xl md:text-2xl mb-3 ${acc.dark ? "text-white" : "text-on-surface"}`}>{acc.title}</h4>
                        <p className={`font-body-md text-sm leading-relaxed text-justify ${acc.dark ? "text-white/80" : "text-on-surface-variant"}`}>{acc.desc}</p>
                      </div>
                      <div className={`flex items-center font-bold gap-2 text-sm ${acc.dark ? "text-white" : "text-primary"}`}>
                        <span className="material-symbols-outlined text-sm">verified</span>
                        {acc.footer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-12 pb-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center bg-surface-container-lowest rounded-t-3xl border-t border-outline/5">
        <span className="font-headline-lg text-2xl md:text-headline-lg text-primary tracking-wide mb-4">Srinivas Prasad R</span>
        <p className="text-lg md:text-2xl text-on-surface-variant max-w-3xl italic font-bold leading-relaxed mb-10 px-4">
          &ldquo;I shape my body with strength, my movement with grace, and my life with discipline&rdquo;
        </p>
        <div className="w-16 h-[1px] bg-primary/20 mb-8" />
        <p className="font-body-md text-body-md text-on-surface-variant opacity-60 leading-relaxed">
          © 2026 Srinivas Prasad R.<br />Strength • Balance • Mindfulness
        </p>
      </footer>
    </>
  );
}
