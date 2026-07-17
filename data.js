// data.js — Data 12 gerakan sholat
// Sumber: Bacaan Sholat Muhammadiyah Beserta Terjemahan

const GERAKAN = [
  {
    id: 1,
    nama: "Berdiri Tegak dan Niat",
    bacaan: "(Niat dibaca dalam hati, tidak dilafalkan)",
    latin: "Ushallii fardha ... (sesuai sholat yang dikerjakan)",
    terjemahan: "Aku niat sholat ... karena Allah Ta'ala.",
    penjelasan:
      "Berdiri tegak menghadap kiblat dengan posisi kaki dibuka selebar bahu. Niat diucapkan dalam hati sesuai sholat yang akan dikerjakan. Pandangan mata diarahkan ke tempat sujud.",
    img: "assets/images/dewasa/Berdiri_Tegak_Dan_Niat.jpeg",
    imgAnak: "assets/images/anak/Berdiri_Tegak_dan_Niat_anak.png",
    video: "assets/video/dewasa/Berdiri_Tegak_Dan_Niat_Dewasa.mp4",
    videoAnak: "assets/video/anak/Berdiri tegak dan niat (anak).mp4",
  },
  {
    id: 2,
    nama: "Takbiratul Ihram",
    bacaan: "اَللهُ أَكْبَرُ",
    latin: "Allāhu Akbar",
    terjemahan: "Allah Maha Besar.",
    penjelasan:
      "Kedua tangan diangkat sejajar bahu atau telinga sambil mengucap takbir. Gerakan ini menjadi penanda dimulainya sholat, setelah ini seluruh gerakan dan ucapan di luar sholat menjadi terlarang (haram).",
    img: "assets/images/dewasa/Takbiratul_Ihram.jpeg",
    imgAnak: "assets/images/anak/Takbiratul_Ihram_anak.png",
    audio: "assets/audio/dewasa/Takbiratul_Ihram_Dewasa.mp3",
    audioAnak: "assets/audio/anak/Takbiratul_Ihram_Anak.mpeg",
    video: "assets/video/dewasa/Takbiratul_Ihram_Dewasa.mp4",
    videoAnak: "assets/video/anak/Takbiratul ihram anak.mp4",
  },
  {
    id: 3,
    nama: "Bersedekap",
    bacaan:
      "اَللّٰهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اَللّٰهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اَللّٰهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
    latin:
      "Allāhumma bā'id bainī wa baina khaṭāyāya kamā bā'adta bainal-masyriqi wal-maghrib. Allāhumma naqqinī min khaṭāyāya kamā yunaqqaṡ-ṡaubul-abyaḍu minad-danas. Allāhumma-ghsilnī min khaṭāyāya bil-mā'i waṡ-ṡalji wal-barad.",
    terjemahan:
      "Ya Allah, jauhkanlah antara aku dan kesalahan-kesalahanku sebagaimana Engkau menjauhkan antara timur dan barat. Ya Allah, bersihkanlah aku dari kesalahan-kesalahanku sebagaimana pakaian putih dibersihkan dari kotoran. Ya Allah, cucilah aku dari kesalahan-kesalahanku dengan air, salju, dan embun.",
    penjelasan:
      "Tangan kanan diletakkan di atas tangan kiri, diposisikan di dada. Pandangan tetap ke tempat sujud. Dilanjutkan membaca doa iftitah, Al-Fatihah, dan surah pendek.",
    img: "assets/images/dewasa/Bersedekap.png",
    imgAnak: "assets/images/anak/Bersedekap_anak.png",
    audio: "assets/audio/dewasa/Iftitah_Dewasa.mp3",
    audioAnak: "assets/audio/anak/Iftitah_Anak.mpeg",
    video: "assets/video/dewasa/Bersedekap_Dewasa.mp4",
    videoAnak: "assets/video/anak/Bersedekap anak.mp4",
  },
  {
    id: 4,
    nama: "Berdiri Membaca",
    bacaan:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّيْنِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ",
    latin:
      "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-'ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumid-dīn. Iyyāka na'budu wa iyyāka nasta'īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-lażīna an'amta 'alaihim ghairil-maghḍūbi 'alaihim wa laḍ-ḍāllīn.",
    terjemahan:
      "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam. Yang Maha Pengasih lagi Maha Penyayang. Pemilik hari pembalasan. Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan. Tunjukilah kami jalan yang lurus. (Yaitu) jalan orang-orang yang telah Engkau beri nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Kemudian membaca surat Al-Qur'an.",
    penjelasan:
      "Membaca surah Al-Fatihah dengan tartil, dilanjutkan dengan salah satu surah pendek dari Al-Qur'an. Posisi tetap bersedekap dan berdiri tegak.",
    img: "assets/images/dewasa/Berdiri_Membaca.png",
    imgAnak: "assets/images/anak/Berdiri_Membaca_anak.png",
    audio: "assets/audio/dewasa/Al_Fatihah_Dewasa.mpeg",
    audioAnak: "assets/audio/anak/Al_Fatihah_Anak.mpeg",
    video: "assets/video/dewasa/Bersedekap_Dewasa.mp4",
    videoAnak: "assets/video/anak/AL-Fatihah (anak).mp4",
  },
  {
    id: 5,
    nama: "Rukuk",
    bacaan:
      "سُبْحَانَ رَبِّيَ الْعَظِيْمِسُبْحَانَكَ اللّهُمَّ رَبَّناَ وَبِحَمْدِكَ اَللّهُمَّ اغْفِرْلِى",
    latin: "Subhaanaka allaahuma robbanaa wabihamdika allaahumaghfirlii",
    terjemahan: "Maha Suci Tuhanku Yang Maha Agung.",
    penjelasan:
      "Rukuk adalah gerakan membungkukkan badan dalam shalat, di mana punggung diposisikan lurus sejajar, kepala sejajar dengan punggung, dan kedua tangan bertumpu serta memegang lutut. Gerakan ini wajib dilakukan dengan tuma'ninah (berhenti atau diam sejenak) agar sah.",
    img: "assets/images/dewasa/Rukuk.png",
    imgAnak: "assets/images/anak/Rukuk_anak.png",
    audio: "assets/audio/dewasa/Rukuk_Dewasa.mpeg",
    audioAnak: "assets/audio/anak/Rukuk_Anak.mpeg",
    video: "assets/video/dewasa/Rukuk_Dewasa.mp4",
    videoAnak: "assets/video/anak/Rukuk Anak.mp4",
  },
  {
    id: 6,
    nama: "I'tidal",
    bacaan:
      "سَمِعَ اللهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ، مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا بَيْنَهُمَا وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ",
    latin:
      "Sami'allāhu liman ḥamidah. Rabbanā wa lakal-ḥamd,Hamdan Katsīran Thayyiban Mubārakan Fīhi.",
    terjemahan:
      "Allah mendengar orang yang memuji-Nya. Ya Tuhan kami, bagi-Mu segala puji sepenuh langit, sepenuh bumi, sepenuh apa yang ada di antara keduanya, dan sepenuh apa saja yang Engkau kehendaki setelah itu.",
    penjelasan:
      "Bangkit dari rukuk ke posisi berdiri tegak kembali, kedua tangan diangkat sejajar bahu lalu diturunkan lurus di samping badan. Dilakukan dengan tuma'ninah sebelum turun sujud.",
    img: "assets/images/dewasa/I_tidal.jpeg",
    imgAnak: "assets/images/anak/I_tidal_anak.png",
    audio: "assets/audio/dewasa/Itidal_Dewasa.mpeg",
    audioAnak: "assets/audio/anak/Itidal_Anak.mpeg",
    video: "assets/video/dewasa/Itidal_Dewasa.mp4",
    videoAnak: "assets/video/anak/I_Tidal anak.mp4",
  },
  {
    id: 7,
    nama: "Sujud",
    bacaan:
      "سُبْحَانَ رَبِّيَ الْأَعْلَىسُبْحَانَكَ اللّهُمَّ رَبَّناَ وَبِحَمْدِكَ اَللّهُمَّ اغْفِرْلِى",
    latin: "Subhaanaka allaahuma robbanaa wabihamdika allaahumaghfirlii",
    terjemahan: "Maha Suci Tuhanku Yang Maha Tinggi.",
    penjelasan:
      "Tujuh anggota badan menyentuh lantai: dahi, hidung, kedua telapak tangan, kedua lutut, dan ujung jari kaki. Posisi ini adalah kedudukan paling dekat seorang hamba dengan Allah, dilakukan dengan tuma'ninah.",
    img: "assets/images/dewasa/Sujud.png",
    imgAnak: "assets/images/anak/Sujud_anak.png",
    audio: "assets/audio/dewasa/Sujud_Dewasa.mpeg",
    audioAnak: "assets/audio/anak/Sujud_Anak.mpeg",
    video: "assets/video/dewasa/Sujud_Dewasa.mp4",
    videoAnak: "assets/video/anak/sujud anak.mp4",
  },
  {
    id: 8,
    nama: "Duduk antara dua sujud",
    bacaan:
      "رَبِّ اغْفِرْ لِيْ، وَارْحَمْنِيْ، وَاجْبُرْنِيْ، وَاهْدِنِيْ، وَارْزُقْنِيْ",
    latin: "Allaahummaghfirlii warhamnii wahdinii wajburnii warzuqnii.",
    terjemahan:
      "Ya Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah kekuranganku, angkatlah derajatku, berilah aku rezeki, berilah aku petunjuk, dan sehatkanlah aku.",
    penjelasan:
      "Duduk di antara dua sujud dengan posisi iftirasy: duduk di atas kaki kiri yang dilipat, sementara kaki kanan ditegakkan dengan ujung jari menghadap kiblat. Dilakukan dengan tuma'ninah.",
    img: "assets/images/dewasa/Duduk_antara_dua_sujud.png",
    imgAnak: "assets/images/anak/Duduk_antara_dua_sujud_anak.png",
    audio: "assets/audio/dewasa/Duduk_Antara_Dua_Sujud_Dewasa.mpeg",
    audioAnak: "assets/audio/anak/Duduk_Antara_Dua_Sujud_Anak.mpeg",
    video: "assets/video/dewasa/Duduk_Antara_Dua_Sujud_Dewasa.mp4",
    videoAnak: "assets/video/anak/Duduk diantara dua sujud anak.mp4",
  },
  {
    id: 9,
    nama: "Sujud Kedua",
    bacaan:
      "سُبْحَانَ رَبِّيَ الْأَعْلَىسُبْحَانَكَ اللّهُمَّ رَبَّناَ وَبِحَمْدِكَ اَللّهُمَّ اغْفِرْلِى",
    latin: "Subhaanaka allaahuma robbanaa wabihamdika allaahumaghfirlii",
    terjemahan: "Maha Suci Tuhanku Yang Maha Tinggi.",
    penjelasan:
      "Gerakan dan bacaan sama seperti sujud pertama. Setelah sujud kedua selesai, dilanjutkan bangkit berdiri untuk rakaat berikutnya atau duduk tasyahud, tergantung posisi rakaat.",
    img: "assets/images/dewasa/Sujud_Kedua.png",
    imgAnak: "assets/images/anak/Sujud_Kedua_anak.png",
    audio: "assets/audio/dewasa/Sujud_Dewasa.mpeg",
    audioAnak: "assets/audio/anak/Sujud_Anak.mpeg",
    video: "assets/video/dewasa/Sujud_Dewasa.mp4",
    videoAnak: "assets/video/anak/Sujud anak.mp4",
  },
  {
    id: 10,
    nama: "Tasyahud Awal",
    bacaan:
      "اَلتَّحِيَّاتُ لِلّٰهِ، وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ، اَلسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِيْنَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ",
    latin:
      "At-taḥiyyātu lillāhi, waṣ-ṣalawātu waṭ-ṭayyibāt, as-salāmu 'alaika ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh, as-salāmu 'alainā wa 'alā 'ibādillāhiṣ-ṣāliḥīn, ash-hadu allā ilāha illallāh wa ash-hadu anna muḥammadan 'abduhū wa rasūluh.",
    terjemahan:
      "Segala penghormatan, doa, dan kebaikan hanyalah milik Allah. Semoga keselamatan, rahmat Allah dan berkah-Nya tercurah kepadamu wahai Nabi. Semoga keselamatan tercurah kepada kami dan kepada seluruh hamba Allah yang saleh. Aku bersaksi bahwa tidak ada Tuhan selain Allah dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.",
    penjelasan:
      "Duduk iftirasy sambil membaca tasyahud dan bershalawat kepada Nabi Muhammad SAW. Jari telunjuk kanan diangkat sedikit saat mengucap kalimat syahadat. Dilakukan pada rakaat kedua sebelum melanjutkan rakaat berikutnya.",
    img: "assets/images/dewasa/Tasyahud_Awal.png",
    imgAnak: "assets/images/anak/Tasyahud_Awal_anak.png",
    audio: "assets/audio/dewasa/Tahiyat_Awal_Dewasa.mp3",
    audioAnak: "assets/audio/anak/Tahiyat_Awal_Anak.mp3",
    video: "assets/video/dewasa/Tahiyat_Awal_Dewasa.mp4",
    videoAnak: "assets/video/anak/Duduk Tahiyat Awal (anak).mp4",
  },
  {
    id: 11,
    nama: "Tasyahud Akhir",
    bacaan:
      "اَلتَّحِيَّاتُ لِلّٰهِ، وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ، اَلسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِيْنَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيْمَ وَعَلَى آلِ إِبْرَاهِيْمَ، إِنَّكَ حَمِيْدٌ مَجِيْدٌ. اَللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيْمَ وَعَلَى آلِ إِبْرَاهِيْمَ، إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
    latin:
      "At-taḥiyyātu lillāhi... Allāhumma ṣalli 'alā Muḥammad wa 'alā āli Muḥammad, kamā ṣallaita 'alā Ibrāhīma wa 'āli Ibrāhīm, Wabaarik ‘alaa Muhammad wa aali Muhammad. Kamaa baarokta ‘alaa ibroohiim wa aali ibroohiim. Innaka hamiidummajiid..Allaahumma innii a’uudzubika min ‘adzaabi jahannam. Wamin ‘adzaabil qobri. Wamin fitnatil mahyaa walmamaati. Wamin syarri fitnatil masiihiddadjaal.",
    terjemahan:
      "Segala penghormatan hanya milik Allah... Ya Allah, limpahkanlah rahmat kepada Muhammad dan keluarga Muhammad sebagaimana Engkau telah melimpahkan rahmat kepada Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, limpahkanlah keberkahan kepada Muhammad dan keluarga Muhammad sebagaimana Engkau telah melimpahkan keberkahan kepada Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.",
    penjelasan:
      "Duduk tawarruk pada rakaat terakhir: posisi kaki kiri dikeluarkan dari bawah kaki kanan, pantat menyentuh lantai. Membaca tasyahud lengkap beserta shalawat kepada Nabi dan keluarganya.",
    img: "assets/images/dewasa/Tasyahud_Akhir.png",
    imgAnak: "assets/images/anak/Tasyahud_Akhir_anak.png",
    audio: "assets/audio/dewasa/Tahiyat_Akhir_Dewasa.mp3",
    audioAnak: "assets/audio/anak/Tahiyat_Akhir_Anak.mp3",
    video: "assets/video/dewasa/Tahiyat_Akhir_Dewasa.mp4",
    videoAnak: "assets/video/anak/Duduk Tahiyat akhir (anak).mp4",
  },
  {
    id: 12,
    nama: "Salam",
    bacaan: "اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
    latin: "As-salāmu 'alaikum wa raḥmatullāh",
    terjemahan: "Semoga keselamatan dan rahmat Allah tercurah kepada kalian.",
    penjelasan:
      "Menoleh ke kanan lalu ke kiri sambil mengucap salam, menandakan berakhirnya sholat. Salam menjadi rukun penutup yang mengembalikan seluruh larangan sholat menjadi halal kembali.",
    img: "assets/images/dewasa/Salam_Kanan_dan_Kiri.jpeg",
    imgAnak: "assets/images/anak/Salam_anak.png",
    audio: "assets/audio/dewasa/Salam_Dewasa.mp3",
    audioAnak: "assets/audio/anak/Salam_anak.mpeg",
    video: "assets/video/dewasa/Salam_Dewasa.mp4",
    videoAnak: "assets/video/anak/salam anak.mp4",
  },
];

if (typeof window !== "undefined") {
  window.GERAKAN = GERAKAN;
}
