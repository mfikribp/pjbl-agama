export interface MakhrajPoint {
  id: string;
  top: string;
  left: string;
  label: string;
  desc: string;
  materiId: string;
}

export const makhrajPoints: MakhrajPoint[] = [
  { id: "khaisyum", top: "28%", left: "40%", label: "Al-Khaisyum", desc: "Pangkal hidung. Tempat keluarnya bunyi dengung (ghunnah).", materiId: "ghunnah" },
  { id: "jauf", top: "47%", left: "47%", label: "Al-Jauf", desc: "Rongga mulut dan tenggorokan. Tempat keluarnya huruf-huruf mad (Alif, Wau, Ya).", materiId: "mad" },
  { id: "syafatain", top: "51%", left: "25%", label: "Asy-Syafatain", desc: "Dua bibir. Tempat keluarnya huruf Ba, Mim, Wau, dan Fa.", materiId: "mim-mati" },
  { id: "halq_top", top: "40%", left: "62%", label: "Al-Halq (Atas)", desc: "Tenggorokan bagian atas. Tempat keluarnya huruf Kha (خ) dan Ghain (غ).", materiId: "idzhar" },
  { id: "halq_bottom", top: "58%", left: "65%", label: "Al-Halq (Bawah)", desc: "Tenggorokan bagian bawah/tengah. Tempat keluarnya huruf Hamzah (ء), Ha (هـ), 'Ain (ع), dan Ha (ح).", materiId: "qalqalah" },
  { id: "lisan", top: "62%", left: "45%", label: "Al-Lisan", desc: "Lidah. Tempat keluarnya sebagian besar huruf hijaiyah (18 huruf).", materiId: "nun-mati" }
];
