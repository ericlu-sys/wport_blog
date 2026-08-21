---
title: "Catatan Kunjungan Taoyuan A8 (4)｜AWAREK: Pencitraan Termal Sensor Fusion, Tanpa Robot Anjing, Bermitra dengan SI Pemburu Tender"
description: "NTUTEC mengajak kami ke Taoyuan A8. Perhentian keempat, AWAREK: intinya pencitraan termal sensor fusion dengan peringatan AI. Mereka tidak membuat drone atau robot anjing sendiri; integrator sistem yang ikut tender yang menggandeng mereka."
publishDate: 2026-07-21
tags: ["台大創創", "創業募資"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/taoyuan-a8-awarek-audience.jpg"
draft: false
voice: "eric"
---

## Dalam satu kalimat

AWAREK tidak membuat robot anjing maupun drone. Mereka hanya menggarap lapisan pencitraan termal plus sensor fusion, dan ketika integrator sistem yang ikut tender publik membutuhkan kemampuan itu, integratornya yang datang kepada mereka. Menjadi komponen secara sengaja jauh lebih ringan daripada membangun merek mesin utuh dari nol.

## Poin inti

- **Tidak membuat wahana adalah strategi, bukan keterbatasan**: platform diserahkan ke mitra, sementara mereka memegang lapisan penginderaan dan penafsiran.
- **Kamera biasa tidak bisa menutup titik buta suhu**: cahaya tampak tidak melihat panas berlebih, dan anomali suhu tinggi sebelum kebakaran butuh pencitraan termal.
- **Kanalnya adalah tender milik orang lain**: SI yang mendatangi mereka, artinya masuk lewat seluruh ekosistem tender.
- **VC memberi lebih dari uang**: Howard menyebut di ruangan bahwa ia mengenal orang di perusahaan pemadam kebakaran dan bisa memperkenalkan. Perkenalan konkret seperti itu lebih berharga daripada "kami sangat optimistis pada kalian".

## Kenapa saya mencatat yang satu ini

Melanjutkan [seri Taoyuan A8](/blog/id/posts/taoyuan-a8-startup-ruomei-thermal/), perusahaan keempat di sesi yang sama, **bagian empat dari empat**: **AWAREK Co., Ltd.**

Tiga sebelumnya adalah [Ruomei (1)](/blog/id/posts/taoyuan-a8-startup-ruomei-thermal/), [EITH (2)](/blog/id/posts/taoyuan-a8-startup-eith-wastewater/), dan [Chenlu (3)](/blog/id/posts/taoyuan-a8-startup-chenlu-endoscopy/).

Saya pun awalnya mengira mereka membuat robot anjing. Baru setelah diklarifikasi di ruangan saya sadar bukan, dan keputusan tentang **apa yang tidak mereka kerjakan** itulah hal paling layak dicatat dari perusahaan ini.

---

## Apa yang dikerjakan AWAREK

Dalam bahasa awam: **mereka memadukan pencitraan termal, cahaya tampak, dan aliran penginderaan lain, memakai AI untuk menilai panas berlebih dan risiko kebakaran, lalu mengirim peringatan. Perusahaan yang ikut tender datang untuk integrasi. AWAREK tidak membuat drone atau robot anjing sendiri.**

### Inti: sensor fusion, bukan wahana

Klarifikasi di ruangan ini penting: **inti AWAREK adalah sensor fusion**, bukan produsen drone atau robot anjing.

- Mereka **tidak membuat** robot anjing, drone, atau robot patroli utuh
- Yang mereka buat adalah modul pencitraan termal, Edge AI, platform awan, serta **penafsiran terpadu** dari berbagai sinyal penginderaan
- SI atau integrator yang **mengejar tender** mendatangi AWAREK ketika membutuhkan bagian "pencitraan termal plus peringatan AI", lalu menyematkannya ke dalam penawaran yang lebih besar

Drone, robot anjing, dan skenario inspeksi kebakaran yang disebut di pemberitaan maupun di ruangan lebih mirip **platform mitra dan skenario aplikasi**, bukan lini produk yang diproduksi massal oleh AWAREK.

### Dari terpasang tetap ke bergerak

Pencitraan termal sudah punya aplikasi di **panel listrik pabrik, kendaraan listrik, dan gedung parkir**, sebagian besar berupa **pemasangan tetap**. Arah AWAREK juga mencakup **patroli robotik bergerak** (drone, robot anjing, robot patroli, pemadam kebakaran), tetapi wahananya biasanya berasal dari **mitra**, sementara AWAREK menangani **lapisan sensor fusion dan peringatan**.

Kamera cahaya tampak konvensional **tidak bisa melihat distribusi panas**. Panas berlebih, dan anomali suhu tinggi yang mendahului kebakaran, butuh pencitraan termal untuk mengisi lapisan itu, lalu dipadukan dengan data penginderaan lain.

### Bukan sekadar pengenalan citra, melainkan pengenalan citra termal

Ini dijelaskan dengan gamblang: yang mereka kerjakan bukan vision AI CCTV biasa, melainkan **pengenalan dan penilaian khusus untuk citra termal**.

- Mendeteksi kenaikan suhu abnormal dan titik panas
- **Mengirim peringatan begitu ada masalah** (memberi tahu pihak terkait)
- Dipadukan dengan **platform pengelolaan awan** untuk memantau status dan mengelola perangkat dari jauh

### Perangkat keras plus awan plus Edge AI

Lini produknya lebih dari sekadar lensa:

- **Perangkat keras**: detektor pencitraan termal (spesifikasi publik mencakup POE, WiFi, dan lainnya)
- **Cip Edge AI**: sebagian inferensi terjadi di sisi tepi, menurunkan latensi dan mengurangi ketergantungan pada jaringan
- **Pengelolaan awan**: manajemen terpusat untuk perangkat dan peringatan

Mereka menyebut peluang menjual **total solution** (perangkat keras plus perangkat lunak plus platform, ujung ke ujung), bukan hanya satu sensor.

---

## Penerapan yang sudah berjalan (keterangan lisan)

- **MRT Taoyuan**
- **Deteksi suhu tinggi pada bangunan**

Pemberitaan juga pernah menyebut kerja sama dengan **robot anjing Cadall P105**, memasang pencitra termal pada robot berkaki empat untuk inspeksi gardu listrik, pabrik kimia, dan lokasi berbahaya lain, serta menemukan sumber panas menembus asap dalam pemadaman kebakaran.

### Cara menjual: SI pemburu tender yang datang, bukan membuat mesin utuh sendiri

Ada dua lapisan kanal yang disebut:

1. **Pelanggan utamanya adalah integrator sistem (SI)**, yang mempromosikan dan menerapkan ke lokasi  
2. **Perusahaan yang mengejar tender** secara aktif mendatangi AWAREK untuk menyematkan sensor fusion ke dalam penawaran keamanan, gedung pintar, pabrik, dan MRT

AWAREK tidak perlu membuat drone atau menjalankan lini produksi robot anjing. Mereka mengubah **pencitraan termal plus fusion plus Edge AI plus peringatan awan** menjadi modul atau total solution yang bisa diintegrasikan. Bagi SI yang mengejar tender, itu satu lapisan penginderaan pembeda tambahan. Bagi AWAREK, masuk lewat ekosistem tender lebih ringan daripada membangun merek mesin utuh dari nol.

### Q&A: VC memberi bukan hanya uang, tetapi juga koneksi

Dalam Q&A AWAREK, **Howard** dari NTUTEC menyebut ia **mengenal sebuah perusahaan pemadam kebakaran** dan bisa **memperkenalkan**.

Itu nilai tambah yang sangat konkret bagi founder. Pencitraan termal dan skenario kebakaran memang salah satu arah aplikasi AWAREK, dan bila VC benar-benar bisa menyambungkan mereka ke pelaku industri pemadam kebakaran, bantuannya selapis lebih nyata daripada "kami optimistis pada kalian". Ini juga mengingatkan saya: **investor institusional bukan sekadar selembar cek**, melainkan juga membawa koneksi industri, kanal tender, dan perkenalan pelanggan berikutnya. Selain membicarakan produk, sesi pitch juga tempat menilai apakah VC ini bisa menyambungkan Anda ke lokasi proyek berikutnya.

---

## Kompetisi dan pembeda

Gambaran mereka soal lanskap persaingan: pesaing cenderung hanya menguasai satu bagian, dan **beberapa domain belum terintegrasi menjadi satu**:

| Jenis | Keterbatasan umum |
|-------|-------------------|
| **Kamera termal** | Punya data panas, tetapi belum tentu punya peringatan AI dan platform |
| **Kamera konvensional** | Cahaya tampak, tidak bisa melihat panas berlebih |
| **Kamera nirkabel** | Mudah dipasang, tetapi bukan skenario pencitraan termal |
| **Kamera vision** | Kuat di pengenalan citra, buta terhadap risiko suhu |

Narasi AWAREK: **sensor fusion (pencitraan termal plus penginderaan lain) plus penafsiran AI plus IoT dan notifikasi awan**, bisa tetap bisa bergerak; wahananya dipasok mitra, sementara mereka fokus pada lapisan penginderaan dan platform.

---

## Status perusahaan (dibandingkan dengan data publik)

- Nama resmi: AWAREK Co., Ltd.
- Perwakilan: Kuo Sheng-pei (FINDIT dan pemberitaan publik)
- Basis: Jalan Shouchang, Distrik Taoyuan, Taoyuan (data publik)
- Posisi: deteksi suhu dan kebakaran berbasis AI dengan pencitraan termal, penginderaan AIoT
- Situs dan merek: [awarek.com](https://awarek.godaddysites.com/) dan lainnya

MRT Taoyuan dan lokasi suhu tinggi pada bangunan berasal dari keterangan lisan. Detail bisa ditambahkan nanti.

---

## Kesan yang ditinggalkan kasus ini

- **Posisi jelas**: sensor fusion sebagai inti, tidak beradu langsung dengan produsen drone dan robot anjing.  
- **Skenario jelas**: kebakaran dan panas berlebih adalah pain point keras yang tak bisa ditutup kamera pengawas biasa.  
- **Produk bertangga**: pemasangan tetap sudah punya basis pasar, versi bergerak diperluas lewat platform mitra.  
- **Pola pikir platform**: perangkat keras plus Edge AI plus notifikasi awan, bisa disematkan ke tender SI.  
- **Kanal jelas**: **perusahaan pemburu tender yang datang sendiri**; integrasi lewat SI, bukan membangun lini mesin utuh.  
- **Nilai VC bukan hanya modal**: Howard menawarkan memperkenalkan perusahaan pemadam kebakaran, konkret dan tepat sasaran.  
- **Kasus lokal**: MRT Taoyuan dan deteksi suhu tinggi bangunan, yang menambah daya yakin untuk sesi yang digelar di Taoyuan.

Empat perusahaan sudah didengar, dan sesi ini ditutup dengan foto bersama.

![Setelah sesi Taoyuan A8, tim NTUTEC dan WPORT di depan dinding perusahaan penghuni A8](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/taoyuan-a8-group.jpg)

---

## Seri Catatan Kunjungan Taoyuan A8 (empat perusahaan)

- [(1) Ruomei Technology: pendinginan AI membakar uang, mulailah dari radiasi di sisi material](/blog/id/posts/taoyuan-a8-startup-ruomei-thermal/)
- [(2) EITH: mengubah air limbah jadi sumber daya, dan pitch yang bisa diikuti non-pakar](/blog/id/posts/taoyuan-a8-startup-eith-wastewater/)
- [(3) Chenlu Technology: endoskop lensa ganda berbasis AI, SaMD dulu baru scope sekali pakai](/blog/id/posts/taoyuan-a8-startup-chenlu-endoscopy/)
- (4) AWAREK: pencitraan termal sensor fusion, bermitra dengan SI pemburu tender
