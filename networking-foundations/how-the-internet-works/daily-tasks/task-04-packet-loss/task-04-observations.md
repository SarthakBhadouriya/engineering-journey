# Task 04 — Observe Packet Loss

## Objective
Observe packet loss behavior over time and understand how network reliability affects communication performance.

---

# Commands Executed

```bash
ping -n 50 google.com
```

---

# Raw Results Summary

- Packets sent: 50
- Packets received: 49
- Packet loss: 2%
- Minimum latency: 38ms
- Maximum latency: 350ms
- Average latency: 61ms

---

# Observation 1

A real packet loss event occurred during the experiment.

- 1 out of 50 packets was lost.
- One request completely timed out.

---

## Possible Explanation (Suggested by ChatGPT)

The packet may have:
- been dropped,
- expired,
- encountered congestion,
- or failed somewhere during transmission.

Real-world networks are not perfectly reliable systems.

---

## My Current Understanding

I understand that:
- packets can sometimes disappear during transmission,
- and internet communication is not always perfectly stable.

I do NOT yet fully understand:
- how packet loss happens internally,
- congestion handling,
- retransmission systems,
- TCP reliability mechanisms.

---

## Investigation Queue

Need to study:
- packet loss
- retransmission
- TCP reliability
- congestion handling

---

# Observation 2

Most latency values stayed around:
- 38ms–45ms

But occasional spikes appeared:
- 80ms
- 100ms
- 350ms

---

## Possible Explanation (Suggested by ChatGPT)

Temporary instability may have caused:
- congestion,
- buffering,
- queueing,
- WiFi interference,
- or routing fluctuations.

---

## My Current Understanding

I understand that:
- network latency is dynamic,
- and real networks fluctuate over time.

I do NOT yet fully understand:
- buffering,
- queueing,
- congestion behavior,
- transient instability.

---

## Investigation Queue

Need to study:
- queueing
- buffering
- congestion
- network instability

---

# Observation 3

A very large latency spike occurred:

```txt
time=350ms
```

This was much larger than the normal:
```txt
~40ms
```

latency range.

Afterwards, latency returned to normal.

---

## Possible Explanation (Suggested by ChatGPT)

This may indicate:
- temporary congestion,
- packet delay,
- buffering,
- or brief network instability rather than persistent failure.

---

## My Current Understanding

I understand that:
- networks may experience short bursts of instability,
- and latency spikes do not necessarily mean the route permanently changed.

I do NOT yet fully understand:
- transient congestion,
- traffic bursts,
- buffering behavior,
- packet scheduling.

---

## Investigation Queue

Need to study:
- traffic bursts
- packet scheduling
- transient congestion
- buffering systems

---

# Observation 4

TTL remained constant during the experiment.

Examples:
- TTL = 112 throughout most replies.

---

## Possible Explanation (Suggested by ChatGPT)

The routing path likely stayed mostly stable even though latency fluctuated.

This suggests:
- path stability,
- but changing network conditions along the route.

---

## My Current Understanding

I understand that:
- latency fluctuations do not automatically mean the route changed,
- and packets may still travel similar paths during instability.

I do NOT yet fully understand:
- route stability,
- dynamic routing behavior,
- path optimization systems.

---

## Investigation Queue

Need to study:
- route stability
- dynamic routing
- path optimization
- routing protocols

---

# Observation 5

Even a very small amount of packet loss affected the experiment noticeably.

Only:
- 1 packet was lost

Yet:
- reliability decreased,
- latency variability increased,
- and instability became noticeable.

---

## Possible Explanation (Suggested by ChatGPT)

Protocols like TCP treat packet loss seriously.

Packet loss may trigger:
- retransmission,
- throughput reduction,
- congestion control behavior,
- and slower communication.

---

## My Current Understanding

I understand that:
- packet loss has a bigger impact than I initially expected,
- and reliability strongly affects networking performance.

I do NOT yet fully understand:
- TCP congestion control,
- retransmission algorithms,
- throughput reduction,
- flow control.

---

## Investigation Queue

Need to study:
- TCP
- congestion control
- retransmission logic
- throughput behavior

---

# Things I Learned During This Experiment

- Real-world networks are imperfect and unreliable systems.
- Packets can disappear during communication.
- Network latency fluctuates dynamically over time.
- Temporary instability can create very large latency spikes.
- Packet loss and latency are different concepts.
- Routes may remain stable while network conditions fluctuate.
- Small packet loss can have surprisingly large effects on communication reliability.
- Internet performance depends on more than raw bandwidth.
- Reliability is a major part of networking behavior.

---

# Errors / Confusions Encountered

Initially, I assumed:
- losing a single packet would not matter much,
- and internet performance mainly depended on speed.

The experiment showed that:
- reliability and consistency are extremely important,
- and even small instability can affect communication significantly.

---

# Further Curiosity

Questions I currently have:
- How does TCP retransmit lost packets?
- How does congestion control work?
- Why do packets sometimes disappear?
- What exactly causes latency spikes?
- How do routers handle overloaded traffic?
- How do streaming and video calls handle packet loss?
