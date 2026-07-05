"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Sun, Moon, Sparkles, Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: "IDR" | "USD";
  onToggleCurrency: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  currency,
  onToggleCurrency,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "glass-panel" : ""
      }`}
      style={{
        height: scrolled ? "70px" : "86px",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
        background: scrolled ? "var(--glass-bg)" : "transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Z
          </div>
          <div>
            <span className="font-serif" style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              ZAHRA <span className="text-gradient">LUXE</span>
            </span>
            <span style={{ display: "block", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "-4px" }}>
              Hijab & Silk Atelier
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          <a href="#katalog" className="nav-link">Koleksi</a>
          <a href="#keunggulan" className="nav-link">Keunggulan Bahan</a>
          <a href="#quiz" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <Sparkles size={14} color="var(--accent-gold)" /> Style Finder
          </a>
          <a href="#testimoni" className="nav-link">Testimoni</a>
          <a href="#kontak" className="nav-link">Kontak</a>
        </nav>

        {/* Actions (Currency, Theme, Cart) */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            className="btn-sm"
            style={{
              background: "transparent",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-full)",
              color: "var(--text-color)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              cursor: "pointer",
              fontWeight: 600,
            }}
            title="Ganti Mata Uang"
          >
            <Globe size={14} /> {currency}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-color)",
            }}
            title={theme === "light" ? "Ganti ke Dark Mode" : "Ganti ke Light Mode"}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} color="#D4AF37" />}
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="btn-gold"
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "var(--radius-full)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              position: "relative",
            }}
          >
            <ShoppingBag size={18} />
            <span style={{ fontWeight: 600 }}>Tas</span>
            {cartCount > 0 && (
              <span
                style={{
                  background: "#1A1817",
                  color: "#FFFFFF",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  border: "2px solid #C5A059",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-color)",
              cursor: "pointer",
              display: "none",
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Responsive styling for mobile */}
      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }
      `}</style>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--card-bg)",
            borderBottom: "1px solid var(--border-color)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <a href="#katalog" onClick={() => setMobileMenuOpen(false)} className="nav-link">Koleksi</a>
          <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="nav-link">Keunggulan Bahan</a>
          <a href="#quiz" onClick={() => setMobileMenuOpen(false)} className="nav-link">Style Finder Quiz</a>
          <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="nav-link">Testimoni</a>
          <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="nav-link">Kontak</a>
        </div>
      )}
    </header>
  );
}
