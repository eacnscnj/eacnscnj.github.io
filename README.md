# 大连海事大学计算机求生指北

一份由在校生整理的 DLMU 计算机类求生笔记，基于 Hexo 构建，部署在 [GitHub Pages](https://eacnscnj.github.io)。

## 笔记导航

- **序**：入学认知、校园生活与生存原则
- **破**：课程攻略、绩点分流、期末突击、竞赛与设备
- **Q**：计算机自学路线、工具链与资源合集
- **终**：实习就业、考研保研与毕业复盘

## 目录结构

```text
source/_posts/                      # 文章（Markdown）
themes/dlmu/                        # 主题（layout / css / js）
archive/docs/                       # 旧 Jekyll 站点内容归档
.github/workflows/pages.yml         # GitHub Pages 部署工作流
```

## 本地开发

```bash
npm install      # 安装依赖
npm run server   # 本地预览 http://localhost:4000
npm run build    # 生成静态文件到 public/
```

## 贡献

新增或更新文章请参考 [AUTHORING.md](AUTHORING.md)。推送到 `main` 分支后，GitHub Actions 会自动构建并发布。

## License

[MIT](LICENSE)
