export interface MakhrajPoint {
  id: string;
  top: string;
  left: string;
  label: string;
  desc: string;
  materiId: string;
  letters?: string[];
  detail?: string;
}

export const makhrajPoints: MakhrajPoint[] = [
  { 
    id: "khaisyum", 
    top: "28%", 
    left: "40%", 
    label: "Al-Khaisyum", 
    desc: "Pangkal hidung. Tempat keluarnya bunyi dengung (ghunnah).", 
    materiId: "ghunnah",
    letters: ["نّ", "مّ"],
    detail: "Khaisyum adalah rongga hidung. Suara yang keluar dari sini disebut Ghunnah (mendengung). Setiap ada Nun atau Mim bertasydid, maka dibaca mendengung melalui hidung."
  },
  { 
    id: "jauf", 
    top: "47%", 
    left: "47%", 
    label: "Al-Jauf", 
    desc: "Rongga mulut dan tenggorokan. Tempat keluarnya huruf-huruf mad.", 
    materiId: "mad",
    letters: ["ا", "و", "ي"],
    detail: "Jauf secara bahasa berarti lubang atau rongga. Dalam tajwid, ini adalah rongga mulut dan tenggorokan. Digunakan untuk memanjangkan bunyi huruf (Mad)."
  },
  { 
    id: "syafatain", 
    top: "51%", 
    left: "25%", 
    label: "Asy-Syafatain", 
    desc: "Dua bibir. Tempat keluarnya empat huruf hijaiyah.", 
    materiId: "mim-mati",
    letters: ["ب", "م", "و", "ف"],
    detail: "Makhraj ini melibatkan bibir atas dan bawah. Huruf Fa (ف) keluar dari bibir bawah bertemu gigi seri atas, sementara Ba, Mim, dan Wau keluar dari pertemuan kedua bibir."
  },
  { 
    id: "halq_top", 
    top: "40%", 
    left: "62%", 
    label: "Al-Halq (Atas)", 
    desc: "Tenggorokan bagian atas (Adnal Halq).", 
    materiId: "idzhar",
    letters: ["خ", "غ"],
    detail: "Terletak di bagian tenggorokan yang paling dekat dengan rongga mulut. Huruf yang keluar adalah Kha (خ) dan Ghain (غ)."
  },
  { 
    id: "halq_bottom", 
    top: "58%", 
    left: "65%", 
    label: "Al-Halq (Bawah & Tengah)", 
    desc: "Tenggorokan bagian bawah dan tengah.", 
    materiId: "qalqalah",
    letters: ["ء", "هـ", "ع", "ح"],
    detail: "Wasthul Halq (tengah) menghasilkan 'Ain (ع) dan Ha (ح). Aqshal Halq (bawah/pangkal) menghasilkan Hamzah (ء) dan Ha (هـ)."
  },
  { 
    id: "lisan", 
    top: "62%", 
    left: "45%", 
    label: "Al-Lisan", 
    desc: "Lidah. Makhraj paling luas dengan 10 titik pembagian.", 
    materiId: "nun-mati",
    letters: ["ق", "ك", "ج", "ش", "ي", "ض", "ل", "ن", "ر", "د", "ت", "ط", "ص", "ز", "س", "ذ", "ث", "ظ"],
    detail: "Lidah adalah makhraj yang paling banyak mengeluarkan huruf (18 huruf). Dibagi menjadi pangkal, tengah, sisi, dan ujung lidah."
  }
];
