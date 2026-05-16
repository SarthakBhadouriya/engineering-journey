# Task 01 — Ping Investigation

## Objective
Understand how ping works and observe how different hosts respond across the internet.

---

# Commands Executed

```bash
ping -n 5 google.com
ping -n 5 cloudflare.com
ping -n 5 8.8.8.8
```

---

# Raw Results

## google.com
- Average latency: 48ms
- Minimum latency: 31ms
- Maximum latency: 88ms
- Packet loss: 0%

Observed a few latency spikes.

---

## cloudflare.com
- Average latency: 35ms
- Minimum latency: 34ms
- Maximum latency: 36ms
- Packet loss: 0%

Responses were very stable and consistent.

---

## 8.8.8.8
- Average latency: 67ms
- Minimum latency: 33ms
- Maximum latency: 125ms
- Packet loss: 0%

Large latency spikes observed.

---

# Observation 1

Different hosts responded with different average latencies.

- google.com → 48ms
- cloudflare.com → 35ms
- 8.8.8.8 → 67ms

---

## Possible Explanation (Suggested by ChatGPT)

Different hosts may:
- exist in different physical locations,
- use different routing paths,
- have different infrastructure,
- or connect differently with my ISP.

---

## My Current Understanding

I currently understand that:
- physical distance probably affects latency,
- routing likely affects speed,
- and different companies may have different infrastructure setups.

I do NOT yet fully understand:
- ISP peering,
- routing optimization,
- CDN edge infrastructure,
- internet backbone routing.

---

## Investigation Queue

Need to study:
- ISP peering
- CDN infrastructure
- network routing basics
- how internet traffic travels globally

---

# Observation 2

Cloudflare responses were significantly more stable than Google or 8.8.8.8.

Cloudflare stayed consistently around:
- 34ms–36ms

while the others fluctuated more.

---

## Possible Explanation (Suggested by ChatGPT)

Cloudflare may have infrastructure geographically closer to my ISP or better routing paths.

---

## My Current Understanding

I understand that:
- server location and routing may affect consistency,
- and some infrastructure may be optimized differently.

I do NOT yet understand:
- edge servers,
- CDN architecture,
- route optimization,
- latency stabilization.

---

## Investigation Queue

Need to study:
- edge servers
- CDN architecture
- routing efficiency
- why latency fluctuates

---

# Observation 3

Latency was not constant.

Examples:
- Google reached 88ms
- 8.8.8.8 reached 125ms

---

## Possible Explanation (Suggested by ChatGPT)

Latency may fluctuate because of:
- temporary congestion,
- WiFi instability,
- packet queueing,
- or dynamic routing changes.

---

## My Current Understanding

I understand that:
- networks are dynamic systems,
- and packets may not always travel identically.

I do NOT yet understand:
- congestion handling,
- packet queueing,
- route switching,
- traffic balancing.

---

## Investigation Queue

Need to study:
- congestion
- queueing
- dynamic routing
- traffic management

---

# Observation 4

Domain names resolved into IP addresses before communication began.

Examples:
- google.com → 142.250.76.206
- cloudflare.com → 104.16.132.229

---

## Possible Explanation (Suggested by ChatGPT)

The system likely contacts DNS servers first to translate human-readable domain names into machine-readable IP addresses.

---

## My Current Understanding

I understand that:
- DNS converts names into IP addresses,
- and internet communication fundamentally uses IP addresses.

I do NOT yet understand:
- how DNS resolution works internally,
- recursive DNS resolution,
- DNS caching,
- authoritative DNS servers.

---

## Investigation Queue

Need to study:
- DNS resolution flow
- recursive resolvers
- DNS hierarchy
- DNS caching

---

# Observation 5

TTL values differed across hosts.

Examples:
- google.com → TTL 112
- cloudflare.com → TTL 53
- 8.8.8.8 → TTL 112

---

## Possible Explanation (Suggested by ChatGPT)

TTL may decrease as packets pass through routers, or different systems may initialize packets with different starting TTL values.

---

## My Current Understanding

I understand that:
- routers somehow affect TTL values,
- and packets probably cannot travel infinitely.

I do NOT yet understand:
- how TTL actually works,
- hop counting,
- router packet forwarding,
- default TTL initialization.

---

## Investigation Queue

Need to study:
- TTL
- packet hops
- routers
- packet forwarding

---

# Errors Encountered

## Mistake

```bash
ping -n cloudflare.com
```

---

## Result

```txt
Bad value for option -n
```

---

## Cause

The packet count argument was missing.

---

## Fix

```bash
ping -n 5 cloudflare.com
```

---

# Key Learnings

- Ping measures round-trip latency.
- Different hosts respond differently.
- Network latency fluctuates dynamically.
- DNS resolution happens before communication with domain names.
- Internet communication fundamentally uses IP addresses.
- Real engineering involves experimentation, mistakes, corrections, and investigation.

---

# Further Curiosity

Questions I currently have:
- How exactly does DNS work internally?
- Why do routes on the internet change?
- How many routers exist between me and Google?
- What physically happens when a packet travels across the internet?
- How do CDNs reduce latency?
