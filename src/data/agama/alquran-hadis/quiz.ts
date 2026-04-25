import { QuizItem } from '../types';

export const alquranHadisQuiz: QuizItem[] = [
  {
    bab: 'Pengantar',
    ayat: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
    soal: 'Ayat di atas adalah perintah untuk membaca Al-Quran dengan cara?',
    pilihan: ['Cepat dan hafal', 'Tartil (perlahan dan tepat)', 'Keras dan lantang', 'Dalam hati saja'],
    jawaban: 1,
    penjelasan: 'QS. Al-Muzzammil: 4 memerintahkan membaca Al-Quran dengan tartil, yaitu perlahan dan benar sesuai tajwid.'
  },
  {
    bab: 'Idzhar Halqi',
    ayat: 'مَنْ آمَنَ',
    soal: 'Nun mati pada kata "man" bertemu hamzah (ء). Hukumnya adalah?',
    pilihan: ['Idzhar Halqi', 'Idgham Bighunnah', 'Ikhfa Haqiqi', 'Iqlab'],
    jawaban: 0,
    penjelasan: 'Nun mati bertemu ء (hamzah) yang merupakan huruf halqi → Idzhar Halqi, dibaca jelas.'
  },
  {
    bab: 'Idzhar Halqi',
    ayat: 'عَلِيمٌ حَكِيمٌ',
    soal: 'Tanwin pada kata "aliimun" bertemu huruf ح. Hukumnya adalah?',
    pilihan: ['Iqlab', 'Idzhar Halqi', 'Ikhfa', 'Idgham Bilaghunnah'],
    jawaban: 1,
    penjelasan: 'Tanwin bertemu ح (huruf halqi) → Idzhar Halqi. Nun/tanwin dibaca jelas tanpa dengung.'
  },
  {
    bab: 'Idgham',
    ayat: 'مَنْ يَعْمَلْ',
    soal: 'Nun mati bertemu huruf ي. Hukumnya adalah?',
    pilihan: ['Idzhar', 'Ikhfa', 'Iqlab', 'Idgham Bighunnah'],
    jawaban: 3,
    penjelasan: 'Nun mati + ي (huruf YARMALUN) → Idgham Bighunnah, lebur dengan dengung 2 harakat.'
  },
  {
    bab: 'Idgham',
    ayat: 'مِنْ رَبِّهِمْ',
    soal: 'Nun mati bertemu huruf ر. Hukumnya adalah?',
    pilihan: ['Idgham Bighunnah', 'Idgham Bilaghunnah', 'Ikhfa', 'Idzhar'],
    jawaban: 1,
    penjelasan: 'Nun mati + ر → Idgham Bilaghunnah, lebur tanpa dengung.'
  },
  {
    bab: 'Idgham',
    ayat: 'دُنْيَا',
    soal: 'Nun mati pada kata "dun-ya" bertemu huruf ي dalam satu kata. Hukumnya adalah?',
    pilihan: ['Idgham Bighunnah', 'Idzhar biasa', 'Ikhfa', 'Tidak ada hukum khusus, dibaca jelas'],
    jawaban: 3,
    penjelasan: 'Idgham hanya berlaku jika nun mati and huruf idgham berada di kata yang BERBEDA. Dalam satu kata seperti دُنْيَا tidak berlaku idgham, melainkan dibaca jelas.'
  },
  {
    bab: 'Ikhfa Haqiqi',
    ayat: 'مِنْ كُلِّ',
    soal: 'Nun mati bertemu huruf ك. Hukumnya adalah?',
    pilihan: ['Idzhar', 'Idgham', 'Iqlab', 'Ikhfa Haqiqi'],
    jawaban: 3,
    penjelasan: 'Nun mati + ك (salah satu dari 15 huruf ikhfa) → Ikhfa Haqiqi, dibaca samar dengan dengung.'
  },
  {
    bab: 'Ikhfa Haqiqi',
    ayat: 'أَنْتُمْ',
    soal: 'Nun mati pada "antum" bertemu huruf ت. Cara membacanya?',
    pilihan: ['Jelas seperti idzhar', 'Samar dengan dengung', 'Diubah jadi mim', 'Lebur ke huruf berikutnya'],
    jawaban: 1,
    penjelasan: 'Nun mati + ت → Ikhfa Haqiqi. Dibaca samar di antara jelas dan lebur, disertai dengung 2 harakat.'
  },
  {
    bab: 'Iqlab',
    ayat: 'سَمِيعٌ بَصِيرٌ',
    soal: "Tanwin pada \"sami'un\" bertemu huruf ب. Hukumnya adalah?",
    pilihan: ['Ikhfa', 'Idgham', 'Iqlab', 'Idzhar'],
    jawaban: 2,
    penjelasan: 'Tanwin + ب → Iqlab. Bunyi nun diubah menjadi mim mati dan dibaca dengung 2 harakat.'
  },
  {
    bab: 'Hukum Mim Mati',
    ayat: 'هُمْ فِيهَا',
    soal: 'Mim mati pada "hum" bertemu huruf ف. Hukumnya adalah?',
    pilihan: ['Ikhfa Syafawi', 'Idgham Mimi', 'Idzhar Syafawi', 'Iqlab'],
    jawaban: 2,
    penjelasan: 'Mim mati + ف (bukan ب dan bukan م) → Idzhar Syafawi, dibaca jelas tanpa dengung.'
  },
  {
    bab: 'Hukum Mim Mati',
    ayat: 'تَرْمِيهِم بِحِجَارَةٍ',
    soal: 'Mim mati bertemu huruf ب. Hukumnya adalah?',
    pilihan: ['Idzhar Syafawi', 'Idgham Mimi', 'Ikhfa Syafawi', 'Iqlab'],
    jawaban: 2,
    penjelasan: 'Mim mati + ب → Ikhfa Syafawi. Mim dibaca samar with dengung 2 harakat, bibir tidak rapat.'
  },
  {
    bab: 'Qalqalah',
    ayat: 'يَجْعَلُونَ',
    soal: 'Huruf ج sukun di tengah kata. Cara membacanya?',
    pilihan: ['Biasa saja', 'Qalqalah Sugra (pantulan ringan)', 'Qalqalah Kubra (pantulan kuat)', 'Mad'],
    jawaban: 1,
    penjelasan: 'ج adalah huruf qalqalah. Sukun di tengah kata → Qalqalah Sugra, dipantulkan ringan.'
  },
  {
    bab: 'Qalqalah',
    ayat: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقْ',
    soal: 'Huruf ق di akhir kata "al-falaq" saat waqaf. Hukumnya?',
    pilihan: ['Qalqalah Kubra', 'Qalqalah Sugra', 'Idzhar', 'Waqaf biasa tanpa pantulan'],
    jawaban: 0,
    penjelasan: 'ق sukun di akhir karena waqaf → Qalqalah Kubra, dipantulkan dengan kuat.'
  },
  {
    bab: 'Hukum Alif Lam',
    ayat: 'الرَّحْمَنِ الرَّحِيمِ',
    soal: 'Alif lam pada "ar-rahmaan" tidak terbaca karena melebur ke huruf ر. Disebut?',
    pilihan: ['Alif Lam Qamariyah', 'Alif Lam Syamsiyah', 'Idgham', 'Ikhfa'],
    jawaban: 1,
    penjelasan: 'ر termasuk huruf syamsiyah. Al + huruf syamsiyah → Alif Lam Syamsiyah, lam tidak dibaca (lebur).'
  },
  {
    bab: 'Hukum Alif Lam',
    ayat: 'الْحَمْدُ لِلَّهِ',
    soal: 'Alif lam pada "al-hamdu" dibaca jelas. Disebut?',
    pilihan: ['Alif Lam Syamsiyah', 'Alif Lam Qamariyah', 'Idgham', 'Idzhar biasa'],
    jawaban: 1,
    penjelasan: 'ح termasuk huruf qamariyah. Al + huruf qamariyah → Alif Lam Qamariyah, lam dibaca jelas.'
  },
  {
    bab: 'Mad',
    ayat: 'قَالَ',
    soal: "Mad pada \"qaala\" — alif setelah fathah tanpa hamzah/sukun sesudahnya. Jenisnya?",
    pilihan: ["Mad Wajib Muttasil", "Mad Thabi'i", "Mad Arid Lissukun", "Mad Badal"],
    jawaban: 1,
    penjelasan: "Alif setelah fathah, tidak diikuti hamzah/sukun asli → Mad Thabi'i (asli), panjang 2 harakat."
  },
  {
    bab: 'Mad',
    ayat: 'جَاءَ',
    soal: 'Huruf mad (alif) bertemu hamzah dalam satu kata pada "jaa-a". Jenisnya?',
    pilihan: ["Mad Thabi'i", "Mad Jaiz Munfasil", "Mad Wajib Muttasil", "Mad Badal"],
    jawaban: 2,
    penjelasan: 'Huruf mad + hamzah dalam satu kata → Mad Wajib Muttasil, wajib dipanjangkan 4-5 harakat.'
  },
  {
    bab: 'Tafkhim & Tarqiq',
    ayat: 'رَبِّنَا',
    soal: "Huruf Ra' pada \"Rabbana\" berharakat fathah. Cara membacanya?",
    pilihan: ['Tarqiq (tipis)', 'Tafkhim (tebal)', 'Boleh keduanya', 'Sakti (khusus)'],
    jawaban: 1,
    penjelasan: "Ra' berharakat fathah → Tafkhim (dibaca tebal/berat)."
  },
  {
    bab: 'Tafkhim & Tarqiq',
    ayat: 'بِسْمِ اللَّهِ',
    soal: 'Lam pada lafaz "Allah" didahului harakat kasrah (bi). Cara membacanya?',
    pilihan: ['Tafkhim (tebal)', 'Tarqiq (tipis)', 'Boleh keduanya', 'Diidghamkan'],
    jawaban: 1,
    penjelasan: 'Lam pada lafaz Allah didahului kasrah → Tarqiq (dibaca tipis/ringan).'
  },
  {
    bab: 'Ghunnah',
    ayat: 'إِنَّ اللَّهَ',
    soal: 'Huruf ن pada "inna" bertasydid. Cara membacanya?',
    pilihan: ['Jelas tanpa dengung', 'Dengung 2 harakat (Ghunnah Musyaddadah)', 'Dipantulkan (Qalqalah)', 'Samar seperti ikhfa'],
    jawaban: 1,
    penjelasan: 'Nun bertasydid → Ghunnah Musyaddadah, harus didengungkan selama 2 harakat dari rongga hidung.'
  }
];
