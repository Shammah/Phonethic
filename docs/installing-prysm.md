---
title: Installing Prysm
description: Installing and running the Prysm binaries on your Android phone
keywords:
  - prysm
  - ethereum
  - staking
  - validating
  - installing
  - android
---

Since we are living in *another layer*, so to speak, we no longer have access to the packages we have just installed in Termux. In addition, we also need an additional package: `curl`. Therefore we need to execute the following `apt-get` command:

```bash
apt-get update
apt-get upgrade
apt-get install -y git curl wget
```

We will now continue by cloning the Prysm git repository:

```bash
git clone https://github.com/prysmaticlabs/prysm.git
```

:::caution
Prysmatic Labs has provided us with a nifty `prism.sh` script that helps us downloading and running a validator, but before we can use it we have to allow it to download and execute unverified binaries. In a highly secure environment this is not recommended, but for simplicity we will just trust binaries the script provides us:

```bash
export PRYSM_ALLOW_UNVERIFIED_BINARIES=1
```
:::

With this environment variable set, we can download and run our validator.

```bash
cd prysm
./prysm.sh validator
```

# Activating your validator
In order to continue setting up and activating your validator, it is highly advised to follow the guide provided by Prysmatic, which can be found at https://prylabs.net/participate.

:::tip
If you need to copy your *deposit data*, know that you can select the deposit data lines from the terminal by holding your mouse button in the terminal and moving the selector pins. You can then copy your selected text and send it yourself using Discord, Whatsapp, or even email.

![Copy](/img/installing-prysm/1.png) ![Paste](/img/installing-prysm/2.png)
:::

Once the deposit has been processed and your validator is active, you can start validating from your phone!

To do this, you have to pass on a beacon chain address to listen to. You can start your validator with the following command:

```bash
./prysm.sh validator --beacon-rpc-provider=<beacon address goes here>
```