const url = (process.env.SITE_URL || "https://good1uck.github.io/looty-bay").replace(
  /\/$/,
  ""
);
const pathPrefix = process.env.PATH_PREFIX || "/looty-bay";

export default {
  nameEn: "Looty Bay Manual",
  nameZh: "Looty Bay 攻略手册",
  taglineEn: "An unofficial guide to ROB RUN",
  taglineZh: "非官方《ROB RUN》攻略",
  descriptionEn:
    "An unofficial English and Chinese guide to ROB RUN by Kefir. Every claim is cited to official sources. This site is not affiliated with Kefir.",
  descriptionZh:
    "一份关于 Kefir 游戏《ROB RUN》的非官方中英对照攻略。文中事实均注明官方来源。本站与 Kefir 无隶属关系。",
  url,
  pathPrefix,
  verified: "2026-11-22",
  verifiedNoteEn:
    "Verified against official sources as of November 22, 2026 (America/New_York). ROB RUN is in Early Access, so systems can change in a patch.",
  verifiedNoteZh:
    "以下内容根据官方来源核对，核对日期为 2026 年 11 月 22 日（美国东部时间）。游戏仍在抢先体验（Early Access）阶段，机制可能会随更新改变。",
  repo: "https://github.com/good1uck/looty-bay",
  steam: "https://store.steampowered.com/app/4262460/ROB_RUN/",
  officialSite: "https://robrun.com/en",
  help: "https://kefirgames.helpshift.com/hc/en/14-rob-run/",
};
