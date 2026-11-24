---
layout: guide.njk
lang: zh
translationKey: anti-cheat-bans
order: 12
title: 反作弊、封禁与计划中的限制服务器
shortTitle: 反作弊与封禁
description: Kefir 官方对 Easy Anti-Cheat、《ROB RUN》封禁政策、封禁申诉，以及 2026 年 11 月 23 日公布的“提高准入门槛服务器”计划的说明。
permalink: /zh/guides/anti-cheat-bans/
---

本页汇总官方来源中关于作弊和封禁的内容：Steam 商店页、两篇帮助中心文章，以及 Kefir 截至 2026 年 11 月 23 日发布的 Steam 公告。本页不构成法律意见，也不能替代官方原文。官方没有公开检测手段，并表示可以不予披露，所以本页不对此做任何猜测。

## Easy Anti-Cheat

- [Steam 商店页](https://store.steampowered.com/app/4262460/ROB_RUN/)写明，《ROB RUN》使用**内核级** Easy Anti-Cheat（简称 EAC）。
- 帮助中心文章[什么是 Easy Anti-Cheat？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1380-what-is-easy-anti-cheat/)说，EAC 用于防止作弊，使用作弊将导致**永久封禁**。如果遇到 EAC 错误，请向支持发送截图和你的 UID。

EAC 相关错误代码（E-0501、E-0502、E-0503）及官方解决办法见[故障排除](/zh/guides/troubleshooting/)。

## 《ROB RUN》封禁政策

帮助中心“账号”（Account）栏目下的 [ROB RUN Ban Policy](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1384-rob-run-ban-policy/)（封禁政策）写明：

- 玩家如果违反《ROB RUN》条款与条件（Terms and Conditions）和/或 Steam 在线行为准则（Steam Online Conduct），Kefir 有权限制其进入游戏。
- 封禁（Ban）时长从 **24 小时到 5 年**不等，由 Kefir 根据违规严重程度自行决定。
- 封禁**不会事先通知**，并立即生效。封禁期间，游戏主界面会一直显示封禁时长的通知。
- 封禁期间，角色和进度**不会被重置**。但如果封禁期与服务器重置（清档，Wipe）重叠，你的库存（游戏内物品、货币和资产）会按一般规则照常重置。详见[联邦突袭 / 清档](/zh/guides/wipe/)。
- 在游戏内消费不能免除违规责任；被封禁本身也不构成对已到账购买进行退款的理由。

请注意，两篇帮助中心文章的说法并不相同：EAC 文章说作弊会被永久封禁，而封禁政策对一般违规给出的是 24 小时到 5 年的范围。我们按原文分别列出，不推测具体个案如何处理。

### 官方列出的封禁理由

封禁政策列出的可封禁行为包括（但不限于）：

- 出售或转卖游戏内物品、虚拟货币，或提供、宣传此类服务。
- 使用数据挖掘或自动化工具（爬虫、脚本、机器人等）。
- 干扰、破解或解密服务器与游戏之间的数据传输，或以任何方式让服务器过载。
- 滥用客服渠道：提交虚假举报，或对客服使用粗俗、辱骂性语言。
- 在游戏外收款，为他人提供游戏内服务。
- 用游戏机制之外的方式获取不正当优势，包括：窥屏（stream sniping，利用他人直播信息获利）、利用漏洞（bug/glitch）、开发或使用外挂、机器人、脚本、宏，操纵机制获取未经授权的奖励或资源，绕过反作弊，绕过账号限制（例如开小号“炸鱼”，smurfing），用其他账号规避封禁，以及协助他人做上述任何事。

### 申诉

如果你不认同封禁，政策说可以通过[如何联系支持、找到官方社区？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1381-how-do-i-contact-support-and-find-official-communities/)向客服申诉（支持邮箱：**robrun.support@kefircyprus.com**）。Kefir 可能会复核决定，但表示没有义务向玩家说明封禁依据或复核细节。

## 近期反作弊动态（2026 年 11 月）

- [2026 年 11 月 17 日的更新](https://store.steampowered.com/news/app/4262460/view/1849458702693254)让死亡界面上的**举报**（Report）按钮更醒目。
- [2026 年 11 月 20 日的更新](https://store.steampowered.com/news/app/4262460/view/1849827110432538)“增加了更多检测作弊者的方法”。
- [Anti-Cheat Measures and Servers](https://store.steampowered.com/news/app/4262460/view/1849827110441426)（2026 年 11 月 23 日）写道：
  - 新一轮封禁已经执行，迄今已封禁**超过 20 万个账号**。
  - 为把反作弊放在首位，Kefir 会**暂时推迟**部分即将推出的游戏机制的开发。公告没有说明是哪些机制。
  - Kefir 正与 EAC 团队讨论更多安全措施，自研作弊检测工具，并扩充内部反作弊团队。
  - 由于在免费游戏里，普通封禁很容易被新账号绕过，Kefir 正在**研究硬件封禁**。

### 计划中的“提高准入门槛”服务器

同一篇 11 月 23 日公告说，相比硬件封禁，单独开设**准入要求更严格的服务器**能更快落地，所以会先推出这类服务器：

- 视服务器不同，进入条件将是**最低刑期（Jail Time），或游戏内消费累计达到一定金额**，二者之一。
- 这些服务器上的玩家会与普通服务器**分开匹配**，**包括 Looty Bay 在内**。
- Kefir 预计这能大幅减少换号逃避封禁的情况，减少玩家遇到外挂的机会，并表示会继续在所有服务器上改进反作弊。

截至 2026 年 11 月 24 日（北京时间），这仍是计划，并非已上线的功能。公告**没有给出上线日期、刑期或消费门槛数值，也没有说明地区**，也没有说硬件封禁已经实施。Kefir 公布细节后，我们会更新本页。刑期本身的说明见[联邦突袭 / 清档](/zh/guides/wipe/)。

## 官方未说明的内容

我们没有找到以下内容的官方说明：除死亡界面的举报按钮外如何举报作弊者、申诉需要多久、永久封禁与临时封禁各占多少，以及限制服务器或硬件封禁何时推出。第三方“解封”服务或工具我们无法核实，而且封禁政策本身就把绕过限制列为违规。

<div class="sources">

## 来源

- [Steam 上的 ROB RUN](https://store.steampowered.com/app/4262460/ROB_RUN/)
- [什么是 Easy Anti-Cheat？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1380-what-is-easy-anti-cheat/)
- [ROB RUN Ban Policy（封禁政策）](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1384-rob-run-ban-policy/)
- [如何联系支持、找到官方社区？](https://kefirgames.helpshift.com/hc/en/14-rob-run/faq/1381-how-do-i-contact-support-and-find-official-communities/)
- [2026 年 11 月 17 日更新说明](https://store.steampowered.com/news/app/4262460/view/1849458702693254)
- [2026 年 11 月 20 日更新说明](https://store.steampowered.com/news/app/4262460/view/1849827110432538)
- [Anti-Cheat Measures and Servers](https://store.steampowered.com/news/app/4262460/view/1849827110441426)（2026 年 11 月 23 日）

</div>
