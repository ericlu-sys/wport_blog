---
title: "沒有資科背景也能學 AI！GitHub Fork、Cursor IDE、Obsidian、CLI、MCP 完整實作教學"
description: "不需要寫過程式，也能用 AI 工具做出個人網站、客製履歷、自動化工作流。這篇文章完整還原聰電站 Vol.3 的四個實作階段，從 AI IDE 到 Vercel 部署，手把手帶你走一遍。"
publishDate: 2026-07-02
tags: ["AI工具", "桃園 AI 課程", "在台工作", "職涯發展"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783409279/wport-blog/ai-course-non-cs-cover.jpg"
---

<figure>
  <img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783409279/wport-blog/ai-course-non-cs-cover.jpg" alt="沒有資科背景也能學 AI，充電站 Vol.3 課程現場" />
  <figcaption>沒有資科背景也能學 AI，從實作開始。</figcaption>
</figure>

你有沒有這種感覺：看到別人用 AI 做出很酷的東西，自己也想試試看，但一打開工具就不知道從哪裡開始？

這篇文章是聰電站 Vol.3 課程內容的完整文字版。課程設計的出發點很簡單：**沒有寫過程式也沒關係，三個小時之後你可以帶著成果回家。**

現在把這四個實作階段完整還原，讓沒有參加到的人也能跟著做一遍。

<div style="margin: 32px 0; padding: 20px 24px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-left: 4px solid #56C7BB; border-radius: 12px;">
  <div style="font-size: 13px; font-weight: 600; color: #0d7c70; margin-bottom: 6px; letter-spacing: 0.05em;">活動回顧</div>
  <div style="font-size: 15px; color: #2e2e2e; margin-bottom: 12px;">想了解當天活動現場的氣氛與學員實作狀況？我們也整理了這場桃園 AI 課程的完整活動紀錄。</div>
  <a href="/blog/posts/charging-station-vol3-recap/" style="display: inline-flex; align-items: center; gap: 6px; background: #0d7c70; color: #fff; font-size: 14px; font-weight: 600; padding: 9px 18px; border-radius: 8px; text-decoration: none;">查看活動回顧 →</a>
</div>

---

## 階段 A：GitHub 專案 Fork 與 AI IDE 實作環境建置

這一段的目標很單純：讓每位學員的電腦上，都有一份「跟講師一模一樣」的專案，並在同一種工作環境裡開始操作。看起來只是暖身，但這一步沒踩穩，後面所有的實作都會歪掉。

### 1. GitHub Fork 課程 Repo：擁有你自己的 AI 專案版本

課程開場，我們請每位學員登入 GitHub，把課程用的教材 Repo 點下右上角的 **Fork**，把整包專案複製到自己的帳號下。

為什麼要 Fork，而不是直接下載 zip？

- Fork 出來的專案是「掛在你名下的另一份」，你可以自由修改、儲存、上傳，也不會動到講師的原始版本。
- 之後你要把個人網站部署上網，Fork 也是最順的起點，因為 Vercel、Cloudflare Pages 這些平台都能直接綁定你的 GitHub 帳號。
- 更重要的是，Fork 這個動作會讓學員第一次意識到「原來程式碼是有版本、有擁有者的」，而不是一個隨便下載的檔案包。

但課程結束後的反思是：如果目的只是快速上手，其實不一定要一開始就講 Fork，直接下載 Repo 也行，避免大家 GitHub 註冊帳號會卡關、然後還要去理解什麼是 Fork。

課程用的 Repo：[wport-ai-starter-kit](https://github.com/contactwport/wport-ai-starter-kit)。裡面已經先把 CLI、MCP、Skill、README 都設定好，學員一 Fork 下來，就有一組乾淨可以動手的環境。

### 2. AI IDE vs Chatbot：為什麼工作場景要搬離 ChatGPT 聊天框

很多人第一次接觸 AI，都是從 ChatGPT 這種 **chatbot（聊天框）** 開始的。所以我們花了一段時間，把 **chatbot 和 AI IDE（整合開發環境）** 的差別徹底講清楚。這也是整場課程裡最關鍵的觀念轉換。

先用一個超生活化的比喻：

- **Chatbot 聊天框** 像是**打電話問客服**。你問一句、他答一句，講完就沒了，你要自己整理筆記、複製到 Word、再貼到 email、最後另存到雲端。整趟流程都是「你在搬答案」。
- **AI IDE** 則像是**把 AI 請到你家的工作室**當同事。他看得到你桌上的檔案、可以直接幫你改檔案、也能在你電腦上執行程式，全程都留在你的專案裡。你不用再一直複製貼上，AI 就是跟你一起「動手做事」的角色。

對初學者最有感的差別，其實是這幾點：

- **成果會真的留在本機**：你今天做出來的個人網站、Obsidian 筆記、履歷 HTML，都會存在你自己的電腦資料夾裡，而不是被關在某個關掉就消失的聊天視窗中。
- **上下文不用一直複製貼上**：AI IDE 可以直接讀你剛剛改的檔案，不用你每次都貼一次程式碼、貼一次履歷、貼一次筆記給他看。
- **可以真的執行程式**：你請 AI 幫你寫一個網頁，他不只給你文字，還可以直接在你電腦上開起來看，甚至幫你部署到網路上。

一旦大家理解「工作場景要從聊天框搬到 AI IDE」，後面的 Fork、README、Skill、CLI，才會變成有意義的操作，而不是一堆陌生名詞。

### 3. 2026 四款免費 AI IDE：Cursor、Codex、Kiro、Antigravity

當天我們介紹了 2026 主流的**四款有免費額度的 AI IDE**。這裡先回答一個現場最常被問的問題：**為什麼沒有 Claude？** 不是因為 Claude 不好用，是它目前沒有免費額度，而這場課程的前提就是「初學者當下就能動手」，所以我們刻意把名單限制在有免費額度、可以馬上開始的選項。

在講各家差異之前，先講一個對初學者超重要的觀念：**這四款 IDE 介面長得幾乎一模一樣**。因為它們骨子裡都是從 VS Code 這個世界最流行的編輯器分支出來的，可以想成「四個 VS Code 的 AI 兒子」。所以你只要學會其中一款，換到另一款也能立刻上手，不用重學介面。

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-ide-comparison-slide.png" alt="2026 新世代 AI 優先 IDE 工具介紹簡報" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

四款免費 AI IDE 的定位：

#### Cursor

Eric 個人最常用的一款，也是我們最推薦初學者從這開始。原因是「量大管飽」，Claude 系列常常一寫程式就打到 rate limit，但 Cursor 對 PM、內容工作者、非資科背景的使用者來說，一個月 600 元的份量根本用不完。

#### Kiro IDE

AWS 推出的 AI IDE，主打 Spec-First 開發，也就是先把規格寫清楚，AI 再照規格生程式。對重視流程、喜歡先想清楚再動手的 PM、SA、系統思考型使用者特別合。

#### Codex IDE

OpenAI 推出的 AI 程式助理環境。如果你已經很習慣 ChatGPT 的節奏，用 Codex IDE 會有一種「從聊天框直接升級成工作台」的熟悉感。

#### Antigravity 2.0

Google 家族的 AI IDE。如果你原本就重度使用 Gmail、Google Drive、Google 文件、Google Meet，跟 Google 生態的整合會非常順。

我們不強推任何一款，重點是讓學員知道：**你不用先花錢，也不用先追品牌，先挑一款能免費用、又不會卡的，動手起來再說。** 因為介面都是 VS Code 家族，之後想換家也不痛。

---

## 階段 B：用 AI IDE 快速讀懂陌生 Repo

打開專案這件事，對初學者其實是另一個坎。畫面上一堆資料夾、一堆看不懂的檔案，很多人第一反應是直接關掉。這個階段的目標，就是讓學員在 5 分鐘內就能**用 AI IDE 快速讀懂一個陌生 Repo 在幹嘛**，把心理門檻壓下去。

### 4. 拖曳 README 對話：3 分鐘用 AI 讀懂一個陌生 Repo

當學員把 Fork 下來的專案在 IDE 打開後，我們請他們做兩件事：

1. 在檔案列表中找到 `README.md`。
2. 用滑鼠把它 **拖曳到右側對話區**，然後直接問 AI：「這個 repo 在做什麼？可以幫我用中文條列說明嗎？」

這個動作背後有兩個教學意圖：

- **教會「餵上下文」這個動作**：初學者常犯的錯，就是空口問 AI，然後怪 AI 答得不精準。當你把 README 直接拖給 AI，就等於先給他一份專案簡介，他的回答會立刻變準。
- **建立「先讀 README」的職業肌肉**：這是每個工程師打開新專案時的第一件事。你不用馬上懂程式碼，但你要先知道「這個專案是幹嘛的、有哪些模組、要怎麼跑」。

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-fork-repo-slide.png" alt="Fork 與 Repo 流程說明簡報" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

現場最有感的畫面是：很多學員原本以為要花一小時才能看懂這個 repo，結果 3 分鐘後 AI 就把整個 repo 的目標、結構、可用的 Skill 條列出來了。這個瞬間，會直接改變他們之後遇到任何陌生專案時的第一反應。

---

## 階段 C：Obsidian 知識譜系 × Skill 反問，把「你」變成 AI 可讀資料

這個階段是整場課程裡最花時間、也最有價值的一段。我們要做的事情很單純：**把「你這個人」變成 AI 讀得懂的結構化資料**。因為只有這樣，AI 才能幫你做出真正屬於你的東西，而不是一份千篇一律的模板履歷或模板網站。

### 5. Obsidian 個人知識譜系：把「關於我」變成 AI 可讀的第二大腦

今天的目標是每人做出一個個人網站，所以我們先不談網站長怎樣，先談**內容從哪裡來**。

我們選用 [Obsidian](https://obsidian.md/) 當作**個人知識管理（PKM）工具**，原因有三個：

- **地端隱私、完全本地儲存**：Obsidian 的筆記全部存在你自己的電腦上，不會上雲，AI 要讀也只需要一個 local path 就搞定。對於「不想把履歷、經歷、薪資期待丟到雲端 AI」的使用者特別安心。
- **雙向連結 × 知識圖譜**：Obsidian 支援雙向連結（Backlinks），你的每一段經歷、每個技能、每段作品都可以互相關聯，長期會自然形成一張「關於我」的知識圖。
- **純 Markdown、AI 讀起來最順**：Obsidian 用的是最乾淨的 Markdown 格式，AI 特別擅長閱讀這種結構，比 Word、Notion、Google Docs 都更容易被解析，token 消耗也更少。

課堂上請學員先建立幾個核心節點：**經歷、技能、作品、想找的職涯方向**，每個節點再往下拆更細的頁面。這一步不是要大家寫得完美，而是先把「素材」倒出來。

### 6. Skill 反問法：讓 AI 幫你想，而不是幫你寫

很多人到這裡會卡住：「我不知道要寫什麼。」這太正常了，因為要一個人從零把自己講清楚，本來就很難。

所以我們用了一個反過來的做法。Repo 裡預先做好一個 Skill，這個 Skill 的任務不是「幫你寫」，而是「反過來問你」：

- 你最有成就感的三個工作經驗是什麼？當時解決了什麼問題？
- 如果只能用三個關鍵字介紹自己，你會挑哪三個？
- 你希望下一份工作有什麼樣的日常？

學員只要照著 AI 提出的問題回答，回答本身就會變成新的筆記，一個一個補進 Obsidian 裡。三十分鐘後，原本空白的知識譜系就自然長出來了。

這一步教的其實是一個心法：**AI 最強的用法不是「幫你寫」，而是「幫你想」**。

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-prompt-crystallization-slide.png" alt="Prompt 固化概念說明簡報" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

### 7. Local Path × Skill 生成 HTML：AI 讀本機檔案，一鍵長出個人網站

當知識譜系有了骨架，就進入「把它變成網站」的階段。我們的做法是：

1. 打開 Obsidian，複製整個知識庫資料夾的 **local path**（例如 `/Users/你的名字/Documents/my-obsidian-vault`）。
2. 回到 AI IDE，呼叫 repo 裡另一個 Skill，把 local path 貼進去。
3. Skill 會自動讀取 Obsidian 裡的所有筆記，依照預先寫好的網站架構，產生一份完整的個人網站 HTML。

為什麼要用 local path，而不是把筆記複製貼上給 AI？

- **突破上下文長度限制**：一份完整的知識譜系動輒數十份 Markdown 檔案，直接複製貼上很容易超過對話 token 上限，AI 只會讀到前半段就沒力氣了。
- **AI 可以自己挑重點讀**：透過 local path，AI 會依照 Skill 的指令去讀該讀的檔案，例如做履歷時讀「經歷」、做網站時讀「作品」，比你手動貼還聰明。
- **保留檔案結構與雙向連結**：複製貼上會把 Obsidian 的雙向連結、資料夾結構通通壓平變成純文字。用 local path 讀取，AI 能理解你原本的知識關係，輸出結果會更貼近你的邏輯。

簡單說：**貼上是把資料丟進黑洞，local path 是讓 AI 進你的檔案室自己翻。** 兩者的產出品質完全不同。

---

## 階段 D：Prompt → Skill → CLI × MCP，做出可重跑的 AI 工作流

到這裡為止，學員已經完成一個個人網站。但如果只到這裡，這場課程就只是一個「炫技的下午工作坊」。我們希望大家真正帶走的，是**一套之後每個月都能自己再跑一次的 AI 工作流**。

### 8. Prompt 進化到 Skill：把有效提示詞變成可重用的 AI 能力

- **Prompt** 是你當下打的一句話，例如「幫我寫一份 PM 履歷」。用完就沒了。你下次要用，得重新想一次怎麼問，品質也常常不穩。
- **Skill** 是把一組經過反覆驗證的 prompt、步驟、輸出格式，封裝成一個「可重用的能力」。它有名字、有版本、可以被叫用、可以在不同專案裡重複使用。

換個比喻：Prompt 像是每次臨場開口的問答，Skill 則像是你把最會問問題的專家 SOP 寫下來，之後誰來都能照著問。對初學者的意義是：你不需要變成 prompt 大師，你只要把幾個真的有效的 prompt 固化成 Skill，之後就能長期用。

### 9. CLI vs GUI：為什麼 AI 時代不用滑鼠，要用命令列

很多學員一聽到「命令列」就會怕，但我們的講法很白話：**CLI 就是你打一行指令、電腦幫你做一件事**。它跟你在網頁上點按鈕沒什麼兩樣，只是把「用滑鼠點」換成「用鍵盤打」。

當你的工具只有 GUI（圖形介面），而你想讓 AI 幫你自動操作，會踩到兩個大坑：

- **GUI 超級燒 Token**：AI 要操作 GUI，得先「看見」畫面，截圖、解析畫面元素、判斷按鈕在哪，Token 消耗是純 CLI 呼叫的好幾倍到幾十倍。
- **滑鼠一有誤差就點錯**：只要網頁樣式改一次、按鈕位置差幾像素、跳出一個廣告 popup，AI 就會點到旁邊那顆按鈕，整個流程直接爆炸。

所以在 2026 年，「有沒有 CLI」正在變成一個工具好不好被 AI 使用的重要指標。**GUI 是給人看的，CLI 是給人和 AI 一起用的。**

我們現場用 **WPORT CLI** 做示範：輸入一行指令，指定「地區 = 桃園、職務 = PM」，幾秒鐘後畫面上就跳出符合條件的職缺清單，直接以結構化資料（JSON）輸出，可以直接餵給下一個 Skill 處理。

### 10. 履歷客製 Skill：3 個職缺，一次產出 3 份專屬履歷

有了職缺資料，下一步就是履歷客製：

1. 用階段 C 產生的知識譜系，當作履歷的原始素材。
2. 呼叫 repo 裡的履歷客製 Skill，把剛剛用 CLI 抓下來的 3 個 PM 職缺一次丟給它。
3. Skill 會針對每一份職缺，比對職務描述，重新排列你的經歷順序、換掉關鍵字、產生一份專屬 PDF 或 HTML 履歷。

結果就是：**一杯咖啡的時間，產出三份完全不同、但都貼合對方需求的履歷**。這也是為什麼我們鼓勵大家客製化履歷，但大家不做的原因就是「太累」，當 Skill 把這件事變成一鍵完成，行為才真的會改變。

### 11. Vercel CLI：個人網站一行指令上線

到這一步，學員手上已經有一個個人網站 HTML、三份客製履歷、一份職缺清單。接下來就是把它送出去：

- **Vercel CLI**：一行指令，就能把本機的網站部署到網路上，拿到一個可分享的網址。原本這件事要註冊、綁 GitHub、設定專案，現在打字就搞定。
- **gcloud CLI**：Google Cloud 的命令列工具，從 CLI 直接寄出一封信，把履歷網址和個人網站連結寄到目標公司或推薦人手中。

這兩個 CLI 加起來，就完成了一個完整的「上架 + 主動出擊」流程。**你不再只是被動投履歷，而是有一整套從內容到通知的自動化管線。**

### 12. CLI × MCP × Skill：AI 時代的工作流積木思維

最後收斂一個觀念。這場課看起來是介紹 IDE、Obsidian、CLI、Skill 一大堆工具，但真正的重點是這句話：

> **CLI x MCP x Skill 是一組可以互相組合的積木，你能組出的工作流，遠比你想像的多。**

幾種常見組合：

- **求職組合**：CLI 撈職缺 → Skill 客製履歷 → CLI 部署網站 → CLI 寄信通知
- **內容組合**：MCP 讀 Notion 筆記 → Skill 整理成文章大綱 → CLI 發佈到部落格
- **個人 CRM 組合**：CLI 抓 LinkedIn 名單 → Skill 分析對話紀錄 → MCP 更新到聯絡人資料庫

重點不是這些具體例子，而是讓你理解：**只要懂得把 CLI、MCP、Skill 當成積木來看，你就能自己拼出想要的工作流**。第一次搭建會花點時間，但之後每次更新內容、投新職缺、調整網站，都會快到讓人上癮。

---

## 三個單元學完，你應該可以做到什麼？

如果你把這四個階段都跟著做了一遍，你現在應該可以：

- 用 Cursor 或類似的 AI IDE 開啟一個專案
- 看懂一個 GitHub Repo 的基本結構，Fork 一份到自己的帳號
- 在本機把一個專案跑起來
- 用 Obsidian 建立個人知識譜系，讓 AI 讀本機檔案生成個人網站
- 把有效的 Prompt 固化成 Skill，建立可重複使用的工作流
- 用 CLI 撈職缺、客製履歷、部署網站、主動出擊

這些不是進階技能，這是 2026 年的基本配備。

<img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/ai-course-outcomes-summary-slide.png" alt="三個單元學完你可以做到的事情總結簡報" style="box-shadow: 0 4px 24px rgba(0,0,0,0.12); border-radius: 12px;" />

---

## 學完之後，你可以做什麼？

學 AI 工具最快的方式不是看更多教學，而是找一個你實際遇到的問題，試著用 AI 幫你解決它。不管是工作上的報告、個人的專案、還是你一直想做但不知道怎麼開始的事情，都可以是你的練習材料。

聰電站之後還會繼續舉辦，每次都會帶不同的主題。如果你想第一時間收到活動資訊，歡迎追蹤我們：

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 更多桃園 AI 活動資訊：<a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 更多桃園在地職缺介紹：<a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
