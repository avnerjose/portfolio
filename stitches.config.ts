import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      gray900: "#14141B",
      gray800: "#1D1D25",
      gray500: "#535459",
      green400: "#15C196",
    },
    shadows: {
      green400: "#15C196",
    },
  },
  media: {
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(max-width: 1280px)",
    "2xl": "(max-width: 1536px)",
  },
  utils: {
    paddingY: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    paddingX: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
});
