---
title: "Congdianzhan Là Gì? Chuỗi Khóa Học AI Miễn Phí và Sự Kiện Nghề Nghiệp Trực Tiếp của WPORT"
description: "Congdianzhan là chuỗi sự kiện trực tiếp định kỳ của WPORT. Mỗi buổi tập trung một chủ đề và thực hành xuyên suốt. Từ ứng dụng công cụ AI đến tìm việc tại Đài Loan, chúng tôi giúp sinh viên và người đi làm ở nhiều thành phố thật sự chạy được công cụ và mang kết quả về nhà."
publishDate: 2026-07-03
tags: ["聰電站", "AI 課程", "線下活動", "僑外生"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner-v2.png"
---

![Banner sự kiện Congdianzhan](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-banner-v2.png)

---

## Congdianzhan Là Gì?

Congdianzhan là **chuỗi sự kiện trực tiếp** do **WPORT Career Station** tổ chức định kỳ. Hiện Đào Viên (Taoyuan) là điểm chính, và các buổi sau sẽ mở rộng sang các thành phố khác.

Mỗi buổi tập trung một chủ đề. Không dài dòng, thực hành xuyên suốt. Mục tiêu là để người tham dự mang về **kết quả nhìn thấy được**. Dù là chạy một dự án AI, tạo bản CV tùy chỉnh, hay deploy trang cá nhân lên mạng, chúng tôi muốn laptop của bạn có thêm thứ mà trước buổi học chưa có.

Chủ đề gồm ứng dụng công cụ AI, thực chiến tìm việc, và quy trình nội dung creator, cùng các chủ đề mới về sau. Mỗi buổi mở đăng ký công khai. Phần lớn miễn phí; một số khóa thu phí nhẹ.

<div style="display: flex; gap: 16px; margin: 24px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-events" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">Sự kiện</div>
  </div>
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-students" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">Tổng học viên</div>
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

**Chủ đề chúng tôi đề cập:**

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 0;">
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Công cụ AI IDE</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">GitHub</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Quản lý tri thức Obsidian</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Lệnh CLI</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Tự động hóa MCP</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Deploy trang cá nhân</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Chiến lược tìm việc tại Đài Loan</span>
</div>

---

## Vì Sao Chúng Tôi Làm Việc Này?

Công cụ AI phát triển rất nhanh, nhưng giữa "đã xem phần giới thiệu" và "thật sự biết dùng" vẫn có khoảng cách rõ rệt.

Nhiều bài hướng dẫn dừng ở lớp thao tác. Chúng không nói rõ vì sao dùng theo cách đó, tình huống nào phù hợp, hay cách tháo gỡ khi gặp vấn đề. Kết quả: xem xong tưởng đã hiểu, tự làm lại bị kẹt.

Mục tiêu của Congdianzhan rất đơn giản: **cho bạn chạy được công cụ ngay tại chỗ, giải quyết vấn đề trong phòng học, và mang về thứ có thể tiếp tục dùng.**

Còn một lý do địa lý. Hầu hết khóa AI và workshop nghề nghiệp tập trung ở Đài Bắc. Sinh viên và người đi làm ở thành phố khác thường phải đi xa mới học được điều mới. **Congdianzhan muốn mang nguồn lực này đến nhiều nơi hơn, để người ở các thành phố khác tiếp cận ứng dụng AI mới và công cụ tìm việc ngay tại địa phương, không phải lúc nào cũng chạy về Đài Bắc.**

---

## Tại Hiện Trường

![Lớp học Congdianzhan, học viên tập trung theo buổi học](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-classroom.jpg)

Mỗi buổi Congdianzhan là **lớp nhỏ trực tiếp**, không phải buổi nói chuyện ngồi nghe rồi về. Cả buổi đều tương tác. Giảng viên dẫn từng bước, học viên làm đồng bộ trên laptop của mình.

Có câu hỏi thì giơ tay bất cứ lúc nào. Giảng viên sẽ đến hỗ trợ một kèm một và gỡ kẹt ngay tại chỗ. Không cần lo hỏi "câu ngu", cũng không cần lo bị tụt lại. Nhịp độ đi theo tình trạng của cả lớp.

![Giảng viên demo trên màn hình lớn, học viên làm theo](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-instructor-demo.jpg)

Màn hình lớn hiển thị từng bước. Giảng viên vừa demo vừa giải thích logic phía sau, nên bạn học không chỉ "cách làm" mà còn "vì sao làm vậy."

![Học viên tập trung trên laptop, làm theo](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-students-laptops.jpg)

Khi kết thúc, mỗi học viên có thứ thật sự chạy được trên laptop. Không phải slide. Không phải chứng chỉ. Là thứ chính họ tạo ra.

![Ảnh tập thể Congdianzhan](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-group-photo.jpg)

---

## Ai Phù Hợp Tham Gia?

Congdianzhan được thiết kế để **người mới cũng theo kịp**. Không cần từng viết code, không cần kinh nghiệm dùng công cụ AI. Mang laptop là đủ.

Đặc biệt phù hợp với:

- Sinh viên đại học và cao học ở nhiều nơi (kể cả du học sinh Hoa kiều và quốc tế)
- Người đi làm muốn chuyển nghề hoặc mới bắt đầu tìm việc
- Người quan tâm công cụ AI nhưng chưa biết bắt đầu từ đâu
- Creator muốn dùng AI cho công việc hoặc portfolio

---

## Các Buổi Trước Đây

<div style="display: flex; flex-direction: column; gap: 10px; margin: 16px 0;">

  <a href="https://tbr.digital/events/w101-1121" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.1 · 2024.11.21 · Đào Viên</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Giao lưu nghề nghiệp sau giờ làm</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Mối liên hệ giữa tiếng Anh và sự nghiệp, cùng cách tiến bộ tiếng Anh có hệ thống. Diễn giả: Michael Shen (Google Strategic Account Manager, diễn giả TEDx).</div>
  </a>

  <a href="https://tbr.digital/events/w101-1219" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.2 · 2024.12.19 · Đào Viên</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Cold outreach và thương mại điện tử xuyên biên giới</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Định vị khách hàng B2B, chiến lược giao tiếp đa văn hóa, và thực tiễn TMĐT xuyên biên giới. Diễn giả: Jordan (business manager lĩnh vực liên quan Alibaba).</div>
  </a>

  <a href="https://tbr.digital/events/w101-1228" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #fffbe6 0%, #fff8d6 100%); border-radius: 10px; border: 1px solid #f5d96b; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #a07800; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Super Congdianzhan · 2024.12.28 · Đào Viên</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Bổ sung sức mạnh nghề nghiệp trong một ngày</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Rèn tập trung, làm video ngắn, và chia sẻ kinh nghiệm tìm việc tại Google. Ba diễn giả cả ngày, kèm thử thách thực chiến song song.</div>
  </a>

  <a href="/blog/posts/charging-station-vol3-recap/" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 10px; border: 1px solid #c5e8e5; text-decoration: none; color: inherit;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
      <div style="font-size: 12px; color: #0d7c70; font-weight: 600; letter-spacing: 0.05em;">Vol.3 · 2026.06.30 · Đào Viên</div>
      <span style="font-size: 12px; font-weight: 600; color: #0d7c70;">Đọc bài tổng kết →</span>
    </div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Khóa AI ai cũng thực hành được, kể cả không có nền CS</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">GitHub Fork, Cursor IDE, bản đồ tri thức Obsidian, lấy việc làm bằng CLI, deploy Vercel. Ba giờ từ zero đến trang cá nhân lên mạng.</div>
  </a>

  <a href="https://hypelink.app/@wport/events/congdianzhan-4-taipei-vibe-coding" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.4 · Đài Bắc</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Vibe coding cùng người làm phần mềm</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Không phải lớp học. Là không gian chung để vừa uống vừa trò chuyện vừa làm side project. Eric (PM) và Gugu (full-stack engineer) ở bên, có hỏi là được.</div>
  </a>

</div>

---

## Câu Hỏi Thường Gặp

<div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Có mất phí không?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Phần lớn buổi miễn phí. Một số khóa thu phí nhẹ. Mỗi trang đăng ký đều ghi rõ. Hãy lấy thông tin trên trang sự kiện làm chuẩn.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Có cần nền tảng lập trình không?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Không cần. Congdianzhan được thiết kế để người mới cũng theo kịp. Mang laptop là đủ.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Có cần cài gì trước không?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Mỗi buổi sẽ gửi hướng dẫn thiết lập môi trường trước. Sau khi đăng ký bạn sẽ nhận thông báo. Làm theo là sẵn sàng.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Mỗi buổi chủ đề có giống nhau không?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Không. Mỗi buổi Congdianzhan có chủ đề khác nhau, không trùng lặp, nên bạn có thể tham gia liên tục để tích lũy kỹ năng khác nhau.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Sự kiện tổ chức ở thành phố nào?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Hiện lấy Đào Viên làm chính, sau sẽ mở rộng sang thành phố khác. Mỗi địa điểm đều ghi trên trang đăng ký.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Làm sao biết buổi tiếp theo ở đâu?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Theo dõi trang sự kiện Hypelink của chúng tôi. Buổi mới sẽ được thông báo sớm nhất tại đó.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Đi một mình có được không?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Tất nhiên. Hầu hết học viên đăng ký một mình. Không khí rất dễ chịu, dễ bắt chuyện với mọi người.</div>
  </div>

</div>

---

## Buổi Tiếp Theo Ở Đâu?

Congdianzhan tiếp tục được tổ chức, mỗi buổi một chủ đề khác. Hiện lấy Đào Viên làm chính, sau cũng sẽ mở lớp ở thành phố khác. Phần lớn buổi miễn phí; một số khóa thu phí nhẹ. Trang đăng ký luôn ghi rõ.

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 Đăng ký sự kiện và thông tin mới nhất: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 Thêm việc làm địa phương tại Đào Viên: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
