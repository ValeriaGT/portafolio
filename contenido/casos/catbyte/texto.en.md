---
# Translated from texto.es.md. Delete the "traduccion" line once you've reviewed it.
traduccion: por revisar
titulo: Catbyte
bajada: A platform to build your ideal computer, understand it and make it your own
rol: Research and proposal as a pair · Self-initiated prototype and design library
resumen: Research and proposal for a custom computer store, developed as a pair during the bootcamp. I later continued independently with the prototype and design system library to turn the proposal into a guided shopping experience.
origen: UX/UI bootcamp at BIT · Independent product design continuation
periodo: Sep – Dec 2025
equipo: Valeria Garzón and Lianna González
portada: ./01-portada.jpg
portadaAlt: Catbyte project cover, with the logo of a cat biting a game controller and the names Valeria Garzón and Lianna González.
destacado: true
borrador: false
orden: 3
estado: Bootcamp research · Self-initiated prototype and design library in progress
---

## Summary

**Two stages with different scopes.** Research and the value proposition were the bootcamp deliverable, developed with Lianna González. I later chose to continue independently to build the prototype and design system library. This second stage was not part of the academic deliverable.

Catbyte is a proposal for a trustworthy, appealing platform to buy custom computers (built around each person's needs and taste), consoles, controllers and geek and otaku products. What sets it apart is step-by-step guidance, so even people who don't know about hardware can make good decisions.

I developed it with Lianna González in the UX/UI Design Bootcamp at BIT: interviews, benchmarking of five competitors, user personas, empathy maps and a survey, which led to the value proposition and the key features.

> This platform doesn't just sell computers, it helps people understand them, build them and make them their own.

## Context and problem

Many people want a PC or a console, but don't know which components to choose or where to buy safely. The console and PC market in Colombia is full of unreliable sites with little guidance.

The proposal aimed for impact on three fronts:

- **Transparency and trust** in a market where customers often don't understand what they're buying.
- **A local alternative** that combines e-commerce with tech education and taste, narrowing the digital divide.
- **Access** to the right equipment for work, study or gaming without overpaying.

## Research

**Interviews.** We talked to people aged 20 to 30, students in creative and technical fields such as digital communication, visual design and architecture, who look for tools to perform well in those areas.

- They use their computer every day to study, design, illustrate and edit, and need good processing power and graphics performance.
- They've bought "gaming" or mid-to-high-end machines that later felt overpriced or quickly fell short.
- Information is scattered, incomplete and poorly suited to their real needs.
- They didn't feel guided when buying. They'd like advice on which machine or components fit their use and budget.
- They're frustrated by stock shortages, confusing technical information, unclear pricing and having to buy parts in different places.

![Interview results: user profile and answers about computer use, last purchase, information sources, doubts and frustrations. In Spanish](./02-entrevistas.jpg)

**Benchmarking.** We analyzed Origin PC, Aftershock, Versus, Alienware and Maingear across strengths, weaknesses, navigation, vocabulary and design. The conclusions:

- Custom PC sites are aspirational and visual, but give little guidance to people who don't know about hardware and rarely show the inside of the product.
- Versus is clear and objective for comparing, but doesn't sell or guide. The opportunity was to merge a comparison tool's technical clarity with the brands' aspirational, personalized feel.
- Big brands focus on high-budget gamers, often in English and with prices in dollars, which creates barriers for the Colombian market.

![Analysis of Origin Custom Labs, one of the five competitors: strengths, weaknesses, navigation, vocabulary, design and conclusions. In Spanish](./03-benchmark-origin.jpg)

**User personas and empathy maps.** We built two personas from the interviews: a designer who wants to compare computers "without getting tangled up in so many specs" and a designer for whom "there's always something missing from the ideal computer". Their empathy maps agree: they look for efficiency, comfort and aesthetics, are frustrated by prices and their lack of technical knowledge, and distrust sellers.

![Empathy map with what the persona hears, thinks and feels, sees, says and does, their pains and the outcomes they seek. In Spanish](./04-mapa-empatia.jpg)

**Survey.** More than 80% of respondents buy technology at least once a year.

| Biggest obstacle when buying | % |
| --- | --- |
| High prices | 34.5% |
| Complexity of use | 20.8% |
| Part compatibility issues | 17.3% |
| Lack of trust in sellers | 17% |
| Not being able to see the product in person | 10.4% |

- **Preferred guidance:** 50% want a mix of automated guidance and a human advisor, 33.3% a human advisor and 16.7% prefer to do it on their own. Nobody chose only a chatbot or only a step-by-step guide.
- **Building a PC:** 41.7% have already built or bought a custom one and 58.3% haven't, but would like to.
- **Most useful tools:** an automatic quote with the total price in real time, recommendations by use and budget, a component comparison and a 3D preview of the final design.
- **What would build trust:** clear warranties and tech support, expert advice and transparent pricing.

![Survey results: obstacles when buying technology, preferred type of guidance and whether they've built a custom PC. In Spanish](./05-encuesta.jpg)

**Survey preferences.** The poster reports the following selection counts; these are not task success rates or outcomes from a live product.

| Proposed tool | Selections |
| --- | --- |
| Quote with total price in real time | 11 |
| Recommendations by use and budget | 9 |
| Component and performance comparison | 9 |
| 3D preview | 8 |
| Marketplace to sell or exchange equipment | 3 |

Performance received 11 selections as an aspect to customize, compared with 5 for RGB lighting and 4 for case color and shape. The most selected motivations were improving performance (12) and saving money when choosing parts (9). This supports a focus on utility and budget alongside aesthetics. The poster does not specify the total sample or whether each question allowed multiple answers.

## Design process

Two needs from the research shaped the proposal:

1. **They want a PC but don't know what to choose.** Answer: an interactive configurator where you pick what the machine is for (gaming, study, design or office) and get a recommended build in seconds.
2. **They don't trust where to buy.** Answer: transparent prices, warranty and clear guidance for every product.

Catbyte's identity, a gamer cat with an urban look and neon accents, was designed to connect with a young, creative and geek audience, in contrast with the cold look of high-performance brands.

**Independent continuation.** The poster documents the bootcamp deliverable: research and proposal. I later continued building the prototype and design system library on my own initiative, outside the academic scope. This stage is in progress; components, states and complete flows will be added as they are ready.

## Validation

The survey captures stated needs and preferences: 50% prefer a combination of automated guidance and a human advisor, while the quote, recommendations and comparison tools received the most selections. This informs the proposal, but does not establish interface usability or purchasing behavior.

The poster does not document usability tests, findings from five participants or changes following a test. Flow evaluation remains pending while I develop the UI system.

### Proposed iteration: simulated review from five profiles

**Method and limits.** This is an AI-assisted scenario exercise based on the documented research. No five real participants took part, no functional interface was tested, and these observations are not testimonials or usability findings. They help prepare the next iteration of the UI system in progress.

| Simulated profile | Potential difficulty to investigate | Proposed change for the next iteration |
| --- | --- | --- |
| Student on a limited budget | Not knowing whether the initial price includes everything needed to use the computer. | Show available budget, total price and included items; explain every price change. |
| Designer with limited hardware knowledge | Not being able to relate CPU, GPU and RAM to the needs of their software. | Start with tasks and software; explain component recommendations in plain language. |
| Gamer familiar with components | Feeling that automatic recommendations prevent choosing and comparing alternatives. | Allow manual editing and component comparisons; show compatibility warnings with explanations. |
| First-time custom PC buyer | Doubting compatibility, warranty and who to contact if something fails. | Make support, warranty and compatibility visible before confirmation; provide access to a human advisor. |
| Buyer focused on aesthetics | Treating the preview as an exact representation of the final product. | Distinguish an illustrative preview from the selected configuration; show components, colors and preview limitations. |

**Proposed work order.** First design the flow: use and budget → recommendation → component editing → price and compatibility summary → help or confirmation. Then define components and loading, empty, error and success states. Explore the 3D preview later, since the quote, recommendations and comparison tools received more survey selections.

**How to evaluate this iteration with real people.** Test the prototype with five participants covering different knowledge levels and budgets. Ask them to choose a computer for a specific use, keep it within budget, change a component, explain price and compatibility, and find help and warranty information. Record unassisted completion, errors, uncertainty and comprehension; identify changes before a second round. A small sample can reveal issues, but cannot estimate outcomes for the whole market.

**Iteration status.** Proposed changes, pending design and testing. No achieved improvements or participant scores are reported.

## Final solution

**Proposed solution, still in development.** A platform to:

- **Buy everything in one place**, with warranty and support.
- **Choose each component:** CPU, GPU, RAM, case, lighting and peripherals.
- **Get smart guidance**, from AI and a human expert, that ensures compatibility and performance.
- **Preview the computer in 3D**, with its design and total price in real time.
- **Filter by budget or use profile**, from student to gamer or designer.

![Catbyte's proposal: buy everything in one place with warranty, choose each component, AI plus human guidance, 3D preview with real-time price and filters by budget or use profile. In Spanish](./06-propuesta.jpg)

## Learnings

- **Trust weighs as much as price.** Price was the most mentioned obstacle, but lack of trust, complexity and compatibility together outweigh it. A tech store sells peace of mind, not just machines.
- **People want help, but not in just one form.** Nobody chose only a chatbot or only a guide. Hybrid AI-plus-human guidance came from the data, not from an assumption.
- **Benchmarking is for finding gaps, not for copying.** No competitor combined technical clarity with aspiration and guidance. That gap became the value proposition.
- **Combining interviews and a survey.** The interviews explained why people were frustrated; the survey helped prioritize what to build first.
- **Working as a pair.** Splitting the research and comparing readings with Lianna made the conclusions stronger.
