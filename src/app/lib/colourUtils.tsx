import chroma from "chroma-js";

export function generateColorScale(baseColor: string): Record<string, string> {
  return {
    50: chroma(baseColor).brighten(3).hex(),
    100: chroma(baseColor).brighten(2.5).hex(),
    200: chroma(baseColor).brighten(2).hex(),
    300: chroma(baseColor).brighten(1.5).hex(),
    400: chroma(baseColor).brighten(1).hex(),
    500: chroma(baseColor).hex(),
    600: chroma(baseColor).darken(0.5).hex(),
    700: chroma(baseColor).darken(1).hex(),
    800: chroma(baseColor).darken(1.5).hex(),
    900: chroma(baseColor).darken(2).hex(),
    950: chroma(baseColor).darken(2.5).hex(),
  };
}

export function generateTailwindThemeCSS(name: string, baseColor: string): string {
  const scale = generateColorScale(baseColor);
  let css = `@theme {\n`;
  Object.entries(scale).forEach(([key, value]) => {
    css += `  --color-${name}-${key}: ${value};\n`;
  });
  css += `}`;
  return css;
}
