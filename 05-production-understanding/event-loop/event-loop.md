## Single-Thread Blocking & Event Loop Starvation

Node.js executes JavaScript on a single thread. Synchronous CPU-bound tasks block the event loop, causing all concurrent I/O events, timers, and HTTP requests to stall until the CPU task completes.

### Reproduction Benchmark

````bash
node event-loop.js

time (curl -s http://localhost:3001/block & sleep 0.2 && curl -s http://localhost:3001/ping; wait; echo)



Result:

Expected /ping latency: < 2ms

Actual /ping latency: ~5000ms (queued behind the synchronous loop)

Key Takeaway
Never execute long synchronous loops, heavy regexes, or large JSON parses on the main thread ("Don't Block the Event Loop"). Offload CPU-heavy computation to Worker Threads or separate worker processes.
