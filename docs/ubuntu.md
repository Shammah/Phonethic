---
title: Ubuntu
description: How to install a light-weight version on Ubuntu on your Android phone without rooting
keywords:
  - ubuntu
  - linux
  - android
  - terminal
  - shell
  - bash
  - root
---

Now in a perfect world we would be able to simply place the validator binary on the phone and launch it via Termux. In reality, however, the stock Android operating system is very limited. For example, it recognizes the validator binary to be an ELF executable, but is not able to actually execute it due to the lack of standard dynamic libraries. Even when we compile the validator with static library linking it will not succeed in launching. What we have to do instead is download a lightweight Ubuntu (cloud) image and run it. This image is a couple of megabytes big but does not require rooting or any installation procedure. What is does allow you however, is to run a Linux operating system on top of Android that is in fact able to run our binaries.

![Failure](/img/ubuntu/1.png)

## Downloading and configuring Ubuntu
Before we can get the Ubuntu magic started, we will have to install `git`, `wget` and `proot`. This can be done with the following command:

```bash
apt-get install -y git wget proot
```

Just to be sure, we will then change our directory to our (root) home directory with:

```bash
cd ~/
```

From this place we can checkout the `ubuntu-in-termux` git repository, which contains some handy scripts that handles all the magic for us in order to get Ubuntu up and running:

```bash
git clone https://github.com/MFDGaming/ubuntu-in-termux.git
```

Now that we have the repository cloned, we have to move to our newly fetched directory and give *execution rights* to the script, so Android knows we can *execute it*:

```bash
cd ubunty-in-termux
chmod +x ubuntu.sh
./ubuntu.sh -y
```

## Preventing deep sleep
Before we boot into Ubuntu, it is important that we prevent Termux from becoming a sleeping background task when our phone locks. If we forget this, the validator will enter *sleep* mode and we will end up missing attestations, and thus losing our precious Ethereum slowly but surely. Termux has a nifty command build in to prevent this from happening:

```bash
termux-wake-lock
```

Now with the wake lock activated, we can finally boot into our little Ubuntu image:

```bash
./startubuntu.sh
```

![Success](/img/ubuntu/2.png)