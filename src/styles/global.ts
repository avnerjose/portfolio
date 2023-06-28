import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    scrollbarWidth: "thin",
    scrollbarColor: "$gray900 $gray800",
  },

  "::-webkit-scrollbar": {
    width: 8,
  },

  "::-webkit-scrollbar-track": {
    background: "$gray900",
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: "$gray800",
    borderRadius: 10,
  },


  main: {
    background: "$gray900",
    color: "$white",
  },

  // body: {
  //   "&.blur": {
  //     "section > *": {
  //       filter: "blur(5px) brightness(0.7)",
  //       pointerEvents: "none",
  //       userSelect: "none",
  //     },
  //   },
  // },
});
