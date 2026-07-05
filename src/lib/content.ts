export interface Product {
  name: string;
  fabric: string;
  price: string;
  tag: string;
  image: string;
  alt: string;
}

export interface LookbookItem {
  image: string;
  alt: string;
  caption: string;
  note: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  /** CSS background for the avatar placeholder */
  avatar: string;
}

export interface CraftStep {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { label: "Koleksi", href: "#koleksi" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Craftsmanship", href: "#craft" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
] as const;

export const MARQUEE_ITEMS = [
  "Voal Premium",
  "Jahit Tepi Rapi",
  "Warna Timeless",
  "Ringan & Adem",
  "Ramah Kulit Sensitif",
  "Dibuat di Indonesia",
] as const;

export const HERO_STATS = [
  { value: "48+", label: "Pilihan Warna" },
  { value: "120rb", label: "Hijabers Puas" },
  { value: "4.9/5", label: "Rating Ulasan" },
] as const;

export const PRODUCTS: readonly Product[] = [
  {
    name: "Sana Silk",
    fabric: "Silk Satin Premium",
    price: "Rp 129.000",
    tag: "Best Seller",
    image: "/images/pashmina.jpg",
    alt: "Tiga pashmina silk satin warna pastel terlipat rapi di atas meja marmer",
  },
  {
    name: "Zahra Chiffon",
    fabric: "Chiffon Ceruti",
    price: "Rp 99.000",
    tag: "New",
    image: "/images/chiffon.jpg",
    alt: "Hijab chiffon hijau sage tersampir anggun pada manekin",
  },
  {
    name: "Nara Active",
    fabric: "Jersey Breathable",
    price: "Rp 115.000",
    tag: "Sport",
    image: "/images/sport.jpg",
    alt: "Hijab sport hitam dikenakan saat berlari di gym",
  },
  {
    name: "Aurelia Signature",
    fabric: "Voal Ultrafine",
    price: "Rp 159.000",
    tag: "Limited",
    image: "/images/hijab.jpg",
    alt: "Hijab voal motif hijau sage dengan gaya elegan",
  },
] as const;

export const LOOKBOOK: readonly LookbookItem[] = [
  {
    image: "/images/1dfdd209-style-hijab-casual-dengan-tunik-dan-celana.jpeg",
    alt: "Gaya kasual hijab cokelat dengan tunik khaki dan celana hitam",
    caption: "Office Neutrals",
    note: "Tunik khaki + Aurelia mocca",
  },
  {
    image: "/images/4cd67004-ootd-casual-rok-panjang.jpeg",
    alt: "Gaya kasual hijab putih dengan gamis abu-abu polkadot",
    caption: "Soft Weekend",
    note: "Gamis polkadot + Sana ivory",
  },
  {
    image: "/images/a88e193b-style-casual-biru-hitam.jpeg",
    alt: "Gaya kasual hijab hitam dengan kemeja hitam dan kulot denim",
    caption: "Monochrome Ease",
    note: "Kemeja hitam + Zahra noir",
  },
  {
    image: "/images/chiffon.jpg",
    alt: "Hijab chiffon hijau sage pada manekin dengan nuansa earthy",
    caption: "Sage Statement",
    note: "Zahra Chiffon — warna terbaru",
  },
] as const;

export const CRAFT_STEPS: readonly CraftStep[] = [
  {
    title: "Kain Pilihan",
    body: "Setiap lembar voal dan silk melewati kurasi ketat — hanya kain dengan serat halus, jatuhnya anggun, dan adem di kulit yang kami loloskan.",
  },
  {
    title: "Pewarnaan Presisi",
    body: "Palet warna dirancang bersama penata gaya agar tetap relevan bertahun-tahun — bukan sekadar mengikuti tren musiman.",
  },
  {
    title: "Jahit Tepi Halus",
    body: "Finishing baby hem dikerjakan penjahit berpengalaman sehingga tepi hijab rapi, tidak bergelombang, dan tahan lama.",
  },
  {
    title: "Kontrol Kualitas Ganda",
    body: "Sebelum sampai ke tanganmu, setiap hijab diperiksa dua kali — dari kerataan warna hingga kekuatan jahitan.",
  },
] as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "Voalnya beneran ringan dan nggak licin. Dipakai seharian tetap rapi tanpa perlu setrika ulang.",
    name: "Alya Rahmadina",
    role: "Content Creator, Jakarta",
    initials: "AR",
    avatar: "linear-gradient(135deg, #b08d57, #8f6f3f)",
  },
  {
    quote:
      "Warna-warnanya kalem dan gampang di-mix and match sama outfit kerja. Paket datang rapi banget.",
    name: "Nadia Safitri",
    role: "Arsitek, Bandung",
    initials: "NS",
    avatar: "linear-gradient(135deg, #d8b4a0, #b98d74)",
  },
  {
    quote:
      "Kulitku sensitif, dan ini hijab pertama yang nggak bikin gatal di leher. Langsung repeat order tiga warna.",
    name: "Kirana Putri",
    role: "Dokter Gigi, Surabaya",
    initials: "KP",
    avatar: "linear-gradient(135deg, #2f6a57, #173f33)",
  },
] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "Berapa lama pengiriman pesanan saya?",
    answer:
      "Pesanan diproses maksimal 1×24 jam di hari kerja. Untuk Jabodetabek biasanya tiba 1–2 hari, luar pulau 3–5 hari. Nomor resi dikirim otomatis via email dan WhatsApp.",
  },
  {
    question: "Apakah bisa tukar ukuran atau warna?",
    answer:
      "Bisa. Kamu punya waktu 7 hari sejak paket diterima untuk penukaran, selama produk belum dicuci dan label masih terpasang. Ongkos kirim penukaran pertama kami tanggung.",
  },
  {
    question: "Bagaimana cara merawat hijab voal dan silk?",
    answer:
      "Cuci tangan dengan deterjen lembut, jangan diperas terlalu kuat, dan jemur di tempat teduh. Setrika suhu rendah dari sisi dalam — silk sebaiknya dilapisi kain saat disetrika.",
  },
  {
    question: "Apakah warna di foto sama dengan aslinya?",
    answer:
      "Kami memotret di studio dengan pencahayaan netral agar warna seakurat mungkin. Perbedaan tipis bisa terjadi karena layar, maksimal 5–10% dari warna asli.",
  },
  {
    question: "Ada diskon untuk pembelian grosir atau seragam?",
    answer:
      "Ada. Untuk pembelian 24 pcs ke atas (seragam komunitas, hampers, korporat) hubungi tim kami — tersedia harga khusus dan opsi bordir logo.",
  },
] as const;

export const FOOTER_LINKS = {
  belanja: [
    { label: "Semua Koleksi", href: "#koleksi" },
    { label: "Voal Series", href: "#koleksi" },
    { label: "Silk Series", href: "#koleksi" },
  ],
  bantuan: [
    { label: "Panduan Ukuran", href: "#faq" },
    { label: "Pengiriman", href: "#faq" },
    { label: "Kontak", href: "#faq" },
  ],
} as const;
