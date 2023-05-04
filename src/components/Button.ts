import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Button = styled(motion.button, {
  color: "$green400",
  fontWeight: "bold",
  position: "relative",
  background: "$gray800",
  zIndex: 1,
  transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  userSelect: "none",
  cursor: "pointer",
  transformStyle: "preserve-3d",
  border: "1px solid $green400",
  borderRadius: 4,
  transitionDelay: "100ms",
  display: "inline-block",

  "&:focus": {
    outline: "$green400",
    boxShadow: "4px 4px 0 0 $green400",
    transform: "translate(-5px, -5px) !important",
  },

  "&:hover": {
    outline: "none",
    boxShadow: "4px 4px 0 0 $green400",
    transform: "translate(-5px, -5px) !important",
  },

  variants: {
    size: {
      big: {
        paddingY: 16,
        paddingX: 64,
      },
      small: {
        paddingY: 16,
        paddingX: 32,
      },
    },
    background: {
      gray800: {
        background: "$gray800",
      },
      gray900: {
        background: "$gray900",
      },
    },
  },

  defaultVariants: {
    size: "big",
    background: "gray800",
  },
});

/* ~~~~~~~ INIT. BTN ~~~~~~~ */

/* ~~~~~~~~~~~~ GLOBAL SETTINGS ~~~~~~~~~~~~ */

// body {
// 	--def: #96B7C4;
// 	--inv: #fff;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	flex-direction: column;
// 	height: 100vh;
// 	width: 100%;
// 	background-image: linear-gradient(-25deg, #616161 0%, #96B7C4 100%);
// }

// "&.btn": {
// 	position: relative;
// 	padding: 1.4rem 4.2rem;
// 	padding-right: 3.1rem;
// 	font-size: 1.4rem;
// 	color: var(--inv);
// 	letter-spacing: 1.1rem;
// 	text-transform: uppercase;
// 	transition: ;
// 	cursor: pointer;
// 	user-select: none;
// },
