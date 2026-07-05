"use client";

import React, { useState } from "react";
import { Sparkles, Wind, Droplets, Sun, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function FabricExperience() {
  const [selectedFabric, setSelectedFabric] = useState<"silk" | "chiffon" | "sport">("silk");

  const fabricData = {
    silk: {
      name: "Royal Silk Pashmina Grade A",
      tagline: "Kilau Mewah, Lembut Bagaikan Awan",
      description: "Ditenun dengan serat sutra pilihan yang menghasilkan permukaan satin halus nan eksklusif. Berbeda dari satin biasa yang panas dan licin, Royal Silk kami dirancang dengan struktur rongga mikro sehingga tetap adem dan melekat nyaman di kepala tanpa jarum pentul berlebih.",
      metrics: [
        { label: "Kesejukan & Sirkulasi Udara (Breathability)", score: 94 },
        { label: "Kelembutan & Jatuh Anggun (Drape)", score: 99 },
        { label: "Ketahanan Terhadap Kusut (Wrinkle-Free)", score: 88 },
        { label: "Anti-Transparan (Opacity)", score: 95 },
      ],
      features: [
        "100% serat halus yang aman untuk kulit sensitif",
        "Kilau mutiara alami yang elegan (tidak mencolok/norak)",
        "Drape flowy yang sempurna untuk formal & kondangan",
        "Mudah dibentuk & langsung pas di dahi",
      ],
      icon: <Sparkles size={24} color="var(--accent-gold)" />,
    },
    chiffon: {
      name: "Ceruty Babydoll Chiffon Luxe",
      tagline: "Flowy Maksimal, Ringan & Anti gerah",
      description: "Chiffon kualitas impor yang terkenal dengan tekstur sedikit berpasir namun sangat lembut di kulit. Memberikan efek melambai (flowy) yang sangat cantik saat terkena angin dan super ringan untuk aktivitas padat seharian.",
      metrics: [
        { label: "Kesejukan & Sirkulasi Udara (Breathability)", score: 98 },
        { label: "Kelembutan & Jatuh Anggun (Drape)", score: 96 },
        { label: "Ketahanan Terhadap Kusut (Wrinkle-Free)", score: 95 },
        { label: "Anti-Transparan (Opacity)", score: 90 },
      ],
      features: [
        "Tekstur babydoll premium anti-geser di kepala",
        "Super ringan, berasa seperti tidak memakai beban",
        "Sangat cocok untuk pemakaian daily maupun kuliah",
        "Cepat kering dan sangat mudah dirawat",
      ],
      icon: <Wind size={24} color="#8A9A86" />,
    },
    sport: {
      name: "Active Cool-Tech Athletic Fabric",
      tagline: "Performa Tinggi, Anti-UV 50+ & Anti-Bakteri",
      description: "Inovasi terbaru kain olahraga berteknologi Cool-Tech yang secara aktif menarik kelembapan dan keringat keluar dari kulit 3x lebih cepat. Dilengkapi lapisan anti-bakteri untuk mencegah bau meski berolahraga intensif di bawah terik matahari.",
      metrics: [
        { label: "Kesejukan & Sirkulasi Udara (Breathability)", score: 100 },
        { label: "Kelembutan & Jatuh Anggun (Drape)", score: 88 },
        { label: "Ketahanan Terhadap Kusut (Wrinkle-Free)", score: 100 },
        { label: "Anti-Transparan (Opacity)", score: 98 },
      ],
      features: [
        "Teknologi Quick-Dry menyerap keringat seketika",
        "Perlindungan sinar UV 50+ untuk aktivitas outdoor",
        "Lapisan Silver-Ion anti-bakteri & bebas bau asam",
        "Elastis 4-way stretch mengikuti gerak aktif tubuh",
      ],
      icon: <Sun size={24} color="#D8B4A0" />,
    },
  };

  const current = fabricData[selectedFabric];

  return (
    <section id="keunggulan" className="section-padding" style={{ background: "var(--card-hover-bg)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
          <div className="badge badge-gold" style={{ marginBottom: "1rem" }}>
            <ShieldCheck size={14} style={{ display: "inline", marginRight: "6px" }} /> STANDAR KUALITAS TINGGI
          </div>
          <h2 className="font-serif" style={{ fontSize: "2.75rem", fontWeight: 700, marginBottom: "1rem" }}>
            Mengapa Bahan Kami <span className="text-gradient">Berbeda?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Kami percaya bahwa kenyamanan berhijab dimulai dari sains tekstil. Rasakan perbedaan material eksklusif yang dirancang khusus untuk iklim tropis.
          </p>
        </div>

        {/* Fabric Selector Tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "3rem" }} className="fabric-tabs">
          <button
            onClick={() => setSelectedFabric("silk")}
            className="card"
            style={{
              padding: "1.5rem",
              textAlign: "left",
              border: selectedFabric === "silk" ? "2px solid var(--accent-gold)" : "1px solid var(--border-color)",
              background: selectedFabric === "silk" ? "rgba(197, 160, 89, 0.08)" : "var(--card-bg)",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(197, 160, 89, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={20} color="var(--accent-gold)" />
              </div>
              <strong style={{ fontSize: "1.1rem", color: "var(--text-color)" }}>Silk Pashmina</strong>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Kilau Mewah & Lembut</p>
          </button>

          <button
            onClick={() => setSelectedFabric("chiffon")}
            className="card"
            style={{
              padding: "1.5rem",
              textAlign: "left",
              border: selectedFabric === "chiffon" ? "2px solid var(--accent-gold)" : "1px solid var(--border-color)",
              background: selectedFabric === "chiffon" ? "rgba(197, 160, 89, 0.08)" : "var(--card-bg)",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(138, 154, 134, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Wind size={20} color="#8A9A86" />
              </div>
              <strong style={{ fontSize: "1.1rem", color: "var(--text-color)" }}>Instant Chiffon</strong>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Flowy & Anti Gerah</p>
          </button>

          <button
            onClick={() => setSelectedFabric("sport")}
            className="card"
            style={{
              padding: "1.5rem",
              textAlign: "left",
              border: selectedFabric === "sport" ? "2px solid var(--accent-gold)" : "1px solid var(--border-color)",
              background: selectedFabric === "sport" ? "rgba(197, 160, 89, 0.08)" : "var(--card-bg)",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(216, 180, 160, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sun size={20} color="#D8B4A0" />
              </div>
              <strong style={{ fontSize: "1.1rem", color: "var(--text-color)" }}>Active Sport Tech</strong>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>UV Protection & Quick Dry</p>
          </button>
        </div>

        {/* Fabric Detail Showcase Panel */}
        <div
          className="card"
          style={{
            padding: "3.5rem",
            background: "var(--card-bg)",
            border: "1px solid var(--border-color)",
            boxShadow: "var(--shadow-md)",
            borderRadius: "var(--radius-lg)",
            animation: "fadeIn 0.4s ease",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "4rem", alignItems: "center" }} className="fabric-grid">
            
            {/* Left Info & Features */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                {current.icon}
                <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {current.tagline}
                </span>
              </div>

              <h3 className="font-serif" style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "1.25rem", lineHeight: 1.25 }}>
                {current.name}
              </h3>

              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                {current.description}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="feature-list">
                {current.features.map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem" }}>
                    <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "var(--text-color)", fontWeight: 500 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metrics Progress Bars */}
            <div
              style={{
                background: "var(--bg-color)",
                padding: "2.5rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Droplets size={18} color="var(--accent-gold)" /> Hasil Uji Kenyamanan & Tekstil:
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {current.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "0.4rem", fontWeight: 600 }}>
                      <span>{metric.label}</span>
                      <span style={{ color: "var(--accent-gold)" }}>{metric.score}%</span>
                    </div>
                    <div className="progress-bar-bg" style={{ height: "10px" }}>
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${metric.score}%`,
                          transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px dashed var(--border-color)",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                }}
              >
                ✨ Diuji untuk pemakaian aktif 12 jam di iklim tropis dengan kelembapan tinggi.
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .fabric-tabs {
            grid-template-columns: 1fr !important;
          }
          .fabric-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .feature-list {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
