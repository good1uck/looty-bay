---
layout: guide.njk
lang: en
translationKey: troubleshooting
order: 8
title: Troubleshooting, error codes, and playing with friends
shortTitle: Troubleshooting
description: Official fixes for load problems, error codes, Easy Anti-Cheat, crashes, and joining a friend on another server.
permalink: /en/guides/troubleshooting/
---

If these steps do not help, Kefir asks you to contact support. The Help Center lists **robrun.support@kefircyprus.com** and official communities in [How do I contact support and find official communities?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1381-how-do-i-contact-support-and-find-official-communities/).

## The game won’t load, freezes, or crashes

[The game won't load or keeps freezing](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1376-the-game-won-t-load-or-keeps-freezing-what-should-i-do/) says: check your internet connection, restart both the game and Steam, and update your graphics driver. In Steam, go to **Properties → Installed Files → Verify integrity of game files**.

[If the game crashes](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1379-what-should-i-do-if-the-game-crashes/), close unused applications and restart your PC. If crashes persist, send support your PC specs, a description of the crash, and the error message text.

The Troubleshooting section also has a note for a sharp FPS drop when you move the mouse (the game runs smoothly when you stay still). Use the official article in that section rather than a third-party tweak list; we are not adding unofficial registry or config advice.

If the **screen turns red**, the Help Center says to open the game’s settings, go to the Graphics tab, and disable HDR. Follow any further steps in that official article.

If you see **Failed to load il2cpp**, the Help Center says: verify game-file integrity in Steam; reinstall the game; disable your antivirus software; make sure you have the latest Steam client; and make sure you have the latest Windows security updates (check in Windows Update).

If **voice chat** is not working, the Help Center says to check that the game has microphone permissions in your PC settings, then continue with the rest of the official checklist in that article.

## Easy Anti-Cheat

The Steam store page says ROB RUN uses **kernel-level Easy Anti-Cheat**. The Help Center article [What is Easy Anti-Cheat?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1380-what-is-easy-anti-cheat/) says EAC protects the game from cheats, and that using cheats results in a **permanent ban**. If you encounter an EAC error, send support a screenshot and your UID.

On November 23, 2026, Kefir posted [Anti-Cheat Measures and Servers](https://store.steampowered.com/news/app/4262460/view/1849827110441426): more than 200,000 accounts blocked so far, hardware bans being explored, and planned separate servers that require a minimum amount of jail time or a certain total of in-game purchases. The Help Center also has a [ROB RUN Ban Policy](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1384-rob-run-ban-policy/) (ban lengths and appeals). Both are summarized in [Anti-cheat and bans](/en/guides/anti-cheat-bans/).

## Error codes

The following codes and official solutions come from [What should I do if I get an error code?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1377-what-should-i-do-if-i-get-an-error-code/). If your code is not listed there, copy the text from the error window and send it to support rather than trusting an unofficial table.

| Code | What the Help Center says | Official solution |
| --- | --- | --- |
| E-0101 / E-0110 | The game cannot connect to the server to download configuration or startup data. | Check your internet connection and make sure websites load correctly. |
| E-0102 | Data downloaded with errors or was blocked on its way to your PC. Often occurs on guest networks (hotels, cafes, public Wi-Fi) or because of antivirus/firewall interference. | Switch to a home network without an authorization page, disable proxy, or temporarily pause HTTPS scanning in your antivirus settings. |
| E-0124 | An internal game asset loading system error. | Verify the integrity of game files via Properties in Steam. |
| E-0201 | The game was already running, but the connection to the game server was lost and was not restored. | Check your connection and restart the game. |
| E-0202 | Authentication server is not responding. | Check if other websites are loading and ensure there are no restrictions from your internet provider. If it persists, copy the error text and send it to support. |
| E-0301 / E-0302 | An outdated version of the game. | Close the game, restart Steam, and update the game. |
| E-0303 / E-0304 | Game data was downloaded corrupted or does not match the current game version. | Wait 10–15 minutes, disable proxy, verify file integrity via Properties in Steam, and update the game. |
| E-0401 | Failed to authenticate the Steam account. | Make sure Steam is running in online mode and you are logged into the correct account. Restart Steam and the game. |
| E-0403 / E-0404 | Authorization issues (Epic Online Services). | Verify file integrity via Steam, add the game to your antivirus exceptions, and restart your PC. |
| E-0405 | Steam is not responding, or an antivirus blocked the game's system library. | Check your antivirus quarantine, launch Steam, and verify file integrity. Launch the game directly from your Steam library. |
| E-0406 | Steam denied authentication. | Make sure Steam is running, online (not in Offline Mode), and logged into the correct account. Then restart Steam and the game. |
| E-0407 | Steam authentication error. | Restart Steam and the game, check your network connection, and try switching your connection type. If it persists, copy the error text and send it to support. |
| E-0408 | Steam authentication request timed out. | Make sure Steam is on, check the status of Steam services, and restart Steam and the game. |
| E-0501 / E-0502 | Easy Anti-Cheat is not running, corrupted, or blocked by third-party software. | Launch the game exclusively through Steam, stop your antivirus, verify file integrity via Properties in Steam, and restart your PC. |
| E-0503 | Easy Anti-Cheat security violation. | Verify file integrity and relaunch the game. Also check your internet connection. Try switching from Wi-Fi to a wired (Ethernet) connection or vice versa. |
| E-0601 | Basic input devices (keyboard and mouse) were not detected. This often occurs when playing via Remote Desktop or cloud streaming services. | Connect a physical keyboard and mouse directly to the PC before launching the game and avoid remote access sessions. |
| E-0904 | An unexpected internal in-game error. | Restart the game. If it persists, copy the error text and send it to support. |

## Joining a friend on another server

[How to invite a friend to a party if it says they are on another server?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1382-how-to-invite-a-friend-to-a-party-if-it-says-they-are-on-another-server/) says: open the **global map**, select the **Prison** location, and click **“Surrender to Feds”**. Once inside, switch to your friend’s server in the prison and resend the party invite.

A [November 20, 2026 patch](https://store.steampowered.com/news/app/4262460/view/1849827110432538) added online friends to the servers list, so you can see which server they are already playing in. In the [November 13 FAQ](https://store.steampowered.com/news/app/4262460/view/1849192144187218), Kefir acknowledged that switching servers is inconvenient (you have to surrender and head back to prison) and said they plan to make server selection simpler.

## System requirements

If the game will not start at all, confirm you meet the [official requirements](/en/guides/what-is-rob-run/#system-requirements).

<div class="sources">

## Sources

- [Troubleshooting and Support](https://kefirgames.helpshift.com/hc/en/14-rob-run/section/140-troubleshooting-and-support/)
- [The game won't load or keeps freezing](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1376-the-game-won-t-load-or-keeps-freezing-what-should-i-do/)
- [What should I do if I get an error code?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1377-what-should-i-do-if-i-get-an-error-code/)
- [What should I do if the game crashes?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1379-what-should-i-do-if-the-game-crashes/)
- [What is Easy Anti-Cheat?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1380-what-is-easy-anti-cheat/)
- [ROB RUN Ban Policy](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1384-rob-run-ban-policy/)
- [Error: Failed to load il2cpp](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1386-error-failed-to-load-il2cpp/)
- [How to invite a friend…](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1382-how-to-invite-a-friend-to-a-party-if-it-says-they-are-on-another-server/)
- [How do I contact support and find official communities?](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1381-how-do-i-contact-support-and-find-official-communities/)
- [ROB RUN on Steam](https://store.steampowered.com/app/4262460/ROB_RUN/)
- [Patch notes, November 20, 2026](https://store.steampowered.com/news/app/4262460/view/1849827110432538)
- [Anti-Cheat Measures and Servers](https://store.steampowered.com/news/app/4262460/view/1849827110441426) (November 23, 2026)
- [Answering Your Most Frequently Asked Questions](https://store.steampowered.com/news/app/4262460/view/1849192144187218)

</div>
