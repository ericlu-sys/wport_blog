---
title: "Congdianzhan คืออะไร? ซีรีส์คอร์ส AI ฟรีและกิจกรรมสายอาชีพแบบออฟไลน์จาก WPORT"
description: "Congdianzhan คือซีรีส์กิจกรรมออฟไลน์ที่ WPORT จัดอย่างสม่ำเสมอ แต่ละรอบโฟกัสหนึ่งหัวข้อและลงมือทำตลอดเซสชัน ตั้งแต่การใช้เครื่องมือ AI ไปจนถึงการหางานในไต้หวัน เราพานักศึกษาและคนทำงานในหลายเมืองให้รันเครื่องมือได้จริงและพกผลลัพธ์กลับบ้าน"
publishDate: 2026-07-03
tags: ["聰電站", "AI 課程", "線下活動", "僑外生"]
featured: false
cover: "https://res.cloudinary.com/xyudkke9/image/upload/w_1200,h_630,c_fill,g_auto,f_auto,q_auto/v1784861085/charging-station-banner_mlyjjs.png"
---

![แบนเนอร์งาน Congdianzhan](https://res.cloudinary.com/xyudkke9/image/upload/w_1200,f_auto,q_auto/v1784861085/charging-station-banner_mlyjjs.png)

---

## Congdianzhan คืออะไร?

Congdianzhan คือ**ซีรีส์กิจกรรมออฟไลน์**ที่ **WPORT Career Station** จัดอย่างสม่ำเสมอ ปัจจุบันใช้เถาหยวนเป็นฐานหลัก และจะขยายไปเมืองอื่นในอนาคต

แต่ละรอบโฟกัสหนึ่งหัวข้อ ไม่พูดฟุ้ง ลงมือทำตลอดเซสชัน เป้าหมายคือให้ผู้เข้าร่วมกลับบ้านพร้อม**ผลลัพธ์ที่มองเห็นได้** ไม่ว่าจะเป็นการรันโปรเจกต์ AI การทำเรซูเม่ที่ปรับเฉพาะงาน หรือการ deploy เว็บส่วนตัวขึ้นออนไลน์ เราอยากให้โน้ตบุ๊กของคุณมีสิ่งที่ก่อนจบกิจกรรมยังไม่มี

หัวข้อครอบคลุมการใช้เครื่องมือ AI การฝึกหางานจริง และเวิร์กโฟลว์คอนเทนต์ครีเอเตอร์ พร้อมธีมใหม่ๆ ในอนาคต แต่ละรอบเปิดรับสมัคร ส่วนใหญ่ฟรี บางคอร์สมีค่าใช้จ่ายเล็กน้อย

<div style="display: flex; gap: 16px; margin: 24px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-events" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">กิจกรรม</div>
  </div>
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-students" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">ผู้เรียนสะสม</div>
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

**หัวข้อที่เราครอบคลุม:**

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 0;">
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">เครื่องมือ AI IDE</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">GitHub</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">การจัดการความรู้ด้วย Obsidian</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">คำสั่ง CLI</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">ระบบอัตโนมัติ MCP</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Deploy เว็บส่วนตัว</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">กลยุทธ์หางานในไต้หวัน</span>
</div>

---

## ทำไมเราถึงทำเรื่องนี้?

เครื่องมือ AI พัฒนาเร็วมาก แต่ระหว่าง "เคยเห็นบทแนะนำ" กับ "ใช้ได้จริง" มีช่องว่างที่ชัดเจน

บทสอนเครื่องมือจำนวนมากหยุดอยู่ที่ชั้นคลิกตามขั้นตอน แต่ไม่อธิบายว่าทำไมต้องใช้แบบนี้ สถานการณ์ไหนใช้ได้ หรือเมื่อติดปัญหาจะถอดออกอย่างไร ผลคือดูจบแล้วรู้สึกเข้าใจ พอลองเองก็ยังติด

เป้าหมายของ Congdianzhan ง่ายมาก: **ให้คุณรันเครื่องมือได้ที่หน้างาน แก้ปัญหาในห้องทันที และกลับไปพร้อมสิ่งที่ใช้งานต่อได้**

อีกเหตุผลหนึ่งคือภูมิศาสตร์ คอร์ส AI และเวิร์กช็อปหางานส่วนใหญ่กระจุกที่ไทเป นักศึกษาและคนทำงานในเมืองอื่นมักต้องเดินทางข้ามเมืองเพื่อเรียนรู้สิ่งใหม่ **Congdianzhan อยากพาทรัพยากรเหล่านี้ไปยังพื้นที่มากขึ้น ให้คนในเมืองต่างๆ ได้เข้าถึงเวิร์กโฟลว์ AI ล่าสุดและเครื่องมือหางานในท้องถิ่น โดยไม่ต้องวิ่งไปไทเปตลอด**

---

## ที่หน้างาน

![ห้องเรียน Congdianzhan ผู้เรียนตั้งใจตามคอร์ส](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-classroom.jpg)

ทุกเซสชันของ Congdianzhan เป็น**คลาสออฟไลน์กลุ่มเล็ก** ไม่ใช่บรรยายนั่งฟังแล้วกลับ กิจกรรมทั้งวันเป็นการโต้ตอบตลอด วิทยากรพาทำทีละขั้น และผู้เรียนทำพร้อมกันบนโน้ตบุ๊กของตัวเอง

มีคำถามยกมือได้ตลอด วิทยากรจะเดินมาช่วยแบบตัวต่อตัวและปลดบล็อกให้ทันที ไม่ต้องกังวลว่าจะถามคำถามโง่ หรือตามไม่ทัน จังหวะในห้องเดินตามสถานการณ์ของผู้เรียน

![วิทยากรสาธิตบนจอใหญ่ ผู้เรียนทำตาม](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-instructor-demo.jpg)

จอใหญ่แสดงขั้นตอนพร้อมกัน วิทยากรสาธิตไปอธิบายเหตุผลไป คุณจึงได้ทั้ง "ทำอย่างไร" และ "ทำไมถึงทำแบบนี้"

![ผู้เรียนโฟกัสที่โน้ตบุ๊กและทำตาม](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-students-laptops.jpg)

เมื่อจบกิจกรรม โน้ตบุ๊กของผู้เรียนทุกคนมีผลลัพธ์ที่รันได้จริง ไม่ใช่สไลด์ ไม่ใช่ใบรับรอง แต่เป็นสิ่งที่คุณทำเอง

![รูปหมู่ Congdianzhan](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-group-photo.jpg)

---

## ใครเหมาะจะมา?

Congdianzhan ออกแบบให้**มือใหม่ตามทันได้** ไม่ต้องเคยเขียนโค้ด ไม่ต้องมีประสบการณ์ใช้เครื่องมือ AI แค่พกโน้ตบุ๊กมาก็พอ

เหมาะเป็นพิเศษกับ:

- นักศึกษาปริญญาตรีและโทในหลายเมือง (รวมนักศึกษาชาวจีนโพ้นทะเลและนักศึกษาต่างชาติ)
- คนทำงานที่อยากเปลี่ยนสายหรือเพิ่งเริ่มหางาน
- คนที่สนใจเครื่องมือ AI แต่ไม่รู้จะเริ่มจากไหน
- ครีเอเตอร์ที่อยากใช้ AI กับงานหรือพอร์ตโฟลิโอ

---

## บันทึกกิจกรรมที่ผ่านมา

<div style="display: flex; flex-direction: column; gap: 10px; margin: 16px 0;">

  <a href="https://tbr.digital/events/w101-1121" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.1 · 2024.11.21 · เถาหยวน</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">มีตอัปสายอาชีพหลังเลิกงาน</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">ความสัมพันธ์ของภาษาอังกฤษกับสายอาชีพ และวิธีพัฒนาอังกฤษอย่างเป็นระบบ วิทยากร: Michael Shen (Google Strategic Account Manager, วิทยากร TEDx)</div>
  </a>

  <a href="https://tbr.digital/events/w101-1219" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.2 · 2024.12.19 · เถาหยวน</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Cold outreach และอีคอมเมิร์ซข้ามพรมแดน</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">การวางตำแหน่งลูกค้า B2B กลยุทธ์สื่อสารข้ามวัฒนธรรม และการปฏิบัติอีคอมเมิร์ซข้ามพรมแดน วิทยากร: Jordan (business manager ในสายงานที่เกี่ยวกับ Alibaba)</div>
  </a>

  <a href="https://tbr.digital/events/w101-1228" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #fffbe6 0%, #fff8d6 100%); border-radius: 10px; border: 1px solid #f5d96b; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #a07800; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Super Congdianzhan · 2024.12.28 · เถาหยวน</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">เสริมพลังสายอาชีพในวันเดียว</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">ฝึกโฟกัส การทำวิดีโอสั้น และแชร์ประสบการณ์หางานที่ Google วิทยากรสามท่านตลอดวัน พร้อมชาเลนจ์ภาคปฏิบัติคู่ขนาน</div>
  </a>

  <a href="/blog/posts/charging-station-vol3-recap/" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 10px; border: 1px solid #c5e8e5; text-decoration: none; color: inherit;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
      <div style="font-size: 12px; color: #0d7c70; font-weight: 600; letter-spacing: 0.05em;">Vol.3 · 2026.06.30 · เถาหยวน</div>
      <span style="font-size: 12px; font-weight: 600; color: #0d7c70;">อ่านสรุปกิจกรรม →</span>
    </div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">คอร์ส AI ที่คนไม่มีพื้น CS ก็ลงมือทำได้</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">GitHub Fork, Cursor IDE, แผนที่ความรู้ Obsidian, ดึงงานด้วย CLI, deploy บน Vercel สามชั่วโมงจากศูนย์สู่เว็บส่วนตัวออนไลน์</div>
  </a>

  <a href="https://hypelink.app/@wport/events/congdianzhan-4-taipei-vibe-coding" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.4 · ไทเป</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Vibe coding กับคนสายซอฟต์แวร์</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">ไม่ใช่การบรรยาย แต่เป็นพื้นที่ร่วมกัน กินดื่มคุยไปทำ side project ไป Eric (PM) และ Gugu (full-stack engineer) อยู่ข้างๆ มีคำถามถามได้ตลอด</div>
  </a>

</div>

---

## คำถามที่พบบ่อย

<div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">มีค่าใช้จ่ายไหม?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">ส่วนใหญ่ฟรี บางคอร์สมีค่าใช้จ่ายเล็กน้อย หน้าสมัครแต่ละรอบจะระบุชัด โปรดยึดข้อมูลในหน้ากิจกรรมเป็นหลัก</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">ต้องมีพื้นฐานเขียนโค้ดไหม?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">ไม่ต้อง Congdianzhan ออกแบบให้มือใหม่ตามทันได้ พกโน้ตบุ๊กมาก็พอ</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">ต้องติดตั้งอะไรล่วงหน้าไหม?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">แต่ละรอบจะมีคู่มือตั้งค่าสภาพแวดล้อมก่อนงาน หลังสมัครคุณจะได้รับการแจ้งเตือน ทำตามขั้นตอนก็พร้อมแล้ว</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">ทุกกรอบหัวข้อเหมือนกันไหม?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">ไม่เหมือนกัน แต่ละรอบของ Congdianzhan มีธีมต่างกัน ไม่ซ้ำ คุณมาต่อเนื่องเพื่อสะสมทักษะต่างชุดได้</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">จัดที่เมืองไหน?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">ตอนนี้ใช้เถาหยวนเป็นหลัก และจะขยายไปเมืองอื่น สถานที่แต่ละรอบระบุในหน้าสมัคร</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">รู้ได้ยังไงว่ารอบถัดไปอยู่ที่ไหน?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">ติดตามหน้ากิจกรรม Hypelink ของเรา รอบใหม่จะประกาศที่นั่นก่อน</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">มาคนเดียวได้ไหม?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">ได้แน่นอน ผู้เรียนส่วนใหญ่สมัครมาคนเดียว บรรยากาศเป็นมิตร และเริ่มคุยกับคนอื่นได้ง่าย</div>
  </div>

</div>

---

## รอบถัดไปอยู่ที่ไหน?

Congdianzhan จะจัดต่อเนื่อง โดยแต่ละรอบมีธีมต่างกัน ตอนนี้ใช้เถาหยวนเป็นหลัก และจะเปิดคอร์สในเมืองอื่นด้วย ส่วนใหญ่ฟรี บางคอร์สมีค่าใช้จ่ายเล็กน้อย หน้าสมัครจะระบุชัดเสมอ

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 สมัครกิจกรรมและข้อมูลล่าสุด: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 งานท้องถิ่นในเถาหยวนเพิ่มเติม: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
