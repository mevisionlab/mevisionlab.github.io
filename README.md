# MEVision Lab 网站技术文档

## 项目结构
```
cursorweb/
├── css/
│   ├── style.css        # 主样式文件
│   └── animations.css   # 动画效果样式
├── js/
│   ├── main.js         # 主要功能脚本
│   └── animations.js   # 动画效果脚本
├── images/             # 图片资源目录
├── fonts/             # 字体文件目录
└── index.html         # 主页
```

## 内容更新指南

### 1. 更新研究方向
在 `js/main.js` 文件中找到 `researchHighlights` 数组，按照以下格式添加新的研究方向：

```javascript
{
    title: {
        zh: '中文标题',
        en: 'English Title'
    },
    description: {
        zh: '中文描述',
        en: 'English Description'
    },
    image: 'images/research-image.jpg'
}
```

### 2. 更新新闻动态
在 `js/main.js` 文件中找到 `latestNews` 数组，按照以下格式添加新闻：

```javascript
{
    title: {
        zh: '中文标题',
        en: 'English Title'
    },
    date: 'YYYY-MM-DD',
    image: 'images/news-image.jpg'
}
```

### 3. 更新团队成员
在 `team.html` 文件中的 `team-grid` 类中添加新的成员卡片：

```html
<div class="member-card">
    <img src="images/member.jpg" alt="成员姓名">
    <h3 data-lang-zh="中文姓名" data-lang-en="English Name">中文姓名</h3>
    <p class="title" data-lang-zh="中文职位" data-lang-en="English Title">中文职位</p>
    <p class="description" data-lang-zh="中文简介" data-lang-en="English Introduction">中文简介</p>
</div>
```

### 4. 更新学术成果
在 `publications.html` 文件中的 `publications-list` 类中添加新的成果：

```html
<div class="publication-item">
    <h3 data-lang-zh="中文标题" data-lang-en="English Title">论文标题</h3>
    <p class="authors">作者列表</p>
    <p class="journal">期刊/会议名称</p>
    <p class="year">发表年份</p>
    <div class="links">
        <a href="paper-url" target="_blank">PDF</a>
        <a href="code-url" target="_blank">Code</a>
    </div>
</div>
```

### 5. 图片要求
- 所有图片应保存在 `images` 目录下
- 研究方向图片建议尺寸：800x600px
- 新闻图片建议尺寸：600x400px
- 团队成员照片建议尺寸：400x400px
- 所有图片应进行适当压缩，控制文件大小

### 6. 部署说明
1. 确保所有文件都已正确更新
2. 将整个 `cursorweb` 目录推送到 GitHub 仓库的 main 分支
3. GitHub Pages 将自动部署更新后的网站

### 7. 注意事项
- 所有文本内容都需要提供中英文双语版本
- 使用 data-lang-zh 和 data-lang-en 属性标注可翻译内容
- 图片文件名应使用英文，避免使用空格和特殊字符
- 定期检查并更新网站内容
- 保持代码的整洁和注释的完整性

## 技术支持
如有技术问题，请联系：[fanpeiliu123@163.com](mailto:fanpeiliu123@163.com)

## 版权信息
© 2024 MEVision Lab. All rights reserved. 