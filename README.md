# 🌸 Mood Flower

<div align="center">

![License](https://img.shields.io/github/license/15wtyuan/mood-flower?style=flat-square)
![Version](https://img.shields.io/github/package-json/v/15wtyuan/mood-flower?style=flat-square)
![Stars](https://img.shields.io/github/stars/15wtyuan/mood-flower?style=flat-square)

**A desktop pet flower that reacts to your local music playback with different expressions and animations**

[English](#english) | [简体中文](#简体中文)

</div>

---

## English

### 🌿 Introduction

Mood Flower is a cute desktop pet application that listens to your music playback and reacts with beautiful flower animations. The flower's mood and movements change based on the music's tempo, volume, and rhythm, creating a delightful visual experience on your desktop.

### ✨ Features

- 🎵 **Music Reactivity**: Listens to your local music playback and adjusts the flower's behavior
- 🌸 **Dynamic Animations**: Five different flower animations based on music characteristics
- 😊 **Mood System**: Five moods (Happy, Calm, Excited, Sad, Sleepy) triggered by music patterns
- 🎨 **Customizable**: Adjust petal count and flower color
- 🖥️ **Desktop Pet**: Transparent, borderless window that floats above other applications
- 🔧 **Settings Panel**: Configure language, theme, auto-start, and other preferences
- 🌍 **Internationalization**: Supports English and Simplified Chinese

### 🎯 How It Works

The flower responds to your music:

1. **Low Volume**: Flower goes to sleep 😴
2. **Slow Tempo (<60 BPM)**: Flower stays calm and gently sways 😌
3. **Medium Tempo (60-120 BPM)**: Flower becomes happy and sways 😊
4. **Fast Tempo (>120 BPM)**: Flower gets excited and dances 🤩

### 🛠️ Tech Stack

- **Desktop Framework**: [Tauri](https://tauri.app/) (Rust + Web)
- **Frontend**: [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [UnoCSS](https://unocss.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Internationalization**: [Vue I18n](https://vue-i18n.intlify.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

### 📦 Installation

#### Prerequisites

- [Node.js](https://nodejs.org/) 20 or higher
- [pnpm](https://pnpm.io/) 9 or higher
- [Rust](https://www.rust-lang.org/) (for Tauri)

#### Clone and Install

```bash
# Clone the repository
git clone https://github.com/15wtyuan/mood-flower.git
cd mood-flower

# Install dependencies
pnpm install
```

### 🚀 Development

```bash
# Start development server
pnpm dev

# Start Tauri development
pnpm tauri:dev
```

### 🏗️ Build

```bash
# Build frontend
pnpm build

# Build Tauri application
pnpm tauri:build
```

### 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 简体中文

### 🌿 简介

Mood Flower 是一个可爱的桌面宠物应用，它会聆听你的音乐播放，并以美丽的花朵动画做出反应。花朵的情绪和动作会根据音乐的节奏、音量和节拍而变化，为你的桌面带来愉悦的视觉体验。

### ✨ 特性

- 🎵 **音乐响应**: 监听本地音乐播放并调整花朵行为
- 🌸 **动态动画**: 基于音乐特性的五种不同花朵动画
- 😊 **情绪系统**: 根据音乐模式触发五种情绪（开心、平静、兴奋、悲伤、困倦）
- 🎨 **可定制**: 调整花瓣数量和花朵颜色
- 🖥️ **桌面宠物**: 透明、无边框的窗口，浮动在其他应用之上
- 🔧 **设置面板**: 配置语言、主题、自启动和其他偏好设置
- 🌍 **国际化**: 支持英文和简体中文

### 🎯 工作原理

花朵会响应你的音乐：

1. **低音量**: 花朵进入睡眠状态 😴
2. **慢节奏 (<60 BPM)**: 花朵保持平静并轻轻摇摆 😌
3. **中等节奏 (60-120 BPM)**: 花朵变得开心并摇摆 😊
4. **快节奏 (>120 BPM)**: 花朵变得兴奋并跳舞 🤩

### 🛠️ 技术栈

- **桌面框架**: [Tauri](https://tauri.app/) (Rust + Web)
- **前端**: [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **样式**: [UnoCSS](https://unocss.dev/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **路由**: [Vue Router](https://router.vuejs.org/)
- **国际化**: [Vue I18n](https://vue-i18n.intlify.dev/)
- **包管理器**: [pnpm](https://pnpm.io/)

### 📦 安装

#### 前置要求

- [Node.js](https://nodejs.org/) 20 或更高版本
- [pnpm](https://pnpm.io/) 9 或更高版本
- [Rust](https://www.rust-lang.org/) (用于 Tauri)

#### 克隆和安装

```bash
# 克隆仓库
git clone https://github.com/15wtyuan/mood-flower.git
cd mood-flower

# 安装依赖
pnpm install
```

### 🚀 开发

```bash
# 启动开发服务器
pnpm dev

# 启动 Tauri 开发
pnpm tauri:dev
```

### 🏗️ 构建

```bash
# 构建前端
pnpm build

# 构建 Tauri 应用
pnpm tauri:build
```

### 📝 贡献

欢迎贡献！请随时提交 Pull Request。

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

### 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

---

<div align="center">
Made with ❤️ by 15wtyuan
</div>
