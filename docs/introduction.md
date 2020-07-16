---
title: Introduction
description: Introduction and motivation to staking Ethereum on your phone
keywords:
  - ethereum
  - staking
  - validator
  - phone
  - mobile
  - android
---

The transition of Ethereum from proof-of-work to proof-of-stake has excited a large amount of people. No longer do we need beefy machines that convert electricity into trust by the use of inefficiency itself. All that is now required is a fairly low-power device, not only putting an end to the power hungry consensus algorithms, but also increasing the network's security. The community has enthusiastically come up with plans and guides that allow participants of the network to stake with cheap and small setups. However, most paths still end up in having the staker purchase dedicated server hardware, of which the [Raspberry Pi](https://www.raspberrypi.org/) is the most popular. What not might be obvious at first sight, however, is that a lot of folks have an old phone somewhere in their drawers gathering dust. Wouldn't it be nice if we could at least run a validator on this device?

![Validating with Prysm on a phone](/img/introduction/1.png)

## Why stake on a phone?
There are several benefits to using an (old) phone over purchasing a dedicated server device such as the Raspberry Pi:

1. It already has a screen. In the case of a Raspberry you would have to purchase an additional display and possibly power supply.
1. The phone already has a (virtual) keyboard, so there's no need to purchase an additional one to configure your server, or to swap the one you're currently using on a different computer.
1. You don't need an additional power supply; you can simply plug it in your charger using a USB cable.
1. You can easily hook it up to your computer when you need to control your phone. This can for example be easily done through [scrcpy](scrcpy.md).

Now the device most likely won't have the processor power and memory space to run a beacon chain, but even running only a validator would be a welcoming advance as the staker would have full control over his or her hardware and validator keypairs. Validators can easily listen to a trusted (remote) beacon chain, which means there's less chance of both validators and the beacon chain going down in case of a hardware failure.

## What devices can I stake on?
For now the focus of this guide will be simply about getting Prysm running on an Android phone. Although there are other (more suitable) clients that may or may not natively support mobile phones, such as Nimbus, more client diversity would be a good thing. We don't want to end up in a situation where one client has a majority on the network, as a single bug in a single client could potentially damage the network severely. Some clients such as Prysm require a bit of work before they work on your phone, so a guide like this is needed to prevent such would-be monopoly situations from happening. So far I've only had my *Samsung Galaxy S7* to test on, and it's perfectly possible to run a validator on it without having to root the device.

:::caution
We will be doing everything as the *root* user. This is usually highly discouraged for security reasons, but for simplicity of this guide we will do this anyway.
:::

In case you're wondering if your phone can run a validator, you may compare its specifications with those of the Samsung Galaxy S7:

| Component        | Specs                                                 |
| :--------------- | :---------------------------------------------------- |
| Operating System | Android 8                                             | 
| Chipset          | Exynos 8890 Octa (14 nm)                              |
| CPU              | Octa-core (4x2.3 GHz Mongoose & 4x1.6 GHz Cortex-A53) |
| GPU              | Mali-T880 MP12                                        |
| Memory (RAM)     | 4GB                                                   |

## Todo
This guide is a work in progress and will be improved over time. One major thing I'd like to try is to build Prysm from source, but this requires some more investigation. It would also be nice if this entire guide could be automated into a single Android app.

## Contact
If you need to contact me directly, you can find me in [Prysm's Discord](https://discord.gg/YMVYzv6) under the username *Shammah*.