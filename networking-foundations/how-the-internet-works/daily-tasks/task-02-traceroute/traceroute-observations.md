# Task 02 — Traceroute Investigation

## Objective
Understand how packets travel across networks and observe the intermediate systems involved in internet routing.

---

# Commands Executed

```bash
tracert google.com
tracert cloudflare.com
```

---

# Raw Results Summary

## google.com
- Total hops: 13
- Significant latency spike observed at hop 10
- Final destination:
  pnbomb-bb-in-f14.1e100.net

---

## cloudflare.com
- Total hops: 11
- One timeout observed at hop 8
- Final destination:
  104.16.132.229

---

# Observation 1

Packets did not travel directly from my laptop to the destination server.

Instead, packets moved through multiple intermediate systems.

---

## Possible Explanation (Suggested by ChatGPT)

Internet traffic is routed hop-by-hop through interconnected routers and ISP infrastructure.

Each router forwards packets toward the destination.

---

## My Current Understanding

I understand that:
- packets travel through multiple routers,
- routers forward traffic step-by-step,
- and the internet is made up of interconnected networks.

I do NOT yet fully understand:
- how routers decide paths,
- routing protocols,
- internet backbone infrastructure,
- autonomous systems.

---

## Investigation Queue

Need to study:
- routing basics
- autonomous systems
- internet backbone
- packet forwarding

---

# Observation 2

Cloudflare completed in fewer hops than Google.

- Cloudflare → 11 hops
- Google → 13 hops

Cloudflare also showed lower latency during Task 01.

---

## Possible Explanation (Suggested by ChatGPT)

Cloudflare may be physically closer or reachable through a more efficient routing path.

Fewer hops may contribute to lower latency.

---

## My Current Understanding

I understand that:
- routing paths affect latency,
- and packets traveling through fewer routers may sometimes arrive faster.

I do NOT yet fully understand:
- routing optimization,
- ISP peering,
- CDN edge infrastructure,
- geographic traffic distribution.

---

## Investigation Queue

Need to study:
- ISP peering
- CDN infrastructure
- routing efficiency
- edge servers

---

# Observation 3

Many early hops used private IP addresses.

Examples:
- 192.168.x.x
- 172.x.x.x
- 10.x.x.x

---

## Possible Explanation (Suggested by ChatGPT)

These likely belong to:
- my home network,
- ISP internal infrastructure,
- or private routing systems before entering the wider public internet.

---

## My Current Understanding

I understand that:
- not every router on the internet has a public IP,
- and packets travel through internal infrastructure before reaching public networks.

I do NOT yet fully understand:
- private IP ranges,
- NAT,
- ISP internal architecture,
- local vs public networking.

---

## Investigation Queue

Need to study:
- private IP ranges
- NAT
- local networking
- ISP infrastructure

---

# Observation 4

A massive latency spike appeared during the Google trace.

Example:
- Hop 10 reached ~447ms

But later hops returned to normal latency.

---

## Possible Explanation (Suggested by ChatGPT)

Some routers may:
- deprioritize traceroute traffic,
- respond slowly to ICMP packets,
- or rate-limit diagnostic responses.

This does NOT necessarily mean actual internet traffic slowed down equally.

---

## My Current Understanding

I understand that:
- traceroute measures router response behavior,
- and routers may treat diagnostic traffic differently.

I do NOT yet fully understand:
- ICMP handling,
- router prioritization,
- rate limiting,
- diagnostic packet behavior.

---

## Investigation Queue

Need to study:
- ICMP
- router rate limiting
- packet prioritization
- diagnostic protocols

---

# Observation 5

Cloudflare traceroute showed a timeout at hop 8.

```txt
* * * Request timed out.
```

But the route still completed successfully afterwards.

---

## Possible Explanation (Suggested by ChatGPT)

That router likely:
- ignored traceroute packets,
- blocked ICMP responses,
- or intentionally hid itself.

Traffic was still forwarded normally.

---

## My Current Understanding

I understand that:
- some routers may forward traffic while refusing diagnostic visibility.

I do NOT yet fully understand:
- firewall behavior,
- ICMP filtering,
- hidden routers,
- network security policies.

---

## Investigation Queue

Need to study:
- ICMP filtering
- firewall rules
- network security
- hidden infrastructure

---

# Observation 6

The final Google destination included:

```txt
1e100.net
```

---

## Possible Explanation (Suggested by ChatGPT)

This domain belongs to Google's infrastructure.

The name references:
```txt
10^100
```

called:
```txt
a googol
```

which inspired the name "Google".

---

## My Current Understanding

I understand that:
- large companies maintain their own networking infrastructure and domains.

I do NOT yet fully understand:
- large-scale internet infrastructure,
- enterprise networking,
- Google's global network architecture.

---

## Investigation Queue

Need to study:
- enterprise infrastructure
- global networking
- Google network architecture

---

# Things I Learned During This Experiment

- Traceroute works by intentionally manipulating TTL values.
- Routers decrease TTL as packets travel through the network.
- Internet packets travel hop-by-hop instead of directly to the destination.
- Different routing paths may affect latency.
- Fewer hops may sometimes correlate with lower latency.
- Private IP addresses appear inside ISP/internal infrastructure.
- Traceroute does not always represent true application latency.
- Routers may intentionally ignore or hide diagnostic responses.
- The internet is a giant interconnected routing system rather than a single unified network.

---

# Errors / Confusions Encountered

Initially, I did not understand:
- what TTL actually meant,
- how tracert discovers routers,
- why timeout hops still allow traffic forwarding,
- and why latency spikes can appear temporarily.

These became clearer after discussing how traceroute works internally.

---

# Further Curiosity

Questions I currently have:
- How do routers decide the next hop?
- What exactly is ICMP?
- How does the internet backbone work?
- What are autonomous systems?
- How do CDNs reduce latency globally?
- How do ISPs exchange traffic?

ONE IMPORTANT INSIGHT ABOUT TTL (Time to Live Values)

We should be careful not to oversimplify:

Even though fewer hops GENERALLY imply a lower latency but
fewer hops do not NECESSARILY imply a lower latency

because:

one long-distance hop can be huge,
one congested router can dominate latency,
fiber distance matters,
routing quality matters,
ISP peering matters,
infrastructure quality matters.