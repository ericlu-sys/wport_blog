---
title: "Học AI Không Cần Nền CS: Hướng Dẫn Thực Hành Đầy Đủ GitHub Fork, Cursor IDE, Obsidian, CLI và MCP"
description: "Không cần từng viết code, bạn vẫn có thể dùng công cụ AI để làm trang cá nhân, CV tùy chỉnh và quy trình tự động. Bài viết này phục dựng đầy đủ bốn giai đoạn thực hành của Congdianzhan Vol.3, từ AI IDE đến deploy Vercel, từng bước một."
publishDate: 2026-07-02
tags: ["AI工具", "桃園 AI 課程", "在台工作", "職涯發展"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783409279/wport-blog/ai-course-non-cs-cover.jpg"
---

<figure>
  <img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783409279/wport-blog/ai-course-non-cs-cover.jpg" alt="Học AI không cần nền CS, lớp Congdianzhan Vol.3" />
  <figcaption>Học AI không cần nền CS. Bắt đầu từ thực hành.</figcaption>
</figure>

Bạn đã từng cảm giác này chưa: thấy người khác dùng AI làm ra thứ rất hay, mình cũng muốn thử, nhưng vừa mở công cụ lại không biết bắt đầu từ đâu?

Bài viết này là bản chữ đầy đủ nội dung khóa Congdianzhan Vol.3. Thiết kế khóa học xuất phát từ ý rất đơn giản: **chưa từng viết code cũng không sao, sau ba giờ bạn mang được kết quả về nhà.**

Chúng tôi phục dựng đầy đủ bốn giai đoạn thực hành ở đây, để người không kịp tham dự vẫn có thể làm theo.

<div style="margin: 32px 0; padding: 20px 24px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-left: 4px solid #56C7BB; border-radius: 12px;">
  <div style="font-size: 13px; font-weight: 600; color: #0d7c70; margin-bottom: 6px; letter-spacing: 0.05em;">Tổng kết sự kiện</div>
  <div style="font-size: 15px; color: #2e2e2e; margin-bottom: 12px;">Muốn biết không khí buổi đó và tình trạng thực hành của học viên? Chúng tôi cũng đã tổng hợp bản ghi đầy đủ khóa AI tại Đào Viên này.</div>
  <a href="/blog/posts/charging-station-vol3-recap/" style="display: inline-flex; align-items: center; gap: 6px; background: #0d7c70; color: #fff; font-size: 14px; font-weight: 600; padding: 9px 18px; border-radius: 8px; text-decoration: none;">Xem tổng kết →</a>
</div>

---

## Giai đoạn A: Fork dự án GitHub và dựng môi trường AI IDE

Mục tiêu giai đoạn này rất đơn giản: để máy mỗi học viên có một dự án "giống hệt giảng viên", và bắt đầu thao tác trong cùng một môi trường làm việc. Nhìn như khởi động, nhưng nếu bước này không vững, mọi thực hành sau sẽ lệch.

### 1. Fork repo khóa học trên GitHub: Sở hữu phiên bản dự án AI của riêng bạn

Mở đầu khóa, chúng tôi nhờ mỗi học viên đăng nhập GitHub, mở repo tài liệu khóa học, rồi bấm **Fork** góc phải trên để sao chép toàn bộ dự án về tài khoản của mình.

Vì sao phải Fork chứ không tải zip?

- Dự án sau khi Fork là "bản sao mang tên bạn." Bạn tự do sửa, lưu, đẩy lên, mà không đụng vào bản gốc của giảng viên.
- Về sau khi deploy trang cá nhân, Fork cũng là điểm bắt đầu thuận nhất, vì các nền tảng như Vercel, Cloudflare Pages đều có thể gắn trực tiếp tài khoản GitHub của bạn.
- Quan trọng hơn, thao tác Fork khiến học viên lần đầu nhận ra "code có phiên bản, có chủ sở hữu," chứ không phải gói file tải về tùy tiện.

Nhìn lại sau khóa: nếu mục tiêu chỉ là vào việc nhanh, thật ra không nhất thiết dạy Fork ngay từ đầu. Tải repo xuống cũng được, tránh mọi người kẹt ở bước đăng ký GitHub rồi còn phải hiểu Fork là gì.

Repo khóa học: [wport-ai-starter-kit](https://github.com/contactwport/wport-ai-starter-kit). CLI, MCP, Skill và README đã được dựng sẵn. Học viên vừa Fork xong là có môi trường sạch để bắt tay vào làm.

### 2. AI IDE vs Chatbot: Vì sao cảnh làm việc phải rời khỏi khung chat ChatGPT

Nhiều người tiếp xúc AI lần đầu đều từ **chatbot** kiểu ChatGPT. Vì vậy chúng tôi dành thời gian làm rõ khác biệt giữa **chatbot và AI IDE (môi trường phát triển tích hợp)**. Đây cũng là bước chuyển tư duy then chốt nhất của cả khóa.

Một phép so sánh rất đời thường:

- **Khung chat chatbot** giống **gọi tổng đài hỗ trợ**. Bạn hỏi một câu, nhận một câu, xong là hết. Bạn vẫn phải tự sắp ghi chú, copy sang Word, dán vào email, rồi lưu lên cloud. Cả quy trình là "bạn đang khuân câu trả lời đi."
- **AI IDE** giống **mời AI vào studio nhà bạn** làm đồng nghiệp. Nó nhìn thấy file trên bàn, sửa file trực tiếp, và chạy chương trình trên máy bạn. Mọi thứ ở lại trong dự án. Bạn không còn copy-paste liên tục. AI trở thành người "cùng bạn làm việc."

Với người mới, khác biệt cảm nhận rõ nhất là:

- **Kết quả thật sự nằm trên máy local**: trang cá nhân, ghi chú Obsidian, HTML CV bạn làm hôm nay đều nằm trong thư mục máy mình, không bị nhốt trong cửa sổ chat đóng là mất.
- **Không cần dán ngữ cảnh mãi**: AI IDE đọc được file bạn vừa sửa. Không cần mỗi lần dán code, dán CV, dán ghi chú.
- **Có thể thật sự chạy chương trình**: nhờ AI viết một trang web, nó không chỉ đưa chữ. Nó có thể mở trên máy bạn, thậm chí giúp deploy lên mạng.

Khi mọi người hiểu "cảnh làm việc phải chuyển từ khung chat sang AI IDE," Fork, README, Skill, CLI mới trở thành thao tác có nghĩa, chứ không còn là đống thuật ngữ lạ.

### 3. Bốn AI IDE miễn phí năm 2026: Cursor, Codex, Kiro, Antigravity

Hôm đó chúng tôi giới thiệu bốn **AI IDE mainstream năm 2026 có hạn mức miễn phí**. Trước hết trả lời câu hỏi bị hỏi nhiều nhất trong phòng: **vì sao không có Claude?** Không phải Claude kém. Hiện nó chưa có hạn mức miễn phí, trong khi tiền đề khóa này là "người mới có thể bắt tay làm ngay." Vì vậy chúng tôi cố ý giới hạn danh sách ở các lựa chọn có hạn mức miễn phí và bắt đầu được ngay.

Trước khi nói khác biệt từng nhà, một khái niệm cực quan trọng với người mới: **bốn IDE này giao diện gần như giống hệt nhau**. Vì về gốc chúng đều nhánh từ VS Code, trình soạn thảo phổ biến nhất thế giới. Có thể nghĩ là "bốn người con AI của VS Code." Học một cái, sang cái khác cũng vào việc được ngay, không phải học lại giao diện.

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-ide-comparison-slide.png" alt="Slide giới thiệu công cụ IDE ưu tiên AI thế hệ mới 2026" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

Vị trí của bốn AI IDE miễn phí:

#### Cursor

Công cụ Eric dùng nhiều nhất cá nhân, cũng là lựa chọn chúng tôi khuyên người mới bắt đầu. Lý do là "hạn mức dư dả." Dòng Claude thường gặp rate limit khi viết code, nhưng với PM, người làm nội dung và người không nền CS, hạn mức khoảng NT$600/tháng của Cursor thường dùng không hết.

#### Kiro IDE

AI IDE của AWS. Nhấn mạnh Spec-First: viết rõ spec trước, rồi AI sinh code theo spec. Đặc biệt hợp PM, SA và người tư duy hệ thống thích quy trình, thích nghĩ rõ rồi mới làm.

#### Codex IDE

Môi trường trợ lý lập trình AI của OpenAI. Nếu bạn đã quen nhịp ChatGPT, Codex IDE sẽ có cảm giác "nâng cấp từ khung chat thành bàn làm việc."

#### Antigravity 2.0

AI IDE thuộc hệ Google. Nếu bạn vốn dùng nặng Gmail, Google Drive, Google Docs, Google Meet, việc gắn với hệ sinh thái Google sẽ rất mượt.

Chúng tôi không ép một sản phẩm nào. Trọng điểm là: **không cần trả tiền trước, cũng không cần đuổi theo thương hiệu. Chọn cái dùng miễn phí được và không bị kẹt, rồi bắt tay làm đã.** Vì giao diện đều họ VS Code, sau này đổi nhà cũng không đau.

---

## Giai đoạn B: Dùng AI IDE để nhanh hiểu một repo lạ

Mở dự án là một ngưỡng khác với người mới. Màn hình đầy thư mục và file không đọc được khiến nhiều người muốn đóng luôn. Mục tiêu giai đoạn này là giúp học viên trong khoảng 5 phút **dùng AI IDE nhanh hiểu một repo lạ đang làm gì**, hạ thấp bức tường tâm lý đó.

### 4. Kéo README vào hội thoại: 3 phút dùng AI hiểu một repo lạ

Khi học viên mở dự án đã Fork trong IDE, chúng tôi nhờ họ làm hai việc:

1. Trong danh sách file tìm `README.md`.
2. Dùng chuột **kéo sang vùng chat bên phải**, rồi hỏi AI: "Repo này đang làm gì? Có thể liệt kê bằng tiếng Việt giúp tôi không?"

Hai ý dạy đằng sau thao tác này:

- **Dạy thao tác "nuôi ngữ cảnh"**: lỗi thường gặp của người mới là hỏi AI trống không rồi trách AI trả lời không chính xác. Kéo README vào trước giống như đưa bản tóm tắt dự án. Câu trả lời sẽ sắc ngay.
- **Xây cơ bắp nghề nghiệp "đọc README trước"**: đó là việc đầu tiên mỗi kỹ sư làm khi mở dự án mới. Bạn chưa cần hiểu code ngay, nhưng cần biết dự án này để làm gì, có những module nào, chạy ra sao.

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-fork-repo-slide.png" alt="Slide giải thích quy trình Fork và Repo" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

Khoảnh khắc cảm nhận rõ nhất trong phòng: nhiều học viên tưởng mất một giờ mới hiểu repo. Ba phút sau AI đã liệt kê mục tiêu, cấu trúc và các Skill có sẵn. Khoảnh khắc đó thay đổi phản ứng đầu tiên của họ với mọi dự án lạ về sau.

---

## Giai đoạn C: Bản đồ tri thức Obsidian × Skill hỏi ngược: Biến "bạn" thành dữ liệu AI đọc được

Giai đoạn này tốn nhiều thời gian nhất, cũng có giá trị nhất. Việc chúng tôi làm rất đơn giản: **biến "bạn với tư cách một con người" thành dữ liệu có cấu trúc mà AI đọc được.** Chỉ khi đó AI mới giúp bạn làm ra thứ thật sự thuộc về bạn, chứ không phải CV mẫu hay website mẫu đại trà.

### 5. Bản đồ tri thức cá nhân Obsidian: Biến "về tôi" thành bộ não thứ hai AI đọc được

Mục tiêu hôm đó là mỗi người làm một trang cá nhân. Vì vậy trước khi nói trang trông thế nào, chúng tôi nói về **nội dung đến từ đâu**.

Chúng tôi chọn [Obsidian](https://obsidian.md/) làm **công cụ quản lý tri thức cá nhân (PKM)** vì ba lý do:

- **Riêng tư trên máy, lưu trữ hoàn toàn local**: ghi chú Obsidian nằm trên máy bạn, không lên cloud. AI chỉ cần một local path là đọc được. Đặc biệt yên tâm với người không muốn đẩy CV, kinh nghiệm, kỳ vọng lương lên AI cloud.
- **Liên kết hai chiều × knowledge graph**: Obsidian hỗ trợ backlinks. Kinh nghiệm, kỹ năng, tác phẩm có thể liên kết nhau và dần thành knowledge graph "về tôi."
- **Markdown thuần, AI đọc thuận nhất**: Obsidian dùng Markdown sạch. AI rất giỏi đọc cấu trúc này, dễ parse hơn Word, Notion hay Google Docs, và thường tốn ít token hơn.

Trên lớp chúng tôi nhờ học viên tạo vài nút lõi trước: **kinh nghiệm, kỹ năng, tác phẩm, hướng nghề muốn tìm**. Mỗi nút có thể tách thành trang chi tiết hơn. Bước này không đòi hoàn hảo, mà đổ "nguyên liệu" ra trước.

### 6. Phương pháp Skill hỏi ngược: Để AI giúp bạn nghĩ, không chỉ viết

Nhiều người kẹt ở đây: "Tôi không biết viết gì." Điều đó rất bình thường. Tự nói rõ về mình từ zero vốn đã khó.

Vì vậy chúng tôi làm ngược lại. Trong repo đã có sẵn một Skill. Nhiệm vụ của Skill này không phải "viết giúp bạn," mà "hỏi ngược bạn":

- Ba trải nghiệm công việc mang lại thành tựu nhất của bạn là gì? Lúc đó giải quyết vấn đề gì?
- Nếu chỉ được dùng ba từ khóa giới thiệu bản thân, bạn chọn ba từ nào?
- Bạn muốn công việc tiếp theo có nhịp ngày thường như thế nào?

Học viên chỉ cần trả lời câu hỏi AI đưa ra. Chính câu trả lời sẽ thành ghi chú mới và lần lượt bổ sung vào Obsidian. Ba mươi phút sau, bản đồ tri thức vốn trống đã tự lớn lên.

Bước này thật ra dạy một mindset: **cách dùng AI mạnh nhất không phải "viết giúp bạn," mà "giúp bạn nghĩ."**

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-prompt-crystallization-slide.png" alt="Slide giải thích khái niệm đóng rắn Prompt" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

### 7. Local Path × Skill sinh HTML: AI đọc file local và dựng trang cá nhân một lần

Khi bản đồ tri thức đã có khung, chúng ta vào giai đoạn "biến nó thành website." Cách làm:

1. Mở Obsidian, sao chép **local path** của thư mục vault (ví dụ `/Users/ten-ban/Documents/my-obsidian-vault`).
2. Quay lại AI IDE, gọi một Skill khác trong repo, dán local path vào.
3. Skill tự đọc toàn bộ ghi chú Obsidian và, theo kiến trúc site đã viết sẵn, sinh ra HTML trang cá nhân hoàn chỉnh.

Vì sao dùng local path thay vì copy ghi chú dán cho AI?

- **Vượt giới hạn độ dài ngữ cảnh**: một bản đồ tri thức đầy đủ dễ lên đến hàng chục file Markdown. Dán trực tiếp rất dễ vượt hạn token, AI chỉ đọc nửa đầu rồi hết sức.
- **AI tự chọn phần cần đọc**: qua local path, AI theo lệnh Skill để đọc đúng file cần, ví dụ làm CV thì đọc "kinh nghiệm," làm site thì đọc "tác phẩm." Thông minh hơn bạn dán tay.
- **Giữ cấu trúc file và liên kết hai chiều**: copy-paste làm phẳng backlink và thư mục Obsidian thành chữ thuần. Đọc bằng local path giúp AI hiểu quan hệ tri thức gốc của bạn, đầu ra sát logic hơn.

Nói ngắn: **dán là ném dữ liệu vào hố đen; local path là để AI vào phòng hồ sơ của bạn tự lật.** Chất lượng đầu ra hoàn toàn khác.

---

## Giai đoạn D: Prompt → Skill → CLI × MCP: Tạo quy trình AI chạy lại được

Đến đây học viên đã có trang cá nhân. Nếu dừng ở đây, khóa học chỉ là một buổi chiều "show kỹ năng." Điều chúng tôi muốn mọi người mang về là **một bộ quy trình AI mà mỗi tháng bạn có thể tự chạy lại.**

### 8. Từ Prompt đến Skill: Biến prompt hiệu quả thành năng lực AI tái sử dụng được

- **Prompt** là câu bạn gõ lúc đó, ví dụ "giúp tôi viết CV PM." Dùng xong là hết. Lần sau phải nghĩ lại cách hỏi, chất lượng cũng thường không ổn định.
- **Skill** đóng gói một bộ prompt, bước và định dạng đầu ra đã được kiểm chứng thành "năng lực tái sử dụng." Có tên, có phiên bản, gọi được, dùng lại được trên nhiều dự án.

Một phép so sánh khác: Prompt như hỏi đáp ứng biến tại chỗ. Skill như bạn viết SOP của chuyên gia hỏi hay nhất, sau ai tới cũng hỏi theo được. Với người mới, ý nghĩa là: bạn không cần thành bậc thầy prompt. Chỉ cần đóng rắn vài prompt thật sự hiệu quả thành Skill, rồi dùng lâu dài.

### 9. CLI vs GUI: Thời AI không dựa chuột, hãy dùng dòng lệnh

Nhiều học viên sợ khi nghe "dòng lệnh," nhưng cách nói của chúng tôi rất đời thường: **CLI nghĩa là bạn gõ một lệnh, máy làm một việc.** Không khác mấy so với bấm nút trên web. Chỉ là đổi "bấm chuột" thành "gõ bàn phím."

Khi công cụ của bạn chỉ có GUI (giao diện đồ họa) mà bạn muốn AI tự thao tác, sẽ dính hai hố lớn:

- **GUI cực kỳ tốn token**: để AI dùng GUI, nó phải "nhìn thấy" màn hình, chụp ảnh, parse phần tử, đoán nút ở đâu. Token tiêu tốn có thể gấp nhiều lần đến hàng chục lần so với gọi CLI thuần.
- **Chuột lệch một chút là bấm nhầm**: chỉ cần style trang đổi một lần, nút lệch vài pixel, hoặc hiện popup quảng cáo, AI có thể bấm nút bên cạnh và cả quy trình sụp.

Vì vậy năm 2026, "có CLI hay không" đang trở thành chỉ số quan trọng xem một công cụ có dễ để AI dùng hay không. **GUI để người xem. CLI để người và AI cùng dùng.**

Chúng tôi demo trực tiếp bằng **WPORT CLI**: gõ một lệnh, đặt "khu vực = Đào Viên, vị trí = PM," vài giây sau danh sách việc phù hợp hiện ra dưới dạng dữ liệu có cấu trúc (JSON), có thể đưa thẳng sang Skill tiếp theo.

### 10. Skill tùy chỉnh CV: 3 việc làm, một lần ra 3 bản CV riêng

Có dữ liệu việc làm rồi, bước tiếp theo là tùy chỉnh CV:

1. Dùng bản đồ tri thức từ giai đoạn C làm nguyên liệu CV.
2. Gọi Skill tùy chỉnh CV trong repo, đưa cùng lúc 3 việc PM vừa lấy bằng CLI.
3. Với mỗi việc, Skill đối chiếu mô tả công việc, sắp xếp lại thứ tự kinh nghiệm, đổi từ khóa, sinh PDF hoặc HTML CV riêng.

Kết quả: **trong thời gian uống một ly cà phê, bạn có ba bản CV hoàn toàn khác nhau, mỗi bản bám nhu cầu phía bên kia.** Đó cũng là lý do chúng tôi khuyến khích tùy chỉnh CV, nhưng nhiều người không làm: quá mệt. Khi Skill biến việc này thành một cú nhấp, hành vi mới thật sự đổi.

### 11. Vercel CLI: Trang cá nhân lên mạng bằng một lệnh

Đến bước này, học viên đã có HTML trang cá nhân, ba bản CV tùy chỉnh và một danh sách việc. Tiếp theo là đưa chúng ra ngoài:

- **Vercel CLI**: một lệnh deploy site local lên mạng và nhận URL chia sẻ được. Việc từng cần đăng ký, gắn GitHub, cấu hình dự án, giờ chỉ cần gõ.
- **gcloud CLI**: công cụ dòng lệnh của Google Cloud. Từ CLI gửi email chứa URL CV và link trang cá nhân tới công ty mục tiêu hoặc người giới thiệu.

Hai CLI này cộng lại hoàn thành một quy trình đầy đủ "đăng tải + chủ động tiếp cận." **Bạn không còn chỉ nộp CV thụ động. Bạn có cả một pipeline tự động từ nội dung đến thông báo.**

### 12. CLI × MCP × Skill: Tư duy khối lắp ghép cho quy trình thời AI

Cuối cùng chốt một khái niệm. Khóa học nhìn như giới thiệu IDE, Obsidian, CLI, Skill và cả đống công cụ, nhưng trọng điểm thật sự là câu này:

> **CLI x MCP x Skill là một bộ khối có thể ghép với nhau. Quy trình bạn dựng được nhiều hơn rất nhiều so với tưởng tượng.**

Một vài tổ hợp phổ biến:

- **Tổ hợp tìm việc**: CLI lấy việc → Skill tùy chỉnh CV → CLI deploy site → CLI gửi email
- **Tổ hợp nội dung**: MCP đọc ghi chú Notion → Skill thành dàn ý bài → CLI đăng lên blog
- **Tổ hợp CRM cá nhân**: CLI lấy danh sách LinkedIn → Skill phân tích lịch sử hội thoại → MCP cập nhật cơ sở dữ liệu liên hệ

Trọng điểm không phải các ví dụ cụ thể này, mà để bạn hiểu: **chỉ cần xem CLI, MCP, Skill như khối lắp, bạn có thể tự ghép quy trình mình muốn.** Lần dựng đầu mất thời gian, nhưng mỗi lần cập nhật nội dung, nộp việc mới, chỉnh site sau đó sẽ nhanh đến mức gây nghiện.

---

## Sau ba đơn vị, bạn nên làm được gì?

Nếu bạn đã làm theo cả bốn giai đoạn, hiện bạn nên có thể:

- Dùng Cursor hoặc AI IDE tương tự để mở một dự án
- Hiểu cấu trúc cơ bản của một repo GitHub và Fork một bản về tài khoản mình
- Chạy một dự án trên máy local
- Dùng Obsidian dựng bản đồ tri thức cá nhân, để AI đọc file local sinh trang cá nhân
- Đóng rắn Prompt hiệu quả thành Skill, dựng quy trình tái sử dụng được
- Dùng CLI lấy việc, tùy chỉnh CV, deploy site và chủ động tiếp cận

Đây không phải kỹ năng nâng cao. Đây là trang bị cơ bản năm 2026.

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-outcomes-summary-slide.png" alt="Slide tổng kết những việc bạn làm được sau ba đơn vị" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

---

## Học xong, bạn có thể làm gì tiếp?

Cách nhanh nhất để học công cụ AI không phải xem thêm tutorial, mà là tìm một vấn đề thật bạn đang gặp và thử dùng AI giải quyết. Dù là báo cáo công việc, dự án cá nhân, hay việc bạn muốn làm mãi mà chưa biết bắt đầu thế nào, đều có thể là chất liệu luyện tập.

Congdianzhan sẽ tiếp tục tổ chức, mỗi lần một chủ đề khác. Nếu muốn nhận thông tin sớm nhất, hãy theo dõi chúng tôi:

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 Thêm thông tin sự kiện AI tại Đào Viên: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 Thêm việc làm địa phương tại Đào Viên: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
