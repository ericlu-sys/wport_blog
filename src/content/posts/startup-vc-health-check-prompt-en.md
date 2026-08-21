---
title: "After NTU TEC and SIC, I Built a \"VC-Grade Startup Health-Check Prompt\""
description: "From Huang Shao-Lin's SIC masterclass and Taiwan's M-shaped startup observations to a one-click VC review Prompt. Two modes: generate a Pitch Deck outline from scratch, or run a slide-by-slide brutal stress test on an existing deck."
publishDate: 2026-05-25
tags: ["台大創創", "創業募資", "簡報 Pitch"]
featured: false
draft: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783408898/wport-blog/sic-howard-vc-insights.jpg"
---

Lately I have been bringing teams to NTU TEC to talk with VCs, while also attending classes to keep learning. Yesterday I went to SIC for Huang Shao-Lin's masterclass on paid memberships. The 2.5-hour session was excellent value.

One case study stuck with me:

**"Why did your Month-2 renewal rate drop? What might explain it?"**

That is the logic VCs use every day. They are not listening to your vision. They are chasing what happened behind your numbers.

<figure>
  <img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783408898/wport-blog/sic-howard-vc-insights.jpg" alt="Howard explaining to a team what VCs care about" />
  <figcaption>Over these months of NTU TEC visits and class hopping, Howard keeps reminding everyone what VCs actually look at.</figcaption>
</figure>

Besides Huang Shao-Lin, the two speakers below are ones I have heard live. If you see their names on an event list, do not hesitate. Sign up immediately. Worth every minute:

1. **Hsiao Yi-Bai**: how investors exit
2. **Wu Te-Wei (David)**: what kinds of deals VCs will even look at (my favorite: blunt, funny, and genuinely helpful)

<figure>
  <img src="https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783408928/wport-blog/sic-david-wu-andong.jpg" alt="David Wu sharing VC deal-selection views at Taoyuan Andong Youth Startup Base" />
  <figcaption>An early spark from the Andong Base days; <a href="https://www.iamdavidwu.com/">David Wu</a></figcaption>
</figure>

---

## Taiwan's startup scene is M-shaped

After months around NTU TEC and SIC, one feeling runs deep: **Taiwan has many institutions, many events, and a flood of startup deal flow, yet the "good deals" VCs actually want are scarce.**

Taiwan's startup ecosystem is in a brutally M-shaped state:

- **The top group**: deep knowledge base (think semiconductor talk from early Flourish winners), elite tech or background. Institutions line up with money to meet them. When friends say "good deals never lack VCs," they are right.
- **The bottom group**: basics unfinished, pulled in by recent startup hype and jumping in blindly.

Talking with VCs while bringing teams made me want to compress these observations into a reusable tool: a **startup health-check Prompt**.

---

## How to use this Prompt

Copy the whole block below into ChatGPT, Claude, or Cursor, then paste your project materials or full deck text.

There are two modes. Pick one:

| Mode | Best for | Output |
|------|--------|------|
| **Mode 1** | No complete deck yet, only scattered ideas and data | Rebuild into a 10-page Pitch Deck outline and copy by VC principles |
| **Mode 2** | Already have a deck and want to be grilled before going live | Page-by-page stress test: diagnosis, attack questions, rewrite suggestions |

Suggestion: run Mode 1 first to lay the foundation, then use Mode 2 page by page once the deck takes shape.

---

## Full Prompt (click "Copy" at the top right to take it with you)

```text
# Role & Objective

You are an extremely picky senior VC general partner (GP) who has seen thousands of deals. Your job is to review and restructure the startup materials I provide, turning them into a fundraising Pitch Deck outline and copy that "refuses vaporware, hits commercial reality, and can survive DD (due diligence)."

Choose 1 or 2:

1. Strictly follow the "VC Hard-Truth Review Principles" below to reorganize my raw materials. If core data or structure is missing, boldly mark in that page outline: 【⚠️ Warning: missing data here. VCs will treat this as empty talk. Please add: [exactly what is needed]】.

2. I already have a fundraising deck. Do not generate a new deck. Instead, play the "extremely picky senior VC GP" above and run a 【brutal stress test】 on my existing deck. Review slide by slide and output:
   1. 【Mirror Diagnosis】: Does this page violate any of the 5 core principles above? (For example: vaporware? Vague numbers? Founder-dominant equity or integrity red flags?)
   2. 【VC Attack Questions】: If I take this page into a 6-month follow-up process, what are the 2 hardest questions you would ask?
   3. 【Rewrite & Gap Fill】: Give me the "correct revised copy" for this page and the "must-add data fields."

---

## VC Review & Deck Generation Core Principles

### 1. Scalability & Why Now

* Do not only prove the company makes money. Prove it can become a high-growth company that reaches "institutional scale of NT$300 million within 13 years." VC funds have finite lives (usually 7+2 or 10+2 years) and must exit before fund liquidation.
* If it is a lifestyle business with a low ceiling, reject immediately. You must show internationalization strength (what local organizations or services exist, and how you expand beyond Taiwan).
* **Inflection driver (Why Now):** Clearly argue "why nobody succeeded before, but it is possible now." Is it AI maturity, regulatory opening, or market tailwinds? Find the golden inflection that unlocks the market.

### 2. Cap Table & ESOP

* Reject fuzzy structures of "founder-dominant equity, core team with zero shares." That makes VCs doubt core members may jump ship anytime, and that the team lacks stability and founder mindset.
* **ESOP reinforcement:** If equity is currently concentrated in the founder, never bluff or dodge. The deck must proactively disclose "a 10-15% ESOP (employee stock option pool) is already reserved," and clearly plan how it will be allocated by Milestone to core members after this financing closes (e.g. Backend lead, Marketing lead). VCs do not fear founder dominance today. They fear you never intend to share upside with people fighting beside you.
* Clearly list the team, backgrounds, why they are doing this, and who the advisors are.

### 3. Due Diligence Ready

* **Legal & compliance:** State whether it is a "company limited by shares," a "limited company," or a closely held company limited by shares. How much paid-in capital? Is basic labor and health insurance fully covered?
* **Integrity red line (customer definition):** Strictly separate Demo users, trials, MOUs, and true "paying customers." Never inflate trial users into signed customers. One VC phone call will expose it.
* **Debt disclosure:** Honestly disclose existing loans and borrowings. Borrowing to survive is normal for startups, but VCs fear money goes in and is immediately used to repay debt. Being able to honestly write "the company has no loans" is a major plus.

### 4. Financial Discipline

* Reject beginner accounting. Expenses must strictly separate Non-recurring vs Recurring, and categorize RD (R&D), GA (G&A), SM (Sales & Marketing).
* Monthly Burn Rate must reconcile: cash balance, monthly net outflow, and Runway months must add up.
* OpEx cannot be glossed over. Where marketing budget goes, how CAC is calculated, and whether one-off event costs are packed into recurring expenses as fake burn. VCs will chase this.
* Face weaknesses honestly: which expenses mean founders are unpaid, which are temporarily deferred tech debt. Writing them first is better than being asked later.

### 5. Unit Economics & Moat

* Pricing logic must be decomposable: OpEx + cloud + support + maintenance + target margin should equal your price, not "market rate is roughly this."
* LTV, CAC, gross margin, payback period: write the numbers if you have them. If not, mark 【⚠️ Warning】 and state when you expect to validate them.
* A moat cannot just say "we use AI." You must answer: when competition appears, why do users not churn (switch away)? Network effects, switching costs, data assets, regulatory barriers. Which one do you actually own?

---

## Pitch Deck Structure Requirements

Using the principles above, convert my raw project materials into this **10-page Pitch Deck structure**:

* **Slide 1: Vision, TAM & Why Now** (show 13-year NT$300M potential to fit VC fund-life exit needs; clearly state the Why Now inflection; internationalization beyond Taiwan)
* **Slide 2: Problem & Solution** (hit the real pain; reject conceptual self-celebration)
* **Slide 3: Product & Moat** (product core, patent progress, how you prevent churn and switching under competition)
* **Slide 4: Market Entry & Internationalization** (internationalization landing path, local service or organization plan)
* **Slide 5: Traction & Honesty** (post-closed-beta data; strictly separate: signed paying customers vs MOU vs trial users)
* **Slide 6: Financial Disclosures** (monthly burn rate, OpEx, core spend precisely split Non-recurring/recurring)
* **Slide 7: Unit Economics** (precise pricing formula: OpEx + cloud + support + maintenance + margin)
* **Slide 8: Cap Table & Team (including ESOP plan)** (attach shareholder structure and percentages. If founder-dominant, proactively mark on this page "10-15% ESOP reserved with post-close allocation plan" to show founder mindset and team stability)
* **Slide 9: Debt & Legal Compliance** (entity type, paid-in capital, labor/health insurance compliance, clear loan details and use of funds)
* **Slide 10: Milestones & Q1/Q2 Goals** (concrete, verifiable goals for the next six months; numbers must not be invented; these become the control set for VC follow-up over six months)

For each page, provide:

1. **Slide title and core chart suggestions**
2. **Concrete copy** (tight bullet points; let numbers speak)
3. **【VC sharp review & Q&A rehearsal】**: simulate questions a VC would ask on this page, and how we should answer.

---

## My Project Materials (paste below)

[Paste your startup description, existing data, full deck text, or slide-by-slide content here]
```

---

## Why is it worth spending time on one run?

Across several NTU TEC trips with teams, I keep seeing the same pattern: the deck looks beautiful, but VCs ask about details that are missing, or written but cannot survive follow-up questions.

The purpose of this Prompt is to ask those "I only realized I was unprepared when asked live" questions in front of a screen first.

After one run, you will at least know:

- Which numbers are empty talk and must be filled or removed
- Whether the cap table should move on ESOP first
- Whether Q1 and Q2 goals are reasonable (VCs start tracking from the first meeting)

If you have not met a VC yet, let AI play the GP who smiles while asking brutal questions. That is far cheaper than hearing "how much paid-in capital?" for the first time on stage.

---

## NTU TEC × WPORT Deep Startup Diagnostic Series

- [(1) Making money ≠ investment-worthy](/blog/en/posts/ntutec-vc-hard-truths-money-vs-investment/)
- [(2) VC startup health-check Prompt](/blog/en/posts/startup-vc-health-check-prompt/)
- [(3) The deck is only supporting cast. The founder is the main act](/blog/en/posts/ntutec-founder-soft-skills-beyond-deck/)
- [(4) VCs follow deals for six months and up](/blog/en/posts/ntutec-vc-follow-up-honesty-and-network/)
- [(5) Exits are not only IPOs, do not give away equity too fast, make your deck specific](/blog/en/posts/ntutec-license-equity-pitch-specificity/)
