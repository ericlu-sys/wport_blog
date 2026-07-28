---
title: "สรุป Charging Station Vol.3｜คอร์ส AI ที่คนไม่มีพื้น CS ก็ลงมือทำได้ ฉบับเถาหยวน"
description: "สรุป Charging Station Vol.3: “คอร์ส AI ที่คนไม่มีพื้น CS ก็ลงมือทำได้” พาผู้เริ่มต้นจากจงลี่ ปาเต๋อ ลูจู ใช้ Cursor Obsidian CLI MCP และในสามชั่วโมงทำเว็บส่วนตัวกับเรซูเม่ที่ปรับแต่งแล้ว"
publishDate: 2026-06-30
tags: ["聰電站", "桃園 AI 課程", "線下活動", "僑外生"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner.jpg"
---

![แบนเนอร์คอร์ส AI เถาหยวน Charging Station Vol.3](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner.jpg)

---

## Charging Station คืออะไร?

Charging Station คือซีรีส์อีเวนต์ออฟไลน์ฟรีของ WPORT ในเถาหยวน แต่ละรอบโฟกัสหนึ่งธีม ไม่พูดเหลวไหล ลงมือทำทั้งคอร์ส เป้าหมายคือให้ทุกคนพกผลงานที่มองเห็นกลับบ้าน อยากรู้จัก Charging Station และกิจกรรมที่ผ่านมา ดูได้ที่[บทความนี้](/blog/th/posts/charging-station/)

ธีม Vol.3 คือ **“คอร์ส AI ที่คนไม่มีพื้น CS ก็ลงมือทำได้”** ไม่ต้องมีพื้นฐานเขียนโค้ด ลงมือทำตลอด Eric (WPORT PM) กับ David (backend engineer) พาเรียน สามชั่วโมงพาจากตั้งสภาพแวดล้อมถึงเว็บขึ้นออนไลน์:

- **AI IDE**: รู้จักสี่เครื่องมือฟรี Cursor Codex Kiro Antigravity และเข้าใจว่าทำไมการทำงานต้องย้ายจากช่องแชท ChatGPT ไป IDE
- **GitHub Fork**: คัดลอก repo คอร์สไปบัญชีตัวเอง และสร้างโปรเจกต์ AI ชิ้นแรก
- **แผนที่ความรู้ Obsidian**: จัดประสบการณ์และสกิลเป็นข้อมูลมีโครงสร้างที่ AI อ่านได้
- **Skill ถามกลับ**: ให้ AI ช่วยคิดเนื้อหา ไม่ใช่แค่เขียนให้
- **CLI ดึงงาน × ปรับเรซูเม่**: คำสั่งเดียวดึงงาน PM เถาหยวน แล้วสร้างเรซูเม่ปรับแต่งสามฉบับอัตโนมัติ
- **Deploy Vercel**: เว็บส่วนตัวขึ้นออนไลน์ด้วยคำสั่งเดียว

![ชั้นเรียน Charging Station Vol.3: ผู้เรียนโฟกัสตามคอร์ส](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-classroom.jpg)

---

## คอร์สนี้สอนอะไร?

คอร์ส AI เถาหยวนสามชั่วโมง เราพาเดิน workflow AI กระแสหลักปี 2026 ทั้งเส้น แบ่งสี่เฟส:

**เฟส A: ตั้งสภาพแวดล้อม × เลือก AI IDE**
เริ่มจาก fork repo คอร์สบน GitHub รู้จัก Cursor Codex Kiro Antigravity และเข้าใจว่าทำไมต้องย้ายจากช่องแชท ChatGPT ไปสภาพแวดล้อม IDE

**เฟส B: ใช้ AI อ่านโปรเจกต์ที่ไม่คุ้น**
ลาก README เข้าพื้นที่แชท AI IDE ในราวสามนาทีให้ AI อธิบายจุดประสงค์และโครงสร้าง repo พร้อมสร้างนิสัยมืออาชีพ: อ่าน README ก่อน

**เฟส C: แผนที่ความรู้ Obsidian × สร้างเว็บส่วนตัว**
ใช้ Obsidian จัดประสบการณ์ สกิล และผลงานเป็นข้อมูลมีโครงสร้าง แล้วใช้ Skill ถามกลับให้ AI ช่วยขุดเนื้อหา สุดท้าย generate HTML เว็บส่วนตัวคลิกเดียวผ่าน local path

**เฟส D: Prompt → Skill → CLI × ท่ออัตโนมัติ MCP**
อัปเกรด Prompt ที่ได้ผลเป็น Skill ใช้ซ้ำได้ ใช้ WPORT CLI ดึงงานเถาหยวน ปรับเรซูเม่สามฉบับ แล้ว deploy เว็บด้วยคำสั่งเดียวของ Vercel CLI

| ช่วงเวลา | หน่วยเรียน | เครื่องมือ |
| :--- | :--- | :--- |
| 0 – 40 นาที | AI IDE vs Chatbot, GitHub Fork | GitHub, Cursor / Codex / Kiro / Antigravity |
| 40 – 90 นาที | ใช้ AI อ่าน repo ที่ไม่คุ้น | AI IDE, README.md |
| 90 – 150 นาที | แผนที่ความรู้ Obsidian × Skill ถามกลับ × สร้างเว็บ | Obsidian, Skill, Local Path |
| 150 – 180 นาที | CLI ดึงงาน ปรับเรซูเม่ deploy Vercel | WPORT CLI, Vercel CLI, MCP, Skill |

<div style="margin: 32px 0; padding: 20px 24px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-left: 4px solid #56C7BB; border-radius: 12px;">
  <div style="font-size: 13px; font-weight: 600; color: #0d7c70; margin-bottom: 6px; letter-spacing: 0.05em;">คู่มือคอร์สฉบับเต็ม</div>
  <div style="font-size: 15px; color: #2e2e2e; margin-bottom: 12px;">อยากทำตามสี่เฟสทีละขั้นไหม เราคืนเนื้อหาคอร์สทั้งชุดเป็นบทความแล้ว</div>
  <a href="/blog/posts/ai-course-tutorial/" style="display: inline-flex; align-items: center; gap: 6px; background: #0d7c70; color: #fff; font-size: 14px; font-weight: 600; padding: 9px 18px; border-radius: 8px; text-decoration: none;">อ่านคู่มือฉบับเต็ม →</a>
</div>

---

## ที่งาน

![Charging Station Vol.3 ที่งาน: วิทยากรพาลงมือทำหน้าจอใหญ่](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-instructor-demo.jpg)

คอร์ส AI เถาหยวนนี้ลงมือทำทั้งคอร์ส ไม่ใช่แค่ฟังบรรยาย ทุกคนทำไปถามไป พอติดก็แกะตรงหน้า ปัญหาส่วนใหญ่แก้ได้ที่งานเลย

มีภาพหนึ่งที่ผมรู้สึกแรงมาก **มหาวิทยาลัย Kainan อยู่ที่ลูจู เถาหยวน ขี่สกู๊ตเตอร์จากสถานที่จัดไม่กี่นาที** คราวนี้มีนักศึกษาสองคนที่ผมเคยสอนที่ Kainan สมัครมาเอง เห็นนักศึกษาหลังชั่วโมงเรียนทางการแล้วยังยอมขี่รถมาเรียน AI IDE CLI ต่อ นี่คือภาพที่ทำให้วิทยากรยิ้มใจที่สุด และนี่คือสิ่งที่เราอยากทำ: **ให้คนท้องถิ่นเถาหยวน ทั้งนักศึกษาและคนทำงาน ได้แตะแอป AI ล่าสุด โดยไม่ต้องวิ่งไปไทเปตลอด**

ผู้เรียนคนหนึ่งไม่มีประสบการณ์เขียนโค้ด จบเฟสสองก็รันโปรเจกต์ที่ fork มาได้ แล้วพูดด้วยความประหลาดใจว่า “แค่นี้เองเหรอ” อีกคนในเฟสสามจัดประสบการณ์ที่กระจัดกระจายเป็นแผนที่ความรู้ ครั้งแรกเห็น AI สร้างเนื้อหาเว็บที่ “เหมือนตัวเองจริงๆ”

สามชั่วโมงผ่านไป สิ่งที่ทุกคนได้ไม่ใช่แค่โน้ตคลาส แต่เป็นเส้นทางลงมือทำที่ต่อยอดได้

สำคัญกว่านั้น ทุกคนออกไปด้วยความรู้สึกเดียวกัน: AI ไม่ได้มีไว้แค่ถามคำตอบ ยังช่วยจัดระเบียบตัวเอง สร้างผลงาน และสนับสนุนหางาน สำหรับมือใหม่ การเปลี่ยนมุมนี้สำคัญกว่าการจำคำสั่งใดคำสั่งหนึ่ง

![ผู้เรียนโฟกัสที่แล็ปท็อประหว่างคอร์ส AI เถาหยวน](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-students-laptops.jpg)

---

## คอร์ส AI เถาหยวนรอบถัดไปอยู่ที่ไหน?

ถ้าพลาดรอบนี้ ไม่ต้องกังวล **Charging Station จะจัดคอร์ส AI ฟรีและอีเวนต์สายอาชีพในเถาหยวนต่อเนื่อง** ธีมจะยิ่งลงสนามจริง จาก AI IDE Obsidian CLI MCP Skill ไปจนถึงการหางานและเวิร์กโฟลว์คอนเทนต์ครีเอเตอร์

อยากได้ข่าวคอร์ส AI เถาหยวนรอบถัดไปก่อนใคร ไม่ว่าคุณอยู่เถาหยวน จงลี่ ปาเต๋อ ลูจู กุ่ยซาน หรือผิงเจิ้น หรือมาจากหลินโข่ว ซินจวง ก็ยินดีติดตามหน้าอีเวนต์ของเรา

**เอา AI ไปใช้ในชีวิตและการทำงานจริง เริ่มที่เถาหยวน**

![รูปหมู่ Charging Station Vol.3 ขอบคุณพาร์ตเนอร์เรียนรู้ AI ท้องถิ่นเถาหยวนทุกคน](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-group-photo.jpg)

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 อีเวนต์ AI เถาหยวนเพิ่มเติม: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 งานท้องถิ่นเถาหยวนเพิ่มเติม: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
