# Divination-0821
# 纯静态离线版：塔罗抽牌 + Yes/No 神谕

本项目是**无框架、无 npm 依赖**的纯前端静态网页工具，只有 4 个文件：

1. `index.html`
2. `app.js`
3. `style.css`
4. `README.md`

## 离线打开方式

- 直接双击 `index.html`，即可在浏览器中运行。
- 不需要安装 Node.js、npm、任何依赖。
- 所有数据与逻辑都在本地执行，支持离线使用。

## 功能说明

- 首页输入问题（可选）+ 模式选择：
  - 塔罗单张
  - 塔罗三张（过去/现在/未来）
  - Yes/No 神谕
  - Yes/No + 塔罗解释
- 结果展示：日期、问题、模式、卡片/神谕结果
- Yes/No 输出三态：`YES / NO / WAIT`，并附解释和行动建议
- 在 Yes/No 结果中可额外点击“抽一张塔罗解释原因”（同样遵循每日固定结果）
- “复制文案”支持分享纯文本
- “再抽一次”会提示：当天同问题同模式结果固定（可换问题或等明天）
- 历史记录使用 `localStorage`：
  - 展示时间（到分钟）、模式、问题摘要、结果摘要
  - 支持删除单条、清空全部

## 每日固定结果机制

- 使用本地时区日期：`YYYY-MM-DD`
- Seed 字符串格式：

  `YYYY-MM-DD|mode|normalizedQuestion`

- `normalizedQuestion` 规则：
  - `trim`
  - 连续空白合并为单空格
  - 只对拉丁字母做小写化（`toLowerCase()`），中文保持原样
- 稳定 hash：`xmur3`
- Seeded RNG：`mulberry32`
- 洗牌算法：`Fisher–Yates`（随机源严格使用 seeded RNG）

## 免责声明

- 本工具仅供娱乐与自我反思，不构成专业建议。
