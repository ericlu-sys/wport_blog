---
title: "What Is Congdianzhan? WPORT's Free AI Courses and In-Person Career Event Series"
description: "Congdianzhan is WPORT's regular in-person event series. Each session focuses on one theme and is fully hands-on. From AI tool workflows to job hunting in Taiwan, we help students and working professionals across cities actually run the tools and go home with real results."
publishDate: 2026-07-03
tags: ["聰電站", "AI 課程", "線下活動", "僑外生"]
featured: false
cover: "https://res.cloudinary.com/xyudkke9/image/upload/w_1200,h_630,c_fill,g_auto,f_auto,q_auto/v1784861085/charging-station-banner_mlyjjs.png"
---

![Congdianzhan event banner](https://res.cloudinary.com/xyudkke9/image/upload/w_1200,f_auto,q_auto/v1784861085/charging-station-banner_mlyjjs.png)

---

## What Is Congdianzhan?

Congdianzhan is an **in-person event series** hosted regularly by **WPORT Career Station**. Taoyuan is currently the main hub, and sessions will expand to other cities over time.

Each session focuses on one theme. No fluff, fully hands-on. The goal is for every participant to leave with **visible results**. Whether that means spinning up an AI project, producing a tailored resume, or deploying a personal site live, we want your laptop to have something it did not have before the session ended.

Topics cover AI tool workflows, job-search practice, and creator content pipelines, with more themes ahead. Every session is open for registration. Most are free; some courses charge a modest fee.

<div style="display: flex; gap: 16px; margin: 24px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-events" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">Events</div>
  </div>
  <div style="flex: 1; min-width: 120px; padding: 16px 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 12px; border: 1px solid #c5e8e5; text-align: center;">
    <div id="stat-students" style="font-size: 28px; font-weight: 800; color: #0d7c70; line-height: 1;">0</div>
    <div style="font-size: 13px; color: #555; margin-top: 4px;">Total learners</div>
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

**Topics we cover:**

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 0;">
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">AI IDE tools</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">GitHub</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Obsidian knowledge management</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">CLI commands</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">MCP automation</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Personal site deployment</span>
  <span style="font-size: 13px; font-weight: 500; color: #0d7c70; background: #eaf8f7; border: 1px solid #c5e8e5; border-radius: 999px; padding: 4px 12px;">Job search strategies in Taiwan</span>
</div>

---

## Why Do We Do This?

AI tools move fast, but there is a clear gap between "I've seen the intro" and "I can actually use it."

A lot of tool tutorials stop at the click-by-click layer. They never explain why you would use a workflow this way, which scenarios it fits, or how to break problems down when you get stuck. The result: you feel like you understand it, then freeze the moment you try alone.

Congdianzhan's goal is simple: **get the tool running on site, unblock problems in the room, and leave with something you can keep using.**

There is also a geography reason. Most AI courses and job workshops cluster in Taipei. Students and professionals in other cities often have to travel across counties just to learn something new. **Congdianzhan aims to bring these resources to more places, so people in different cities can access current AI workflows and job-search tools locally, without always commuting to Taipei.**

---

## At the Event

![Congdianzhan classroom, learners focused on the session](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-classroom.jpg)

Every Congdianzhan session is a **small in-person class**, not a sit-and-listen lecture. The whole event is interactive. The instructor walks everyone through each step, and learners complete the same work on their own laptops in sync.

Raise your hand anytime. The instructor will come over for one-on-one help and unblock you on the spot. You do not need to worry about asking a "dumb" question or falling behind. The pace follows the room.

![Instructor demoing on the big screen while learners follow along](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-instructor-demo.jpg)

The big screen mirrors each step. The instructor demos while explaining the logic behind it, so you learn not only "how" but also "why."

![Learners focused on their laptops, following along](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-students-laptops.jpg)

By the end, every learner has something that actually runs on their laptop. Not a slide deck. Not a certificate. Something they built themselves.

![Congdianzhan group photo](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/charging-station-group-photo.jpg)

---

## Who Is This For?

Congdianzhan is designed so **beginners can keep up**. You do not need coding experience or prior AI tool use. Bring a laptop and you are ready.

Especially a good fit for:

- University and graduate students across Taiwan (including overseas Chinese and international students)
- Working professionals exploring a career switch or just starting a job search
- People curious about AI tools who do not know where to begin
- Creators who want to apply AI in their work or portfolio

---

## Past Events

<div style="display: flex; flex-direction: column; gap: 10px; margin: 16px 0;">

  <a href="https://tbr.digital/events/w101-1121" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.1 · 2024.11.21 · Taoyuan</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">After-work career meetup</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">How English connects to career growth, and a systematic way to improve. Speaker: Michael Shen (Google Strategic Account Manager, TEDx speaker).</div>
  </a>

  <a href="https://tbr.digital/events/w101-1219" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.2 · 2024.12.19 · Taoyuan</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Cold outreach and cross-border e-commerce</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">B2B target customer positioning, cross-cultural communication, and cross-border e-commerce practice. Speaker: Jordan (business manager in Alibaba-related fields).</div>
  </a>

  <a href="https://tbr.digital/events/w101-1228" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #fffbe6 0%, #fff8d6 100%); border-radius: 10px; border: 1px solid #f5d96b; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #a07800; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Super Congdianzhan · 2024.12.28 · Taoyuan</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Career power-up, all in one day</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Focus training, short-form video production, and Google job-search experience. Three speakers for a full day, with live challenges alongside.</div>
  </a>

  <a href="/blog/posts/charging-station-vol3-recap/" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: linear-gradient(135deg, #eaf8f7 0%, #f0faf9 100%); border-radius: 10px; border: 1px solid #c5e8e5; text-decoration: none; color: inherit;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
      <div style="font-size: 12px; color: #0d7c70; font-weight: 600; letter-spacing: 0.05em;">Vol.3 · 2026.06.30 · Taoyuan</div>
      <span style="font-size: 12px; font-weight: 600; color: #0d7c70;">Read the recap →</span>
    </div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">An AI course anyone can build with, even without a CS background</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">GitHub Fork, Cursor IDE, Obsidian knowledge maps, CLI job search, Vercel deploy. Three hours from zero to a live personal site.</div>
  </a>

  <a href="https://hypelink.app/@wport/events/congdianzhan-4-taipei-vibe-coding" style="display: flex; flex-direction: column; justify-content: center; height: 110px; box-sizing: border-box; padding: 0 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8; text-decoration: none; color: inherit;">
    <div style="font-size: 12px; color: #888; font-weight: 600; margin-bottom: 3px; letter-spacing: 0.05em;">Vol.4 · Taipei</div>
    <div style="font-size: 15px; font-weight: 700; color: #2e2e2e; margin-bottom: 4px;">Vibe coding with software people</div>
    <div style="font-size: 13px; color: #555; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">Not a lecture. A shared space to drink, chat, and build side projects together. Eric (PM) and Gugu (full-stack engineer) are around for questions anytime.</div>
  </a>

</div>

---

## FAQ

<div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Is there a fee?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Most sessions are free. Some courses charge a modest fee. Each registration page states this clearly. Always follow the event page details.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Do I need a coding background?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">No. Congdianzhan is designed so beginners can follow along. Bring a laptop and you are good.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Do I need to install anything in advance?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Each session shares environment setup notes beforehand. After you register, you will get the instructions. Follow them and you are ready.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Is every session the same topic?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">No. Each Congdianzhan session has a different theme. Topics do not repeat, so you can keep coming back to build different skills.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Which cities host events?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Taoyuan is the main base for now, with more cities planned. Each venue is listed on the registration page.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">How do I find the next session?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Follow our Hypelink events page. New sessions are announced there first.</div>
  </div>

  <div style="padding: 16px 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #e8e8e8;">
    <div style="font-size: 14px; font-weight: 700; color: #2e2e2e; margin-bottom: 6px;">Can I come alone?</div>
    <div style="font-size: 14px; color: #555; line-height: 1.6;">Absolutely. Most learners register solo. The vibe is friendly, and it is easy to start conversations.</div>
  </div>

</div>

---

## Where Is the Next Session?

Congdianzhan continues on a rolling schedule, with a different theme each time. Taoyuan is the current base, and we will also open sessions in other cities. Most events are free; some courses charge a modest fee. Details are always clear on the registration page.

<div style="display:flex; flex-direction:column; gap:5px; margin-top:16px; font-size:15px;">
  <span>🗓 Event registration and latest updates: <a href="https://hypelink.app/organizers/@wport" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">hypelink.app/organizers/@wport →</a></span>
  <span>💼 More local Taoyuan job listings: <a href="https://wport.me/" style="color:#0d7c70; font-weight:700; text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:2px;">wport.me →</a></span>
</div>
