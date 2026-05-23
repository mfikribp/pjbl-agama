import { QuizItem } from '../types';

export const fiqihQuiz: QuizItem[] = [
  {
    bab: 'Alat-Alat Bersuci (Thaharah)',
    soal: 'Air yang suci zatnya dan dapat digunakan untuk menyucikan, belum pernah digunakan untuk bersuci, dan tidak berubah salah satu sifatnya disebut air...',
    pilihan: ['Musta’mal', 'Mutlaq (Thahir Mutahhir)', 'Musyammas', 'Mutanajjis'],
    jawaban: 1,
    penjelasan: 'Air Mutlaq adalah air suci yang menyucikan, bersumber langsung dari alam seperti air hujan, air sumur, air sungai, air laut, air salju, air embun, dan mata air.'
  },
  {
    bab: 'Alat-Alat Bersuci (Thaharah)',
    soal: 'Air yang makruh digunakan untuk bersuci karena terjemur di bawah sinar matahari langsung dalam wadah logam berkarat selain emas dan perak dinamakan air...',
    pilihan: ['Musta’mal', 'Mutlaq', 'Musyammas', 'Mutanajjis'],
    jawaban: 2,
    penjelasan: 'Air Musyammas adalah air yang terpanaskan oleh sinar matahari dalam wadah logam (selain emas/perak), hukum bersuci dengannya makruh karena kekhawatiran dampak kesehatan kulit.'
  },
  {
    bab: 'Alat-Alat Bersuci (Thaharah)',
    soal: 'Air suci dengan volume kurang dari dua qullah yang telah digunakan untuk membasuh anggota wudhu wajib atau mandi wajib disebut air...',
    pilihan: ['Musta’mal', 'Mutlaq', 'Mutanajjis', 'Musyammas'],
    jawaban: 0,
    penjelasan: 'Air Musta’mal adalah air yang suci secara zatnya tetapi tidak dapat digunakan lagi untuk bersuci (wudhu/mandi) karena telah terpakai untuk menghilangkan hadas.'
  },
  {
    bab: 'Alat-Alat Bersuci (Thaharah)',
    soal: 'Air yang berubah salah satu sifatnya (warna, bau, atau rasa) akibat kemasukan atau terkena barang najis disebut air...',
    pilihan: ['Musta’mal', 'Musyammas', 'Mutanajjis', 'Air Suci Tidak Menyucikan'],
    jawaban: 2,
    penjelasan: 'Air Mutanajjis adalah air yang terkena najis sehingga hukumnya tidak suci dan tidak dapat digunakan untuk bersuci.'
  },
  {
    bab: 'Alat-Alat Bersuci (Thaharah)',
    soal: 'Bagaimanakah cara menyucikan benda yang terkena najis ringan (Mukhaffafah) seperti air kencing bayi laki-laki di bawah 2 tahun yang hanya meminum ASI?',
    pilihan: [
      'Membasuhnya sebanyak 7 kali dengan air mengalir',
      'Membasuh dan menggosoknya menggunakan tanah suci',
      'Cukup memercikkan air bersih ke bagian yang terkena najis hingga basah',
      'Mencucinya dengan sabun hingga wangi dan bersih'
    ],
    jawaban: 2,
    penjelasan: 'Najis Mukhaffafah disucikan dengan cara yang sangat ringan, yaitu cukup dengan memercikkan air bersih ke area yang terkena najis.'
  },
  {
    bab: 'Alat-Alat Bersuci (Thaharah)',
    soal: 'Najis sedang (Mutawassitah) yang masih tampak dengan jelas zatnya, warna, bau, atau rasanya disebut najis...',
    pilihan: ['Najis Hukmiyah', 'Najis Ainiyah', 'Najis Mughallazah', 'Najis Mukhaffafah'],
    jawaban: 1,
    penjelasan: 'Najis Ainiyah adalah najis mutawassitah yang masih memiliki bentuk fisik, warna, bau, atau rasa, sehingga wajib dibersihkan hingga sifat-sifat tersebut hilang.'
  },
  {
    bab: 'Alat-Alat Bersuci (Thaharah)',
    soal: 'Najis sedang (Mutawassitah) yang bekasnya diyakini ada namun tidak ada bau, rasa, maupun warnanya disebut najis...',
    pilihan: ['Najis Mughallazah', 'Najis Mukhaffafah', 'Najis Hukmiyah', 'Najis Ainiyah'],
    jawaban: 2,
    penjelasan: 'Najis Hukmiyah adalah najis mutawassitah yang secara hukum ada tetapi zat fisiknya telah hilang. Cara menyucikannya cukup mengalirkan air di atas area tersebut.'
  },
  {
    bab: 'Bersuci dari Hadas dan Najis',
    soal: 'Berdasarkan Madzhab Syafi’i, manakah di bawah ini yang merupakan salah satu dari 6 Rukun Wudhu yang apabila ditinggalkan wudhunya tidak sah?',
    pilihan: ['Membasuh telapak tangan', 'Berkumur-kumur', 'Membasuh kedua tangan sampai siku', 'Mengusap kedua telinga'],
    jawaban: 2,
    penjelasan: 'Rukun wudhu ada 6: 1) Niat, 2) Membasuh Wajah, 3) Membasuh Kedua Tangan hingga Siku, 4) Mengusap Sebagian Kepala, 5) Membasuh Kedua Kaki hingga Mata Kaki, 6) Tertib. Selain itu adalah Sunnah.'
  },
  {
    bab: 'Bersuci dari Hadas dan Najis',
    soal: 'Apakah dua rukun utama yang wajib dipenuhi oleh seseorang ketika melaksanakan mandi wajib (mandi junub)?',
    pilihan: [
      'Niat dan membasuh kepala tiga kali',
      'Niat dan meratakan air ke seluruh anggota tubuh dari ujung rambut hingga ujung kaki',
      'Membaca basmalah dan mencuci telapak tangan',
      'Berwudhu dan mengusap telinga'
    ],
    jawaban: 1,
    penjelasan: 'Rukun mandi wajib hanya dua: 1) Niat menghilangkan hadas besar, 2) Meratakan air bersih ke seluruh permukaan kulit dan rambut.'
  },
  {
    bab: 'Bersuci dari Hadas dan Najis',
    soal: 'Berikut ini yang termasuk rukun tayamum sebagai pengganti wudhu atau mandi wajib adalah...',
    pilihan: [
      'Membasuh kaki hingga mata kaki menggunakan air',
      'Mengusap wajah dan kedua tangan sampai siku dengan debu yang suci',
      'Membasuh telinga luar dan dalam',
      'Berkumur-kumur dengan debu'
    ],
    jawaban: 1,
    penjelasan: 'Rukun tayamum meliputi: 1) Niat, 2) Mengusap wajah dengan debu suci, 3) Mengusap kedua tangan sampai siku dengan debu suci, 4) Tertib.'
  },
  {
    bab: 'Shalat Fardhu Lima Waktu',
    soal: 'Syarat wajib shalat adalah kriteria yang menyebabkan seseorang dibebankan kewajiban shalat. Yang termasuk syarat wajib shalat adalah...',
    pilihan: [
      'Menghadap kiblat dan menutup aurat',
      'Suci dari hadas kecil dan besar',
      'Islam, Baligh (dewasa), dan Berakal Sehat',
      'Telah masuk waktu shalat'
    ],
    jawaban: 2,
    penjelasan: 'Islam, baligh, dan berakal sehat adalah Syarat Wajib shalat. Sedangkan menutup aurat, suci, menghadap kiblat, dan masuk waktu adalah Syarat Sah shalat.'
  },
  {
    bab: 'Shalat Fardhu Lima Waktu',
    soal: 'Membaca Surah Al-Fatihah secara baik dan benar pada setiap rakaat shalat fardhu merupakan rukun shalat kategori...',
    pilihan: ['Rukun Fi\'li (Gerakan)', 'Rukun Qauli (Ucapan)', 'Rukun Qalbi (Hati)', 'Sunnah Ab\'adh'],
    jawaban: 1,
    penjelasan: 'Membaca Al-Fatihah tergolong Rukun Qauli (rukun berupa ucapan/bacaan) yang wajib didengar oleh telinga sendiri.'
  },
  {
    bab: 'Shalat Fardhu Lima Waktu',
    soal: 'Melakukan gerakan ruku’ atau sujud dengan tenang sejenak hingga seluruh persendian tulang kembali mantap di posisinya disebut...',
    pilihan: ['Tuma’ninah', 'Istiqamah', 'Ikhlas', 'Tawadhu’'],
    jawaban: 0,
    penjelasan: 'Tuma’ninah artinya tenang sejenak selama sekurang-kurangnya membaca tasbih ("Subhanallah") sebelum melanjutkan ke gerakan berikutnya.'
  },
  {
    bab: 'Shalat Fardhu Lima Waktu',
    soal: 'Apabila seseorang lupa tidak melaksanakan Tasyahud Awal (yang termasuk Sunnah Ab’adh), maka shalatnya tetap sah dan ditambal dengan...',
    pilihan: ['Membayar denda makanan', 'Melakukan Sujud Sahwi sebanyak dua kali sebelum salam', 'Melakukan Sujud Tilawah setelah shalat', 'Membaca istighfar 100 kali'],
    jawaban: 1,
    penjelasan: 'Apabila ada sunnah ab’adh (seperti tasyahud awal atau qunut) yang tertinggal dalam shalat, disunnahkan untuk ditambal dengan Sujud Sahwi sebelum salam.'
  },
  {
    bab: 'Shalat Berjamaah',
    soal: 'Hukum dasar melaksanakan shalat fardhu secara berjamaah bagi kaum laki-laki di suatu pemukiman (mukim) menurut Madzhab Syafi’i adalah...',
    pilihan: ['Fardhu Ain (Wajib individu)', 'Fardhu Kifayah (Kewajiban kelompok)', 'Sunnah Muakkad', 'Mubah'],
    jawaban: 1,
    penjelasan: 'Dalam Madzhab Syafi’i, shalat fardhu berjamaah berstatus Fardhu Kifayah. Jika sebagian warga telah melaksanakannya, gugurlah dosa seluruh warga pemukiman.'
  },
  {
    bab: 'Shalat Berjamaah',
    soal: 'Makmum yang sempat mendapati membaca Surah Al-Fatihah secara sempurna bersama imam pada rakaat pertama sebelum imam melakukan ruku’ disebut makmum...',
    pilihan: ['Masbuq', 'Muwafiq', 'Munfarid', 'Muallaf'],
    jawaban: 1,
    penjelasan: 'Makmum Muwafiq adalah makmum yang memiliki waktu cukup bersama imam untuk menyelesaikan pembacaan Surah Al-Fatihah dengan sempurna.'
  },
  {
    bab: 'Shalat Jumat',
    soal: 'Berikut ini yang merupakan rukun-rukun khotbah jumat wajib yang harus dibacakan oleh khatib pada kedua khotbahnya adalah...',
    pilihan: [
      'Membaca riwayat hidup nabi dan membacakan pantun',
      'Memuji Allah (Hamdalah), membaca Shalawat, dan menyampaikan wasiat takwa',
      'Mengangkat tangan tinggi-tinggi dan berdiri memegang tongkat',
      'Membaca surah Al-Kahfi secara penuh'
    ],
    jawaban: 1,
    penjelasan: 'Rukun khotbah ada 5: memuji Allah, bershalawat kepada Nabi SAW, berwasiat takwa (di kedua khotbah), membaca ayat suci Al-Qur\'an di salah satunya, dan mendoakan kaum mukminin di khotbah kedua.'
  },
  {
    bab: 'Shalat Jamak & Qashar',
    soal: 'Mengumpulkan dua shalat fardhu (seperti Dzuhur dengan Ashar, atau Maghrib dengan Isya) untuk dikerjakan secara bersamaan di dalam satu waktu shalat disebut...',
    pilihan: ['Shalat Qashar', 'Shalat Jamak', 'Shalat Khauf', 'Shalat Rawatib'],
    jawaban: 1,
    penjelasan: 'Shalat Jamak adalah kemudahan (rukhsah) untuk mengumpulkan dua waktu shalat fardhu tertentu agar dikerjakan dalam satu waktu bagi musafir atau kondisi darurat.'
  },
  {
    bab: 'Shalat Jamak & Qashar',
    soal: 'Mengerjakan shalat Dzuhur dan Ashar secara bersamaan di dalam waktu masuknya shalat pertama (waktu Dzuhur) dinamakan...',
    pilihan: ['Jamak Takhir', 'Jamak Taqdim', 'Qashar Takhir', 'Qashar Taqdim'],
    jawaban: 1,
    penjelasan: 'Jamak Taqdim adalah mengumpulkan shalat pertama dan kedua untuk dilaksanakan bersamaan pada waktu shalat yang pertama.'
  },
  {
    bab: 'Shalat dalam Darurat',
    soal: 'Bagaimanakah urutan kemudahan tata cara shalat fardhu bagi orang sakit yang tidak sanggup lagi berdiri?',
    pilihan: [
      'Shalat digugurkan secara mutlak dan tidak perlu diganti',
      'Shalat dengan posisi duduk, jika tidak mampu boleh berbaring miring, jika tidak mampu boleh telentang, dan terakhir dengan isyarat',
      'Wajib di-qadha seluruhnya nanti ketika sudah sembuh total',
      'Membayar denda atau fidyah sebagai ganti shalat'
    ],
    jawaban: 1,
    penjelasan: 'Islam memberikan keringanan bagi orang sakit untuk shalat dengan kemampuan fisik terbaik yang tersisa: duduk, berbaring miring di sisi kanan menghadap kiblat, telentang dengan isyarat kepala/mata, atau isyarat hati.'
  }
];
