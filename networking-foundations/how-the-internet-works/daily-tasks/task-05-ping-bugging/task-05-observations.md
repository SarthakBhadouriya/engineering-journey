# Task 05 — Break Ping Intentionally

## Objective
Observe how different kinds of networking failures behave and understand that failures can occur at different layers of communication.

---

# Commands Executed

```bash
ping nonexistent-domain-xyz-123.com
ping 192.0.2.1
ping 10.255.255.1
```

---

# Raw Results Summary

## nonexistent-domain-xyz-123.com

Result:
```txt
Ping request could not find host nonexistent-domain-xyz-123.com
```

No packets were transmitted.

---

## 192.0.2.1

Result:
```txt
Request timed out.
```

Statistics:
- Sent = 4
- Received = 0
- Lost = 4 (100% loss)

---

## 10.255.255.1

Result:
```txt
Request timed out.
```

Statistics:
- Sent = 4
- Received = 0
- Lost = 4 (100% loss)

---

# Observation 1

The nonexistent domain failed immediately before packet transmission even began.

---

## Possible Explanation (Suggested by ChatGPT)

The system could not resolve the domain name into an IP address.

DNS resolution failed before networking communication could start.

---

## My Current Understanding

I understand that:
- communication cannot begin without resolving a domain into an IP address,
- and DNS is required before packet transmission for domain names.

I do NOT yet fully understand:
- internal DNS resolution flow,
- recursive DNS queries,
- authoritative DNS servers,
- DNS caching systems.

---

## Investigation Queue

Need to study:
- DNS resolution
- recursive resolvers
- authoritative DNS
- DNS caching

---

# Observation 2

The valid IP addresses produced a completely different type of failure.

Instead of:
```txt
could not find host
```

the system showed:
```txt
Request timed out.
```

---

## Possible Explanation (Suggested by ChatGPT)

The system successfully recognized the destination IP address and attempted packet transmission.

Packets were likely sent, but no replies returned.

---

## My Current Understanding

I understand that:
- DNS failure and communication failure are different things,
- and valid IP addresses allow packet transmission attempts even if replies never arrive.

I do NOT yet fully understand:
- packet routing failure,
- unreachable infrastructure,
- network blackholing,
- ICMP behavior.

---

## Investigation Queue

Need to study:
- routing failures
- unreachable networks
- ICMP
- packet transmission flow

---

# Observation 3

Both IP addresses resulted in:
- 100% packet loss
- no replies
- repeated timeouts

---

## Possible Explanation (Suggested by ChatGPT)

The packets may have:
- been dropped,
- ignored,
- filtered,
- or routed into unreachable/private infrastructure.

---

## My Current Understanding

I understand that:
- packets can disappear silently,
- and some systems intentionally do not respond.

I do NOT yet fully understand:
- firewall filtering,
- packet dropping,
- silent blackholing,
- ICMP blocking behavior.

---

## Investigation Queue

Need to study:
- firewalls
- packet filtering
- ICMP blocking
- blackhole routing

---

# Observation 4

The failures involving IP addresses were silent failures.

The system waited before timing out instead of immediately reporting:
```txt
destination unreachable
```

---

## Possible Explanation (Suggested by ChatGPT)

The packets likely traveled somewhere into the network but never received replies.

The infrastructure may have silently ignored the traffic.

---

## My Current Understanding

I understand that:
- not all networking failures generate explicit errors,
- and silent failures are possible in networking systems.

I do NOT yet fully understand:
- timeout handling,
- unreachable signaling,
- network diagnostics,
- routing error behavior.

---

## Investigation Queue

Need to study:
- timeout mechanisms
- unreachable messages
- ICMP diagnostics
- error signaling

---

# Observation 5

The address:
```txt
10.255.255.1
```

belongs to private IP space.

---

## Possible Explanation (Suggested by ChatGPT)

Private IP ranges are generally used inside local/internal networks and are not globally routable on the public internet.

---

## My Current Understanding

I understand that:
- not every IP address belongs to the public internet,
- and some IP ranges exist only for private/internal networking.

I do NOT yet fully understand:
- private IP allocation,
- NAT,
- local network architecture,
- public vs private routing.

---

## Investigation Queue

Need to study:
- private IP ranges
- NAT
- local networking
- public routing

---

# Things I Learned During This Experiment

- Different networking failures occur at different layers.
- DNS failure prevents communication from even starting.
- Valid IP addresses can still fail to respond.
- Packet transmission and successful communication are different things.
- Some systems silently drop or ignore packets.
- Networking failures may produce very different error messages.
- Private IP ranges are not globally routable.
- Silent timeouts are common in networking and security systems.
- Error messages themselves reveal important architectural information.

---

# Errors / Confusions Encountered

Initially, I assumed:
- all networking failures were basically the same,
- and failed communication always meant “the internet is down.”

The experiment showed that:
- failures can happen at completely different stages,
- and the type of error reveals where the failure occurred.

---

# Further Curiosity

Questions I currently have:
- How exactly does DNS resolution work internally?
- How do routers decide that a network is unreachable?
- What causes silent packet dropping?
- How do firewalls block ICMP?
- What is NAT?
- How do private and public IP systems interact?
