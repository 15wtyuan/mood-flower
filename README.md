# 🌸 Mood Flower

<div align="center">

![License](https://img.shields.io/github/license/15wtyuan/mood-flower?style=flat-square)
![Version](https://img.shields.io/github/package-json/v/15wtyuan/mood-flower?style=flat-square)
![Stars](https://img.shields.io/github/stars/15wtyuan/mood-flower?style=flat-square)
![Status](https://img.shields.io/github/actions/workflow/status/15wtyuan/mood-flower/ci.yml?style=flat-square)

**A cyberpunk-style digital flower composed of glowing lines that visualizes and reacts to your music in real-time**

[English](#english) | [简体中文](#简体中文)

</div>

---

## English

### 🌿 Introduction

Mood Flower is a cute desktop pet application that listens to your music playback and reacts with beautiful flower animations. The flower's mood and movements change based on the music's tempo, volume, and rhythm, creating a delightful visual experience on your desktop.

### ✨ Visual Style

**Cyberpunk Aesthetic**: Mood Flower features a futuristic cyberpunk design with:

- **Glowing Neon Lines**: The flower is composed of elegant light-emitting lines
- **Dynamic Color Shifting**: Colors transition smoothly based on music characteristics
- **Holographic Interface**: Transparent, floating window with a glass-like effect
- **Smooth Animations**: 60fps fluid animations synchronized with music beat
- **Minimalist Geometry**: Clean geometric shapes with futuristic precision

The rendering is done programmatically using Canvas/SVG, ensuring crisp visuals at any resolution.

### ✨ Features

- 🎵 **Adaptive Audio Listening**: System-wide or app-specific audio monitoring with flexible switching
- ⚡ **Neon Animations**: Three cyberpunk animations (Idle, Swaying, Dancing) synchronized with music
- 🎭 **5 Personalities**: Rock, Classical, Pop, Electronic, and Folk - each with unique reactions
- 🎨 **Dynamic Color Shifts**: Colors transition smoothly based on BPM and volume intensity
- 🖥️ **Holographic Window**: Transparent, borderless window that floats above other applications
- 🔧 **Settings Panel**: Configure personality, audio mode, auto-start, and language preferences
- 🌍 **Bilingual Support**: Supports English and Simplified Chinese

### 🎧 Audio Capture Modes

Mood Flower offers three audio capture modes:

1. **System-Wide Monitoring** (Default)
   - Captures all audio output from your computer
   - Works with any music player or video
   - Most compatible and easiest to use

2. **Application-Specific**
   - Select specific applications to monitor (Spotify, YouTube, VLC, etc.)
   - More accurate BPM detection for focused listening
   - Reduces interference from other apps

3. **Custom Input Source**
   - Choose from available audio input devices
   - Perfect for external audio interfaces or mixers
   - Ideal for DJs and music producers

### 🎭 Flower Personalities

Each flower has a unique personality that reacts differently to music:

| Personality | Style | Music Preference | Reactions |
|-------------|-------|------------------|-----------|
| 🎸 **Rock** | Wild & Rebellious | Fast tempo, heavy beats | Headbanging, intense glowing |
| 🎹 **Classical** | Elegant & Graceful | Slow to moderate tempo | Gentle swaying, soft pulses |
| 🎤 **Pop** | Cheerful & Trendy | Mid-tempo, catchy | Bopping, rhythmic movements |
| 🎧 **Electronic** | Tech & Mysterious | Electronic beats | Pulsing lights, geometric patterns |
| 🎵 **Folk** | Gentle & Healing | Acoustic, soft vocals | Slow swaying, warm glows |

The personality affects how the flower interprets music and which colors/animations it displays.

### 🎯 How It Works

The cyber flower visualizes your music through:

1. **Color Temperature** (Based on BPM)
   - <80 BPM: Cool neon colors (Cyan, Purple, Blue) - Calm & relaxed
   - 80-120 BPM: Warm vibrant colors (Pink, Magenta, Orange) - Energetic
   - >120 BPM: Hot intense colors (Red, Yellow, White) - Excited

2. **Glow Intensity** (Based on Volume)
   - Low volume: Soft, dim glow - Resting state
   - Medium volume: Bright glow - Active state
   - High volume: Blinding glow - Peak energy

3. **Animation Pattern** (Based on Personality)
   - Each personality reacts uniquely to rhythm and beat
   - Smooth transitions between emotional states
   - Real-time synchronization with music

### 🛠️ Tech Stack

- **Desktop Framework**: [Tauri](https://tauri.app/) (Rust + Web)
- **Frontend**: [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Graphics**: HTML5 Canvas / SVG (for glowing line rendering)
- **Audio Processing**: Rust audio capture + JavaScript Web Audio API
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [UnoCSS](https://unocss.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Internationalization**: [Vue I18n](https://vue-i18n.intlify.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

### 🗺️ Roadmap

#### v1.0 - MVP (Current)
- ✅ Project architecture setup
- 🔨 System-wide audio capture
- 🔨 BPM detection algorithm
- 🔨 Volume analysis
- 🔨 5 flower personalities
- 🔨 Cyberpunk glowing line rendering
- 🔨 Dynamic color changes
- 🔨 3 animation states (Idle, Swaying, Dancing)
- 🔨 Holographic window (transparent, borderless)
- 🔨 Settings panel (Personality, Audio Mode)
- 🔨 System tray integration
- 🔨 Auto-start option
- 🔨 Bilingual support (EN/ZH)

#### v1.1 - Enhancements (Planned)
- 📊 Audio visualization waveform (optional overlay)
- 🎨 Customizable color themes
- 💾 Personality presets export/import
- 🖼️ Screenshot sharing
- ⚡ Performance optimizations

#### v2.0 - Advanced Features (Future)
- 🎁 Seasonal themes (Spring/Summer/Autumn/Winter)
- ☀️ Time-aware behaviors (Day/Night modes)
- 🎮 Gamification (Achievements, Stats)
- 🤖 AI music recommendations
- 🎪 Multi-flower support
- 🌐 Community flower gallery

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

### ⚠️ Known Limitations

- **Windows Audio Capture**: May require administrator privileges on some Windows versions
- **Linux Audio**: PulseAudio/PipeWire configuration may be needed
- **Performance**: High-resolution monitors with multiple flowers may impact performance
- **BPM Accuracy**: BPM detection accuracy varies by music genre and recording quality

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 简体中文

### 🌿 简介

Mood Flower 是一个赛博朋克风格的数字花朵，由发光的线条组成，能够实时可视化并对你的音乐做出反应。花朵的霓虹光辉、颜色变化和人格会根据音乐的BPM和节奏而变化，为你的桌面带来迷人的视觉体验。

### ✨ 视觉风格

**赛博朋克美学**: Mood Flower 采用未来主义赛博朋克设计：

- **发光霓虹线条**: 花朵由优雅的发光线条组成
- **动态颜色变化**: 颜色根据音乐特性平滑过渡
- **全息界面**: 透明悬浮窗口，具有玻璃质感
- **流畅动画**: 60fps流畅动画，与音乐节拍同步
- **极简几何**: 干净的几何形状，未来主义精确感

渲染使用 Canvas/SVG 程序化实现，确保在任何分辨率下都有清晰的视觉效果。

### ✨ 特性

- 🎵 **自适应音频监听**: 系统全局或应用指定监听，灵活切换
- ⚡ **霓虹动画**: 三种赛博朋克动画（闲置、摇摆、跳舞）与音乐同步
- 🎭 **5种人格**: 摇滚、古典、流行、电子、民谣 - 各有独特反应
- 🎨 **动态颜色变化**: 根据BPM和音量强度平滑过渡颜色
- 🖥️ **全息窗口**: 透明、无边框的窗口，浮动在其他应用之上
- 🔧 **设置面板**: 配置人格、音频模式、自启动和语言偏好
- 🌍 **双语支持**: 支持英文和简体中文

### 🎧 音频捕获模式

Mood Flower 提供三种音频捕获模式：

1. **系统全局监听**（默认）
   - 捕获电脑的所有音频输出
   - 兼容任何音乐播放器或视频
   - 兼容性最强，使用最简单

2. **应用指定监听**
   - 选择要监听的特定应用（Spotify、YouTube、VLC等）
   - 针对专注聆听时BPM检测更准确
   - 减少其他应用的干扰

3. **自定义音源**
   - 从可用的音频输入设备中选择
   - 适合外部音频接口或混音器
   - 理想选择：DJ和音乐制作人

### 🎭 花朵人格系统

每朵花都有独特的个性，对音乐有不同反应：

| 人格 | 风格 | 音乐偏好 | 反应 |
|-----|------|---------|------|
| 🎸 **摇滚花** | 狂野叛逆 | 快节奏、强节拍 | 甩头、强烈发光 |
| 🎹 **古典花** | 优雅端庄 | 慢到中等节奏 | 轻柔摇摆、柔和脉冲 |
| 🎤 **流行花** | 活泼时尚 | 中等节奏、朗朗上口 | 点头、律动 |
| 🎧 **电子花** | 科技神秘 | 电子节拍 | 脉冲发光、几何图案 |
| 🎵 **民谣花** | 温柔治愈 | 原声、轻柔人声 | 缓慢摇摆、温暖发光 |

人格影响花朵解读音乐的方式，以及它显示的颜色和动画。

### 🎯 工作原理

赛博朋克花朵通过以下方式可视化音乐：

1. **颜色温度**（基于BPM）
   - <80 BPM: 冷色霓虹（青、紫、蓝）- 平静放松
   - 80-120 BPM: 暖色鲜艳（粉、洋红、橙）- 充满活力
   - >120 BPM: 热色强烈（红、黄、白）- 兴奋

2. **发光强度**（基于音量）
   - 低音量: 柔和暗淡 - 休眠状态
   - 中等音量: 明亮发光 - 活跃状态
   - 高音量: 耀眼发光 - 能量峰值

3. **动画模式**（基于人格）
   - 每种人格对节奏和节拍都有独特反应
   - 情绪状态之间平滑过渡
   - 与音乐实时同步

### 🛠️ 技术栈

- **桌面框架**: [Tauri](https://tauri.app/) (Rust + Web)
- **前端**: [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **图形渲染**: HTML5 Canvas / SVG（用于发光线条渲染）
- **音频处理**: Rust音频捕获 + JavaScript Web Audio API
- **构建工具**: [Vite](https://vitejs.dev/)
- **样式**: [UnoCSS](https://unocss.dev/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **路由**: [Vue Router](https://router.vuejs.org/)
- **国际化**: [Vue I18n](https://vue-i18n.intlify.dev/)
- **包管理器**: [pnpm](https://pnpm.io/)

### 🗺️ 开发路线图

#### v1.0 - MVP（当前）
- ✅ 项目架构搭建
- 🔨 系统全局音频捕获
- 🔨 BPM检测算法
- 🔨 音量分析
- 🔨 5种花朵人格
- 🔨 赛博朋克发光线条渲染
- 🔨 动态颜色变化
- 🔨 3种动画状态（闲置、摇摆、跳舞）
- 🔨 全息窗口（透明、无边框）
- 🔨 设置面板（人格、音频模式）
- 🔨 系统托盘集成
- 🔨 开机自启动选项
- 🔨 双语支持（中/英）

#### v1.1 - 增强功能（计划中）
- 📊 音频可视化波形（可选叠加层）
- 🎨 可自定义颜色主题
- 💾 人格预设导出/导入
- 🖼️ 截图分享
- ⚡ 性能优化

#### v2.0 - 高级功能（未来）
- 🎁 季节主题（春/夏/秋/冬）
- ☀️ 时间感知行为（白天/夜间模式）
- 🎮 游戏化（成就、统计）
- 🤖 AI音乐推荐
- 🎪 多花支持
- 🌐 社区花卉画廊

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

### ⚠️ 已知限制

- **Windows音频捕获**: 某些Windows版本可能需要管理员权限
- **Linux音频**: 可能需要配置PulseAudio/PipeWire
- **性能**: 高分辨率显示器上多朵花可能影响性能
- **BPM准确性**: BPM检测准确度因音乐流派和录音质量而异

### 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

---

<div align="center">
Made with ❤️ by 15wtyuan
</div>
