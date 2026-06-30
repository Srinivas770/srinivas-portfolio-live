"use client";
import { useEffect } from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { withBasePath } from "@/lib/basePath";

export default function Yoga() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active", "opacity-100", "translate-y-0"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .glass-card").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5">
          <span className="font-headline-md text-xl md:text-headline-md text-primary font-bold tracking-tight">Srinivas Prasad R</span>
          <div className="hidden md:flex items-center gap-10">
            <Link className="text-on-surface-variant opacity-80 font-body-md text-body-md hover:opacity-100 hover:text-primary transition-all duration-300" href="/">Home</Link>
            <Link className="text-primary font-bold border-b-2 border-primary font-body-md text-body-md" href="/yoga">Yoga</Link>
            <Link className="text-on-surface-variant opacity-80 font-body-md text-body-md hover:opacity-100 hover:text-primary transition-all duration-300" href="/fitness">Fitness</Link>
            <Link className="text-on-surface-variant opacity-80 font-body-md text-body-md hover:opacity-100 hover:text-primary transition-all duration-300" href="/gallery">Gallery</Link>
          </div>
          <MobileNav activePage="yoga" />
        </div>
      </nav>

      <main className="pt-28 md:pt-32">
        {/* Philosophy Section */}
        <section className="px-margin-mobile md:px-margin-desktop pb-12" id="philosophy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left: Image */}
            <div className="relative h-[300px] sm:h-[420px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Yoga practice"
                src={withBasePath("/images/yoga.PNG")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 text-white">
                <h2 className="text-xl md:text-3xl leading-tight font-bold font-headline-lg">The Art of Holistic<br />Balance</h2>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col gap-8 justify-center">
              <div>
                <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest mb-4 block">My Essence</span>
                <h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-6">Yoga Philosophy</h2>
                <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant leading-relaxed text-justify">
                  Yoga is more than physical posture; it is a profound journey towards self-realization and internal harmony. My approach integrates ancient Vedic wisdom with modern biomechanics to nurture the body, mind, and spirit. Through mindful alignment, conscious breathing, and structural precision, I cultivate strength that extends beyond the mat. Each session is a tailored practice designed to unlock mental clarity, restore physical vitality, and build sustainable life discipline.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Slider */}
          <div className="mt-16 overflow-hidden relative w-full py-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee gap-6">
              {[1, 2].map((_, listIndex) => (
                <div key={listIndex} className="flex gap-6 shrink-0">
                  {[
                    { icon: "self_improvement", title: "Hatha Yoga", desc: "Balancing vital energies through disciplined physical practice." },
                    { icon: "cyclone", title: "Ashtanga Yoga", desc: "Dynamic flow focusing on the eight-limbed path of discipline." },
                    { icon: "air", title: "Pranayama", desc: "Mastery of breath to expand the life force and calm the mind." },
                    { icon: "medical_services", title: "Yoga Therapy", desc: "Clinical application of yogic tools for physiological healing." },
                    { icon: "straighten", title: "Alignment", desc: "Precision-based postures to ensure safety and structural integrity." },
                    { icon: "psychology", title: "Yogic Counseling", desc: "Guided mental wellness through ancient psychological insights." },
                  ].map((card) => (
                    <div key={card.title} className="w-[260px] md:w-[350px] glass-card p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-500 flex flex-col gap-3 shrink-0">
                      <span className="material-symbols-outlined text-primary text-3xl">{card.icon}</span>
                      <h3 className="font-headline-md text-lg md:text-headline-md text-on-surface">{card.title}</h3>
                      <p className="font-body-md text-sm text-on-surface-variant opacity-80">{card.desc}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="pt-12 pb-8 md:pt-20 md:pb-10 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50" id="experience">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <span className="text-primary font-label-caps text-label-caps uppercase tracking-widest mb-4 block">Professional Journey</span>
              <h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface">Yoga Experience</h2>
            </div>

            <div className="flex flex-col gap-10 md:gap-16">
              {[
                {
                  period: "2023 — 2024", sub: null,
                  icon: "distance", role: "Online Yoga Instructor", sub2: "Digital Transformation Specialist",
                  desc: "Crafting immersive virtual wellness experiences for global clients. Leveraging high-definition streaming and interactive feedback loops to ensure studio-quality instruction in a home environment.",
                  tags: ["Live Sessions", "Custom Flows", "Posture Correction"],
                },
                {
                  period: "2025", sub: "July — Dec",
                  icon: "healing", role: "Yoga Therapist Intern", sub2: "Clinical Application",
                  desc: "Conducted intensive therapeutic sessions under clinical supervision. Focused on integrating Yogic interventions for chronic ailments, spinal health, and stress management in hospital settings.",
                  tags: ["Therapeutic Intervention", "Vedic Wellness"],
                },
                {
                  period: "2023 — 2024", sub: null,
                  icon: "person_check", role: "Freelance Yoga Trainer", sub2: "Bespoke Wellness Curator",
                  desc: "Providing tailored 1-on-1 and corporate training programs. Focusing on anatomical precision and personal wellness goals, bridging the gap between physical fitness and mental clarity.",
                  tags: ["Corporate Wellness", "Private Coaching"],
                },
              ].map((exp, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-primary/10">
                  <div className="md:col-span-1">
                    <span className="font-headline-md text-xl md:text-3xl text-primary italic font-semibold tracking-wide">{exp.period}</span>
                    {exp.sub && <span className="text-on-surface-variant opacity-60 text-sm italic mt-1 block">{exp.sub}</span>}
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">{exp.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-lg md:text-headline-md text-on-surface">{exp.role}</h4>
                        <p className="text-primary font-body-md mt-1 text-sm">{exp.sub2}</p>
                      </div>
                    </div>
                    <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed text-justify">{exp.desc}</p>
                    <ul className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <li key={tag} className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
