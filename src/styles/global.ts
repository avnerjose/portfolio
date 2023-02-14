import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  main: {
    background: "$gray900",
    color: "$white",
  },

  body: {
    "&.blur": {
      "section > *": {
        filter: "blur(5px) brightness(0.7)",
        pointerEvents: "none",
        userSelect: "none",
      
      },
    },
  },
});
