# 塔罗抽牌 + Yes/No 神谕

这是一个基于 HTML、CSS 和 JavaScript 开发的在线塔罗抽牌与 Yes/No 神谕网页。

项目采用纯前端静态网页结构，无需服务器后端，可通过 GitHub Pages 在线访问。

## 项目文件

本项目主要包含以下 4 个文件：

1. `index.html`
2. `app.js`
3. `style.css`
4. `README.md`

## 在线访问

本项目通过 **GitHub Pages** 发布。

发布完成后，可直接通过网页链接访问，也可以将网页地址生成二维码，通过手机扫码进入。

## 功能说明

* 输入问题并选择占卜模式：

  * 塔罗单张
  * 塔罗三张（过去 / 现在 / 未来）
  * Yes/No 神谕
  * Yes/No + 塔罗解释
* 展示日期、问题、模式及抽牌结果
* Yes/No 提供三种结果：

  * `YES`
  * `NO`
  * `WAIT`
* 提供相应解释及行动建议
* Yes/No 结果可额外抽取一张塔罗牌进行解释
* 支持复制结果文本
* 支持历史记录查看
* 支持删除单条记录或清空全部记录

## 每日固定结果机制

相同日期、相同问题和相同模式下，生成的结果保持一致。

系统使用：

* 本地日期：`YYYY-MM-DD`
* 问题文本标准化
* `xmur3` Hash
* `mulberry32` Seeded RNG
* `Fisher–Yates` 洗牌算法

Seed 格式：

`YYYY-MM-DD|mode|normalizedQuestion`

## 数据存储

历史记录使用浏览器的 `localStorage` 保存。

数据保存在用户当前浏览器中，不会上传至服务器。

清除浏览器数据后，本地历史记录可能会被删除。

## 技术说明

本项目为纯前端静态网页：

* HTML
* CSS
* JavaScript
* 无 Node.js 依赖
* 无 npm 依赖
* 无后端数据库
* 支持 GitHub Pages 部署

## 免责声明

本工具仅供娱乐与自我反思，不构成专业建议。
