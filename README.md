# Kelompok-5-Tata-Cara-Sholat-Sesuai-HPT-Muhammadiyah
# 🕋 Sholatku

Aplikasi web interaktif pembelajaran tata cara shalat fardhu lima waktu (Subuh sampai Isya) berbasis mobile-first, yang disusun berdasarkan putusan resmi **Himpunan Putusan Tarjih (HPT) Muhammadiyah**. Proyek ini dikembangkan untuk memenuhi tugas mata kuliah **Pengembangan Aplikasi Web / Praktikum Pemrograman Web**.

---

## 🏫 Identitas Akademik
* **Mata Kuliah:** Pengembangan Aplikasi Web / Praktikum Pemrograman Web
* **Dosen Pengampu:** Dedy Susanto, S.Pd.I., M.M.
* **Institusi:** Universitas Muhammadiyah
* **Tahun Akademik:** 2026

---

## 👥 Kelompok 5 - Anggota & Pembagian Peran
Berdasarkan keputusan internal tim, proses rekayasa sistem dibagi secara terstruktur sebagai berikut:

## Pembagian Tugas Tim Proyek (Edisi HTML, JS, CSS & MySQL)
1. Muhammad Oscar Dzakwan (Project Manager)

Tugas: Manajemen repositori GitHub, kontrol integrasi sistem, memastikan semua aset masuk folder yang benar, menyusun dokumentasi proyek pada README.md, dan mengoordinasikan alur kerja tim.

2. Faisal Gunawan (Front end developer)

Tugas: Mengatur konsep visual (Figma), menyusun struktur layouting utama di index.html, membuat desain tampilan yang responsif dan menarik (tema anak & dewasa) di style.css, serta menguji tampilan pada perangkat seluler.

3. Muhamad Nabil Alfarizzi (Back-end Developer)

Tugas: Menangani pemrograman sisi server untuk menghubungkan database MySQL dengan web, menulis logika fungsional aplikasi pada script.js (pemutar audio/video dan perpindahan halaman), serta mengonstruksi penarikan data di data.js.

4. Mohamad Abrar Hafiz (Database & Content Engineer)

Tugas: Merancang arsitektur database relasional MySQL, menyusun isi file gerakan dan bacaan.sql serta kelompok dan kategori.sql, mengolah teks Arab (utf8mb4) beserta artinya, dan memastikan konten sesuai HPT Muhammadiyah.

5. Restu Rizwar (QA, Multimedia & Deployment)

Tugas: Mengurus seluruh aset multimedia di folder assets/ (melakukan cutting dan kompresi audio, pengelolaan aset images, dan optimasi video anak/dewasa), menguji kecocokan tombol/media player, serta menangani perilisan (deployment) web.


## 🛠️ Fitur Utama Aplikasi
* **Rujukan HPT Valid:** Seluruh bacaan bersumber dari dokumen resmi Majelis Tarjih Muhammadiyah.
* **Penyajian Multi-lapis (Multilinear Reading):** Menampilkan variasi doa HPT (seperti 3 lapis potongan doa Iftitah) dalam satu rangkaian gerakan shalat.
* **Mode Pengguna Ganda:** Pilihan konten dinamis untuk mode Dewasa (terjemahan lengkap) dan mode Anak (terjemahan ringkas ramah anak).
* **Multimedia Autoplay:** Audio makhraj bacaan `.mp3` dan video peragaan `.mp4` berputar otomatis (*sync*) begitu pengguna bergeser menggunakan tombol Navigasi (Next/Prev).
* **Header Identitas Permanen:** Menyertakan informasi Nama Kelompok, Prodi, Mata Kuliah, dan Dosen Pengampu secara konsisten pada bagian atas aplikasi.

---

## 📂 Struktur Direktori Proyek
```text
SHOLATKU/
├── assets/
│   ├── audio/
│   │   ├── anak/               # Potongan audio bacaan sholat versi anak-anak
│   │   └── dewasa/             # Potongan audio bacaan sholat versi dewasa
│   ├── images/
│   │   ├── anak/               # Gambar panduan gerakan sholat versi anak-anak
│   │   └── dewasa/             # Gambar panduan gerakan sholat versi dewasa
│   ├── Background beranda anak.png
│   ├── Background_Beranda_Dewasa.png
│   ├── Bersedekap anak beranda.png
│   ├── Bersedekap beranda.png
│   ├── Jendela Beranda Anak.png
│   └── Jendela_Beranda_Dewasa.png
│   └── video/
│       ├── anak/               # Aset video gerakan sholat untuk anak-anak
│       └── dewasa/             # Aset video gerakan sholat untuk dewasa
├── database/
│   ├── gerakan dan bacaan.sql  # Struktur & data teks gerakan serta bacaan sholat
│   └── kelompok dan kategori.sql # Struktur & data pembagian kategori (anak/dewasa)
├── data.js                     # Penghubung data dari MySQL ke tampilan web
├── index.html                  # Halaman utama aplikasi (Antarmuka Utama)
├── README.md                   # Dokumentasi proyek
├── script.js                   # Logika jalannya aplikasi & kontrol media player
└── style.css                   # Pengatur desain, tata letak, dan responsivitas web
