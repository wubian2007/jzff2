# 桔子分发

专业的应用分发平台 - 复刻自 appzhu.cn

## 项目说明

本项目是 appzhu.cn 首页的复刻版本，所有按钮和链接统一跳转到配置的地址。

## 功能特点

- ✅ 完整复刻首页内容
- ✅ 所有按钮和链接统一跳转（可配置）
- ✅ 响应式设计，支持移动端
- ✅ 跳转链接配置在显眼位置，方便修改

## 项目结构

```
桔子分发2号/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── config.js       # 跳转链接配置（显眼位置）
│   └── main.js         # 主要逻辑
├── assets/             # 图片等资源文件夹
│   ├── logo.png        # Logo图片
│   ├── favicon.ico     # 网站图标
│   └── images/         # 其他图片资源
└── README.md           # 项目说明
```

## 使用方法

### 修改跳转链接

编辑 `js/config.js` 文件，修改 `TARGET_URL` 的值：

```javascript
const TARGET_URL = 'https://www.baidu.com';  // 修改为你需要的跳转地址
```

修改后，页面顶部配置栏会显示新的跳转地址，所有按钮和链接都会跳转到该地址。

## 备案信息

长沙静腾教育咨询有限公司河北分公司 琼ICP备2025055238号

## 技术栈

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

Copyright © 2024 桔子分发 版权所有

