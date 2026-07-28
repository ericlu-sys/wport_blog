---
title: "Tổng kết Charging Station Vol.3｜Khóa AI người không có nền CS vẫn thực hành được, phiên bản Đào Viên"
description: "Tổng kết Charging Station Vol.3: “Khóa AI người không có nền CS vẫn thực hành được.” Dẫn người mới từ Trung Lịch, Bát Đức, Lô Trúc dùng Cursor, Obsidian, CLI, MCP, và trong ba giờ làm ra website cá nhân cùng CV tùy chỉnh."
publishDate: 2026-06-30
tags: ["聰電站", "桃園 AI 課程", "線下活動", "僑外生"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner.jpg"
---

![Banner khóa AI Đào Viên Charging Station Vol.3](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner.jpg)

---

## Charging Station là gì?

Charging Station là chuỗi sự kiện offline miễn phí của WPORT tại Đào Viên. Mỗi buổi tập trung một chủ đề, không nói suông, làm tay toàn bộ, mục tiêu là mang thành quả nhìn thấy được về nhà. Muốn hiểu đầy đủ Charging Station và các buổi trước, xem [bài giới thiệu này](/blog/vi/posts/charging-station/).

Chủ đề Vol.3 là **“Khóa AI người không có nền CS vẫn thực hành được.”** Không cần nền tảng lập trình. Toàn bộ hands-on. Eric (WPORT PM) và David (backend engineer) dẫn lớp, ba giờ đi hết từ dựng môi trường đến website lên mạng:

- **AI IDE**: Làm quen bốn công cụ miễn phí Cursor, Codex, Kiro, Antigravity, hiểu vì sao nên chuyển công việc từ khung chat ChatGPT sang IDE
- **GitHub Fork**: Sao chép repo khóa học về tài khoản của bạn và tạo dự án AI đầu tiên
- **Bản đồ tri thức Obsidian**: Gom trải nghiệm và kỹ năng thành dữ liệu có cấu trúc để AI đọc được
- **Skill hỏi ngược**: Để AI giúp bạn nghĩ nội dung, không chỉ viết hộ
- **CLI kéo việc × tùy chỉnh CV**: Một lệnh lấy việc PM Đào Viên và tự tạo ba bản CV tùy chỉnh
- **Deploy Vercel**: Website cá nhân lên mạng bằng một lệnh

![Lớp Charging Station Vol.3: học viên tập trung theo khóa](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-classroom.jpg)

---

## Khóa này dạy gì?

Ba giờ khóa AI Đào Viên, chúng tôi đi một vòng workflow AI mainstream 2026 theo bốn giai đoạn:

**Giai đoạn A: Dựng môi trường × chọn AI IDE**
Bắt đầu bằng fork repo khóa học trên GitHub, làm quen Cursor, Codex, Kiro, Antigravity, hiểu vì sao phải chuyển từ khung chat ChatGPT sang môi trường IDE.

**Giai đoạn B: Dùng AI đọc hiểu dự án lạ**
Kéo README vào vùng chat AI IDE. Trong khoảng ba phút, để AI giải thích mục đích và cấu trúc repo, đồng thời xây thói quen nghề nghiệp: đọc README trước.

**Giai đoạn C: Bản đồ tri thức Obsidian × tạo website cá nhân**
Dùng Obsidian gom trải nghiệm, kỹ năng, portfolio thành dữ liệu có cấu trúc, rồi dùng Skill hỏi ngược để AI giúp đào nội dung. Cuối cùng generate HTML website cá nhân một cú nhấp qua local path.

**Giai đoạn D: Prompt → Skill → CLI × pipeline tự động MCP**
Nâng prompt hiệu quả thành Skill tái sử dụng được, dùng WPORT CLI kéo việc Đào Viên, tùy chỉnh ba CV, rồi deploy website bằng một lệnh Vercel CLI.

| Thời gian | Đơn vị học | Công cụ |
| :--- | :--- | :--- |
| 0 – 40 phút | AI IDE vs Chatbot, GitHub Fork | GitHub, Cursor / Codex / Kiro / Antigravity |
| 40 – 90 phút | Dùng AI đọc hiểu repo lạ | AI IDE, README.md |
| 90 – 150 phút | Bản đồ tri thức Obsidian × Skill hỏi ngược × tạo website | Obsidian, Skill, Local Path |
| 150 – 180 phút | CLI kéo việc, tùy chỉnh CV, deploy Vercel | WPORT CLI, Vercel CLI, MCP, Skill |

<div style="margin: 32px 0; padding: 20px 24px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-left: 4px solid #56C7BB; border-radius: 12px;">
  <div style="font-size: 13px; font-weight: 600; color: #0d7c70; margin-bottom: 6px; letter-spacing: 0.05em;">Hướng dẫn khóa học đầy đủ</div>
  <div style="font-size: 15px; color: #2e2e2e; margin-bottom: 12px;">Muốn làm theo bốn giai đoạn từng bước? Chúng tôi đã phục dựng toàn bộ nội dung khóa thành bài viết.</div>
  <a href="/blog/posts/ai-course-tutorial/" style="display: inline-flex; align-items: center; gap: 6px; background: #0d7c70; color: #fff; font-size: 14px; font-weight: 600; padding: 9px 18px; border-radius: 8px; text-decoration: none;">Đọc hướng dẫn đầy đủ →</a>
</div>

---

## Hiện trường

![Charging Station Vol.3 hiện trường: giảng viên dẫn thực hành trên màn lớn](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-instructor-demo.jpg)

Khóa AI Đào Viên này làm tay xuyên suốt, không chỉ nghe giảng. Mọi người vừa làm vừa hỏi. Gặp kẹt thì tháo ngay tại chỗ, thường vấn đề được giải ngay trên hiện trường.

Có một khung hình đặc biệt xúc động. **Đại học Kainan nằm ở Lô Trúc, Đào Viên, chỉ vài phút xe máy từ venue.** Lần này đúng có hai sinh viên từng học lớp tôi ở Kainan tự đăng ký đến. Thấy sinh viên ngoài giờ học chính thức vẫn sẵn sàng chạy xe đến học tiếp AI IDE, CLI, đúng là khoảnh khắc đáng mừng nhất với giảng viên. Đây cũng chính là điều chúng tôi muốn làm: **giúp sinh viên và người đi làm địa phương Đào Viên tiếp cận ứng dụng AI mới nhất mà không phải lúc nào cũng chạy lên Đài Bắc.**

Một học viên không có kinh nghiệm lập trình, cuối giai đoạn hai đã chạy được dự án fork và ngạc nhiên nói “Hóa ra chỉ cần vậy.” Học viên khác ở giai đoạn ba gom trải nghiệm rời rạc thành bản đồ tri thức, lần đầu thấy AI tạo nội dung website “thật sự giống mình.”

Ba giờ sau, mọi người mang về không chỉ ghi chú lớp, mà một lộ trình thực hành có thể kéo dài tiếp.

Quan trọng hơn, mọi người ra về cùng một cảm giác: AI không chỉ để hỏi đáp án. AI cũng giúp sắp xếp bản thân, tạo sản phẩm và hỗ trợ tìm việc. Với người mới, sự chuyển đổi đó quan trọng hơn việc thuộc một lệnh.

![Học viên tập trung trên laptop trong khóa AI Đào Viên](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-students-laptops.jpg)

---

## Khóa AI Đào Viên tiếp theo ở đâu?

Nếu lần này bạn bỏ lỡ, đừng lo. **Charging Station sẽ tiếp tục tổ chức khóa AI miễn phí và sự kiện nghề nghiệp tại Đào Viên.** Chủ đề sẽ ngày càng thực chiến, từ AI IDE, Obsidian, CLI, MCP, Skill đến ứng dụng tìm việc và quy trình content creator.

Muốn nhận thông tin khóa AI Đào Viên tiếp theo sớm nhất, dù bạn ở Đào Viên, Trung Lịch, Bát Đức, Lô Trúc, Quy Sơn hay Bình Trấn, hay đến từ Lâm Khẩu, Tân Trang, đều chào đón theo dõi trang sự kiện của chúng tôi.

**Đưa AI vào đời sống và công việc thật sự. Bắt đầu từ Đào Viên.**

![Ảnh tập thể Charging Station Vol.3. Cảm ơn mọi đối tác học AI địa phương Đào Viên](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-group-photo.jpg)

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 Thêm sự kiện AI Đào Viên: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 Thêm việc làm địa phương Đào Viên: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
