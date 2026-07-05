"use client";

import React, { useState } from "react";
import { Star, CheckCircle, Quote, Instagram, Heart, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const [activeReviewTab, setActiveReviewTab] = useState<string>("all");

  const reviews = [
    {
      id: 1,
      name: "Dr. Aisyah Putri, Sp.A",
      role: "Dokter Spesialis Anak",
      city: "Jakarta Selatan",
      category: "silk",
      rating: 5,
      product: "Royal Pashmina Silk — Rose Gold",
      comment: "MasyaAllah, baru kali ini nemu pashmina silk yang BENER-BENER ga licin dan ga bikin gerah waktu praktek di RS. Efek glowingnya mewah banget waktu dipakai kondangan malem. Pasti bakalan repeat order warna lain!",
      date: "2 hari yang lalu",
      likes: 124,
    },
    {
      id: 2,
      name: "Nabila Maharani",
      role: "Fashion Creator & Influencer",
      city: "Bandung",
      category: "chiffon",
      rating: 5,
      product: "Instant Chiffon Ceruty — Sage Olive",
      comment: "Definisi penyelamat waktu! Bangun kesiangan pas mau photoshoot outdoor, tinggal slup langsung tegak paripurna tanpa jarum pentul. Chiffonnya flowy banget waktu kena angin. Sangat recommended!",
      date: "5 hari yang lalu",
      likes: 89,
    },
    {
      id: 3,
      name: "Rania Larasati",
      role: "Marathon Runner & Arsitek",
      city: "Surabaya",
      category: "sport",
      rating: 5,
      product: "Active Cool-Tech Sport Hijab",
      comment: "Akhirnya ada hijab olahraga yang ga bikin kuping sakit dan beneran ngeringenin keringat waktu lari 10K! Bahan Cool-Tech nya terasa adem di kulit kepala, ga ada bau apek samasekali setelah lari.",
      date: "1 minggu yang lalu",
      likes: 210,
    },
  ];

  const filteredReviews = activeReviewTab === "all"
    ? reviews
    : reviews.filter((r) => r.category === activeReviewTab);

  return (
    <section id="testimoni" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
          <div className="badge badge-gold" style={{ marginBottom: "1rem" }}>
            <Star size={14} style={{ display: "inline", marginRight: "6px" }} fill="#C5A059" /> 10,000+ MUSLIMAH PUAS
          </div>
          <h2 className="font-serif" style={{ fontSize: "2.75rem", fontWeight: 700, marginBottom: "1rem" }}>
            Apa Kata Mereka Tentang <span className="text-gradient">ZAHRA LUXE?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Dengarkan pengalaman nyata dari para muslimah yang telah beralih ke standar kenyamanan baru kami.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveReviewTab("all")}
            className={`btn-sm ${activeReviewTab === "all" ? "btn-gold" : "btn-outline-gold"}`}
            style={{ borderRadius: "var(--radius-full)", cursor: "pointer" }}
          >
            Semua Review
          </button>
          <button
            onClick={() => setActiveReviewTab("silk")}
            className={`btn-sm ${activeReviewTab === "silk" ? "btn-gold" : "btn-outline-gold"}`}
            style={{ borderRadius: "var(--radius-full)", cursor: "pointer" }}
          >
            🌸 Silk Pashmina
          </button>
          <button
            onClick={() => setActiveReviewTab("chiffon")}
            className={`btn-sm ${activeReviewTab === "chiffon" ? "btn-gold" : "btn-outline-gold"}`}
            style={{ borderRadius: "var(--radius-full)", cursor: "pointer" }}
          >
            🍃 Chiffon Instant
          </button>
          <button
            onClick={() => setActiveReviewTab("sport")}
            className={`btn-sm ${activeReviewTab === "sport" ? "btn-gold" : "btn-outline-gold"}`}
            style={{ borderRadius: "var(--radius-full)", cursor: "pointer" }}
          >
            ⚡ Sport Hijab
          </button>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Quote size={40} color="rgba(197, 160, 89, 0.15)" style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }} />

              <div>
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "1rem" }}>
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                {/* Comment */}
                <p style={{ color: "var(--text-color)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem", fontStyle: "italic" }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontWeight: 700, color: "var(--text-color)" }}>
                      {rev.name}
                      <CheckCircle size={15} color="#10B981" fill="#10B981" style={{ color: "#fff" }} />
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      {rev.role} • {rev.city}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 600, marginTop: "0.3rem" }}>
                      ✓ {rev.product}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{rev.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lookbook Instagram Section */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--card-bg), rgba(197, 160, 89, 0.08))",
            border: "1px solid var(--border-color)",
            borderRadius: "32px",
            padding: "3.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#E1306C", fontWeight: 700, marginBottom: "0.5rem" }}>
            <Instagram size={20} /> @zahraluxe.official
          </div>
          <h3 className="font-serif" style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
            #ZahraLuxeOOTD Lookbook
          </h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem auto" }}>
            Tag akun Instagram kami dengan hashtag #ZahraLuxeOOTD untuk kesempatan dimuat di galeri eksklusif kami dan menangkan voucher belanja Rp 500.000 setiap bulannya!
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="ootd-grid">
            {[
              { img: "/images/hero.jpg", tag: "@sarah.larissa", likes: "1,420" },
              { img: "/images/chiffon.jpg", tag: "@nadia_azara", likes: "892" },
              { img: "/images/pashmina.jpg", tag: "@putri.amelia", likes: "1,105" },
              { img: "/images/sport.jpg", tag: "@dini.run", likes: "654" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "1 / 1",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "pointer",
                }}
                className="ootd-card"
              >
                <img src={item.img} alt={`OOTD by ${item.tag}`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1rem",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>{item.tag}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", opacity: 0.9 }}>
                    <Heart size={12} fill="#fff" /> {item.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .ootd-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .ootd-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .ootd-card:hover img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
