"use client";

import { useState } from "react";
import { generateColorScale, generateTailwindThemeCSS } from "../lib/colourUtils";
import { useTheme } from "next-themes";

export default function GeneratorPage() {
  const [color, setColor] = useState("#6b5f9e");
  const [name, setName] = useState("myColor");
  const { theme } = useTheme();

  const scale = generateColorScale(color);
  const css = generateTailwindThemeCSS(name, color);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(css);
  };

  return (
    <div className="w-full h-full
      transition-all duration-300 p-5">
      <div className="flex flex-col items-center">

        {/* Controls */}
        <div className="flex gap-4 items-center mb-6">
          <p className="">Select Colour:</p>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-12 w-16"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === " " || e.code === "Space") {
                e.preventDefault();
              }
            }}
            placeholder="Color name"
            className="px-3 py-2 ring-1 rounded focus:outline-none"
          />
        </div>

        {/* Preview */}
        <div className="grid grid-cols-4 sm:grid-cols-11 gap-2 mb-6 select-none">
          {Object.entries(scale).map(([key, value]) => {
            const getBrightness = (hex) => {
              const cleaned = hex.replace("#", "");
              const r = parseInt(cleaned.substr(0, 2), 16);
              const g = parseInt(cleaned.substr(2, 2), 16);
              const b = parseInt(cleaned.substr(4, 2), 16);
              return (0.299 * r + 0.587 * g + 0.114 * b);
            };
            const currentTheme = theme || "dark";
            const greater = currentTheme === "dark" ? 128 : 192;
            const dynamicColour = getBrightness(value) < greater ? "white" : "black";

            return (
              <div
                key={key}
                className="flex items-center justify-center text-xs 
                    text-gray-800 rounded shadow-sm"
                style={{ backgroundColor: value, height: "80px", width: "80px", boxShadow: `0 0 0 2px ${dynamicColour}` }}
              >
                <span style={{ color: dynamicColour }} className="text-xs font-bold">{key}</span>
              </div>
            );
          })}
        </div>

        {/* Generated Code */}
        <div className="w-full max-w-2xl">
          <textarea
            readOnly
            value={css}
            className="w-full h-72 border p-3 rounded ring-1
              font-mono text-sm mb-3 resize-none focus:outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Copy to Clipboard
          </button>
        </div>

        <div className="w-full max-w-2xl mt-8">
          <p className="text-2xl justify-center flex">🎨 How to Use the Color Theme Generator</p>
          <ol className="list-decimal list-outside p-2 ml-5 mb-1">
            <li>Select your starting color with the color picker.</li>
            <li>Enter a short, single-word name (e.g. brand or primary). This will be the prefix for your utility classes.</li>
            <li>A full scale of shades is generated instantly. You can see how each step looks in both light and dark mode.</li>
            <li>Click Copy to Clipboard to copy the generated CSS rules.</li>
            <li>Open your global stylesheet (e.g. globals.css or app.css) and paste the code inside. Tailwind v4 automatically picks up custom CSS variables and classes.</li>
            <li>Once added, you can use them like normal Tailwind utilities:</li>
          </ol>
          <div className="bg-[#171717] w-full p-8 rounded-lg">
            <pre className="text-white text-sm whitespace-pre-line font-mono">
              <code>
                {`<div class="bg-myColor-500 text-myColor-100">
                `}&nbsp;&nbsp;&nbsp;&nbsp;Hello World! 
                {`
                  </div>
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
