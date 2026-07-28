---
title: "Apa Itu Congdianzhan? Seri Kursus AI Gratis dan Acara Karier Tatap Muka dari WPORT"
description: "Congdianzhan adalah seri acara tatap muka rutin dari WPORT. Setiap sesi fokus pada satu tema dan sepenuhnya praktik langsung. Dari penerapan tools AI hingga pencarian kerja di Taiwan, kami membantu mahasiswa dan profesional di berbagai kota benar-benar menjalankan tools dan pulang dengan hasil nyata."
publishDate: 2026-07-03
tags: ["聰電站", "AI 課程", "線下活動", "僑外生"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner-v2.png"
---

![Banner acara Congdianzhan](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner-v2.png)

---

## Apa Itu Congdianzhan?

Congdianzhan adalah **seri acara tatap muka** yang digelar secara rutin oleh **WPORT Career Station**. Saat ini Taoyuan menjadi basis utama, dan ke depan sesi juga akan diperluas ke kota-kota lain.

Setiap sesi fokus pada satu tema. Tanpa basa-basi, sepenuhnya praktik langsung. Tujuannya agar setiap peserta pulang dengan **hasil yang terlihat**. Baik itu menjalankan proyek AI, menghasilkan resume yang disesuaikan, atau men-deploy situs pribadi secara live, kami ingin laptop Anda memiliki sesuatu yang belum ada sebelum sesi berakhir.

Topik mencakup penerapan tools AI, praktik pencarian kerja, dan alur konten kreator, dengan tema-tema baru di masa depan. Setiap sesi terbuka untuk pendaftaran. Sebagian besar gratis; beberapa kursus mengenakan biaya ringan.

<div style="display: flex; gap: 16px; margin: 24px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-events" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">Acara</div>
  </div>
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-students" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">Total peserta</div>
  </div>
</div>

<script>
(function () {
  function countUp(el, target, suffix, duration) {
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function init() {
    const eventsEl = document.getElementById('stat-events');
    const studentsEl = document.getElementById('stat-students');
    if (!eventsEl || !studentsEl) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(eventsEl, 5, '', 400);
          countUp(studentsEl, 100, '+', 1200);
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(eventsEl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

**Topik yang kami bahas:**

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 0;">
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Tools AI IDE</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">GitHub</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Manajemen pengetahuan Obsidian</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Perintah CLI</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Otomasi MCP</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Deploy situs pribadi</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Strategi cari kerja di Taiwan</span>
</div>

---

## Mengapa Kami Melakukan Ini?

Tools AI berkembang cepat, tetapi ada jarak yang jelas antara "sudah lihat pengenalannya" dan "benar-benar bisa menggunakannya."

Banyak tutorial tools berhenti di lapisan klik demi klik. Mereka jarang menjelaskan mengapa alur ini dipakai, skenario mana yang cocok, atau cara mengurai masalah saat macet. Hasilnya: Anda merasa sudah paham, lalu stuck begitu mencoba sendiri.

Tujuan Congdianzhan sederhana: **jalankan tools-nya di tempat, selesaikan masalah di ruangan, dan pulang dengan sesuatu yang bisa terus dipakai.**

Ada juga alasan geografis. Sebagian besar kursus AI dan workshop karier terkonsentrasi di Taipei. Mahasiswa dan profesional di kota lain sering harus lintas kabupaten hanya untuk belajar sesuatu yang baru. **Congdianzhan ingin membawa sumber daya ini ke lebih banyak tempat, agar orang di berbagai kota bisa mengakses alur AI terkini dan tools pencarian kerja secara lokal, tanpa harus selalu pergi ke Taipei.**

---

## Di Lokasi Acara

![Kelas Congdianzhan, peserta fokus mengikuti sesi](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-classroom.jpg)

Setiap sesi Congdianzhan adalah **kelas tatap muka berukuran kecil**, bukan ceramah duduk-dengar-pulang. Seluruh acara interaktif. Instruktur memandu langkah demi langkah, dan peserta menyelesaikan pekerjaan yang sama di laptop masing-masing secara sinkron.

Angkat tangan kapan saja. Instruktur akan datang untuk bantuan one-on-one dan membuka blokir Anda di tempat. Tidak perlu khawatir pertanyaan "bodoh" atau tertinggal. Tempo mengikuti kondisi ruang.

![Instruktur mendemokan di layar besar sambil peserta mengikuti](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-instructor-demo.jpg)

Layar besar menampilkan setiap langkah. Instruktur mendemokan sambil menjelaskan logika di baliknya, jadi Anda belajar bukan hanya "caranya" tetapi juga "alasannya."

![Peserta fokus di laptop, mengikuti praktik](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-students-laptops.jpg)

Di akhir sesi, setiap peserta punya sesuatu yang benar-benar berjalan di laptop. Bukan slide. Bukan sertifikat. Sesuatu yang mereka buat sendiri.

![Foto bersama Congdianzhan](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-group-photo.jpg)

---

## Siapa yang Cocok Ikut?

Congdianzhan dirancang agar **pemula tetap bisa mengikuti**. Tidak perlu pengalaman coding atau pengalaman tools AI sebelumnya. Bawa laptop, Anda siap.

Sangat cocok untuk:

- Mahasiswa S1 dan S2 di berbagai kota (termasuk mahasiswa Tionghoa perantauan dan internasional)
- Profesional yang ingin pindah karier atau baru mulai mencari kerja
- Orang yang tertarik pada tools AI tetapi tidak tahu harus mulai dari mana
- Kreator yang ingin memakai AI untuk pekerjaan atau portofolio

---

## Catatan Acara Sebelumnya

<div style="display: flex; flex-direction: column; gap: 10px; margin: 16px 0;">

  <a href="https://tbr.digital/events/w101-1121" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.1 · 2024.11.21 · Taoyuan</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Meetup karier setelah kerja</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Hubungan bahasa Inggris dan karier, serta cara sistematis meningkatkan English. Pembicara: Michael Shen (Google Strategic Account Manager, pembicara TEDx).</div>
  </a>

  <a href="https://tbr.digital/events/w101-1219" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.2 · 2024.12.19 · Taoyuan</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Cold outreach dan e-commerce lintas negara</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Positioning pelanggan B2B, strategi komunikasi lintas budaya, dan praktik e-commerce lintas negara. Pembicara: Jordan (business manager di bidang terkait Alibaba).</div>
  </a>

  <a href="https://tbr.digital/events/w101-1228" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #fffbe6 0%, #fff8d6 100%); border-radius: 10px; border: 1px solid #f5d96b; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #a07800; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Super Congdianzhan · 2024.12.28 · Taoyuan</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Power-up karier, semuanya dalam satu hari</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Latihan fokus, produksi short-form video, dan berbagi pengalaman cari kerja di Google. Tiga pembicara seharian, dengan tantangan praktik bersamaan.</div>
  </a>

  <a href="/blog/posts/charging-station-vol3-recap/" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 10px; border: 1px solid #c5e8e5; text-decoration: none; color: inherit;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
      <div style="font-size: 12px; color: #0d7c70; font-weight: 600; letter-spacing: 0.05em;">Vol.3 · 2026.06.30 · Taoyuan</div>
      <span style="font-size: 12px; font-weight: 600; color: #0d7c70;">Baca recap →</span>
    </div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Kursus AI yang bisa dipraktikkan siapa saja, tanpa latar CS</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">GitHub Fork, Cursor IDE, peta pengetahuan Obsidian, cari lowongan lewat CLI, deploy di Vercel. Tiga jam dari nol hingga situs pribadi online.</div>
  </a>

  <a href="https://hypelink.app/@wport/events/congdianzhan-4-taipei-vibe-coding" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.4 · Taipei</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Vibe coding bareng orang software</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Bukan kuliah. Ruang bersama untuk minum, ngobrol, dan mengerjakan side project. Eric (PM) dan Gugu (full-stack engineer) siap di samping jika ada pertanyaan.</div>
  </a>

</div>

---

## FAQ

<div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Apakah ada biaya?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Sebagian besar sesi gratis. Beberapa kursus mengenakan biaya ringan. Setiap halaman pendaftaran menunjukkannya dengan jelas. Selalu ikuti informasi di halaman acara.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Apakah perlu latar belakang coding?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Tidak. Congdianzhan dirancang agar pemula bisa mengikuti. Bawa laptop, Anda siap.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Apakah perlu menginstal sesuatu sebelumnya?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Setiap sesi membagikan panduan setup lingkungan terlebih dahulu. Setelah mendaftar, Anda akan menerima instruksi. Ikuti saja, dan Anda siap.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Apakah setiap sesi topiknya sama?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Tidak. Setiap sesi Congdianzhan punya tema berbeda. Topik tidak diulang, jadi Anda bisa terus ikut untuk membangun skill yang berbeda.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Di kota mana acara digelar?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Saat ini basis utamanya Taoyuan, dengan rencana perluasan ke kota lain. Setiap lokasi dicantumkan di halaman pendaftaran.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Bagaimana tahu sesi berikutnya di mana?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Ikuti halaman acara Hypelink kami. Sesi baru diumumkan di sana lebih dulu.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Boleh datang sendirian?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Tentu saja. Sebagian besar peserta mendaftar sendiri. Suasananya ramah, dan mudah mulai mengobrol dengan orang lain.</div>
  </div>

</div>

---

## Di Mana Sesi Berikutnya?

Congdianzhan terus digelar secara berkala, dengan tema berbeda setiap kali. Taoyuan adalah basis saat ini, dan kami juga akan membuka sesi di kota lain. Sebagian besar acara gratis; beberapa kursus mengenakan biaya ringan. Detail selalu jelas di halaman pendaftaran.

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 Pendaftaran acara dan info terbaru: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 Lowongan lokal Taoyuan lainnya: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
