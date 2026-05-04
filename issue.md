# Planning: Prompt Generation untuk Aset Visual Simulator Wudhu

## 📌 Tujuan (Objective)
Menyediakan panduan *prompt* spesifik bagi model AI image generator untuk menghasilkan aset visual tata cara wudhu yang konsisten, bersih, relevan dengan materi fiqih, dan yang paling penting: **bebas dari teks, huruf, atau kata-kata yang mengganggu (no text/typography)** yang sering kali muncul sebagai halusinasi AI.

## 📋 Aturan Umum Pembuatan Gambar (General Rules)
- **Style Visual**: *Minimalist modern flat illustration, clean blue and white theme, soft aesthetic, educational style, white background.* (Gaya ilustrasi datar modern yang minimalis, dominan warna biru dan putih, estetik lembut, gaya edukasi, latar belakang putih bersih).
- **Karakter & Fokus**: Seseorang menggunakan pakaian rapi, dengan fokus kamera/sudut pandang (angle) hanya pada bagian tubuh yang sedang dibasuh air agar detail edukasinya tersampaikan.
- **Batasan Kritis (Constraints)**: HARUS menyertakan instruksi `ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK` pada setiap prompt.

---

## Daftar Prompt per Langkah Wudhu (Total 10 Langkah)

### 1. Niat & Basmalah
- **Prompt**: `Minimalist modern flat illustration of a muslim person looking peaceful and preparing for prayer. Hands resting gently. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 2. Mencuci Telapak Tangan
- **Prompt**: `Minimalist modern flat illustration of a person's hands being washed with clean water. Focus only on the hands rubbing each other under pouring water. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 3. Berkumur-kumur
- **Prompt**: `Minimalist modern flat illustration of a muslim person rinsing their mouth with water. Focus on the face side-profile and hands bringing water to the mouth. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 4. Menghirup Air ke Hidung (Istinsyaq)
- **Prompt**: `Minimalist modern flat illustration of a muslim person sniffing water into their nose from their cupped hand. Focus on the face and hand. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 5. Membasuh Muka
- **Prompt**: `Minimalist modern flat illustration of a muslim person washing their entire face with water using both hands. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 6. Membasuh Tangan hingga Siku
- **Prompt**: `Minimalist modern flat illustration of a muslim person washing their arm from the fingertips up to the elbow with running water. Focus on the forearm and water flow. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 7. Mengusap Kepala
- **Prompt**: `Minimalist modern flat illustration of a muslim person wiping their hair and upper head with wet hands. Focus on the top of the head and hands. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 8. Mengusap Telinga
- **Prompt**: `Minimalist modern flat illustration of a muslim person cleaning the inside and outside of their ears with their index finger and thumb. Focus on the ear profile and hands. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 9. Mencuci Kaki
- **Prompt**: `Minimalist modern flat illustration of a muslim person washing their bare foot and ankles with running water, rubbing between the toes. Focus on the foot and water. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

### 10. Tertib & Doa
- **Prompt**: `Minimalist modern flat illustration of a muslim person raising their hands in prayer (dua) after finishing wudhu. Peaceful expression. Clean blue and white theme, soft aesthetic, educational style, white background. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO TYPOGRAPHY, NO WATERMARK.`

---

## 🛠️ Instruksi Eksekusi untuk Programmer / Implementator AI
1. **Generasi Gambar**: Gunakan alat AI (Midjourney, DALL-E 3, dsb) dengan menyalin prompt di atas secara utuh (dalam bahasa Inggris).
2. **Gunakan Negative Prompt (Jika Didukung)**: Jika platform AI mendukung input *Negative Prompt*, WAJIB masukkan nilai berikut: `text, typography, letters, words, signature, watermark, numbers, writing, fonts`.
3. **Quality Control (QC)**: Setelah gambar dibuat, lakukan pengecekan visual. Jika masih ada sisa-sisa coretan aneh yang menyerupai teks atau bahasa antah-berantah, segera lakukan *crop* (potong) gambar tersebut atau *re-generate* ulang. Jangan gunakan gambar berteks ke dalam UI.
4. **Penyimpanan**: Simpan semua hasil akhir dengan rasio kotak (1:1), kompres ke format WebP atau PNG, dan beri nama sesuai nomor urut, misalnya `step-1.png`, `step-2.png`, hingga `step-10.png`. Letakkan di dalam folder `public/assets/images/wudhu/`.
