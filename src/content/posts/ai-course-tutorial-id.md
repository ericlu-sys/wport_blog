---
title: "Belajar AI Tanpa Latar CS: Panduan Praktikum Lengkap GitHub Fork, Cursor IDE, Obsidian, CLI, dan MCP"
description: "Tanpa pernah menulis kode, Anda tetap bisa membuat situs pribadi, resume yang disesuaikan, dan alur kerja otomatis dengan tools AI. Artikel ini merekonstruksi empat tahap praktikum Congdianzhan Vol.3 secara lengkap, dari AI IDE hingga deploy Vercel, langkah demi langkah."
publishDate: 2026-07-02
tags: ["AI工具", "桃園 AI 課程", "在台工作", "職涯發展"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783409279/wport-blog/ai-course-non-cs-cover.jpg"
---

<figure>
  <img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783409279/wport-blog/ai-course-non-cs-cover.jpg" alt="Belajar AI tanpa latar CS, kelas Congdianzhan Vol.3" />
  <figcaption>Belajar AI tanpa latar CS. Mulai dari praktik.</figcaption>
</figure>

Pernah merasa seperti ini: melihat orang lain membuat sesuatu yang keren dengan AI, Anda juga ingin mencoba, tetapi begitu membuka tool langsung tidak tahu harus mulai dari mana?

Artikel ini adalah versi teks lengkap dari materi Congdianzhan Vol.3. Desain kursusnya berangkat dari ide sederhana: **meski belum pernah menulis kode, setelah tiga jam Anda bisa pulang membawa hasil nyata.**

Kami merekonstruksi keempat tahap praktikum secara lengkap di sini, agar yang tidak sempat ikut tetap bisa mengikuti.

<div style="margin: 32px 0; padding: 20px 24px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-left: 4px solid #56C7BB; border-radius: 12px;">
  <div style="font-size: 13px; font-weight: 600; color: #0d7c70; margin-bottom: 6px; letter-spacing: 0.05em;">Recap acara</div>
  <div style="font-size: 15px; color: #2e2e2e; margin-bottom: 12px;">Ingin tahu suasana hari itu dan bagaimana peserta praktik di tempat? Kami juga menyusun catatan lengkap kursus AI Taoyuan ini.</div>
  <a href="/blog/posts/charging-station-vol3-recap/" style="display: inline-flex; align-items: center; gap: 6px; background: #0d7c70; color: #fff; font-size: 14px; font-weight: 600; padding: 9px 18px; border-radius: 8px; text-decoration: none;">Baca recap →</a>
</div>

---

## Tahap A: Fork Proyek GitHub dan Bangun Lingkungan AI IDE

Tujuan tahap ini sederhana: pastikan komputer setiap peserta punya proyek yang sama persis dengan instruktur, dan mulai bekerja di lingkungan yang sama. Kelihatannya hanya pemanasan, tetapi jika langkah ini goyah, semua praktik setelahnya akan miring.

### 1. Fork Repo Kursus di GitHub: Miliki Versi Proyek AI Anda Sendiri

Di pembukaan kelas, kami meminta setiap peserta login ke GitHub, membuka repo materi kursus, lalu mengklik **Fork** di kanan atas untuk menyalin seluruh proyek ke akun mereka sendiri.

Mengapa Fork, bukan unduh zip?

- Proyek hasil Fork adalah "salinan lain atas nama Anda." Anda bebas mengubah, menyimpan, dan mengunggah tanpa menyentuh versi asli instruktur.
- Nanti saat men-deploy situs pribadi, Fork juga titik awal paling mulus, karena platform seperti Vercel dan Cloudflare Pages bisa langsung terikat ke akun GitHub Anda.
- Lebih penting lagi, aksi Fork membuat peserta sadar untuk pertama kali bahwa "kode punya versi dan pemilik," bukan sekadar paket file unduhan sembarangan.

Refleksi setelah kursus: jika tujuannya hanya cepat mulai, sebenarnya tidak harus langsung mengajarkan Fork. Mengunduh repo juga boleh, supaya orang tidak macet di pendaftaran GitHub atau harus paham dulu apa itu Fork.

Repo kursus: [wport-ai-starter-kit](https://github.com/contactwport/wport-ai-starter-kit). CLI, MCP, Skill, dan README sudah disiapkan. Begitu peserta Fork, mereka punya lingkungan bersih yang siap dipakai.

### 2. AI IDE vs Chatbot: Mengapa Skenario Kerja Harus Keluar dari Kotak Chat ChatGPT

Kebanyakan orang pertama kali bertemu AI lewat **chatbot** seperti ChatGPT. Jadi kami meluangkan waktu untuk menjelaskan perbedaan **chatbot dan AI IDE (lingkungan pengembangan terintegrasi)** dengan sangat jelas. Ini pergeseran konsep paling penting di seluruh kursus.

Analogi yang sangat sehari-hari:

- **Kotak chat chatbot** seperti **menelepon customer service**. Anda bertanya satu, mendapat jawaban satu, lalu selesai. Anda masih harus merapikan catatan, menyalin ke Word, menempel ke email, lalu menyimpan ke cloud. Seluruh alurnya adalah "Anda yang memindahkan jawaban."
- **AI IDE** seperti **mengundang AI ke studio di rumah Anda** sebagai rekan kerja. Ia melihat file di meja Anda, bisa mengubah file langsung, dan menjalankan program di komputer Anda. Semuanya tetap di dalam proyek Anda. Tidak perlu terus copy-paste. AI menjadi pihak yang "ikut mengerjakan" bersama Anda.

Bagi pemula, perbedaan yang paling terasa adalah:

- **Hasil benar-benar tersimpan di mesin lokal**: situs pribadi, catatan Obsidian, dan HTML resume yang Anda buat hari ini ada di folder komputer Anda sendiri, bukan terkunci di jendela chat yang hilang saat ditutup.
- **Konteks tidak perlu terus di-paste**: AI IDE bisa membaca file yang baru Anda ubah. Anda tidak perlu menempel kode, resume, dan catatan setiap kali.
- **Bisa benar-benar menjalankan program**: minta AI menulis halaman web, dan ia tidak hanya memberi teks. Ia bisa membukanya di komputer Anda, bahkan membantu men-deploy ke internet.

Begitu semua paham bahwa "skenario kerja harus pindah dari kotak chat ke AI IDE," Fork, README, Skill, dan CLI baru menjadi operasi yang bermakna, bukan tumpukan istilah asing.

### 3. Empat AI IDE Gratis di 2026: Cursor, Codex, Kiro, Antigravity

Hari itu kami memperkenalkan empat **AI IDE mainstream 2026 yang punya kuota gratis**. Pertama, pertanyaan yang paling sering muncul di ruangan: **mengapa tidak ada Claude?** Bukan karena Claude jelek. Saat ini ia belum punya kuota gratis, sementara prasyarat kursus ini adalah "pemula bisa langsung praktik." Jadi kami sengaja membatasi daftar pada opsi berkuota gratis yang bisa langsung dimulai.

Sebelum perbedaan antar vendor, satu konsep yang sangat penting bagi pemula: **empat IDE ini tampilannya hampir sama**. Karena pada dasarnya mereka semua bercabang dari VS Code, editor paling populer di dunia. Anggap saja "empat anak AI dari VS Code." Cukup kuasai satu, pindah ke yang lain pun langsung terbiasa, tanpa belajar ulang antarmuka.

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-ide-comparison-slide.png" alt="Slide pengenalan tools IDE AI-first generasi baru 2026" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

Posisi empat AI IDE gratis:

#### Cursor

Yang paling sering dipakai Eric secara pribadi, dan yang paling kami rekomendasikan untuk pemula. Alasannya "kuota besar dan cukup." Tools keluarga Claude sering kena rate limit begitu mulai coding, tetapi untuk PM, pekerja konten, dan pengguna non-CS, kuota Cursor sekitar NT$600/bulan biasanya tidak habis.

#### Kiro IDE

AI IDE dari AWS. Menonjolkan Spec-First development: tulis spek dulu dengan jelas, baru AI menghasilkan kode sesuai spek. Sangat cocok untuk PM, SA, dan pemikir sistem yang suka proses serta ingin berpikir dulu sebelum membangun.

#### Codex IDE

Lingkungan asisten coding AI dari OpenAI. Jika Anda sudah terbiasa dengan ritme ChatGPT, Codex IDE terasa seperti "naik kelas dari kotak chat menjadi meja kerja."

#### Antigravity 2.0

AI IDE dari keluarga Google. Jika Anda sudah berat memakai Gmail, Google Drive, Google Docs, dan Google Meet, integrasi ekosistem Google-nya akan terasa sangat mulus.

Kami tidak memaksa satu produk. Intinya: **Anda tidak perlu bayar dulu, dan tidak perlu mengejar merek. Pilih yang bisa dipakai gratis dan tidak macet, lalu mulai kerjakan.** Karena antarmukanya semua keluarga VS Code, ganti nanti pun tidak sakit.

---

## Tahap B: Pakai AI IDE untuk Cepat Memahami Repo Asing

Membuka proyek adalah hambatan lain bagi pemula. Layar penuh folder dan file yang tidak dimengerti membuat banyak orang ingin langsung menutupnya. Tujuan tahap ini adalah membantu peserta dalam sekitar 5 menit **memakai AI IDE untuk cepat memahami apa yang dilakukan sebuah repo asing**, dan menurunkan hambatan mental itu.

### 4. Seret README ke Chat: Pahami Repo Asing dengan AI dalam 3 Menit

Setelah peserta membuka proyek hasil Fork di IDE, kami meminta dua hal:

1. Temukan `README.md` di daftar file.
2. **Seret ke panel chat di kanan**, lalu tanya AI: "Repo ini sedang mengerjakan apa? Bisa jelaskan dalam daftar berpoin dalam bahasa Indonesia?"

Dua niat pengajaran di balik gerakan ini:

- **Mengajarkan aksi "memberi konteks"**: kesalahan pemula yang umum adalah bertanya ke AI tanpa konteks, lalu menyalahkan AI karena jawabannya tidak akurat. Menyeret README lebih dulu sama dengan memberi ringkasan proyek. Jawaban langsung lebih tajam.
- **Membangun otot profesional "baca README dulu"**: itu langkah pertama setiap engineer saat membuka proyek baru. Anda belum harus paham kode, tetapi harus tahu proyek ini untuk apa, modul apa saja yang ada, dan bagaimana menjalankannya.

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-fork-repo-slide.png" alt="Slide penjelasan alur Fork dan Repo" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

Momen paling terasa di ruangan: banyak peserta mengira butuh sejam untuk memahami repo. Tiga menit kemudian, AI sudah memaparkan tujuan, struktur, dan Skill yang tersedia. Momen itu langsung mengubah reaksi pertama mereka terhadap proyek asing apa pun setelahnya.

---

## Tahap C: Peta Pengetahuan Obsidian × Skill yang Bertanya Balik: Ubah "Anda" Menjadi Data yang Bisa Dibaca AI

Tahap ini paling banyak memakan waktu, dan juga paling bernilai. Yang kami lakukan sebenarnya sederhana: **mengubah "Anda sebagai orang" menjadi data terstruktur yang bisa dibaca AI.** Hanya dengan begitu AI bisa membuat sesuatu yang benar-benar milik Anda, bukan resume atau situs template yang seragam.

### 5. Peta Pengetahuan Pribadi Obsidian: Ubah "Tentang Saya" Menjadi Otak Kedua yang Bisa Dibaca AI

Tujuan hari itu adalah setiap orang membuat situs pribadi. Jadi sebelum membahas tampilan situs, kami membahas **dari mana kontennya berasal**.

Kami memilih [Obsidian](https://obsidian.md/) sebagai **alat manajemen pengetahuan pribadi (PKM)** karena tiga alasan:

- **Privasi lokal, sepenuhnya penyimpanan lokal**: catatan Obsidian ada di komputer Anda sendiri, tidak naik ke cloud. AI cukup butuh local path untuk membaca. Sangat menenangkan bagi yang tidak ingin resume, pengalaman, atau ekspektasi gaji dikirim ke AI cloud.
- **Tautan dua arah × knowledge graph**: Obsidian mendukung backlinks. Pengalaman, skill, dan karya bisa saling terhubung, dan lama-kelamaan membentuk knowledge graph "tentang saya."
- **Markdown murni, paling enak dibaca AI**: Obsidian memakai format Markdown yang bersih. AI sangat mahir membaca struktur ini, lebih mudah di-parse daripada Word, Notion, atau Google Docs, dan biasanya lebih hemat token.

Di kelas kami meminta peserta membuat beberapa node inti dulu: **pengalaman, skill, karya, dan arah karier yang dicari**. Setiap node bisa dipecah ke halaman yang lebih detail. Tujuannya bukan kesempurnaan, melainkan menuangkan "bahan mentah" dulu.

### 6. Metode Skill yang Bertanya Balik: Biarkan AI Membantu Anda Berpikir, Bukan Hanya Menulis

Banyak orang macet di sini: "Saya tidak tahu harus menulis apa." Itu sangat wajar. Menjelaskan diri dari nol memang sulit.

Jadi kami membalik caranya. Di repo sudah ada Skill siap pakai. Tugas Skill ini bukan "menulis untuk Anda," melainkan "bertanya balik kepada Anda":

- Tiga pengalaman kerja paling membanggakan Anda apa? Masalah apa yang diselesaikan saat itu?
- Jika hanya boleh tiga kata kunci untuk memperkenalkan diri, mana yang Anda pilih?
- Seperti apa ritme harian yang Anda harapkan di pekerjaan berikutnya?

Peserta cukup menjawab pertanyaan yang diajukan AI. Jawaban itu menjadi catatan baru dan masuk ke Obsidian satu per satu. Tiga puluh menit kemudian, peta pengetahuan yang tadinya kosong tumbuh dengan sendirinya.

Yang diajarkan di langkah ini sebenarnya adalah mindset: **penggunaan AI yang paling kuat bukan "menulis untuk Anda," melainkan "membantu Anda berpikir."**

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-prompt-crystallization-slide.png" alt="Slide penjelasan konsep pemadatan Prompt" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

### 7. Local Path × Skill Menghasilkan HTML: AI Membaca File Lokal dan Membangun Situs Pribadi Sekali Jalan

Begitu kerangka peta pengetahuan ada, kita masuk tahap "ubah menjadi situs." Alurnya:

1. Buka Obsidian, salin **local path** folder vault (misalnya `/Users/nama-anda/Documents/my-obsidian-vault`).
2. Kembali ke AI IDE, panggil Skill lain di repo, lalu tempel local path.
3. Skill otomatis membaca semua catatan Obsidian dan, mengikuti arsitektur situs yang sudah ditulis, menghasilkan HTML situs pribadi yang lengkap.

Mengapa memakai local path, bukan menempel catatan ke AI?

- **Menembus batas panjang konteks**: peta pengetahuan lengkap bisa puluhan file Markdown. Menempel langsung mudah melebihi batas token, dan AI hanya membaca bagian depan lalu kehabisan ruang.
- **AI bisa memilih sendiri apa yang perlu dibaca**: lewat local path, AI mengikuti instruksi Skill untuk membaca file yang tepat, misalnya "pengalaman" untuk resume dan "karya" untuk situs. Lebih pintar daripada Anda menempel manual.
- **Menjaga struktur file dan tautan dua arah**: copy-paste meratakan backlink dan folder Obsidian menjadi teks polos. Membaca lewat local path membuat AI memahami hubungan pengetahuan asli Anda, sehingga output lebih dekat dengan logika Anda.

Sederhananya: **menempel adalah membuang data ke lubang hitam; local path membiarkan AI masuk ke ruang arsip Anda dan mencari sendiri.** Kualitas hasilnya benar-benar berbeda.

---

## Tahap D: Prompt → Skill → CLI × MCP: Buat Alur Kerja AI yang Bisa Diulang

Sampai di sini, peserta sudah punya situs pribadi. Jika berhenti di sini, kursus ini hanya jadi workshop sore yang mencolok. Yang ingin kami bawa pulang adalah **satu set alur kerja AI yang setiap bulan bisa Anda jalankan lagi sendiri.**

### 8. Dari Prompt ke Skill: Ubah Prompt yang Efektif Menjadi Kemampuan AI yang Bisa Dipakai Ulang

- **Prompt** adalah kalimat yang Anda ketik saat itu, misalnya "bantu saya tulis resume PM." Sekali pakai, hilang. Lain kali Anda harus memikirkan lagi cara bertanya, dan kualitasnya sering tidak stabil.
- **Skill** membungkus set prompt, langkah, dan format output yang sudah diuji berulang menjadi "kemampuan yang bisa dipakai ulang." Ada nama, ada versi, bisa dipanggil, dan bisa dipakai lintas proyek.

Analogi lain: Prompt seperti tanya-jawab spontan di tempat. Skill seperti Anda menulis SOP ahli yang paling mahir bertanya, lalu siapa pun bisa mengikutinya. Bagi pemula artinya: Anda tidak perlu jadi master prompt. Cukup padatkan beberapa prompt yang benar-benar bekerja menjadi Skill, lalu pakai jangka panjang.

### 9. CLI vs GUI: Di Era AI, Jangan Andalkan Mouse, Pakai Command Line

Banyak peserta takut begitu mendengar "command line," tetapi penjelasan kami sangat sederhana: **CLI berarti Anda mengetik satu perintah, komputer mengerjakan satu hal.** Tidak jauh berbeda dari mengeklik tombol di web. Anda hanya mengganti "klik mouse" dengan "ketik keyboard."

Ketika tools Anda hanya GUI (antarmuka grafis) dan Anda ingin AI mengoperasikannya otomatis, ada dua jebakan besar:

- **GUI sangat boros token**: agar AI memakai GUI, ia harus "melihat" layar, screenshot, mem-parse elemen, dan menilai di mana tombol berada. Konsumsi token bisa berkali-kali hingga puluhan kali lipat dibanding panggilan CLI murni.
- **Sedikit meleset, mouse langsung klik salah**: begitu gaya halaman berubah sekali, posisi tombol bergeser beberapa piksel, atau muncul popup iklan, AI bisa klik tombol sebelahnya dan seluruh alur langsung ambruk.

Jadi di 2026, "ada CLI atau tidak" sedang menjadi indikator penting apakah sebuah tool mudah dipakai AI. **GUI untuk dilihat manusia. CLI untuk dipakai manusia dan AI bersama.**

Kami demo langsung dengan **WPORT CLI**: ketik satu perintah, set "wilayah = Taoyuan, peran = PM," dan dalam beberapa detik daftar lowongan yang cocok muncul sebagai data terstruktur (JSON), siap diberi makan Skill berikutnya.

### 10. Skill Kustomisasi Resume: 3 Lowongan, 3 Resume Khusus Sekaligus

Dengan data lowongan di tangan, langkah berikutnya adalah kustomisasi resume:

1. Pakai peta pengetahuan dari Tahap C sebagai bahan mentah resume.
2. Panggil Skill kustomisasi resume di repo, lalu masukkan 3 lowongan PM yang baru diambil lewat CLI.
3. Untuk setiap lowongan, Skill membandingkan deskripsi pekerjaan, menyusun ulang urutan pengalaman, mengganti kata kunci, dan menghasilkan resume PDF atau HTML khusus.

Hasilnya: **dalam waktu minum kopi, Anda mendapat tiga resume yang sepenuhnya berbeda, masing-masing selaras dengan kebutuhan pihak lain.** Itulah juga alasan kami mendorong resume yang dikustomisasi, tetapi banyak orang tidak melakukannya: terlalu melelahkan. Ketika Skill mengubahnya menjadi satu klik, perilaku baru benar-benar berubah.

### 11. Vercel CLI: Situs Pribadi Online dengan Satu Perintah

Di titik ini, peserta sudah punya HTML situs pribadi, tiga resume yang dikustomisasi, dan daftar lowongan. Selanjutnya kirim keluar:

- **Vercel CLI**: satu perintah men-deploy situs lokal ke internet dan memberi URL yang bisa dibagikan. Yang dulu butuh daftar, ikat GitHub, dan set proyek, sekarang cukup mengetik.
- **gcloud CLI**: tool command-line Google Cloud. Dari CLI, kirim email berisi URL resume dan tautan situs pribadi ke perusahaan target atau pemberi rekomendasi.

Kedua CLI ini bersama-sama menyelesaikan alur lengkap "terbitkan + jangkau secara aktif." **Anda tidak lagi hanya pasif mengirim resume. Anda punya pipeline otomatisasi dari konten hingga notifikasi.**

### 12. CLI × MCP × Skill: Cara Berpikir Balok Susun untuk Alur Kerja Era AI

Akhirnya, satu konsep penutup. Kursus ini tampak seperti memperkenalkan IDE, Obsidian, CLI, Skill, dan banyak tool. Inti sebenarnya adalah kalimat ini:

> **CLI x MCP x Skill adalah satu set balok yang bisa digabung. Alur kerja yang bisa Anda susun jauh lebih banyak daripada yang Anda bayangkan.**

Beberapa kombinasi umum:

- **Kombinasi cari kerja**: CLI ambil lowongan → Skill kustomisasi resume → CLI deploy situs → CLI kirim email
- **Kombinasi konten**: MCP baca catatan Notion → Skill susun menjadi outline artikel → CLI terbitkan ke blog
- **Kombinasi CRM pribadi**: CLI ambil daftar LinkedIn → Skill analisis riwayat percakapan → MCP perbarui database kontak

Intinya bukan contoh-contoh spesifik itu, melainkan pemahaman bahwa **begitu Anda melihat CLI, MCP, dan Skill sebagai balok, Anda bisa menyusun alur kerja yang Anda inginkan sendiri.** Setup pertama memang butuh waktu, tetapi setiap update konten, lamaran baru, atau penyesuaian situs setelahnya akan cepat sampai membuat ketagihan.

---

## Setelah Tiga Unit Selesai, Apa yang Seharusnya Bisa Anda Lakukan?

Jika Anda mengikuti keempat tahap, sekarang Anda seharusnya bisa:

- Membuka proyek dengan Cursor atau AI IDE sejenis
- Memahami struktur dasar repo GitHub dan Fork salinan ke akun sendiri
- Menjalankan proyek di lokal
- Membangun peta pengetahuan pribadi di Obsidian dan membiarkan AI membaca file lokal untuk menghasilkan situs pribadi
- Memadatkan Prompt yang efektif menjadi Skill dan membangun alur kerja yang bisa dipakai ulang
- Memakai CLI untuk ambil lowongan, kustomisasi resume, deploy situs, dan menjangkau secara aktif

Ini bukan skill lanjutan. Ini perlengkapan dasar tahun 2026.

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-outcomes-summary-slide.png" alt="Slide ringkasan yang bisa Anda lakukan setelah menyelesaikan tiga unit" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

---

## Setelah Belajar, Apa yang Bisa Anda Lakukan?

Cara tercepat belajar tools AI bukan menonton tutorial lebih banyak, melainkan menemukan masalah nyata yang Anda hadapi dan mencoba menyelesaikannya dengan AI. Laporan kerja, proyek pribadi, atau hal yang sejak lama ingin dimulai tetapi tidak tahu caranya. Semuanya bisa jadi bahan latihan.

Congdianzhan akan terus digelar, dengan tema berbeda setiap kali. Jika ingin info acara lebih dulu, ikuti kami:

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 Info acara AI Taoyuan lainnya: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 Lowongan lokal Taoyuan lainnya: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
