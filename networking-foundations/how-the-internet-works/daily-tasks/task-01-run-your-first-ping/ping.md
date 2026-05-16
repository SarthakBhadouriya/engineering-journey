ping -n 5 google.com

Pinging google.com [142.250.76.206] with 32 bytes of data:
Reply from 142.250.76.206: bytes=32 time=88ms TTL=112
Reply from 142.250.76.206: bytes=32 time=31ms TTL=112
Reply from 142.250.76.206: bytes=32 time=32ms TTL=112
Reply from 142.250.76.206: bytes=32 time=58ms TTL=112
Reply from 142.250.76.206: bytes=32 time=32ms TTL=112

Ping statistics for 142.250.76.206:
    Packets: Sent = 5, Received = 5, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 31ms, Maximum = 88ms, Average = 48ms

ping -n cloudflare.com
Bad value for option -n, valid range is from 1 to 4294967295.

ping -n 5 cloudflare.com

Pinging cloudflare.com [104.16.132.229] with 32 bytes of data:
Reply from 104.16.132.229: bytes=32 time=36ms TTL=53
Reply from 104.16.132.229: bytes=32 time=36ms TTL=53
Reply from 104.16.132.229: bytes=32 time=35ms TTL=53
Reply from 104.16.132.229: bytes=32 time=36ms TTL=53
Reply from 104.16.132.229: bytes=32 time=34ms TTL=53

Ping statistics for 104.16.132.229:
    Packets: Sent = 5, Received = 5, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 34ms, Maximum = 36ms, Average = 35ms

ping -n 5 8.8.8.8

Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=35ms TTL=112
Reply from 8.8.8.8: bytes=32 time=33ms TTL=112
Reply from 8.8.8.8: bytes=32 time=33ms TTL=112
Reply from 8.8.8.8: bytes=32 time=125ms TTL=112
Reply from 8.8.8.8: bytes=32 time=113ms TTL=112

Ping statistics for 8.8.8.8:
    Packets: Sent = 5, Received = 5, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 33ms, Maximum = 125ms, Average = 67ms