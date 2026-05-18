# Task 03 — Compare Latency Across Distances

## Objective
Observe how geographic distance, routing paths, and internet infrastructure affect latency and packet travel behavior.

---

# Commands Executed

```bash
tracert google.com
tracert yahoo.co.jp
tracert bbc.co.uk
```

---

# Raw Results Summary

## google.com
- Approximate hops: 13
- Final latency: ~70ms
- Multiple latency spikes observed
- One timeout observed

---

## yahoo.co.jp
- Approximate hops: 25
- Final latency: ~170ms–225ms
- Multiple international routing hops observed
- Several timeouts observed

---

## bbc.co.uk
- Approximate hops: 8
- Final latency: ~15ms
- Extremely short and fast route

---

# Observation 1

Different geographic destinations produced very different latency and routing behavior.

---

## Possible Explanation (Suggested by ChatGPT)

Physical geography, routing efficiency, infrastructure placement, ISP peering, and CDN architecture all affect packet travel behavior.

---

## My Current Understanding

I understand that:
- internet traffic is affected by physical geography,
- packets travel through real infrastructure,
- and routing paths strongly affect latency.

I do NOT yet fully understand:
- global internet infrastructure,
- submarine cable systems,
- internet backbone routing,
- autonomous systems.

---

## Investigation Queue

Need to study:
- internet backbone
- submarine cables
- global routing
- autonomous systems

---

# Observation 2

Yahoo Japan required significantly more hops and higher latency than the other destinations.

- Approximate hops: 25
- Final latency: ~200ms

Latency gradually increased during the route.

---

## Possible Explanation (Suggested by ChatGPT)

The route likely traveled across multiple international networks and geographic regions before reaching Japan.

Longer physical distance and more routing complexity may have increased latency.

---

## My Current Understanding

I understand that:
- longer geographic routes may increase latency,
- and packets traveling internationally likely pass through more infrastructure.

I do NOT yet fully understand:
- international routing,
- undersea cable systems,
- inter-country traffic exchange,
- routing optimization.

---

## Investigation Queue

Need to study:
- undersea internet cables
- international routing
- traffic exchange
- global ISP infrastructure

---

# Observation 3

The Yahoo Japan trace included infrastructure names that appeared geographic.

Examples:
- sng-b7-link.ip.twelve99.net
- tky009bb10
- osk011bb00

---

## Possible Explanation (Suggested by ChatGPT)

These names may reference:
- Singapore
- Tokyo
- Osaka

This may indicate that packets physically traveled across multiple regions in Asia.

---

## My Current Understanding

I understand that:
- router/infrastructure names may contain geographic hints,
- and routing paths may reveal packet travel regions.

I do NOT yet fully understand:
- enterprise routing naming conventions,
- infrastructure mapping,
- internet carrier networks.

---

## Investigation Queue

Need to study:
- carrier infrastructure
- router naming conventions
- network providers
- global transit networks

---

# Observation 4

BBC UK completed in surprisingly few hops and very low latency.

- Approximate hops: 8
- Final latency: ~15ms

This was unexpectedly faster than Yahoo Japan.

---

## Possible Explanation (Suggested by ChatGPT)

The request may have been routed to a nearby CDN edge server instead of a server physically located deep inside the UK.

Modern websites often distribute infrastructure globally.

---

## My Current Understanding

I understand that:
- websites may use globally distributed infrastructure,
- and nearby edge servers can reduce latency dramatically.

I do NOT yet fully understand:
- CDN internals,
- edge server distribution,
- traffic redirection,
- caching infrastructure.

---

## Investigation Queue

Need to study:
- CDN architecture
- edge servers
- caching
- distributed infrastructure

---

# Observation 5

Hop count did NOT directly correlate with geographic distance.

Examples:
- BBC UK → 8 hops
- Yahoo Japan → 25 hops

---

## Possible Explanation (Suggested by ChatGPT)

Hop count depends on routing architecture and infrastructure design, not just physical distance alone.

---

## My Current Understanding

I understand that:
- more hops do not automatically mean farther distance,
- and routing efficiency strongly affects network behavior.

I do NOT yet fully understand:
- route optimization,
- traffic engineering,
- path selection algorithms.

---

## Investigation Queue

Need to study:
- traffic engineering
- route optimization
- path selection
- internet routing logic

---

# Observation 6

Traceroute latency fluctuated heavily during some hops.

Some hops reached:
- 400ms+
- 700ms+
- 800ms+

Yet later hops sometimes became faster again.

---

## Possible Explanation (Suggested by ChatGPT)

Routers may:
- deprioritize ICMP responses,
- rate-limit traceroute traffic,
- or respond differently to diagnostic packets.

Traceroute latency does not always equal real application latency.

---

## My Current Understanding

I understand that:
- traceroute reflects router response behavior,
- and some routers treat diagnostic traffic differently.

I do NOT yet fully understand:
- ICMP prioritization,
- router scheduling,
- packet handling policies,
- diagnostic traffic management.

---

## Investigation Queue

Need to study:
- ICMP handling
- packet prioritization
- router scheduling
- diagnostic protocols

---

# Observation 7

Several hops timed out during the traces.

However, the routes still completed successfully afterwards.

---

## Possible Explanation (Suggested by ChatGPT)

Some routers likely:
- hide themselves,
- block ICMP responses,
- or intentionally refuse traceroute visibility.

Traffic still continued normally.

---

## My Current Understanding

I understand that:
- diagnostic visibility and routing functionality are different things.

I do NOT yet fully understand:
- firewall behavior,
- ICMP filtering,
- hidden routing infrastructure,
- security policies.

---

## Investigation Queue

Need to study:
- firewalls
- ICMP filtering
- network security
- hidden infrastructure

---

# Things I Learned During This Experiment

- The internet is a geographically distributed physical infrastructure system.
- Packets travel through real routers, cables, and regional infrastructure.
- Geographic distance can affect latency.
- Routing efficiency matters as much as physical distance.
- Hop count alone does not determine latency.
- Modern websites often use CDN infrastructure.
- Packets may not always travel to the website's original country.
- Router names may contain geographic hints.
- Traceroute measures diagnostic responses, not always true application latency.
- Internet traffic can cross multiple countries and regions before reaching its destination.

---

# Errors / Confusions Encountered

Initially, I assumed:
- more hops always means farther distance,
- and UK websites should automatically be slower than Japan from India.

The experiment showed that:
- routing architecture and CDN infrastructure heavily affect latency behavior.

---

# Further Curiosity

Questions I currently have:
- How do submarine internet cables work?
- How does internet traffic cross oceans?
- What are CDNs internally?
- How do routers choose paths globally?
- What are autonomous systems?
- How do ISPs exchange traffic internationally?
- How do edge servers decide where to serve content from?
