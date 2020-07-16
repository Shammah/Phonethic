---
title: scrcpy
description: How to display and control your Android phone on your computer with USB
keywords:
    - android
    - usb
    - scrcpy
    - developer
---

Because working on a small device such as a phone can be quite cumbersome at times, it is highly recommended to operate your phone through your desktop computer or laptop instead. This way you will have access to a bigger and better screen, including easier access with the comfort of your own mouse and keyboard.

## Developer Mode
In order to achieve this, we first have to enable the *developer mode* on our phone. This can be achieved by going to **Settings -> About Phone -> Software Information**.

![About phone](/img/scrcpy/1.png) ![Software Information](/img/scrcpy/2.png)

Once arrived at this screen, you should then quickly and repeatedly press the **Build number** label or button a couple of times. After a few taps you will get a small notification that *developer mode* is now activated.

![Build number](/img/scrcpy/3.png)

Now once you navigate back to the **Settings** menu, you wil now see **Developer options** button at the bottom of the menu. Open this menu and look for the **USB debugging** toggle under the *debugging* header. Simply toggle this on and press OK.

![Developer options](/img/scrcpy/4.png) ![Toggle](/img/scrcpy/5.png)

## Downloading scrcpy
The next step is to download *scrcpy* on your desktop computer or laptop. This small program will allow you to stream your phone to your computer and control it by mouse and keyboard. You can download it from [the official GitHub repository](https://github.com/Genymobile/scrcpy/releases).

Connect your phone to your computer with an USB cable, extract your downloaded copy of scrcpy and launch it by starting `scrcpy.exe`. Allow the incoming request on your phone, and you should now be able to see and control your phone through your computer.