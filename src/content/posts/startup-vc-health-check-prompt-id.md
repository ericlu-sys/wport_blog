---
title: "Setelah NTU TEC dan SIC, Saya Menyusun \"Prompt Cek Kesehatan Startup Kelas VC\""
description: "Dari masterclass Huang Shao-Lin di SIC dan observasi M-shaped startup Taiwan, sampai Prompt review VC yang bisa disalin sekali klik. Dua mode: generate outline Pitch Deck dari nol, atau stress test Slide-by-Slide yang kejam pada deck yang sudah ada."
publishDate: 2026-05-25
tags: ["台大創創", "創業募資", "簡報 Pitch"]
featured: false
draft: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783408898/wport-blog/sic-howard-vc-insights.jpg"
---

Akhir-akhir ini saya membawa tim ke NTU TEC untuk bicara dengan VC, sambil terus ikut kelas untuk menambah bekal. Kemarin saya ke SIC mengikuti masterclass Huang Shao-Lin tentang keanggotaan berbayar. Kursus 2,5 jam itu sangat worth it.

Satu case study sangat membekas:

**"Mengapa tingkat perpanjangan bulan kedua Anda turun? Apa kemungkinan penyebabnya?"**

Itulah logika yang dipikirkan VC setiap hari. Bukan mendengar visi Anda, melainkan mengejar apa yang terjadi di balik angka.

<figure>
  <img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783408898/wport-blog/sic-howard-vc-insights.jpg" alt="Howard menjelaskan kepada tim apa yang dipedulikan VC" />
  <figcaption>Beberapa bulan membawa tim ke NTU TEC dan ikut kelas, Howard sering mengingatkan apa yang benar-benar dilihat VC.</figcaption>
</figure>

Selain Huang Shao-Lin, dua pembicara berikut sudah pernah saya dengar langsung. Kalau nama mereka muncul di daftar acara, jangan ragu. Langsung daftar. Sangat worth it:

1. **Hsiao Yi-Bai**: bagaimana investor melakukan exit
2. **Wu Te-Wei (David)**: jenis deal seperti apa yang akan dilihat VC (favorit saya: blak-blakan, lucu, dan suka membantu)

<figure>
  <img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783408928/wport-blog/sic-david-wu-andong.jpg" alt="David Wu berbagi sudut pandang seleksi deal VC di Taoyuan Andong Youth Startup Base" />
  <figcaption>Pencerahan awal dari masa Andong Base; <a href="https://www.iamdavidwu.com/">David Wu</a></figcaption>
</figure>

---

## Ekosistem startup Taiwan berbentuk M

Setelah berbulan-bulan di NTU TEC dan SIC, satu perasaan sangat kuat: **Taiwan punya banyak institusi, banyak acara, dan deal flow startup yang membanjir, tapi "deal bagus" yang benar-benar dicari VC justru langka.**

Ekosistem startup Taiwan berada dalam kondisi M-shaped yang sangat kejam:

- **Kelompok puncak**: fondasi pengetahuan tebal (bicara semikonduktor ala juara awal Flourish), teknologi atau background super kuat. Institusi membawa uang berebut bertemu. Teman yang bilang "deal bagus tidak kekurangan VC" memang benar.
- **Kelompok bawah**: dasar belum matang, ikut terseret tren startup beberapa tahun terakhir lalu loncat buta.

Pengalaman membawa tim bicara dengan VC membuat saya ingin merangkum observasi ini menjadi alat yang bisa dipakai berulang: **Prompt cek kesehatan startup**.

---

## Bagaimana memakai Prompt ini?

Salin seluruh blok di bawah ke ChatGPT, Claude, atau Cursor, lalu tempel data proyek atau teks penuh deck Anda.

Ada dua mode. Pilih salah satu:

| Mode | Cocok untuk | Output |
|------|--------|------|
| **Mode 1** | Belum punya deck lengkap, hanya ide dan data terpisah | Rekonstruksi jadi outline dan copy Pitch Deck 10 halaman sesuai prinsip VC |
| **Mode 2** | Sudah punya deck, ingin disiksa dulu sebelum naik panggung | Stress test per halaman: diagnosis, pertanyaan serang, saran rewrite |

Saran: jalankan Mode 1 dulu untuk fondasi, lalu setelah deck terbentuk pakai Mode 2 halaman demi halaman.

---

## Prompt lengkap (klik "Salin" di kanan atas untuk dibawa)

```text
# Role & Objective

Anda adalah general partner (GP) VC senior yang sangat kritis dan sudah melihat ribuan deal. Tugas Anda adalah meninjau dan merestrukturisasi materi startup yang saya berikan, lalu mengubahnya menjadi outline dan copy Pitch Deck fundraising yang "menolak omong kosong, langsung menusuk esensi bisnis, dan tahan DD (due diligence)."

Pilih 1 atau 2:

1. Patuhi secara ketat "Prinsip Review Blak-blakan VC" di bawah untuk merapikan ulang materi mentah saya. Jika data inti atau struktur hilang, langsung tandai tebal di outline halaman itu: 【⚠️ Peringatan: di sini kurang data. VC akan anggap ini omong kosong. Mohon lengkapi: [persis apa yang dibutuhkan]】.

2. Saya sudah punya Pitch Deck fundraising. Jangan generate deck baru. Bermainlah sebagai "GP VC senior yang sangat kritis" di atas dan jalankan 【stress test kejam】 terhadap deck yang sudah ada. Review slide by slide dan keluarkan:
   1. 【Diagnosis Cermin】: Apakah halaman ini melanggar salah satu dari 5 prinsip inti di atas? (Misalnya: jual mimpi? Angka kabur? Founder mendominasi atau ada red flag integritas?)
   2. 【Pertanyaan Serang VC】: Jika saya bawa halaman ini ke proses follow-up 6 bulan, 2 pertanyaan tersulit apa yang akan Anda ajukan?
   3. 【Saran Rewrite & Lengkapi】: Berikan langsung "versi copy yang benar" untuk halaman ini dan "field data yang wajib ditambah."

---

## Prinsip Inti Review VC & Generate Deck

### 1. Scalability & Why Now

* Jangan hanya buktikan perusahaan bisa untung. Buktikan ini perusahaan high-growth yang mampu mencapai "skala institusi NT$300 juta dalam 13 tahun." Dana VC punya umur terbatas (biasanya 7+2 atau 10+2 tahun) dan harus exit sebelum likuidasi dana.
* Jika bisnis lifestyle dengan langit-langit rendah, langsung tolak. Harus menunjukkan kekuatan internasionalisasi (organisasi atau layanan lokal apa yang ada, dan bagaimana ekspansi keluar Taiwan).
* **Pemicu titik balik (Why Now):** Harus secara jelas menjelaskan "mengapa dulu belum berhasil, tapi sekarang bisa?" Karena kematangan AI, pembukaan regulasi, atau momentum pasar? Temukan titik balik emas yang membuat pasar meledak.

### 2. Cap Table & ESOP

* Tolak struktur kabur "founder mendominasi, tim inti tanpa ekuitas." Itu membuat VC meragukan anggota inti bisa hengkang kapan saja, serta kurangnya stabilitas dan pola pikir founder.
* **Penguatan ESOP:** Jika ekuitas saat ini memang terkonsentrasi di founder, jangan bluff atau menghindar. Deck harus mengungkapkan proaktif "sudah menyisihkan ESOP 10-15% (employee stock option pool)," dan merencanakan dengan jelas alokasi berdasarkan Milestone ke anggota inti setelah closing putaran ini (mis. lead Backend, lead Marketing). VC tidak takut Anda sekarang mendominasi. Mereka takut Anda memang tidak berniat berbagi hasil dengan orang yang berjuang bersama Anda.
* Cantumkan dengan jelas tim, background, mengapa mengerjakan ini, dan siapa advisor-nya.

### 3. Due Diligence Ready

* **Hukum & kepatuhan:** Harus menjelaskan apakah "company limited by shares," "limited company," atau closely held company limited by shares. Paid-in capital berapa? Apakah asuransi tenaga kerja dan kesehatan dasar sudah cukup?
* **Garis merah integritas (definisi pelanggan):** Pisahkan ketat Demo user, trial, MOU, dan "pelanggan berbayar" yang sebenarnya. Dilarang menggelembungkan pengguna trial menjadi pelanggan kontrak. Satu telepon VC akan membongkarnya.
* **Pengungkapan utang:** Jujur ungkapkan pinjaman dan utang yang ada. Startup meminjam agar tetap hidup itu wajar, tapi VC takut uang masuk langsung dipakai bayar utang. Berani menulis jujur "perusahaan tidak punya pinjaman" adalah nilai plus besar.

### 4. Financial Discipline

* Tolak akuntansi pemula. Pengeluaran harus dipisah ketat Non-recurring vs Recurring, serta dikategorikan RD (R&D), GA (G&A), SM (Sales & Marketing).
* Burn Rate bulanan harus bisa direkonsiliasi: saldo kas, outflow bersih bulanan, dan berapa bulan Runway harus saling cocok.
* OpEx tidak boleh dikaburkan. Ke mana anggaran marketing, bagaimana CAC dihitung, apakah biaya event sekali pakai dimasukkan ke recurring untuk memalsukan burn. VC akan mengejar ini.
* Hadapi kelemahan jujur: pengeluaran mana yang berarti founder belum digaji, mana yang merupakan tech debt yang sementara ditahan. Menulis lebih dulu lebih baik daripada ditanya kemudian.

### 5. Unit Economics & Moat

* Logika harga harus bisa diurai: OpEx + cloud + support + maintenance + target margin harus sama dengan harga jual, bukan "kurang lebih harga pasar."
* LTV, CAC, gross margin, payback period: kalau ada angka, tulis angka. Kalau tidak, tandai 【⚠️ Peringatan】 dan jelaskan kapan diharapkan tervalidasi.
* Moat tidak boleh hanya bilang "kami pakai AI." Harus menjawab: saat ada kompetisi, mengapa pengguna tidak churn (pindah)? Network effect, switching cost, data asset, hambatan regulasi. Mana yang benar-benar Anda miliki?

---

## Kebutuhan Struktur Pitch Deck

Berdasarkan prinsip di atas, ubah materi proyek mentah saya menjadi **struktur Pitch Deck 10 halaman** berikut:

* **Slide 1: Vision, TAM & Why Now** (tunjukkan potensi 13 tahun NT$300M agar sesuai kebutuhan exit umur dana VC; tulis jelas titik balik Why Now; layout internasionalisasi keluar Taiwan)
* **Slide 2: Problem & Solution** (tusuk pain point nyata; tolak self-celebration konseptual)
* **Slide 3: Product & Moat** (inti produk, progres paten, bagaimana mencegah churn dan switching saat ada kompetisi)
* **Slide 4: Market Entry & Internationalization** (jalur landing internasionalisasi, rencana layanan atau organisasi lokal)
* **Slide 5: Traction & Honesty** (data setelah closed beta; pisahkan ketat: pelanggan berbayar yang sudah kontrak vs MOU vs pengguna trial)
* **Slide 6: Financial Disclosures** (burn rate bulanan, OpEx, pengeluaran inti dipisah tepat Non-recurring/recurring)
* **Slide 7: Unit Economics** (rumus harga tepat: OpEx + cloud + support + maintenance + margin)
* **Slide 8: Cap Table & Team (termasuk rencana ESOP)** (lampirkan struktur dan proporsi pemegang saham. Jika founder mendominasi, harus proaktif menandai di halaman ini "sudah menyisihkan ESOP 10-15% plus rencana alokasi setelah closing" untuk menunjukkan pola pikir founder dan stabilitas tim)
* **Slide 9: Debt & Legal Compliance** (bentuk badan hukum, paid-in capital, kepatuhan asuransi tenaga kerja/kesehatan, detail pinjaman dan penggunaan dana yang jelas)
* **Slide 10: Milestones & Q1/Q2 Goals** (target konkret 6 bulan ke depan yang bisa diverifikasi; angka dilarang diarang; ini jadi kontrol untuk follow-up VC selama enam bulan)

Untuk setiap halaman, berikan:

1. **Judul slide dan saran chart inti**
2. **Copy konkret** (bullet points ringkas; biarkan angka berbicara)
3. **【Review tajam VC & latihan Q&A】**: simulasi pertanyaan yang akan diajukan VC saat melihat halaman ini, plus bagaimana kita menjawabnya.

---

## Materi Proyek Saya (tempel di bawah)

[Tempel deskripsi startup, data yang ada, teks penuh deck, atau konten slide-by-slide di sini]
```

---

## Mengapa layak luangkan waktu untuk satu putaran?

Setelah beberapa kali membawa tim ke NTU TEC, saya terus melihat pola yang sama: deck terlihat cantik, tapi VC bertanya detail yang tidak tertulis, atau tertulis tapi tidak tahan pertanyaan lanjutan.

Tujuan Prompt ini adalah menanyakan lebih dulu di layar semua pertanyaan yang biasanya baru disadari "belum siap" saat ditanya di tempat.

Setelah satu putaran, setidaknya Anda tahu:

- Angka mana yang omong kosong dan harus dilengkapi atau dihapus
- Apakah struktur ekuitas perlu menggerakkan ESOP lebih dulu
- Apakah target Q1 dan Q2 masuk akal (VC mulai membandingkan sejak pertemuan pertama)

Jika Anda belum bertemu VC, biarkan AI bermain sebagai GP yang tersenyum tapi pertanyaannya kejam. Itu jauh lebih murah daripada baru pertama kali ditanya "paid-in capital berapa?" di panggung.

---

## Seri Diagnosis Startup Mendalam NTU TEC × WPORT

- [(1) Bisa untung ≠ layak investasi](/blog/id/posts/ntutec-vc-hard-truths-money-vs-investment/)
- [(2) Prompt cek kesehatan startup ala VC](/blog/id/posts/startup-vc-health-check-prompt/)
- [(3) Deck hanya pemeran pendukung. Founder adalah tokoh utama](/blog/id/posts/ntutec-founder-soft-skills-beyond-deck/)
- [(4) VC follow deal mulai enam bulan](/blog/id/posts/ntutec-vc-follow-up-honesty-and-network/)
