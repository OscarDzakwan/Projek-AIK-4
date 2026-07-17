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

Tugas: Manajemen repositori GitHub/GitLab, kontrol integrasi sistem (memastikan penggabungan kode HTML/JS/CSS berjalan lancar), penyusunan dokumentasi utama (README.md), dan koordinasi alur kerja tim agar target selesai tepat waktu.

2. Muhamad Nabil Alfarizzi (Frontend Developer & Client-Side Integrator)

Tugas: Menuliskan keseluruhan baris kode aplikasi utama. Menyusun struktur semantik index.html, membuat presentasi layouting responsif dengan CSS Grid/Flexbox (bersama Faisal), mengembangkan skrip interaktivitas Javascript (media-player.js), serta menulis logika app.js untuk mengonsumsi dan menampilkan data dinamis dari MySQL (melalui Fetch API/lokal endpoint).

3. Mohamad Abrar Hafiz (Database & Content Engineer)

Tugas: Merancang arsitektur database relasional MySQL (schema.sql), mengolah data tekstual Arab dengan konfigurasi charset utf8mb4 agar teks Arab tidak rusak, menyusun teks Latin/terjemahan, serta melakukan validasi konten keagamaan agar 100% sesuai dengan HPT Muhammadiyah (seeder.sql).

4. Restu Rizwar (QA, Multimedia & Deployment)

Tugas: Melakukan kurasi, pemotongan (cutting), dan kompresi audio makhraj bacaan format MP3 agar ringan saat di-load, mengoptimasi gambar gerakan sholat, melakukan Quality Assurance (uji kelayakan aplikasi), serta menangani perilisan (deployment) aplikasi web ke server lokal atau hosting.

5. Faisal Gunawan (UI/UX Designer & Frontend Planner)

Tugas: Merancang kerangka user flow dan konsep visual antarmuka (Figma/Wireframing), merancang aset visual dan berkontribusi dalam pembuatan style CSS, serta melakukan pengujian kualitas responsivitas pada berbagai perangkat seluler (mobile testing/responsive validation) di folder docs/.

---

## 🛠️ Fitur Utama Aplikasi
* **Rujukan HPT Valid:** Seluruh bacaan bersumber dari dokumen resmi Majelis Tarjih Muhammadiyah.
* **Penyajian Multi-lapis (Multilinear Reading):** Menampilkan variasi doa HPT (seperti 3 lapis potongan doa Iftitah) dalam satu rangkaian gerakan shalat.
* **Mode Pengguna Ganda:** Pilihan konten dinamis untuk mode Dewasa (terjemahan lengkap) dan mode Anak (terjemahan ringkas ramah anak).
* **Multimedia Autoplay:** Audio makhraj bacaan `.mp3` dan video peragaan `.mp4` berputar otomatis (*sync*) begitu pengguna bergeser menggunakan tombol Navigasi (Next/Prev).
* **Header Identitas Permanen:** Menyertakan informasi Nama Kelompok, Prodi, Mata Kuliah, dan Dosen Pengampu secara konsisten pada bagian atas aplikasi.

---

## 📂 Struktur Direktori Proyek
```text
tuntunan-sholat-aik/
├── assets/
│   ├── css/
│   │   └── style.css          # Desain responsif & layouting (Faisal Gunawan & Muhamad Nabil Alfarizzi)
│   ├── js/
│   │   ├── app.js             # Pengambil & pengolah data panduan sholat / pengganti Controller (Muhamad Nabil Alfarizzi)
│   │   └── media-player.js    # Kontrol autoplay & pemutar audio bacaan (Muhamad Nabil Alfarizzi)
│   ├── img/                   # Aset gambar posisi gerakan sholat (Restu Rizwar & Faisal Gunawan)
│   └── audio/                 # Potongan file audio MP3 bacaan sholat (Restu Rizwar)
├── database/
│   ├── schema.sql             # Struktur tabel MySQL untuk data sholat (Abrar)
│   └── seeder.sql             # Data teks HPT Muhammadiyah lengkap format SQL (Abrar)
├── docs/                      # Link Figma, wireframe, dan laporan uji coba mobile (Faisal Gunawan)
├── index.html                 # Antarmuka utama aplikasi / pengganti prayer-view.php (Muhammad Nabil Alfarizzi)
└── README.md                  # Dokumentasi utama proyek (Muhammad Oscar Dzakwan)
