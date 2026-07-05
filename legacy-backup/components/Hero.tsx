"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Heart, Star, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-padding" style={{ paddingTop: "110px", position: "relative", overflow: "hidden" }}>
      {/* Background Decorative Circles */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(216, 180, 160, 0.15) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
          
          {/* Left Text Column */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }} className="badge badge-gold">
              <Sparkles size={14} /> KOLEKSI SILK & CHIFFON 2026
            </div>

            <h1 className="font-serif" style={{ fontSize: "3.5rem", lineHeight: 1.15, fontWeight: 800, marginBottom: "1.5rem" }}>
              Elegan dalam <span className="text-gradient">Syariat</span>, Nyaman Sepanjang Hari.
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "540px", lineHeight: 1.7 }}>
              Temukan keharuman gaya busana muslimah masa kini. Dibuat dari benang sutra pashmina dan chiffon eksklusif yang super flowy, tegak sempurna di dahi, serta sejuk meski dipakai seharian.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              <a href="#katalog" className="btn btn-gold" style={{ padding: "1rem 2rem", fontSize: "1.05rem" }}>
                Jelajahi Koleksi <ArrowRight size={18} />
              </a>
              <a href="#quiz" className="btn btn-outline-gold" style={{ padding: "1rem 2rem", fontSize: "1.05rem" }}>
                <Sparkles size={18} /> Temukan Gaya Hijabmu
              </a>
            </div>

            {/* Key Benefits Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#F59E0B", marginBottom: "0.2rem" }}>
                  <Star size={16} fill="#F59E0B" />
                  <span style={{ fontWeight: "bold", color: "var(--text-color)" }}>4.9/5</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>10,000+ Muslimah</div>
              </div>

              <div style={{ borderLeft: "1px solid var(--border-color)", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--accent-gold)", marginBottom: "0.2rem", fontWeight: "bold" }}>
                  <Award size={16} /> 100% Pure
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Silk & Chiffon Grade A</div>
              </div>

              <div style={{ borderLeft: "1px solid var(--border-color)", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#10B981", marginBottom: "0.2rem", fontWeight: "bold" }}>
                  <ShieldCheck size={16} /> Garansi
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Tukar 7 Hari Kerja</div>
              </div>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div style={{ position: "relative" }}>
            {/* Main Decorative Frame */}
            <div
              style={{
                position: "relative",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "2px solid var(--accent-gold)",
                aspectRatio: "4 / 5",
              }}
            >
              <img
                src="/images/hero.jpg"
                alt="ZAHRA LUXE Silk Hijab Model"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Subtle Overlay Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)",
                }}
              />
            </div>

            {/* Floating Glass Badge 1: Best Seller Alert */}
            <div
              className="glass-panel animate-float"
              style={{
                position: "absolute",
                bottom: "30px",
                left: "-20px",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                maxWidth: "240px",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F43F5E, #E11D48)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <Heart size={20} fill="#fff" />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase" }}>
                  Terlaris Minggu Ini
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-color)" }}>
                  Pashmina Rose Silk
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  Terjual 1,420+ pcs
                </div>
              </div>
            </div>

            {/* Floating Glass Badge 2: Quality Seal */}
            <div
              className="glass-panel"
              style={{
                position: "absolute",
                top: "40px",
                right: "-20px",
                padding: "0.75rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(197, 160, 89, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-gold)",
                  fontWeight: "bold",
                }}
              >
                ★
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-color)" }}>
                Atelier Grade Luxury
              </span>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
