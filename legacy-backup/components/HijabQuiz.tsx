"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, Check, ShoppingBag, Gift } from "lucide-react";
import { PRODUCTS, Product } from "../data/products";

interface HijabQuizProps {
  onAddToCart: (product: Product, colorName: string) => void;
}

export default function HijabQuiz({ onAddToCart }: HijabQuizProps) {
  const [step, setStep] = useState<number>(1);
  const [faceShape, setFaceShape] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [preference, setPreference] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleReset = () => {
    setStep(1);
    setFaceShape("");
    setActivity("");
    setPreference("");
    setCopied(false);
  };

  // Determine recommendation based on answers
  const getRecommendation = (): { product: Product; color: string; reason: string } => {
    if (preference === "silk" || activity === "formal") {
      return {
        product: PRODUCTS[0], // Pashmina Rose Silk
        color: "Rose Gold",
        reason: `Bentuk wajah ${faceShape} sangat anggun dengan potongan pashmina silk yang membingkai dagu secara lembut. Kilau mewahnya sempurna untuk acara formal!`,
      };
    } else if (activity === "sport") {
      return {
        product: PRODUCTS[2], // Active Sport Cool
        color: "Midnight Black",
        reason: `Untuk mobilitas aktif dan bentuk wajah ${faceShape}, bahan Cool-Tech dengan elastisitas 4-way stretch menjaga posisi hijab tetap rapi dan anti gerah!`,
      };
    } else {
      return {
        product: PRODUCTS[1], // Instant Chiffon Sage
        color: "Sage Olive",
        reason: `Bahan Chiffon Ceruty Babydoll memberikan efek tirus alami pada wajah ${faceShape} dengan tekstur flowy yang tegak sempurna di dahi seharian!`,
      };
    }
  };

  const recommendation = getRecommendation();

  const handleCopyCode = () => {
    navigator.clipboard.writeText("LUXE15");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="quiz" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, var(--card-bg), rgba(197, 160, 89, 0.05))",
            border: "2px solid var(--accent-gold)",
            borderRadius: "32px",
            padding: "4rem",
            boxShadow: "var(--shadow-lg)",
            position: "relative",
            overflow: "hidden",
          }}
          className="quiz-box"
        >
          {/* Decorative Glow */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 160, 89, 0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Quiz Header */}
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <div className="badge badge-gold" style={{ marginBottom: "1rem" }}>
              <Sparkles size={14} style={{ display: "inline", marginRight: "6px" }} /> VIRTUAL STYLE CONSULTANT
            </div>
            <h2 className="font-serif" style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Temukan Hijab Sesuai <span className="text-gradient">Bentuk Wajah & Gayamu</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
              Ikuti konsultasi singkat 30 detik untuk mendapatkan rekomendasi model terbaik sekaligus voucher diskon eksklusif 15%!
            </p>
          </div>

          {/* Quiz Content */}
          {step <= 3 ? (
            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              {/* Progress Tracker */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--accent-gold)" }}>
                  Langkah {step} dari 3
                </span>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      style={{
                        width: "36px",
                        height: "6px",
                        borderRadius: "3px",
                        background: step >= num ? "var(--accent-gold)" : "var(--border-color)",
                        transition: "var(--transition)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Face Shape */}
              {step === 1 && (
                <div style={{ animation: "fadeIn 0.3s ease" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, textAlign: "center", marginBottom: "2rem" }}>
                    1. Apa bentuk wajah Anda?
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }} className="quiz-grid">
                    {[
                      { id: "Oval", label: "✨ Wajah Oval (Proporsional & Serba Cocok)" },
                      { id: "Bulat", label: "🌸 Wajah Bulat / Chubby (Ingin Efek Tirus)" },
                      { id: "Kotak", label: "💎 Wajah Kotak / Rahang Tegas" },
                      { id: "Hati", label: "💖 Wajah Hati (Dagu Lancip / Dahi Lebar)" },
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setFaceShape(opt.id)}
                        className={`quiz-option ${faceShape === opt.id ? "selected" : ""}`}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      disabled={!faceShape}
                      onClick={() => setStep(2)}
                      className="btn btn-gold"
                      style={{ opacity: !faceShape ? 0.5 : 1, padding: "0.85rem 2.5rem" }}
                    >
                      Lanjut ke Langkah 2 <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Activity */}
              {step === 2 && (
                <div style={{ animation: "fadeIn 0.3s ease" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, textAlign: "center", marginBottom: "2rem" }}>
                    2. Hijab ini lebih sering digunakan untuk?
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }} className="quiz-grid">
                    {[
                      { id: "formal", label: "🥂 Acara Formal / Pesta / Kondangan" },
                      { id: "daily", label: "💼 Daily / Kuliah / Ngantor Harian" },
                      { id: "sport", label: "🏃‍♀️ Olahraga / Gym / Outdoor Active" },
                      { id: "travel", label: "✈️ Traveling & Liburan Nyaman" },
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setActivity(opt.id)}
                        className={`quiz-option ${activity === opt.id ? "selected" : ""}`}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                    <button onClick={() => setStep(1)} className="btn btn-outline-gold" style={{ padding: "0.85rem 2rem" }}>
                      Kembali
                    </button>
                    <button
                      disabled={!activity}
                      onClick={() => setStep(3)}
                      className="btn btn-gold"
                      style={{ opacity: !activity ? 0.5 : 1, padding: "0.85rem 2.5rem" }}
                    >
                      Lanjut ke Langkah 3 <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Preference */}
              {step === 3 && (
                <div style={{ animation: "fadeIn 0.3s ease" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, textAlign: "center", marginBottom: "2rem" }}>
                    3. Apa preferensi bahan yang Anda sukai?
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "2.5rem" }}>
                    {[
                      { id: "silk", label: "✨ Sutra Pashmina Glowing — Lembut mewah & memberi kilau elegan" },
                      { id: "chiffon", label: "🍃 Chiffon Ceruty Flowy — Jatuh melambai, ringan & anti gerah" },
                      { id: "sport", label: "⚡ Cool-Tech Active — Elastis, menyerap keringat & anti UV" },
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setPreference(opt.id)}
                        className={`quiz-option ${preference === opt.id ? "selected" : ""}`}
                        style={{ textAlign: "left", padding: "1.25rem 1.75rem" }}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                    <button onClick={() => setStep(2)} className="btn btn-outline-gold" style={{ padding: "0.85rem 2rem" }}>
                      Kembali
                    </button>
                    <button
                      disabled={!preference}
                      onClick={() => setStep(4)}
                      className="btn btn-gold"
                      style={{ opacity: !preference ? 0.5 : 1, padding: "0.85rem 2.5rem" }}
                    >
                      Lihat Hasil Konsultasi <Sparkles size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Step 4: Result & Coupon Recommendation */
            <div style={{ maxWidth: "800px", margin: "0 auto", animation: "scaleUp 0.4s ease" }}>
              <div
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "24px",
                  padding: "3rem",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                  <div>
                    <div className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>
                      ✨ REKOMENDASI CUSTOM UNTUK ANDA
                    </div>
                    <h3 className="font-serif" style={{ fontSize: "1.85rem", fontWeight: 700 }}>
                      {recommendation.product.name}
                    </h3>
                  </div>

                  {/* Discount Coupon Pill */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(197, 160, 89, 0.15), rgba(216, 180, 160, 0.2))",
                      border: "2px dashed var(--accent-gold)",
                      padding: "0.75rem 1.25rem",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Gift size={22} color="var(--accent-gold)" />
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Voucher Diskon 15%:</div>
                      <strong style={{ fontSize: "1.1rem", color: "var(--accent-gold)", letterSpacing: "0.1em" }}>LUXE15</strong>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="btn-sm"
                      style={{
                        background: copied ? "#10B981" : "var(--accent-gold)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: 600,
                        padding: "0.4rem 0.8rem",
                      }}
                    >
                      {copied ? "Disalin!" : "Salin"}
                    </button>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "2.5rem", alignItems: "center", marginBottom: "2.5rem" }} className="result-grid">
                  <div style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "1 / 1", background: "#F4F1EA" }}>
                    <img src={recommendation.product.image} alt={recommendation.product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>

                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--accent-gold)", marginBottom: "0.75rem" }}>
                      Warna Saran: {recommendation.color}
                    </div>
                    <p style={{ color: "var(--text-color)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem", background: "var(--bg-color)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                      "{recommendation.reason}"
                    </p>
                    <div style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-color)", marginBottom: "1.5rem" }}>
                      Harga Spesial: <span style={{ textDecoration: "line-through", fontSize: "1rem", color: "var(--text-muted)", marginRight: "8px" }}>Rp 169.000</span>
                      <span color="var(--accent-gold)">Rp 126.650</span>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      <button
                        onClick={() => onAddToCart(recommendation.product, recommendation.color)}
                        className="btn btn-gold"
                        style={{ flexGrow: 1, padding: "0.9rem" }}
                      >
                        <ShoppingBag size={18} /> Klaim & Masukkan Tas
                      </button>
                      <button
                        onClick={handleReset}
                        className="btn btn-outline-gold"
                        style={{ padding: "0.9rem" }}
                      >
                        <RotateCcw size={18} /> Ulangi Quiz
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .quiz-box {
            padding: 2rem !important;
          }
          .quiz-grid {
            grid-template-columns: 1fr !important;
          }
          .result-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
