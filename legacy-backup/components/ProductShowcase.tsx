"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "../data/products";
import { ShoppingBag, Eye, Star, Check, Sparkles, X, Shield, Truck } from "lucide-react";

interface ProductShowcaseProps {
  currency: "IDR" | "USD";
  onAddToCart: (product: Product, colorName: string) => void;
}

export default function ProductShowcase({ currency, onAddToCart }: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"all" | "pashmina" | "chiffon" | "sport">("all");
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: string }>({
    "pashmina-rose-silk": "Rose Gold",
    "instant-chiffon-sage": "Sage Olive",
    "active-sport-cool": "Midnight Black",
    "pashmina-silk-cream": "Vanilla Cream",
  });
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewColor, setQuickViewColor] = useState<string>("");
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const filteredProducts = activeTab === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeTab);

  const formatPrice = (priceIDR: number, priceUSD: number) => {
    if (currency === "USD") {
      return `$${priceUSD.toFixed(2)}`;
    }
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(priceIDR);
  };

  const handleColorSelect = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorName }));
  };

  const handleAdd = (product: Product, colorName?: string) => {
    const chosenColor = colorName || selectedColors[product.id] || product.colors[0].name;
    onAddToCart(product, chosenColor);
    setAddedToast(`${product.name} (${chosenColor}) dimasukkan ke tas!`);
    setTimeout(() => {
      setAddedToast(null);
    }, 3000);
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setQuickViewColor(selectedColors[product.id] || product.colors[0].name);
  };

  return (
    <section id="katalog" className="section-padding" style={{ position: "relative" }}>
      {/* Toast Notification */}
      {addedToast && (
        <div
          className="glass-panel"
          style={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "1rem 1.75rem",
            background: "var(--accent-gold)",
            color: "#fff",
            borderRadius: "var(--radius-full)",
            boxShadow: "0 10px 30px rgba(197, 160, 89, 0.4)",
            zIndex: 3000,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontWeight: 600,
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div style={{ background: "#fff", color: "var(--accent-gold)", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Check size={16} />
          </div>
          {addedToast}
        </div>
      )}

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem auto" }}>
          <div className="badge badge-gold" style={{ marginBottom: "1rem" }}>
            <Sparkles size={14} style={{ display: "inline", marginRight: "6px" }} /> EKSKLUSIF ATELIER
          </div>
          <h2 className="font-serif" style={{ fontSize: "2.75rem", fontWeight: 700, marginBottom: "1rem" }}>
            Katalog <span className="text-gradient">Koleksi Pilihan</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Dirancang dengan presisi untuk kenyamanan tiada tara. Setiap helai kain melewati kontrol kualitas ketat untuk memastikan keanggunan Anda di setiap suasana.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="tab-container">
          <button
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            Semua Koleksi ({PRODUCTS.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "pashmina" ? "active" : ""}`}
            onClick={() => setActiveTab("pashmina")}
          >
            🌸 Pashmina Silk Premium
          </button>
          <button
            className={`tab-btn ${activeTab === "chiffon" ? "active" : ""}`}
            onClick={() => setActiveTab("chiffon")}
          >
            🍃 Instant Chiffon Flowy
          </button>
          <button
            className={`tab-btn ${activeTab === "sport" ? "active" : ""}`}
            onClick={() => setActiveTab("sport")}
          >
            ⚡ Active Sport Cool-Tech
          </button>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredProducts.map((product) => {
            const currentColor = selectedColors[product.id] || product.colors[0].name;
            return (
              <div key={product.id} className="product-card">
                {/* Image Wrap & Badge */}
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  {product.badge && (
                    <div className={`badge badge-${product.badgeType || "gold"} product-badge-pos`}>
                      {product.badge}
                    </div>
                  )}

                  {/* Quick View Floating Button */}
                  <button
                    onClick={() => openQuickView(product)}
                    className="btn btn-dark btn-sm product-quick-btn"
                    style={{
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Eye size={16} /> Lihat Detail
                  </button>
                </div>

                {/* Card Content */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  {/* Rating & Reviews */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span style={{ fontWeight: 600, color: "var(--text-color)" }}>{product.rating}</span>
                    <span>({product.reviewsCount} ulasan)</span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-serif" style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--accent-gold)", marginBottom: "1rem" }}>
                    {formatPrice(product.priceIDR, product.priceUSD)}
                  </div>

                  {/* Color Selector Swatches */}
                  <div style={{ marginTop: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
                        Warna: <strong style={{ color: "var(--text-color)" }}>{currentColor}</strong>
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.25rem" }}>
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => handleColorSelect(product.id, color.name)}
                          className={`color-swatch ${currentColor === color.name ? "active" : ""}`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>

                    {/* Add To Cart Button */}
                    <button
                      onClick={() => handleAdd(product, currentColor)}
                      className="btn btn-gold"
                      style={{ width: "100%", padding: "0.75rem 1rem", fontSize: "0.95rem" }}
                    >
                      <ShoppingBag size={18} /> Masukkan Tas
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="overlay" onClick={() => setQuickViewProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
            <button
              onClick={() => setQuickViewProduct(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "var(--bg-color)",
                border: "1px solid var(--border-color)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                color: "var(--text-color)",
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "2.5rem" }} className="modal-grid">
              {/* Left Image */}
              <div style={{ position: "relative", minHeight: "350px", background: "#F4F1EA" }}>
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Right Details */}
              <div style={{ padding: "2.5rem 2.5rem 2.5rem 0" }} className="modal-text">
                <div className="badge badge-gold" style={{ marginBottom: "0.75rem" }}>
                  {quickViewProduct.badge || "Premium Collection"}
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  {quickViewProduct.name}
                </h3>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--accent-gold)", marginBottom: "1rem" }}>
                  {formatPrice(quickViewProduct.priceIDR, quickViewProduct.priceUSD)}
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {quickViewProduct.description}
                </p>

                {/* Fabric Performance Bars */}
                <div style={{ marginBottom: "1.75rem", background: "var(--bg-color)", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-color)" }}>
                    Indeks Performa Kain (Atelier Lab):
                  </div>
                  
                  <div style={{ marginBottom: "0.6rem" }}>
                    <div style={{ display: "flex", justify: "content", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.2rem" }}>
                      <span>Kesejukan / Breathability</span>
                      <strong style={{ color: "var(--accent-gold)" }}>{quickViewProduct.breathability}%</strong>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${quickViewProduct.breathability}%` }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: "0.6rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.2rem" }}>
                      <span>Kelembutan & Drape Flowy</span>
                      <strong style={{ color: "var(--accent-gold)" }}>{quickViewProduct.drape}%</strong>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${quickViewProduct.drape}%` }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.2rem" }}>
                      <span>Kepekatan / Anti-Transparan</span>
                      <strong style={{ color: "var(--accent-gold)" }}>{quickViewProduct.opacity}%</strong>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${quickViewProduct.opacity}%` }} />
                    </div>
                  </div>
                </div>

                {/* Color Selection */}
                <div style={{ marginBottom: "2rem" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                    Pilih Warna: <span style={{ color: "var(--accent-gold)" }}>{quickViewColor}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {quickViewProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setQuickViewColor(c.name)}
                        className={`color-swatch ${quickViewColor === c.name ? "active" : ""}`}
                        style={{ backgroundColor: c.hex, width: "32px", height: "32px" }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Truck size={16} color="var(--accent-gold)" /> Gratis Ongkir
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Shield size={16} color="var(--accent-gold)" /> Garansi 100% Original
                  </div>
                </div>

                {/* Add Button */}
                <button
                  onClick={() => {
                    handleAdd(quickViewProduct, quickViewColor);
                    setQuickViewProduct(null);
                  }}
                  className="btn btn-gold"
                  style={{ width: "100%", padding: "1rem", fontSize: "1.05rem" }}
                >
                  <ShoppingBag size={20} /> Tambahkan ke Tas — {formatPrice(quickViewProduct.priceIDR, quickViewProduct.priceUSD)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .modal-text {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
