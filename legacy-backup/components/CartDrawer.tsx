"use client";

import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, CheckCircle2, MessageCircle } from "lucide-react";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  color: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, color: string, newQty: number) => void;
  onRemoveItem: (productId: string, color: string) => void;
  currency: "IDR" | "USD";
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponMsg, setCouponMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!isOpen) return null;

  const freeShippingLimitIDR = 250000;
  const freeShippingLimitUSD = 18;
  const limit = currency === "USD" ? freeShippingLimitUSD : freeShippingLimitIDR;

  const subtotalIDR = items.reduce((acc, item) => acc + item.product.priceIDR * item.quantity, 0);
  const subtotalUSD = items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const currentSubtotal = currency === "USD" ? subtotalUSD : subtotalIDR;

  const progress = Math.min(100, (currentSubtotal / limit) * 100);
  const needed = Math.max(0, limit - currentSubtotal);

  const discountAmount = currentSubtotal * appliedDiscount;
  const shippingCost = currentSubtotal >= limit || items.length === 0 ? 0 : currency === "USD" ? 3 : 20000;
  const total = currentSubtotal - discountAmount + shippingCost;

  const formatPrice = (val: number) => {
    if (currency === "USD") {
      return `$${val.toFixed(2)}`;
    }
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(val);
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "LUXE15") {
      setAppliedDiscount(0.15);
      setCouponMsg({ type: "success", text: "Voucher LUXE15 berhasil! Diskon 15% diterapkan." });
    } else {
      setCouponMsg({ type: "error", text: "Kode voucher tidak valid. Coba gunakan: LUXE15" });
    }
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let text = `*Halo ZAHRA LUXE! Saya ingin memesan hijab berikut:*\n\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n`;
      text += `   - Warna: ${item.color}\n`;
      text += `   - Jumlah: ${item.quantity} pcs\n`;
      text += `   - Harga: ${formatPrice(currency === "USD" ? item.product.priceUSD * item.quantity : item.product.priceIDR * item.quantity)}\n\n`;
    });

    if (appliedDiscount > 0) {
      text += `*Diskon Voucher:* -${formatPrice(discountAmount)}\n`;
    }
    text += `*Ongkos Kirim:* ${shippingCost === 0 ? "GRATIS ONGKIR" : formatPrice(shippingCost)}\n`;
    text += `*TOTAL PEMBAYARAN:* *${formatPrice(total)}*\n\n`;
    text += `Mohon infokan nomor rekening BCA/Mandiri/QRIS untuk pembayaran. Terima kasih!`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://api.whatsapp.com/send?phone=6281234567890&text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="overlay" onClick={onClose} style={{ zIndex: 9999 }}>
      <div
        className="drawer"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Drawer Header */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border-color)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ShoppingBag size={22} color="var(--accent-gold)" />
              <h3 className="font-serif" style={{ fontSize: "1.35rem", fontWeight: 700 }}>
                Tas Belanja ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-color)",
                padding: "0.25rem",
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Free Shipping Bar */}
          <div
            style={{
              background: "var(--card-hover-bg)",
              padding: "1rem",
              borderRadius: "12px",
              border: "1px solid var(--border-color)",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>
                {currentSubtotal >= limit
                  ? "🎉 Selamat! Anda dapat GRATIS ONGKIR!"
                  : `Belanja ${formatPrice(needed)} lagi untuk GRATIS ONGKIR!`}
              </span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flexGrow: 1, overflowY: "auto", paddingRight: "0.5rem", marginBottom: "1.5rem" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 1rem", color: "var(--text-muted)" }}>
              <ShoppingBag size={48} style={{ opacity: 0.3, margin: "0 auto 1rem auto" }} />
              <p style={{ fontWeight: 500, marginBottom: "1rem" }}>Tas belanja Anda masih kosong</p>
              <button onClick={onClose} className="btn btn-outline-gold btn-sm">
                Mulai Belanja Sekarang
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.color}`}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "0.85rem",
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "12px",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }}
                  />

                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.25rem" }}>
                      {item.product.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 600, marginBottom: "0.5rem" }}>
                      Warna: {item.color}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-color)" }}>
                        {formatPrice(currency === "USD" ? item.product.priceUSD : item.product.priceIDR)}
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-color)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "2px 6px" }}>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.color, item.quantity - 1)}
                          style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-color)" }}
                        >
                          <Minus size={14} />
                        </button>
                        <span style={{ fontSize: "0.85rem", fontWeight: 600, minWidth: "16px", textAlign: "center" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.color, item.quantity + 1)}
                          style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-color)" }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id, item.color)}
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      right: "0.75rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                    }}
                    title="Hapus"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {items.length > 0 && (
          <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.25rem" }}>
            {/* Coupon Input */}
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="Kode promo: LUXE15"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{
                    flexGrow: 1,
                    padding: "0.6rem 0.85rem",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    background: "var(--bg-color)",
                    color: "var(--text-color)",
                    fontSize: "0.85rem",
                  }}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="btn-sm btn-dark"
                  style={{ borderRadius: "8px", cursor: "pointer", border: "none" }}
                >
                  Pakai
                </button>
              </div>
              {couponMsg && (
                <div style={{ fontSize: "0.75rem", color: couponMsg.type === "success" ? "#10B981" : "#F43F5E", marginTop: "0.35rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  {couponMsg.type === "success" && <CheckCircle2 size={14} />} {couponMsg.text}
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)" }}>
                <span>Subtotal</span>
                <span>{formatPrice(currentSubtotal)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", color: "#10B981", fontWeight: 600 }}>
                  <span>Diskon Voucher (15%)</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)" }}>
                <span>Ongkos Kirim</span>
                <span>{shippingCost === 0 ? <strong style={{ color: "#10B981" }}>GRATIS</strong> : formatPrice(shippingCost)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-color)", borderTop: "1px dashed var(--border-color)", paddingTop: "0.5rem", marginTop: "0.25rem" }}>
                <span>Total Bayar</span>
                <span color="var(--accent-gold)">{formatPrice(total)}</span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="btn"
              style={{
                width: "100%",
                padding: "0.9rem",
                background: "#25D366",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.3)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <MessageCircle size={20} fill="#fff" /> Checkout via WhatsApp
            </button>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
              <ShieldCheck size={14} color="var(--accent-gold)" /> Transaksi Aman & Terverifikasi
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
