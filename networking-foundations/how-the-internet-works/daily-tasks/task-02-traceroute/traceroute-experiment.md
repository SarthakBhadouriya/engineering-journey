tracert google.com

Tracing route to google.com [142.250.207.142]
over a maximum of 30 hops:

  1    13 ms    13 ms     8 ms  192.168.29.1
  2    25 ms    27 ms     8 ms  10.18.136.1
  3    36 ms    40 ms    52 ms  172.31.3.208
  4    46 ms    45 ms    39 ms  192.168.182.88
  5    43 ms    39 ms    45 ms  172.26.102.133
  6    38 ms    38 ms    32 ms  172.26.102.146
  7    33 ms    35 ms    31 ms  192.168.182.112
  8    45 ms    42 ms    45 ms  192.168.182.115
  9    51 ms    47 ms    62 ms  172.31.2.71
 10   447 ms   391 ms   352 ms  74.125.51.166
 11    52 ms    77 ms    53 ms  142.251.76.31
 12    45 ms    51 ms    49 ms  142.250.214.99
 13    50 ms    48 ms    51 ms  pnbomb-bb-in-f14.1e100.net [142.250.207.142]

Trace complete.

C:\Windows\System32>tracert cloudflare.com

Tracing route to cloudflare.com [104.16.132.229]
over a maximum of 30 hops:

  1     3 ms     1 ms     1 ms  192.168.29.1
  2     3 ms     6 ms     4 ms  10.18.136.1
  3    59 ms    25 ms    27 ms  172.31.3.208
  4    25 ms    23 ms    27 ms  192.168.182.88
  5    21 ms    26 ms    26 ms  172.26.102.133
  6    27 ms    22 ms    22 ms  172.26.102.147
  7    27 ms    26 ms    25 ms  192.168.182.114
  8     *        *        *     Request timed out.
  9    32 ms    34 ms    36 ms  172.31.2.45
 10    27 ms    31 ms    27 ms  49.44.187.49
 11    28 ms    27 ms    27 ms  104.16.132.229

Trace complete.