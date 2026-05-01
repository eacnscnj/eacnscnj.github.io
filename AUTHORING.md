# 更新文章说明

这个仓库现在按 Hexo 源站结构维护。以后主要编辑 `source/_posts/` 里的 Markdown 文件。

## 目录结构

```text
source/_posts/
  prelude/  # 序：入学认知、校园生活、生存原则
  break/    # 破：课程攻略、绩点分流、期末突击、竞赛与设备
  q/        # Q：自学路线、工具链、CS 课程、资源合集
  final/    # 终：实习就业、考研保研、毕业复盘、后续补充
```

`docs/` 是旧站点内容的保留目录，不再作为日常更新入口。

## 新增文章

可以用 Hexo 命令生成：

```bash
npm run hexo new post "文章标题"
```

也可以直接在对应目录新建 Markdown 文件，例如：

```text
source/_posts/break/期末突击指南.md
```

文件头建议这样写：

```yaml
---
title: 期末突击指南
date: 2026-04-29 23:20:00
updated: 2026-04-29 23:20:00
categories:
  - 破
  - 期末突击
tags:
  - 期末
  - 课程攻略
  - DLMU
toc: true
---
```

## 更新旧文章

直接修改对应 Markdown 正文，并把 `updated` 改成当前日期时间。

## 本地预览与部署

首次使用先安装依赖：

```bash
npm install
```

本地预览：

```bash
npm run server
```

生成静态文件：

```bash
npm run build
```

部署到 GitHub Pages：

```bash
npm run deploy
```
