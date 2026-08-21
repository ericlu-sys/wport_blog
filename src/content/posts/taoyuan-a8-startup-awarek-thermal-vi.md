---
title: "Ghi chép xem deal Taoyuan A8 (4)｜AWAREK: Ảnh nhiệt sensor fusion, không làm chó robot, hợp tác với SI đi đấu thầu"
description: "NTUTEC rủ chúng tôi tới Taoyuan A8. Điểm dừng thứ tư, AWAREK: chủ lực là ảnh nhiệt sensor fusion cùng cảnh báo AI. Họ không tự làm drone hay chó robot; các nhà tích hợp hệ thống đi đấu thầu mới là bên tìm tới họ."
publishDate: 2026-07-21
tags: ["台大創創", "創業募資"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/taoyuan-a8-awarek-audience.jpg"
draft: false
voice: "eric"
---

## Tóm trong một câu

AWAREK không làm chó robot, cũng không làm drone. Họ chỉ làm lớp ảnh nhiệt cộng sensor fusion, và khi một nhà tích hợp hệ thống đi đấu thầu cần năng lực đó thì chính họ quay lại tìm AWAREK. Chủ động làm một linh kiện nhẹ hơn nhiều so với dựng thương hiệu máy nguyên chiếc từ con số không.

## Luận điểm cốt lõi

- **Không làm phương tiện là chiến lược, không phải thiếu năng lực**: máy nguyên chiếc giao cho đối tác, còn họ giữ lớp cảm biến và diễn giải.
- **Camera giám sát thường không bù được điểm mù nhiệt độ**: ánh sáng khả kiến không thấy quá nhiệt, và dị thường nhiệt độ cao trước khi cháy phải nhờ ảnh nhiệt.
- **Kênh bán là gói thầu của người khác**: SI chủ động tìm tới, tức là mượn cả hệ sinh thái đấu thầu để vào cuộc.
- **VC không chỉ cho tiền**: Howard nói tại chỗ rằng anh có quen người ở một công ty phòng cháy chữa cháy và có thể giới thiệu. Một lời giới thiệu cụ thể như vậy đáng giá hơn câu "chúng tôi rất tin tưởng các bạn".

## Vì sao tôi ghi lại nhà này

Tiếp nối [series Taoyuan A8](/blog/vi/posts/taoyuan-a8-startup-ruomei-thermal/), nhà thứ tư trong cùng buổi, **bài bốn trong bốn bài**: **AWAREK Co., Ltd.**

Ba bài trước là [Ruomei (1)](/blog/vi/posts/taoyuan-a8-startup-ruomei-thermal/), [EITH (2)](/blog/vi/posts/taoyuan-a8-startup-eith-wastewater/), và [Chenlu (3)](/blog/vi/posts/taoyuan-a8-startup-chenlu-endoscopy/).

Ban đầu tôi cũng tưởng họ làm chó robot. Sau khi được làm rõ tại chỗ mới biết là không, và chính quyết định về **cái họ không làm** mới là điều đáng ghi nhất ở nhà này.

---

## AWAREK làm gì

Nói bình dân: **họ hợp nhất ảnh nhiệt, ánh sáng khả kiến và nhiều luồng cảm biến khác, dùng AI phán đoán nguy cơ quá nhiệt và cháy nổ rồi đẩy cảnh báo. Công ty đi đấu thầu sẽ tìm tới để tích hợp. AWAREK không tự chế tạo drone hay chó robot.**

### Chủ lực: sensor fusion, không phải phương tiện

Việc làm rõ tại chỗ rất quan trọng: **lõi của AWAREK là sensor fusion** (hợp nhất nhiều cảm biến), không phải nhà sản xuất drone hay chó robot.

- Họ **không làm** chó robot, drone hay robot tuần tra nguyên chiếc
- Cái họ làm là mô-đun ảnh nhiệt, Edge AI, nền tảng đám mây, và **diễn giải hợp nhất** các tín hiệu cảm biến khác nhau
- Các SI hoặc nhà tích hợp **đi đấu thầu** khi cần mảng "ảnh nhiệt cộng cảnh báo AI" sẽ **tìm tới AWAREK hợp tác**, gắn nó vào gói thầu lớn hơn

Drone, chó robot, kiểm tra phòng cháy mà báo chí và hiện trường nhắc tới giống **nền tảng đối tác và kịch bản ứng dụng** hơn, không phải dòng sản phẩm AWAREK tự sản xuất hàng loạt.

### Từ cố định sang di động

Ảnh nhiệt vốn đã có ứng dụng ở **tủ điện nhà máy, xe điện, bãi đỗ xe**, phần lớn là **lắp cố định**. Hướng của AWAREK còn gồm **tuần tra bằng robot di động** (drone, chó robot, robot tuần tra, phòng cháy chữa cháy), nhưng phương tiện thường do **bên hợp tác** cung cấp, còn AWAREK phụ trách **lớp hợp nhất cảm biến và cảnh báo**.

Camera ánh sáng khả kiến truyền thống **không nhìn thấy phân bố nhiệt**. Quá nhiệt và dị thường nhiệt độ cao trước khi cháy phải nhờ ảnh nhiệt bù vào lớp đó, rồi hợp nhất với các dữ liệu cảm biến khác.

### Không chỉ là nhận dạng hình ảnh, mà là nhận dạng ảnh nhiệt

Điểm này họ nói rất rõ: cái họ làm không phải vision AI của CCTV thông thường, mà là **nhận dạng và phán đoán dành riêng cho ảnh nhiệt**.

- Phát hiện tăng nhiệt bất thường và điểm nóng
- **Có vấn đề là đẩy thông báo ngay** (báo cho người liên quan)
- Kết hợp **nền tảng quản lý đám mây**, xem trạng thái và quản lý thiết bị từ xa

### Phần cứng cộng đám mây cộng Edge AI

Dòng sản phẩm không chỉ có ống kính:

- **Phần cứng**: đầu dò ảnh nhiệt (thông số công khai có POE, WiFi, v.v.)
- **Chip Edge AI**: một phần suy luận chạy ở biên, giảm độ trễ và bớt phụ thuộc vào mạng
- **Quản lý đám mây**: quản lý tập trung thiết bị và cảnh báo

Họ nhắc tới cơ hội bán **total solution** (phần cứng cộng phần mềm cộng nền tảng, trọn gói), chứ không chỉ một con cảm biến.

---

## Ứng dụng đã triển khai (lời tại chỗ)

- **Tàu điện ngầm Đào Viên**
- **Phát hiện nhiệt độ cao trong tòa nhà**

Báo chí cũng từng nhắc tới hợp tác với **chó robot Cadall P105**, gắn máy ảnh nhiệt lên robot bốn chân để kiểm tra trạm biến áp, nhà máy hóa chất và các khu vực nguy hiểm khác, cũng như định vị nguồn nhiệt xuyên khói dày trong cứu hỏa.

### Bán thế nào: SI đi đấu thầu tìm tới, không tự làm máy nguyên chiếc

Có hai tầng kênh được nhắc tới:

1. **Khách hàng chính là các nhà tích hợp hệ thống (SI)**, họ giúp quảng bá và đưa vào hiện trường  
2. **Công ty sắp đi đấu thầu** chủ động tìm AWAREK để gắn mảng sensor fusion vào các gói thầu an ninh, tòa nhà thông minh, nhà máy, tàu điện ngầm

AWAREK không cần tự chế tạo drone hay chạy dây chuyền chó robot, mà biến **ảnh nhiệt cộng fusion cộng Edge AI cộng cảnh báo đám mây** thành mô-đun hoặc total solution có thể tích hợp được. Với SI đi đấu thầu, đó là thêm một lớp cảm biến tạo khác biệt. Với AWAREK, mượn hệ sinh thái đấu thầu để vào cuộc nhẹ hơn nhiều so với dựng thương hiệu máy nguyên chiếc từ đầu.

### Q&A: VC không chỉ cho tiền, còn cho quan hệ

Trong phần Q&A của AWAREK, **Howard** của NTUTEC nhắc rằng anh **có quen một công ty phòng cháy chữa cháy** và có cơ hội thì **giới thiệu** cho đội.

Với người khởi nghiệp, đó là giá trị gia tăng rất cụ thể. Ảnh nhiệt và kịch bản cứu hỏa vốn là một trong các hướng ứng dụng của AWAREK, và nếu VC thật sự nối được họ với doanh nghiệp ngành phòng cháy thì đó là lớp trợ giúp thực tế hơn hẳn câu "chúng tôi rất lạc quan về các bạn". Điều này cũng nhắc tôi: **nhà đầu tư tổ chức không chỉ là tấm séc**, mà còn mang theo quan hệ ngành, kênh đấu thầu và những lời giới thiệu khách hàng về sau. Ngoài nói về sản phẩm, buổi pitch cũng là lúc bạn đánh giá "VC này có nối được tôi tới hiện trường tiếp theo hay không".

---

## Cạnh tranh và khác biệt

Cách họ mô tả cục diện cạnh tranh: đối thủ thường chỉ chuyên một mảng, và **vài lĩnh vực vẫn chưa được tích hợp lại với nhau**:

| Loại | Hạn chế thường gặp |
|------|--------------------|
| **Camera ảnh nhiệt** | Có nhiệt, nhưng chưa chắc có cảnh báo AI và nền tảng |
| **Camera truyền thống** | Ánh sáng khả kiến, không nhìn thấy quá nhiệt |
| **Camera không dây** | Dễ triển khai, nhưng không phải kịch bản ảnh nhiệt |
| **Camera vision** | Mạnh về nhận dạng hình ảnh, mù trước rủi ro nhiệt độ |

Tự sự của AWAREK là: **sensor fusion (ảnh nhiệt cộng các cảm biến khác) cộng diễn giải bằng AI cộng IoT và đẩy cảnh báo qua đám mây**, cố định được mà di động cũng được; phương tiện nguyên chiếc do đối tác cung cấp, còn họ tập trung vào lớp cảm biến và nền tảng.

---

## Tình trạng công ty (đối chiếu dữ liệu công khai)

- Tên chính thức: AWAREK Co., Ltd.
- Người đại diện: Kuo Sheng-pei (FINDIT và báo chí công khai)
- Cơ sở: đường Shouchang, quận Đào Viên, thành phố Đào Viên (dữ liệu công khai)
- Định vị: phát hiện nhiệt độ và cháy nổ bằng AI trên ảnh nhiệt, cảm biến AIoT
- Website và thương hiệu: [awarek.com](https://awarek.godaddysites.com/) và các trang khác

Tàu điện ngầm Đào Viên và các hiện trường nhiệt độ cao trong tòa nhà là lời tại chỗ, chi tiết sau này bổ sung thêm.

---

## Ấn tượng nhà này để lại cho tôi

- **Định vị rõ**: chủ lực là **sensor fusion**, không đối đầu trực diện với các hãng làm drone và chó robot nguyên chiếc.  
- **Kịch bản rõ**: cháy nổ và quá nhiệt là nỗi đau cứng mà camera giám sát thường không bù được.  
- **Sản phẩm có bậc thang**: bản cố định đã có nền thị trường, bản di động mở rộng qua nền tảng của đối tác.  
- **Tư duy nền tảng**: phần cứng cộng Edge AI cộng đẩy cảnh báo qua đám mây, gắn được vào gói thầu của SI.  
- **Kênh rõ**: **công ty đi đấu thầu chủ động tìm tới**; tích hợp qua SI chứ không tự dựng dây chuyền máy nguyên chiếc.  
- **Giá trị của VC không chỉ là vốn**: Howard tại chỗ nói có thể giới thiệu quan hệ ở công ty phòng cháy chữa cháy, vừa cụ thể vừa đúng hướng.  
- **Case tại địa phương**: tàu điện ngầm Đào Viên và nhiệt độ cao trong tòa nhà, với một buổi tổ chức tại Đào Viên thì càng thêm sức thuyết phục.

Nghe hết bốn nhà, buổi này khép lại bằng tấm ảnh chung.

![Sau buổi xem deal Taoyuan A8, đội NTUTEC và WPORT chụp ảnh trước bức tường doanh nghiệp cư trú tại A8](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/taoyuan-a8-group.jpg)

---

## Series Ghi chép xem deal Taoyuan A8 (bốn công ty)

- [(1) Ruomei Technology: tản nhiệt cho AI rất đốt tiền, nên bắt đầu từ bức xạ ở phía vật liệu](/blog/vi/posts/taoyuan-a8-startup-ruomei-thermal/)
- [(2) EITH: biến nước thải thành tài nguyên, và pitch phải để người ngoài ngành nghe hiểu](/blog/vi/posts/taoyuan-a8-startup-eith-wastewater/)
- [(3) Chenlu Technology: nội soi hai ống kính có AI, SaMD trước rồi mới tới ống dùng một lần](/blog/vi/posts/taoyuan-a8-startup-chenlu-endoscopy/)
- (4) AWAREK: ảnh nhiệt sensor fusion, hợp tác với SI đi đấu thầu
