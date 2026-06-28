"use client";
import { useEffect } from "react";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, observerOptions);
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const counters = document.querySelectorAll(".counter");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = +(el.getAttribute("data-target") || 0);
            const increment = target / 50;
            const updateCount = () => {
              const current = +(el.innerText.replace("+", "") || 0);
              if (current < target) {
                el.innerText = Math.ceil(current + increment).toString();
                setTimeout(updateCount, 40);
              } else {
                el.innerText = target + "+";
              }
            };
            updateCount();
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));
    return () => { observer.disconnect(); counterObserver.disconnect(); };
  }, []);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5">
          <span className="font-headline-md text-xl md:text-headline-md text-primary tracking-tight">
            Srinivas Prasad R
          </span>
          <div className="hidden md:flex items-center gap-10">
            <a className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary" href="#">Home</a>
            <a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300" href="/yoga">Yoga</a>
            <a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300" href="/fitness">Fitness</a>
            <a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300" href="/gallery">Gallery</a>
          </div>
          <MobileNav activePage="home" />
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-center relative z-10">
            {/* Profile Image */}
            <div className="md:col-span-5 relative reveal mx-auto w-full max-w-sm md:max-w-none">
              <div className="aspect-square md:aspect-[892/871] overflow-hidden rounded-xl glass-card p-2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  alt="Srinivas Prasad R"
                  src="/images/hero.PNG"
                />
              </div>
            </div>
            {/* Text */}
            <div className="md:col-span-7 flex flex-col items-start gap-5 reveal text-center md:text-left items-center md:items-start" style={{ transitionDelay: "200ms" }}>
              <div className="space-y-2">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase">
                  Elegance in Motion
                </span>
                <h1 className="font-display-lg text-3xl sm:text-4xl md:text-display-lg text-on-background font-bold leading-tight">
                  SRINIVAS PRASAD R
                </h1>
                <p className="font-headline-md text-base md:text-headline-md text-primary-container italic">
                  Yoga Instructor • Yoga Therapist • Fitness Trainer
                </p>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed text-center md:text-left">
                Dynamic Yoga Instructor and Yoga Therapist passionate about holistic
                wellness, therapeutic yoga, strength training and mindful living.
                Helping you find balance in a chaotic world.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start w-full">
                <a
                  href="https://drive.google.com/file/d/1uExOHpfXAzTc0InSPAcSswJlLOd28_yq/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps uppercase tracking-widest hover:shadow-2xl transition-all duration-500 flex items-center gap-2 group justify-center text-sm"
                >
                  Download Resume
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a
                  href="/gallery"
                  className="border border-primary text-primary px-8 py-4 rounded-full font-label-caps uppercase tracking-widest hover:bg-primary/5 transition-all duration-500 text-center flex items-center justify-center text-sm"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-gutter">
              {[
                { label: "Years Yoga Experience", target: 15 },
                { label: "Certifications", target: 3 },
                { label: "Yoga Competitions", target: 25 },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-8 rounded-xl text-center flex flex-col items-center gap-4 reveal transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="font-bold text-sm md:text-lg text-on-surface-variant uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <h3 className="text-4xl md:text-5xl text-primary font-bold counter" data-target={stat.target}>0</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About & Timeline */}
        <section className="py-16 md:py-section-gap relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
              {/* Content Left */}
              <div className="space-y-10 reveal">
                <div className="space-y-6">
                  <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-background">
                    A Journey of <br />
                    <span className="text-primary italic">Mind &amp; Body</span>
                  </h2>
                  <div className="w-20 h-1 bg-primary rounded-full"></div>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
                    With a foundation in both ancient yogic sciences and modern
                    therapeutic approaches, my practice bridges the gap between
                    traditional wisdom and contemporary fitness needs. My goal is to
                    empower individuals through movement, breathwork, and structured
                    strength training, fostering a lifestyle of sustainable health and
                    mental clarity.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <h4 className="font-body-md font-bold text-on-background">Therapeutic Yoga</h4>
                    <p className="text-sm text-on-surface-variant">Specialized protocols for recovery and chronic pain management.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-body-md font-bold text-on-background">Strength Training</h4>
                    <p className="text-sm text-on-surface-variant">Functional movements designed to build resilient bodies.</p>
                  </div>
                </div>
              </div>

              {/* Timeline Right */}
              <div className="relative reveal" style={{ transitionDelay: "200ms" }}>
                <h3 className="font-headline-md text-2xl md:text-headline-md mb-10 text-on-background">Educational Excellence</h3>
                <div className="relative border-l-2 border-primary/20 ml-4 space-y-10">
                  {[
                    { level: "Post Graduation", degree: "M.Sc Yoga Therapy", desc: "Advanced study of physiological and psychological healing through yoga practices." },
                    { level: "Post Graduation", degree: "MCA Cyber Security", desc: "Merging technical precision with wellness for a modern holistic approach." },
                    { level: "Professional Training", degree: "Diploma in Yogic Sciences", desc: "Classical yoga training covering philosophy, asanas, and pranayama." },
                    { level: "Under Graduation", degree: "BCA", desc: "Laying the foundation for analytical thinking and systematic instruction." },
                  ].map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background"></div>
                      <div className="glass-card p-5 rounded-xl hover:translate-x-2 transition-transform duration-300">
                        <span className="font-label-caps text-primary mb-1 block">{item.level}</span>
                        <h4 className="font-body-lg font-bold text-on-background">{item.degree}</h4>
                        <p className="text-on-surface-variant text-sm mt-2 opacity-80 italic leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop reveal">
          <div className="bg-surface-container rounded-3xl p-8 md:p-24 flex flex-col items-center text-center gap-10 border border-outline/10">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-background">
                Let&apos;s Connect &amp; <span className="italic font-light text-primary">Grow Together</span>
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl text-sm md:text-body-lg">
                Ready to elevate your wellness journey? Reach out directly via phone, email, or social media.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
              {/* Phone */}
              <a href="tel:+918123088595" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.92-6.92l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="font-label-caps text-xs text-on-surface-variant tracking-wider uppercase font-bold">Call / WhatsApp</span>
                <span className="font-body-md font-bold text-on-background text-xs md:text-sm">+91 8123088595</span>
              </a>
              {/* Email */}
              <a href="mailto:srinivasprasad770.sp@gmail.com" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="font-label-caps text-xs text-on-surface-variant tracking-wider uppercase font-bold">Email Me</span>
                <span className="text-xs font-bold text-on-background break-all">srinivasprasad770.sp</span>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                </svg>
                <span className="font-label-caps text-xs text-on-surface-variant tracking-wider uppercase font-bold">Instagram</span>
                <span className="font-body-md font-bold text-on-background text-sm">Instagram</span>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" rx="0.5" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="font-label-caps text-xs text-on-surface-variant tracking-wider uppercase font-bold">LinkedIn</span>
                <span className="font-body-md font-bold text-on-background text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center bg-surface-container-lowest rounded-t-3xl border-t border-outline/5">
        <span className="font-headline-lg text-2xl md:text-headline-lg text-primary tracking-wide mb-4">Srinivas Prasad R</span>
        <p className="text-lg md:text-2xl text-on-surface-variant max-w-3xl italic font-bold leading-relaxed mb-10 px-4">
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
