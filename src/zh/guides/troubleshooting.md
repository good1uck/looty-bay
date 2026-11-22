---
layout: guide.njk
lang: zh
translationKey: troubleshooting
order: 8
title: 故障排除、错误代码和与好友联机
shortTitle: 故障排除
description: 官方给出的加载问题、错误代码、Easy Anti-Cheat、崩溃，以及好友在其他服务器时的处理方法。
permalink: /zh/guides/troubleshooting/
---

如果这些步骤仍无法解决，Kefir 建议联系支持。帮助中心在[如何联系支持、找到官方社区？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1381-how-do-i-contact-support-and-find-official-communities/)中公布的邮箱是 **robrun.support@kefircyprus.com**。

## 游戏无法加载、卡顿或崩溃

[游戏无法加载或一直卡顿](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1376-the-game-won-t-load-or-keeps-freezing-what-should-i-do/)写明：检查网络连接，同时重启游戏和 Steam，并更新显卡驱动。在 Steam 中进入 **Properties → Installed Files → Verify integrity of game files**（属性 → 已安装文件 → 验证游戏文件完整性）。

[如果游戏崩溃](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1379-what-should-i-do-if-the-game-crashes/)，请关闭不用的程序并重启电脑。若仍然崩溃，向支持提交你的电脑配置、崩溃经过，以及错误信息原文。

故障排除栏目里还有一条：移动鼠标时帧数骤降到个位数（静止时却很流畅）。请直接查看该官方条目，不要使用来路不明的修改建议；我们不会补充非官方的注册表或配置文件做法。

如果**屏幕变红**，帮助中心说：打开游戏设置，进入 Graphics（图形）分页，关闭 HDR。请继续按该官方文章里的后续步骤操作。

如果出现 **Failed to load il2cpp**，帮助中心的步骤是：在 Steam 中验证游戏文件完整性；重装游戏；关闭杀毒软件；确认 Steam 客户端是最新版；并确认已安装最新的 Windows 安全更新（可在 Windows Update 中查看）。

如果**语音聊天**无法使用，帮助中心说先检查电脑设置里是否已授予游戏麦克风权限，然后再按该文章中的其余官方步骤排查。

## Easy Anti-Cheat

Steam 商店页写明，《ROB RUN》使用**内核级** Easy Anti-Cheat。帮助中心文章[什么是 Easy Anti-Cheat？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1380-what-is-easy-anti-cheat/)说，EAC 用于防止作弊，使用作弊将导致**永久封禁**。如果遇到 EAC 错误，请向支持发送截图和你的 UID。

## 错误代码

下表中的代码和解决办法，全部来自[出现错误代码该怎么办？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1377-what-should-i-do-if-i-get-an-error-code/)。如果代码不在该文中，请复制错误窗口里的文字发给支持，不要轻信非官方对照表。

| 代码 | 帮助中心的说明 | 官方解决办法 |
| --- | --- | --- |
| E-0101 / E-0110 | 游戏无法连接到服务器以下载配置或启动数据。 | 检查网络连接，并确认其他网站能正常打开。 |
| E-0102 | 数据下载出错，或在到达电脑途中被拦截。常见于酒店、咖啡馆、公共 Wi-Fi 等访客网络，或杀毒 / 防火墙干扰。 | 改用没有认证页面的家庭网络，关闭代理，或暂时暂停杀毒软件的 HTTPS 扫描。 |
| E-0124 | 游戏资源加载系统内部错误。 | 在 Steam 的 Properties 中验证游戏文件完整性。 |
| E-0201 | 游戏已在运行，但与游戏服务器的连接中断且未能恢复。 | 检查连接并重启游戏。 |
| E-0202 | 认证服务器没有响应。 | 确认其他网站能打开，并检查网络服务商是否有限制。若仍出现，复制错误文字发给支持。 |
| E-0301 / E-0302 | 游戏版本过旧。 | 关闭游戏，重启 Steam，并更新游戏。 |
| E-0303 / E-0304 | 游戏数据下载损坏，或与当前版本不匹配。 | 等待 10 到 15 分钟，关闭代理，在 Steam 的 Properties 中验证文件完整性，并更新游戏。 |
| E-0401 | Steam 账户认证失败。 | 确认 Steam 处于在线模式，且登录的是正确账户。然后重启 Steam 和游戏。 |
| E-0403 / E-0404 | 认证问题（Epic Online Services）。 | 在 Steam 中验证文件完整性，把游戏加入杀毒软件白名单，并重启电脑。 |
| E-0405 | Steam 没有响应，或杀毒软件拦截了游戏的系统库。 | 检查杀毒隔离区，启动 Steam，并验证文件完整性。从 Steam 库直接启动游戏。 |
| E-0406 | Steam 拒绝认证。 | 确认 Steam 已启动、处于在线状态（不是离线模式），且登录了正确账户。然后重启 Steam 和游戏。 |
| E-0407 | Steam 认证错误。 | 重启 Steam 和游戏，检查网络，并尝试更换连接方式。若仍出现，复制错误文字发给支持。 |
| E-0408 | Steam 认证请求超时。 | 确认 Steam 已打开，查看 Steam 服务状态，然后重启 Steam 和游戏。 |
| E-0501 / E-0502 | Easy Anti-Cheat 未运行、已损坏，或被第三方软件拦截。 | 只通过 Steam 启动游戏，停止杀毒软件，在 Steam 的 Properties 中验证文件完整性，并重启电脑。 |
| E-0503 | Easy Anti-Cheat 安全违规。 | 验证文件完整性并重新启动游戏。同时检查网络。可尝试在 Wi-Fi 和有线（Ethernet）之间切换，以排除某一种连接方式的问题。 |
| E-0601 | 未检测到基本输入设备（键盘和鼠标）。常见于远程桌面或云串流。 | 启动游戏前，把实体键盘和鼠标直接接到电脑上，并避免远程访问会话。 |
| E-0904 | 意外的游戏内部错误。 | 重启游戏。若仍出现，复制错误文字发给支持。 |

## 好友在其他服务器时如何会合

[好友在其他服务器时如何组队？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1382-how-to-invite-a-friend-to-a-party-if-it-says-they-are-on-another-server/)写明：打开**世界地图**（global map），选择**监狱**（Prison），点击 **“Surrender to Feds”**（向联邦投降）。进入后，在监狱里切换到好友的服务器，并重新发送组队邀请。

[2026 年 11 月 20 日的更新](https://store.steampowered.com/news/app/4262460/view/1849827110432538)把在线好友显示到了服务器列表，方便查看他们已经在哪一台服务器。在[11 月 13 日的问答](https://store.steampowered.com/news/app/4262460/view/1849192144187218)里，Kefir 承认现在换服不便（必须投降并回到监狱），并表示计划让选服更简单。

## 配置要求

如果游戏完全无法启动，请先确认你满足[官方配置要求](/zh/guides/what-is-rob-run/#system-requirements)。

<div class="sources">

## 来源

- [故障排除与支持](https://kefirgames.helpshift.com/hc/en/14-rob-run/section/140-troubleshooting-and-support/)
- [游戏无法加载或一直卡顿](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1376-the-game-won-t-load-or-keeps-freezing-what-should-i-do/)
- [出现错误代码该怎么办？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1377-what-should-i-do-if-i-get-an-error-code/)
- [游戏崩溃了怎么办？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1379-what-should-i-do-if-the-game-crashes/)
- [什么是 Easy Anti-Cheat？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1380-what-is-easy-anti-cheat/)
- [Error: Failed to load il2cpp](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1386-error-failed-to-load-il2cpp/)
- [好友在其他服务器时如何组队？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1382-how-to-invite-a-friend-to-a-party-if-it-says-they-are-on-another-server/)
- [如何联系支持、找到官方社区？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1381-how-do-i-contact-support-and-find-official-communities/)
- [Steam 上的 ROB RUN](https://store.steampowered.com/app/4262460/ROB_RUN/)
- [2026 年 11 月 20 日更新说明](https://store.steampowered.com/news/app/4262460/view/1849827110432538)
- [Answering Your Most Frequently Asked Questions](https://store.steampowered.com/news/app/4262460/view/1849192144187218)

</div>
