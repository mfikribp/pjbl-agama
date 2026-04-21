export const MATERI = [
  {
    id: 'pengantar', label: 'Bab 1', color: '',
    title: 'Pengantar Ilmu Tajwid',
    html: `
      <p><strong>Definisi:</strong> Tajwid (تَجْوِيد) secara bahasa berasal dari kata <em>jawwada-yujawwidu</em> yang artinya "memperbaiki" atau "memperindah". Secara istilah, tajwid adalah ilmu yang membahas tata cara membunyikan setiap huruf Al-Quran sesuai dengan hak dan mustahaknya.</p>
      <table class="rules-table">
        <tr><th>Hukum</th><th>Bagi Siapa</th><th>Penjelasan</th></tr>
        <tr><td>Fardu Ain</td><td>Seluruh Muslim</td><td>Wajib membaca Al-Quran dengan tajwid yang benar</td></tr>
        <tr><td>Fardu Kifayah</td><td>Sebagian Muslim</td><td>Mempelajari ilmu tajwid secara akademis</td></tr>
      </table>
      <p><strong>Dalil:</strong> Allah SWT berfirman: <span class="arab">وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا</span> <span class="verse-ref">[Ayat Ke-5479] <button class="audio-play-btn" data-audio-id="5479"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span><br/><em>"Dan bacalah Al-Quran itu dengan tartil"</em></p>
      <div class="sub-card"><h4>Tujuan Mempelajari Tajwid</h4>
        <p style="font-size:0.88rem;color:#9099b0">1. Menjaga lisan dari kesalahan dalam membaca Al-Quran (lahn)</p>
        <p style="font-size:0.88rem;color:#9099b0">2. Melestarikan kemurnian dan keaslian Al-Quran</p>
        <p style="font-size:0.88rem;color:#9099b0">3. Mendapatkan pahala membaca Al-Quran dengan tartil</p>
      </div>`
  },
  {
    id: 'nun-mati', label: 'Bab 2', color: '',
    title: 'Nun Mati & Tanwin',
    html: `
      <p><strong>Pengertian:</strong> Nun mati (نْ) adalah nun yang tidak berharakat. Tanwin (ـًـٍ-ٌ) adalah bunyi nun di akhir kata isim yang ditandai harakat ganda.</p>
      <table class="rules-table">
        <tr><th>Hukum</th><th>Huruf Pemicu</th><th>Cara Baca</th><th>Contoh (Juz 30)</th></tr>
        <tr><td>Idzhar Halqi</td><td>ء هـ ع ح غ خ</td><td>Jelas, tidak dengung</td><td><span class="arab-sm">مِنْ أَيِّ</span><br/><span class="verse-ref">[Ayat Ke-5776] <button class="audio-play-btn" data-audio-id="5776"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Idgham</td><td>ي ر م ل و ن</td><td>Lebur ke huruf berikutnya</td><td><span class="arab-sm">مَنْ يَعْمَلْ</span><br/><span class="verse-ref">[Ayat Ke-6145] <button class="audio-play-btn" data-audio-id="6145"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Iqlab</td><td>ب</td><td>Diubah jadi mim mati + dengung</td><td><span class="arab-sm">مِنْ بَعْدِ</span><br/><span class="verse-ref">[Ayat Ke-6134] <button class="audio-play-btn" data-audio-id="6134"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Ikhfa Haqiqi</td><td>15 huruf lainnya</td><td>Samar dengan dengung setengah</td><td><span class="arab-sm">مِنْ شَرِّ</span><br/><span class="verse-ref">[Ayat Ke-6227] <button class="audio-play-btn" data-audio-id="6227"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
      </table>`
  },
  {
    id: 'idzhar', label: 'Bab 3', color: '',
    title: 'Idzhar Halqi',
    html: `
      <p><strong>Pengertian:</strong> Idzhar (إِظْهار) artinya "jelas". Nun mati atau tanwin dibaca jelas tanpa dengung ketika bertemu 6 huruf halqi.</p>
      <p><strong>Huruf Idzhar Halqi:</strong></p>
      <div class="materi-row">
        <span class="huruf-chip">ء</span><span class="huruf-chip">هـ</span><span class="huruf-chip">ع</span>
        <span class="huruf-chip">ح</span><span class="huruf-chip">غ</span><span class="huruf-chip">خ</span>
      </div>
      <p><strong>Contoh Ayat (Juz 30):</strong></p>
      <div class="materi-row">
        <div><span class="arab">مِنْ أَيِّ</span><span class="verse-ref">[Ayat Ke-5776] <button class="audio-play-btn" data-audio-id="5776"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">نَارٌ حَامِيَةٌ</span><span class="verse-ref">[Ayat Ke-6168] <button class="audio-play-btn" data-audio-id="6168"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">جَنَّاتِ عَدْنٍ</span><span class="verse-ref">[Ayat Ke-6138] <button class="audio-play-btn" data-audio-id="6138"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">مِنْ خَوْفٍ</span><span class="verse-ref">[Ayat Ke-6197] <button class="audio-play-btn" data-audio-id="6197"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
      </div>
      <audio controls><source src="https://cdn.islamic.network/quran/audio/64/ar.alafasy/6225.mp3" type="audio/mpeg"></audio>`
  },
  {
    id: 'idgham', label: 'Bab 4', color: '',
    title: 'Idgham',
    html: `
      <p><strong>Pengertian:</strong> Idgham (إِدْغام) artinya "memasukkan". Huruf-huruf Idgham disingkat <span class="arab" style="font-size:1.2rem">يَرْمَلُونَ</span></p>
      <div class="sub-card"><h4>Idgham Bighunnah (dengan dengung)</h4>
        <p style="font-size:0.88rem;color:#9099b0">Huruf: <span class="huruf-chip" style="font-size:1.1rem">ي</span> <span class="huruf-chip" style="font-size:1.1rem">ن</span> <span class="huruf-chip" style="font-size:1.1rem">م</span> <span class="huruf-chip" style="font-size:1.1rem">و</span></p>
        <p style="font-size:0.88rem;color:#9099b0">Contoh: <span class="arab" style="font-size:1.3rem">لَهَبٍ وَتَبَّ</span> <span class="verse-ref">[Ayat Ke-6217] <button class="audio-play-btn" data-audio-id="6217"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span><br/> dibaca "lahabiw watabb"</p>
      </div>
      <div class="sub-card"><h4>Idgham Bilaghunnah (tanpa dengung)</h4>
        <p style="font-size:0.88rem;color:#9099b0">Huruf: <span class="huruf-chip" style="font-size:1.1rem">ل</span> <span class="huruf-chip" style="font-size:1.1rem">ر</span></p>
        <p style="font-size:0.88rem;color:#9099b0">Contoh: <span class="arab" style="font-size:1.3rem">يَكُلْ لَهُ</span> <span class="verse-ref">[Ayat Ke-6225] <button class="audio-play-btn" data-audio-id="6225"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span><br/> dibaca "yakul-lahu"</p>
      </div>
      <audio controls><source src="https://cdn.islamic.network/quran/audio/64/ar.alafasy/6145.mp3" type="audio/mpeg"></audio>`
  },
  {
    id: 'ikhfa', label: 'Bab 5', color: '',
    title: 'Ikhfa Haqiqi',
    html: `
      <p><strong>Pengertian:</strong> Ikhfa (إِخْفاء) artinya "menyamarkan". Nun mati atau tanwin dibaca samar disertai dengung ketika bertemu 15 huruf berikut:</p>
      <div class="materi-row">
        <span class="huruf-chip">ت</span><span class="huruf-chip">ث</span><span class="huruf-chip">ج</span><span class="huruf-chip">د</span>
        <span class="huruf-chip">ذ</span><span class="huruf-chip">ز</span><span class="huruf-chip">س</span><span class="huruf-chip">ش</span>
        <span class="huruf-chip">ص</span><span class="huruf-chip">ض</span><span class="huruf-chip">ط</span><span class="huruf-chip">ظ</span>
        <span class="huruf-chip">ف</span><span class="huruf-chip">ق</span><span class="huruf-chip">ك</span>
      </div>
      <p><strong>Contoh (Juz 30):</strong></p>
      <div class="materi-row flex-col items-start gap-6">
        <div><span class="arab">مِنْ شَرِّ</span><span class="verse-ref">[Ayat Ke-6227] <button class="audio-play-btn" data-audio-id="6227"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">يَنْظُرِ</span><span class="verse-ref">[Ayat Ke-5712] <button class="audio-play-btn" data-audio-id="5712"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">كِرَاماً كَاتِبِينَ</span><span class="verse-ref">[Ayat Ke-5840] <button class="audio-play-btn" data-audio-id="5840"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
      </div>
      <audio controls><source src="https://cdn.islamic.network/quran/audio/64/ar.alafasy/6129.mp3" type="audio/mpeg"></audio>`
  },
  {
    id: 'iqlab', label: 'Bab 6', color: '',
    title: 'Iqlab',
    html: `
      <p><strong>Pengertian:</strong> Iqlab (إِقْلاب) artinya "mengganti". Nun mati atau tanwin diubah menjadi bunyi mim mati ketika bertemu huruf <span class="huruf-chip">ب</span> (ba), dengan disertai dengung 2 harakat.</p>
      <div class="sub-card">
        <p style="font-size:0.88rem;color:#9099b0">1. Ganti bunyi "n" dengan "m" saat bertemu huruf ba</p>
        <p style="font-size:0.88rem;color:#9099b0">2. Kedua bibir tidak menutup rapat — sedikit terbuka</p>
        <p style="font-size:0.88rem;color:#9099b0">3. Dengungkan dari hidung selama 2 harakat</p>
      </div>
      <p><strong>Contoh (Juz 30):</strong></p>
      <div class="materi-row flex-col items-start gap-6">
        <div><span class="arab">مِنْ بَعْدِ</span><span class="verse-ref">[Ayat Ke-6134] <button class="audio-play-btn" data-audio-id="6134"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">لَنَسْفَعاً بِالنَّاصِيَةِ</span><span class="verse-ref">[Ayat Ke-6121] <button class="audio-play-btn" data-audio-id="6121"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">بِأَيِّ ذَنْبٍ</span><span class="verse-ref">[Ayat Ke-5809] <button class="audio-play-btn" data-audio-id="5809"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
      </div>
      <audio controls><source src="https://cdn.islamic.network/quran/audio/64/ar.alafasy/6134.mp3" type="audio/mpeg"></audio>`
  },
  {
    id: 'mim-mati', label: 'Bab 7', color: '',
    title: 'Hukum Mim Mati',
    html: `
      <p><strong>Pengertian:</strong> Mim mati (مْ) adalah mim yang tidak berharakat. Ada 3 hukum bacaan:</p>
      <div class="sub-card"><h4>1. Idzhar Syafawi</h4><p style="font-size:0.88rem;color:#9099b0">Mim mati bertemu semua huruf selain ب dan م. Contoh: <span class="arab" style="font-size:1.2rem">أَلَمْ يَجْعَلْ</span> <span class="verse-ref">[Ayat Ke-6190] <button class="audio-play-btn" data-audio-id="6190"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></p></div>
      <div class="sub-card"><h4>2. Idgham Mimi</h4><p style="font-size:0.88rem;color:#9099b0">Mim mati bertemu mim berharakat. Contoh: <span class="arab" style="font-size:1.2rem">عَلَيْهِمْ مُؤْصَدَةٌ</span> <span class="verse-ref">[Ayat Ke-6187] <button class="audio-play-btn" data-audio-id="6187"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></p></div>
      <div class="sub-card"><h4>3. Ikhfa Syafawi</h4><p style="font-size:0.88rem;color:#9099b0">Mim mati bertemu <span class="huruf-chip" style="font-size:1rem">ب</span>. Contoh: <span class="arab" style="font-size:1.2rem">تَرْمِيهِمْ بِحِجَارَةٍ</span> <span class="verse-ref">[Ayat Ke-6192] <button class="audio-play-btn" data-audio-id="6192"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></p></div>`
  },
  {
    id: 'ghunnah', label: 'Bab 8', color: '',
    title: 'Ghunnah Musyaddadah',
    html: `
      <p><strong>Pengertian:</strong> Ghunnah (غُنَّة) artinya dengung. Ghunnah Musyaddadah terjadi pada nun (ن) atau mim (م) yang bertasydid.</p>
      <div class="materi-row"><span class="huruf-chip">نّ</span><span class="huruf-chip">مّ</span></div>
      <p><strong>Contoh (Juz 30):</strong></p>
      <div class="materi-row flex-col items-start gap-6">
        <div><span class="arab">عَمَّ</span><span class="verse-ref">[Ayat Ke-5673] <button class="audio-play-btn" data-audio-id="5673"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">إِنَّ</span><span class="verse-ref">[Ayat Ke-5693] <button class="audio-play-btn" data-audio-id="5693"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
        <div><span class="arab">ثُمَّ</span><span class="verse-ref">[Ayat Ke-6171] <button class="audio-play-btn" data-audio-id="6171"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></div>
      </div>
      <div class="sub-card"><h4>Tingkatan Ghunnah</h4>
        <table class="rules-table" style="margin-top:0">
          <tr><th>Tingkat</th><th>Kondisi</th><th>Kekuatan</th></tr>
          <tr><td>1 (Terkuat)</td><td>Nun/Mim bertasydid</td><td>Ghunnah Musyaddadah</td></tr>
          <tr><td>2</td><td>Nun mati/tanwin ikhfa & iqlab</td><td>Ghunnah sedang</td></tr>
          <tr><td>3</td><td>Idgham bighunnah</td><td>Ghunnah sedang</td></tr>
        </table>
      </div>`
  },
  {
    id: 'qalqalah', label: 'Bab 9', color: 'gold',
    title: 'Qalqalah',
    html: `
      <p><strong>Pengertian:</strong> Qalqalah (قَلْقَلَة) artinya "memantulkan". Huruf-huruf qalqalah dalam keadaan sukun dipantulkan. Diingat dengan singkatan <em style="color:#f4c842">قُطْبُ جَدٍّ</em>:</p>
      <div class="materi-row">
        <span class="huruf-chip">ق</span><span class="huruf-chip">ط</span><span class="huruf-chip">ب</span><span class="huruf-chip">ج</span><span class="huruf-chip">d</span>
      </div>
      <table class="rules-table">
        <tr><th>Jenis</th><th>Kondisi</th><th>Kekuatan</th><th>Contoh (Juz 30)</th></tr>
        <tr><td>Qalqalah Sugra</td><td>Sukun di tengah kata</td><td>Ringan</td><td><span class="arab-sm">يَجْعَلْ</span><br/><span class="verse-ref">[Ayat Ke-6190] <button class="audio-play-btn" data-audio-id="6190"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Qalqalah Kubra</td><td>Di akhir kata saat waqaf</td><td>Kuat</td><td><span class="arab-sm">الْفَلَقِ</span><br/><span class="verse-ref">[Ayat Ke-6226] <button class="audio-play-btn" data-audio-id="6226"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
      </table>`
  },
  {
    id: 'alif-lam', label: 'Bab 10', color: 'gold',
    title: 'Hukum Alif Lam (Al)',
    html: `
      <p><strong>Pengertian:</strong> Alif lam (ال) memiliki dua hukum tergantung huruf yang mengikutinya.</p>
      <div class="sub-card"><h4>Alif Lam Syamsiyah</h4>
        <p style="font-size:0.88rem;color:#9099b0">Lam tidak dibaca (lebur) ketika bertemu 14 huruf syamsiyah.</p>
        <div class="materi-row" style="margin-bottom:0">
          <span class="huruf-chip">ت</span><span class="huruf-chip">ث</span><span class="huruf-chip">d</span><span class="huruf-chip">ذ</span>
          <span class="huruf-chip">ر</span><span class="huruf-chip">z</span><span class="huruf-chip">s</span><span class="huruf-chip">sh</span>
          <span class="huruf-chip">sh</span><span class="huruf-chip">dh</span><span class="huruf-chip">th</span><span class="huruf-chip">zh</span>
          <span class="huruf-chip">l</span><span class="huruf-chip">n</span>
        </div>
        <p style="font-size:0.85rem;color:#9099b0;margin-top:0.6rem">Contoh: <span class="arab" style="font-size:1.2rem">النَّاسِ</span> <span class="verse-ref">[Ayat Ke-6231] <button class="audio-play-btn" data-audio-id="6231"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span><br/> dibaca "an-naas"</p>
      </div>
      <div class="sub-card"><h4>Alif Lam Qamariyah</h4>
        <p style="font-size:0.88rem;color:#9099b0">Lam dibaca jelas ketika bertemu 14 huruf qamariyah.</p>
        <p style="font-size:0.85rem;color:#9099b0;margin-top:0.6rem">Contoh: <span class="arab" style="font-size:1.2rem">الْقَارِعَةُ</span> <span class="verse-ref">[Ayat Ke-6158] <button class="audio-play-btn" data-audio-id="6158"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span><br/> dibaca "al-qaari'ah"</p>
      </div>`
  },
  {
    id: 'mad', label: 'Bab 11', color: 'teal',
    title: 'Mad (Pemanjangan Bacaan)',
    html: `
      <p><strong>Pengertian:</strong> Mad (مَدّ) artinya memanjangkan suara. Huruf mad: ا و ي</p>
      <table class="rules-table">
        <tr><th>Nama Mad</th><th>Panjang</th><th>Keterangan</th><th>Contoh (Juz 30)</th></tr>
        <tr><td>Mad Thabi'i</td><td>2 harakat</td><td>Huruf mad tidak diikuti hamzah/sukun</td><td><span class="arab-sm">مَا عَبَدتُّمْ</span><br/><span class="verse-ref">[Ayat Ke-6211] <button class="audio-play-btn" data-audio-id="6211"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Mad Wajib Muttasil</td><td>4–5 harakat</td><td>Huruf mad + hamzah dalam satu kata</td><td><span class="arab-sm">جَاءَ</span><br/><span class="verse-ref">[Ayat Ke-6214] <button class="audio-play-btn" data-audio-id="6214"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Mad Jaiz Munfasil</td><td>2–5 harakat</td><td>Huruf mad di akhir kata, hamzah di kata berikutnya</td><td><span class="arab-sm">وَمَا أَدْرَاكَ</span><br/><span class="verse-ref">[Ayat Ke-6127] <button class="audio-play-btn" data-audio-id="6127"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Mad Arid Lissukun</td><td>2–6 harakat</td><td>Huruf mad + sukun karena waqaf</td><td><span class="arab-sm">الْمَاعُونَ</span><br/><span class="verse-ref">[Ayat Ke-6204] <button class="audio-play-btn" data-audio-id="6204"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        <tr><td>Mad Lazim Kilmi</td><td>6 harakat</td><td>Huruf mad + tasydid dalam satu kata</td><td><span class="arab-sm">الصَّآخَّةُ</span><br/><span class="verse-ref">[Ayat Ke-5791] <button class="audio-play-btn" data-audio-id="5791"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
      </table>
      <audio controls><source src="https://cdn.islamic.network/quran/audio/64/ar.alafasy/6214.mp3" type="audio/mpeg"></audio>`
  },
  {
    id: 'tafkhim', label: 'Bab 12', color: 'teal',
    title: 'Tafkhim & Tarqiq',
    html: `
      <p><strong>Definisi:</strong> Tafkhim (تَفْخيم) = membaca tebal. Tarqiq (تَرْقيق) = membaca tipis.</p>
      <div class="sub-card"><h4>Huruf Selalu Tafkhim (Isti'la)</h4>
        <div class="materi-row">
          <span class="huruf-chip">خ</span><span class="huruf-chip">ص</span><span class="huruf-chip">ض</span><span class="huruf-chip">غ</span>
          <span class="huruf-chip">ط</span><span class="huruf-chip">ق</span><span class="huruf-chip">ظ</span>
        </div>
        <p style="font-size:0.85rem;color:#9099b0;margin-top:0.5rem">Singkatan: <em style="color:#f4c842">خُصَّ ضَغْطٍ قِظْ</em></p>
      </div>
      <div class="sub-card"><h4>Huruf Ra' (ر) (Juz 30)</h4>
        <table class="rules-table" style="margin-top:0">
          <tr><th>Hukum</th><th>Kondisi</th><th>Contoh</th></tr>
          <tr><td>Tafkhim</td><td>Berharakat fathah/dhammah</td><td><span class="arab-sm">رَبِّكَ</span><br/><span class="verse-ref">[Ayat Ke-6107] <button class="audio-play-btn" data-audio-id="6107"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
          <tr><td>Tarqiq</td><td>Berharakat kasrah</td><td><span class="arab-sm">خَيْرٌ لَكَ</span><br/><span class="verse-ref">[Ayat Ke-6083] <button class="audio-play-btn" data-audio-id="6083"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button></span></td></tr>
        </table>
      </div>`
  },
  {
    id: 'sifat-huruf', label: 'Bab 13', color: 'teal',
    title: 'Sifat-sifat Huruf Hijaiyah',
    html: `
      <p><strong>Pengertian:</strong> Sifat huruf adalah cara pengucapan yang menjadi karakter tetap suatu huruf. Dibagi menjadi sifat lazimah (permanen) dan sifat aridah (situasional).</p>
      <table class="rules-table">
        <tr><th>Sifat</th><th>Lawan</th><th>Pengertian</th></tr>
        <tr><td><strong>Jahr</strong></td><td>Hams</td><td>Jahr: nafas tertahan. Hams: nafas mengalir</td></tr>
        <tr><td><strong>Syiddah</strong></td><td>Rakhawah</td><td>Syiddah: suara tertahan. Rakhawah: suara mengalir</td></tr>
        <tr><td><strong>Isti'la</strong></td><td>Istifal</td><td>Isti'la: pangkal lidah terangkat (tafkhim)</td></tr>
        <tr><td><strong>Itbaq</strong></td><td>Infitah</td><td>Itbaq: lidah menyentuh langit-langit</td></tr>
        <tr><td><strong>Idzlaq</strong></td><td>Ishmat</td><td>Idzlaq: keluar ringan dari ujung lidah/bibir</td></tr>
      </table>`
  },
  {
    id: 'waqaf', label: 'Bab 14', color: 'teal',
    title: 'Waqaf & Ibtida',
    html: `
      <p><strong>Waqaf</strong> (وَقْف) adalah berhenti sejenak dalam bacaan Al-Quran disertai pengambilan napas. <strong>Ibtida</strong> adalah memulai kembali setelah waqaf.</p>
      <table class="rules-table">
        <tr><th>Tanda</th><th>Nama</th><th>Arti</th><th>Keterangan</th></tr>
        <tr><td><span class="arab-sm">م</span></td><td>Waqaf Lazim</td><td>Harus berhenti</td><td>Haram meneruskan</td></tr>
        <tr><td><span class="arab-sm">ط</span></td><td>Waqaf Mutlaq</td><td>Lebih baik berhenti</td><td>Boleh terus tapi berhenti lebih utama</td></tr>
        <tr><td><span class="arab-sm">ج</span></td><td>Waqaf Jaiz</td><td>Boleh berhenti/terus</td><td>Keduanya dibolehkan</td></tr>
        <tr><td><span class="arab-sm">لا</span></td><td>Waqaf Mamnu'</td><td>Tidak boleh berhenti</td><td>Berhenti akan mengubah makna</td></tr>
      </table>
      <div class="sub-card"><h4>Cara Membaca Saat Waqaf</h4>
        <p style="font-size:0.88rem;color:#9099b0">1. Huruf akhir dibaca sukun (mati)</p>
        <p style="font-size:0.88rem;color:#9099b0">2. Tanwin fathah (ـً) dibaca "a" panjang (Mad Iwad)</p>
        <p style="font-size:0.88rem;color:#9099b0">3. Ta marbuthah (ة) dibaca "h" bukan "t"</p>
      </div>`
  }
]



