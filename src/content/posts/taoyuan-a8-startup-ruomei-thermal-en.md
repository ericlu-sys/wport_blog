---
title: "Taoyuan A8 Deal Notes (1)｜Ruomei Technology: AI Cooling Burns Cash, So Start From Radiation on the Materials Side"
description: "NTUTEC invited us to Taoyuan A8 to hear pitches. First stop, Ruomei Technology: radiative cooling, in-house AI thermal simulation, a Japan distribution push, 90+ global customers, and why this felt like a real industrial company."
publishDate: 2026-07-21
tags: ["台大創創", "創業募資"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/taoyuan-a8-ruomei-pitch.jpg"
draft: false
voice: "eric"
---

## In one sentence

Ruomei is not trying to build a bigger fan. They pull **thermal radiation** into the cooling path and then add their own layer of AI thermal simulation. With 90+ customers in three years, Japanese distribution under negotiation, and their own plant in Qiaotou, this is the company that felt most like an actual industrial business of anything I have seen recently.

## Core claims

- **The entry point is right**: as AI compute climbs, what data centers actually burn is electricity and cooling budget. That pain point is going to be around for a long time.
- **Smart positioning**: they describe themselves as a complementary layer to liquid and water cooling, not a replacement. That is more grounded than a head-on fight.
- **"Heat through the shell" is a memorable slogan, but you have to narrow its definition yourself**, or due diligence will stall the moment someone pushes on it.
- **"Solid" here describes governance, not technology**: ERP from day one, internal audit in place, and an articulable path to the Innovation Board in 2029.

## Why I am writing this one up

**NTUTEC** (National Taiwan University Innovation and Entrepreneurship Center) invited WPORT to **Taoyuan A8** to hear startup pitches, one company after another. This is **the first of four**: **Taiwan Ruomei Technology Corp.** The other three are [EITH (2)](/blog/en/posts/taoyuan-a8-startup-eith-wastewater/), [Chenlu (3)](/blog/en/posts/taoyuan-a8-startup-chenlu-endoscopy/), and [AWAREK (4)](/blog/en/posts/taoyuan-a8-startup-awarek-thermal/).

Of the four, Ruomei is the one I took the most notes on.

The first impression was clear: they were a materials company to begin with, and their axis is next-generation cooling. As AI compute climbs, data centers and high-power devices burn electricity and cooling budget just to carry heat away. Their entry point is not another bigger fan or liquid cold plate. It is materials and the radiation path, plus a thermal simulation layer they are now building on top.

---

## Company status (checked against public records)

After the session I cross-checked public registration and press coverage, so I would not have to look it up again when revising:

- Legal name: Taiwan Ruomei Technology Corp.
- Tax ID 90368415, incorporated August 2022, registration status normal
- Representative: Li Hou-yu; co-founders also include Dr. Chen Chang-han and Lin Ssu-han
- Paid-in capital: roughly NT$21 million (successive raises in 2025 and 2026)
- Base: Nangang, Taipei; the team also mentioned an **owned plant in Qiaotou, Kaohsiung**
- Four technology lines on the website: TRAHVO, SESHATRA, ATONIX, TEFNUT (marked Coming Soon)
- In 2026 they set up a subsidiary, Tefnut Technology, aligned with the TEFNUT software line

Press coverage has mentioned adoption or cooperation with Delta and ADATA among others. For names like these I write "per public statements or reports" and do not treat them as verified production volume. The Qiaotou plant came from the room, not from a document, and can be checked later against plant registration and actual line capacity.

---

## Field notes: customers, Japan, academia, manufacturing

These points came from the room and can be corrected later against slides or contracts:

![Ruomei Technology explaining its cooling materials to the NTUTEC and WPORT teams at A8](https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/taoyuan-a8-ruomei-room.jpg)

- **Global customers**: the team said three years of work has produced **90+** customers worldwide. For a materials startup founded in 2022, that number carries real weight if most of them are paid deployments rather than sample testing.
- **Japan**: there is a Japan line, with distributor contracts under negotiation. Names mentioned included **Elematec**, **Inabata**, **Mabuchi**, and the one I believe was **Sanshin Electronics** (it sounded close to "Sadshin Electronic" in the room). Most of these are electronic materials and components trading houses, a good fit for getting Taiwanese materials into the Japanese supply chain.
- **Academia**: they work with **National Tsing Hua University** and have technical advisors. When a materials company connects lab validation and an advisory network to a university, credibility and later patent or paper backing both improve.
- **Manufacturing**: they mentioned an **owned plant in Qiaotou, Kaohsiung**. This matters. A materials company with only a Nangang office and no line of its own tends to worry customers about lead time and quality control. Owning a plant is consistent with their story of spending on equipment and labs, and with the industrial image of a company heading for the Innovation Board.

Closing a Japanese distributor would mean more than adding a country. It means entering the channel structure of Japanese electronic materials. When a trading house is willing to talk contracts, the product has usually cleared an initial technical and market screen.

---

## The product lines I heard about

### 1. TRAHVO: proprietary polymer, built around radiative cooling

The core story is a proprietary polymer paired with what they call insulating thermally-conductive buckyballs. The point is not to push the K value as high as possible, but to bring **thermal radiation** into the cooling path, so heat does not travel only by contact conduction but can also be released into space.

For PCB and solder-mask ink scenarios, their pitch is usually: you get an extra cooling path without a major process change.

### 2. SESHATRA: 3D-printed structures that are structure and heatsink at once

Take a 3D-printed structure and have it serve as both structural part and cooling part. The direction is designing geometry and material together, rather than sticking on a thermal pad.

### 3. ATONIX: high emissivity, turning heat into infrared photons that leave

Both the room and public specs stress emissivity around **0.98**, close to a black body. The claim is that thermal energy is converted into infrared photons and actively radiated outward. This is also their most memorable and most cross-examined line: **heat through the shell**.

### 4. TEFNUT: in-house AI thermal simulation, fast, but not a replacement for CFD

Their new thermal simulation platform TEFNUT is positioned as **AI thermal simulation**. They stressed in the room that you can host your own server and model, **without depending on Claude, OpenAI** or similar general-purpose LLM APIs.

This is sensitive for B2B, semiconductor, and electronics manufacturing customers. Thermal design data often involves confidential structures and material parameters, and many companies would rather run the model in their own data center than hand cases to an external LLM. Self-hosted server plus in-house model bundles "fast" and "data stays home" into one sales argument.

There was also a practical note from the user side: a semiconductor user said it cannot replace full CFD, but it can handle roughly the first **60%** of the problem, and it is fast. Real engineering was never a one-tool game. You screen quickly, converge the design space, then hand the critical cases to the expensive full simulation.

---

## How I read "ATONIX can push heat through the shell"

The conclusion first: **if "through the shell" means infrared passing through a metal enclosure like an X-ray, it barely holds. If it means "make it easier for heat to reach the enclosure surface from the component or board, then radiate it away with high emissivity," the path is physically sound and closer to the real value of the materials pitch.**

Why it is worth separating:

1. **Metal enclosures are mostly opaque in the mid-infrared.**  
   Metal reflects and absorbs infrared. Heat usually reaches the inner wall first, then leaves by conduction, convection, and radiation from the outer surface. Photons do not simply pass through while keeping the intuitive picture in the pitch.

2. **What high emissivity (ε≈0.98) is really strong at is whether a surface releases heat well.**  
   At the same temperature, higher emissivity means higher radiated power. If ATONIX is coated on or compounded into a suitable surface, the value is closer to turning that surface into a more effective radiator, not opening an invisible tunnel through the enclosure.

3. **Three engineering readings make more sense, and in the room I try to pin down which one applies:**  
   - Heat crosses an air gap or imperfect contact via radiation or interface mechanisms, reducing stacked thermal resistance  
   - Heat spreads to the enclosure faster, making the enclosure part of the system heatsink  
   - For some plastic enclosures or specific wavelength bands, material and structure shorten and improve the path from inside to ambient  

   Ruomei's own public wording includes lines like "heat need not rely only on physical contact and can transfer across interfaces." That reads more like **interface thermal resistance plus radiation assist**, not science-fiction armor penetration.

4. **When writing this up or talking to investors, this is how I use the phrase:**  
   "Heat through the shell" is a memorable slogan, and it deserves follow-up on measurement conditions: which enclosure, metal or plastic? How many degrees of reduction? Against what control? Is there a third-party report?  
   The risk for a materials startup is not being insufficiently flashy. It is that listeners take the slogan as literal physics, and trust collapses the moment verification hits a wall.

So my read in the room: if ATONIX lands on **high-emissivity radiative cooling plus process-friendly adoption**, the story is solid. If it leans too hard on the image of photons passing through a shell, you have to narrow the definition for the listener yourself, or due diligence will stall later.

---

## What this one left me with

Honestly, this is **one of the most solid startups I have seen recently**. It behaves like an industrial business, not a company living off its deck.

It felt like they had assembled most of the key pieces:

- **A real solution**: not a vague pain point, but concrete product lines in materials plus simulation  
- **Technology**: TRAHVO, ATONIX, SESHATRA, plus in-house TEFNUT that does not depend on Claude or OpenAI  
- **Academic collaboration**: work with Tsing Hua and technical advisors, giving validation and expert backing somewhere to land  
- **Customer PoC**: 90+ global customers in three years and Japanese distribution under negotiation, so the commercial evidence feels stronger  
- **Government relationships**: resources and networks from the National Development Council, the Small and Medium Enterprise and Startup Administration, and the Taoyuan Youth Affairs Bureau, which matter for visibility, trust, and access to sites  
- **Money spent where it counts**: spending goes into equipment and labs rather than surface polish. A materials startup that skimps on measurement and process validation tends to fail customer PoCs later, so this sounded grounded  
- **Governance in place early**: they mentioned **internal audit**, and **ERP from day one**. Many startups fight first and add systems later. Building accounting and process systems from the start means fewer make-up exams when facing investors or the Innovation Board  
- **Manufacturing has a home**: the owned plant in Qiaotou keeps "industrial" from being just a Nangang office story  
- **A clear exit path**: they mentioned targeting the **Innovation Board in 2029**, and have thought through **Pre-A → A → B → IPO**, naming IPO as the exit. For someone evaluating deals, this is not a team that only talks product. The fundraising rhythm and exit route already sit on a timeline, which is solid

Other judgments I noted:

- **The problem space is right**: AI and HPC cooling plus power cost is a real, long-lived pain point.  
- **Smart positioning**: they present themselves as a complement to liquid and water cooling, not a wholesale replacement.  
- **Things to keep tracking**: the paid and production share within those 90+ customers, progress on Japanese distribution contracts, Qiaotou capacity and registration, real adoption friction against existing PCB and plastic processes, whether customers accept the boundary between TEFNUT and CFD, which stage they are actually at among Pre-A, A, and B, and how far along the financial and governance preparation for the 2029 Innovation Board really is.

Plenty of startups stall at "cool technology, nobody buying" or "people will listen, but there is no deployable solution." Ruomei at least had narrative and evidence aligned: solution, technology, academia, PoC, government network, and an owned plant all showed up together, along with funding rounds, IPO exit, internal audit, and ERP. That is why I use the word solid.

One honest caveat: I do not come from a materials background. The section above where I take apart "heat through the shell" is something I only dared write after going home and reading up, and Ruomei's engineers would probably want to add a few corrections. If I have misunderstood something, please tell me.

---

## Taoyuan A8 deal notes (four companies)

- (1) Ruomei Technology: AI cooling burns cash, so start from radiation on the materials side
- [(2) EITH: turning wastewater into resources, and making a pitch non-experts can follow](/blog/en/posts/taoyuan-a8-startup-eith-wastewater/)
- [(3) Chenlu Technology: AI dual-lens endoscope, SaMD first, then single-use scopes](/blog/en/posts/taoyuan-a8-startup-chenlu-endoscopy/)
- [(4) AWAREK: sensor fusion thermal imaging, partnering with tender-bidding SIs](/blog/en/posts/taoyuan-a8-startup-awarek-thermal/)
