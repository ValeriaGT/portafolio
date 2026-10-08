---
# Translated from texto.es.md. Delete the "traduccion" line once you've reviewed it.
traduccion: por revisar
titulo: Acelera
bajada: Built to support how teams manage strategy, not just to log OKRs
rol: Research, analysis and proposal (team of 3) · Clickable prototype
resumen: How to get people who finish Acelera's onboarding to keep using the platform beyond OKRs, with an in-product guidance proposal and an A/B test plan to measure it.
origen: Final project · Product Metrics and Strategy Program, Repensar
periodo: September 2026
equipo: Group 4 · Daniela Rodriguez, Valeria Garzón and Brenda Chacaltana
portada: ./02-okrs-completos.png
portadaAlt: Acelera's OKR screen with a green banner reading "Your OKRs are complete — create a project in the Strategic Roadmap" and a button to go to the Roadmap.
prototipo: https://valeriagt.github.io/acelera-prototipo/
destacado: true
orden: 1
---

## Summary

Acelera is a platform that brings together tools for teams' strategic management: OKRs, KPIs, strategic planning, roadmap, backlog, initiatives and reports. The data showed that almost every user completed onboarding, but very few kept using the platform beyond OKRs.

We proposed adding contextual guidance inside the product (alerts, a guided tour and in-product signals) and designed a 3-month A/B test to check whether it changes user behavior.

> Adoption doesn't need more features. It needs continuity.

## Context and problem

Having features available doesn't necessarily make them part of users' day-to-day work. Metrics from the last 3 months showed that users arrive at Acelera, but not all of them continue the journey:

- **98%** complete onboarding.
- **73.1%** of sessions happen in OKRs, the most used feature.
- [PENDING: confirm how to read the "-5%" figure for "Other modules explored by users"]

**Opportunity:** 88% of licenses have not yet turned into recurring users. Of 1,715 base users with an active license (not read-only), 200 are monthly active users (MAU), or 11.66%.

**How might we** make Acelera part of users' workflow, driving recurring adoption of its different features?

## Research

**Conversion funnel.** Onboarding works: 98% complete it within 14 days (44 of 45 new users) and create their first real strategic element, an OKR. The drop happens between "first OKR" and "explores another module".

| Section | Sessions |
| --- | --- |
| OKRs | 73.1% |
| KPIs | 5.0% |
| Plan | 4.6% |
| Roadmap | 4.6% |
| Backlog | 1.9% |

Of the users who log in each month, 17 come back the same day and 49 within the week. Conversion depends on users returning to the platform, and how often they return varies with each person's work process.

**Beyond the data.** Onboarding covers the first OKRs and opens the initial modules. Content on YouTube and LinkedIn goes into more detail on how to write OKRs, and part of the YouTube content about the sections is repeated on the Home screen.

![Acelera's YouTube channel showing six videos: what the platform is, OKRs and AI, a 30-second intro, a testimonial, a results video and a welcome video](./04-contenido-youtube.png)

**Hypothesis.** Active users lack knowledge or understanding of the sections, because the product assumes that after onboarding they'll be able to use the platform on their own.

## Design process

**What we want to change in the next 3 months**

- **OKR:** diversify platform use beyond OKRs, turning newly onboarded users into active users by bringing valuable features into their workflow.
- **KR 1, MAU:** increase MAU among users with edit permissions (not read-only) from 11.6% to 15% by the end of the third month.
- **KR 2, sessions:** increase sessions in features other than OKRs from 26.9% to 40%.

We prioritized behavioral metrics. A later stage would add relational NPS or CES to measure satisfaction, perception and ease of use.

**Four guidance areas explored**

1. **Visually communicate the next step:** checklists, notifications, banners that connect modules, contextual recommendations, tutorials and a chatbot.
2. **Interactive, reusable onboarding:** calls to action to open each module for the first time, step-by-step cues and a guide users can come back to.
3. **Progressive in-product signals:** tooltips, instructional messages and contextual help, as in "Achievement level".
4. **Encourage behavior and return visits:** progress, light gamification, social proof, reminders, newsletters or stories that invite users back.

**One shared strategy: Discover, Guide and Reinforce**

1. **Make the next step visible**, so the journey doesn't end right after the OKR.
2. **Keep a persistent guide and explain the context.** Once users notice the signal, we explain how and why, reducing the effort of learning new modules alone.
3. **Reinforce behavior so users come back.** Each completed action shows visual progress, so coming back feels like moving forward.

## Validation

The project's scope went as far as the validation plan: the guerrilla test and the A/B test were designed but not run. The proposal would be validated in two steps:

1. **Evaluative research with guerrilla testing**, to refine the proposal quickly.
2. **An A/B test**, to check whether it produces a real behavior change and confirm the improvement comes from the intervention and not from other factors.

**Experiment hypothesis.** If we add contextual guidance inside the platform for users who have completed onboarding and created their first OKRs, they will bring other modules into their monthly workflow and perceive more value over the next 3 months, because today they depend on discovering them alone.

**Experiment design**

- **Universe:** 1,715 non-read-only users with an active license.
- **Sample:** 125 to 135 new users onboarded during the pilot (about 42 per month).
- **Duration:** 3 months of enrollment plus 14 days of observation.
- **Control group (62 users):** current platform, with no completeness alerts on OKRs and no guided onboarding in the Roadmap.
- **Test group (63 users):** full prototype, with completeness alerts on OKRs (initiative, owner and team) and guided onboarding in the Strategic Roadmap.

**Primary metric:** % of users who create a project within 7 days of their first OKR.

**Secondary metrics:**

- % of new users who use at least 2 modules other than OKRs in their first 14 days.
- % of commitments with an updated status within the week.
- % of sessions in KPIs, comparing the control and test groups.

## Final solution

The intervention has three elements. You can try them in the [clickable prototype](https://valeriagt.github.io/acelera-prototipo/) I built (in Spanish).

### 1. Alerts in the OKR flow

A tag on the OKRs tab and an explanatory banner flag missing information. Icons in the "Aligned to" column turn red when alignment is missing and green when it's complete.

![OKR screen with a yellow warning banner: "1 OKR has no associated initiative. Add an owner, a team and a KPI or initiative to each KR"](./01-alerta-okr-incompleto.png)

When the user completes the data, the alert turns green and invites them to the next module.

![The same screen with a green banner: "Your OKRs are complete — create a project in the Strategic Roadmap", with a "Go to Strategic Roadmap" button](./02-okrs-completos.png)

### 2. Guided tour in the Strategic Roadmap

Five steps that explain how the module works the first time a user opens it. It can be skipped and resumed whenever the user needs it. It doesn't interrupt; it guides.

![Strategic Roadmap screen with a "View tour" button in the top right corner to start or resume the guided tour](./03-roadmap-tour-guiado.png)

### 3. Badge and contextual signals

A "1 new" badge leads to each section with an alert or banner, and a tooltip explains the "Achievement level" column.

### What we expect to achieve

Close the gap between completing OKR onboarding and adopting the whole platform, without relying on users to discover it on their own. The targets by the end of the third month are to raise non-read-only MAU from 11.6% to 15% and sessions outside OKRs from 26.9% to 40%, with the Roadmap expected to see the most activity because it's the closest to the OKR already created.

**Additional backlog, by priority**

- **Medium:** reusable guided onboarding with step-by-step highlighting, available more than once.
- **Low:** more guidance to understand OKR labels.
- **Minimal:** a check-in session in the first or second month, prioritizing clients with more active users, and a chatbot that guides users step by step through creating modules.

## Learnings

- **Data shows where users drop off, not why.** The funnel pointed to the gap between the first OKR and the next module. Understanding the cause meant looking beyond the data: the onboarding, the content on YouTube and LinkedIn, and what the product assumes users already know.
- **Low adoption isn't solved with more features.** Acelera already had the tools; what was missing was continuity between them. That's why the proposal guides users toward existing modules instead of adding new ones.
- **Define the metric before the screen.** Setting the OKR, the KRs and the experiment's primary metric first gave us a way to converge: four explored areas became one shared strategy and three measurable interventions.
- **Measure behavior first, perception later.** What users do (MAU, sessions, projects created) is a more direct signal for deciding what to iterate. NPS or CES are left for a later stage.
- **A validation plan is design work too.** Defining the universe, sample, groups and duration forces the hypothesis to be concrete. Since the experiment wasn't run, the figures in this case are targets, not results.
