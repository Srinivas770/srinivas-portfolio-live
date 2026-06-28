"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface MobileNavProps {
  activePage: "home" | "yoga" | "fitness" | "gallery";
}

export default function MobileNav({ activePage }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "/",        label: "Home",    id: "home" },
    { href: "/yoga",    label: "Yoga",    id: "yoga" },
    { href: "/fitness", label: "Fitness", id: "fitness" },
    { href: "/gallery", label: "Gallery", id: "gallery" },
  ];

  return (
    <>
      {/* Hamburger */}
      <button
        className="md:hidden"
        style={{ color: "#52621c", background: "none", border: "none", cursor: "pointer", zIndex: 9999, position: "relative" }}
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 32 }}>menu</span>
      </button>

      {/* Full-screen overlay when open */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 9997,
            }}
          />

          {/* Drawer panel */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "75vw",
              maxWidth: "300px",
              height: "100vh",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "-8px 0 40px rgba(0,0,0,0.4)",
            }}
          >
            {/* Green header */}
            <div
              style={{
                backgroundColor: "#52621c",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#ffffff", fontWeight: 700, fontSize: 16, fontFamily: "'Playfair Display', serif" }}>
                Srinivas Prasad R
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
              </button>
            </div>

            {/* White links section */}
            <div
              style={{
                backgroundColor: "#ffffff",
                flex: 1,
                padding: "8px 0",
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "18px 24px",
                    borderBottom: "1px solid #f0eded",
                    fontSize: 18,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: activePage === link.id ? 700 : 400,
                    color: activePage === link.id ? "#52621c" : "#46483b",
                    textDecoration: "none",
                    backgroundColor: activePage === link.id ? "#f6f9ee" : "transparent",
                  }}
                >
                  {activePage === link.id && (
                    <span style={{ width: 3, height: 20, backgroundColor: "#52621c", borderRadius: 2, marginRight: 12, flexShrink: 0 }} />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
