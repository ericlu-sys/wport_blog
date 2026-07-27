---
title: "聰電站是什麼？WPORT 舉辦的免費 AI 課程與職涯實體活動系列"
description: "聰電站是 WPORT 定期舉辦的實體活動系列，每場聚焦一個主題，全程動手做。從 AI 工具應用到在台求職，在各地帶學生、上班族把工具真正跑起來、帶著成果回家。"
publishDate: 2026-07-03
tags: ["聰電站", "AI 課程", "線下活動", "僑外生"]
featured: false
cover: "https://res.cloudinary.com/xyudkke9/image/upload/w_1200,h_630,c_fill,g_auto,f_auto,q_auto/v1784861085/charging-station-banner_mlyjjs.png"
---

![聰電站活動現場 Banner](https://res.cloudinary.com/xyudkke9/image/upload/w_1200,f_auto,q_auto/v1784861085/charging-station-banner_mlyjjs.png)

---

## 聰電站是什麼？

聰電站是 **WPORT 職航站**定期舉辦的**實體活動系列**，目前以桃園為主要據點，未來也會擴展到其他城市。

每一場聚焦一個主題，不講廢話、全程動手做，目標是讓參加的人帶著**看得見的成果**回家。不管是跑起一個 AI 專案、產出一份客製履歷、還是把個人網站部署上線，我們希望每一場活動結束後，你的筆電裡多了一樣之前沒有的東西。

課程主題涵蓋 AI 工具應用、求職實戰、自媒體流程，往後也會繼續延伸。每場對外開放報名，大多數場次免費，部分課程酌收費用。

<div style="display: flex; gap: 16px; margin: 24px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-events" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">場活動</div>
  </div>
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-students" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">累計學員</div>
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

**課程涵蓋主題：**

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 0;">
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">AI IDE 工具</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">GitHub</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Obsidian 知識管理</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">CLI 指令操作</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">MCP 自動化</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">個人網站部署</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">在台求職策略</span>
</div>

---

## 我們為什麼做這件事？

AI 工具發展很快，但「真的會用」和「看過介紹」之間有一條很明顯的距離。

很多工具教學停在操作層面，但不說清楚為什麼要這樣用、什麼場景用得到、遇到問題怎麼拆解。結果是：看完覺得懂了，自己試的時候還是卡住。

聰電站想做的事很簡單：**讓你在現場就把工具跑起來，遇到問題當場解，帶著能繼續用的東西回去。**

另一個出發點是地理的。大部分的 AI 課程、求職工作坊都集中在台北，其他城市的學生和上班族要學新東西，通常得跨縣市去找資源。**聰電站想把這些資源帶到更多地方，讓不同城市的人不用一直往台北跑，也能在當地接觸到最新的 AI 應用與求職工具。**

---

## 活動現場

![聰電站活動現場，學員們認真參與課程](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-classroom.jpg)

每場聰電站都是**實體小班制**，不是那種坐在台下聽完就回家的講座。整場活動全程互動，講師帶著大家一步一步操作，學員跟著在自己的筆電上同步完成。

有問題隨時舉手，講師會走到旁邊一對一協助，把卡住的地方當場解開。不用擔心問了蠢問題，也不用擔心落後，現場節奏就是配合大家的狀況走。

![講師在大螢幕前帶著學員實作](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-instructor-demo.jpg)

大螢幕同步顯示操作步驟，講師邊示範邊說明背後的邏輯，不只教你「怎麼做」，也讓你知道「為什麼這樣做」。

![學員們專注地在筆電上跟著操作](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-students-laptops.jpg)

活動結束時，每位學員的筆電裡都有實際跑起來的成果，不是一份投影片、不是一張證書，而是你自己做出來的東西。

![聰電站全體合照](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-group-photo.jpg)

---

## 誰適合來參加？

聰電站的設計出發點是**零基礎也能跟上**。不需要寫過程式，不需要有 AI 工具使用經驗，只要帶著筆電來就可以。

特別適合：

- 在各地讀大學、研究所的學生（包括僑外生）
- 想轉職或剛開始求職的上班族
- 對 AI 工具感興趣但不知道從哪裡開始的人
- 想把 AI 用在工作或作品集上的創作者

---

## 過往活動紀錄

<div style="display: flex; flex-direction: column; gap: 10px; margin: 16px 0;">

  <a href="https://tbr.digital/events/w101-1121" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.1 · 2024.11.21 · 桃園場</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">下班後交流的職涯小聚</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">英文與職涯的關係、系統化英語進步方法。講師 Michael Shen（Google 策略客戶經理、TEDx 講者）。</div>
  </a>

  <a href="https://tbr.digital/events/w101-1219" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.2 · 2024.12.19 · 桃園場</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">陌生開發與跨境電商</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">B2B 目標客戶定位、跨文化溝通策略、跨境電商實務。講師 Jordan（阿里巴巴相關領域業務經理）。</div>
  </a>

  <a href="https://tbr.digital/events/w101-1228" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #fffbe6 0%, #fff8d6 100%); border-radius: 10px; border: 1px solid #f5d96b; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #a07800; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">超級聰電站 · 2024.12.28 · 桃園場</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">職場大補帖，一次給你</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">專注力提升、短影音製作、Google 求職經驗分享。三位講師全天分享，實戰挑戰同步進行。</div>
  </a>

  <a href="/blog/posts/charging-station-vol3-recap/" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 10px; border: 1px solid #c5e8e5; text-decoration: none; color: inherit;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
      <div style="font-size: 12px; color: #0d7c70; font-weight: 600; letter-spacing: 0.05em;">Vol.3 · 2026.06.30 · 桃園場</div>
      <span style="font-size: 12px; font-weight: 600; color: #0d7c70;">閱讀活動回顧 →</span>
    </div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">沒有資科背景的人也能實作的 AI 課程</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">GitHub Fork、Cursor IDE、Obsidian 知識譜系、CLI 撈職缺、Vercel 部署，三小時從零到個人網站上線。</div>
  </a>

  <a href="https://hypelink.app/@wport/events/congdianzhan-4-taipei-vibe-coding" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.4 · 台北場</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">軟體人陪你一起 Vibe Coding</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">不是上課，是大家在同一個空間邊喝酒聊天邊做 side project。Eric（PM）與古古（全端工程師）在旁，有問題隨時問。</div>
  </a>

</div>

---

## 常見問題

<div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">活動要收費嗎？</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">大多數場次免費參加，部分課程會酌收費用。每場報名頁面上都會標示清楚，請以活動頁資訊為準。</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">需要有程式基礎嗎？</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">不需要。聰電站的設計出發點是零基礎也能跟上，只要帶著筆電來就可以。</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">需要提前安裝什麼嗎？</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">每場活動前會提供環境設定說明，報名後會收到相關通知，依指示完成準備即可。</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">每場主題都一樣嗎？</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">不一樣。每場聰電站的主題都不同，不會重複，可以持續參加累積不同技能。</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">活動在哪個城市舉辦？</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">目前以桃園為主，未來會擴展到其他城市。每場地點都會在報名頁面上標示。</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">怎麼知道下一場在哪裡？</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">追蹤我們的 Hypelink 活動頁，有新場次會第一時間通知。</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">一個人來可以嗎？</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">當然可以。大部分學員都是一個人報名來的，現場氣氛很好，很容易就能跟大家聊開。</div>
  </div>

</div>

---

## 下一場在哪裡？

聰電站會持續舉辦，主題每場不同。目前以桃園為主，後續也會到其他城市開課。大多數場次免費，部分課程酌收費用，報名頁面上都會標示清楚。

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 活動報名與最新資訊：<a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 更多桃園在地職缺介紹：<a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
