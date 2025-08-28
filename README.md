# 🌈 Colour Wind  
*A Tailwind CSS Color Theme Generator*  

![Preview Screenshot](https://dafbeh.xyz/Projects/ColourWind/ColourWind-2.png)

## ✨ Overview  
**Colour Wind** is a web-based tool that generates full Tailwind CSS color palettes (shades 50 → 950) from a single base color.  
Simply pick a color, give it a name, and instantly copy a ready-to-use Tailwind @theme block for your project.  

This project was built to make **theme customization in Tailwind CSS v4+** quick, beautiful, and developer-friendly.  

## 🚀 Features  
- 🎨 Color Picker – Select any base color  
- 🌗 Auto Palette Generator – Generates shades 50–950 using chroma.js  
- 📝 Custom Names – Name your palette (e.g. brand, primary)  
- 👀 Live Preview – See all shades instantly  
- 📋 One-Click Copy – Copy the generated @theme block to your clipboard  
- ⚡ Built with Next.js + Tailwind CSS  

## 🛠 Tech Stack  
- Next.js – App Router, React framework  
- Tailwind CSS – Utility-first CSS  
- Chroma.js – Color manipulation library  
- TypeScript – Safer and cleaner code  

## 📦 Installation  

```bash
git clone https://github.com/dafbeh/colour-wind.git
cd colour-wind
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.  

## 📖 Usage  

1. Navigate to /create  
2. Pick a base color  
3. Enter a palette name (e.g. myColor)  
4. Copy the generated @theme block  
5. Paste into your tailwind.css file:

```css
@theme {
  --color-myColor-50: #8578b9;
  --color-myColor-100: #6b5f9e;
  --color-myColor-200: #514884;
  --color-myColor-300: #38316a;
  --color-myColor-400: #1f1c52;
  --color-myColor-500: #12113f;
  --color-myColor-600: #130e30;
  --color-myColor-700: #110922;
  --color-myColor-800: #0a0515;
  --color-myColor-900: #000000;
  --color-myColor-950: #000000;
}
```

## 🌟 Demo  
[Live Demo Here](https://color-tailor.vercel.app/)  

⚡ Made with love by [dafbeh](https://github.com/dafbeh)
