---
title: Quick Startup
description: Quickly booting your Prysm validator in a new Termux session
keywords:
  - prysm
  - validating
  - termux
  - session
  - android
---

If you ever decide to quit your validator process and your Termux session, you can get your validator up and running again with the following sequence of commands:

```
cd ubuntu-in-termux
termux-wake-lock
./startubuntu.sh
export PRYSM_ALLOW_UNVERIFIED_BINARIES=1
cd prysm
./prysm.sh validator --beacon-rpc-provider=<beacon address goes here>
```