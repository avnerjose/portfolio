import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const Container = styled("section", {
  background: "$gray800",
});

export const Content = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 85px)",
  paddingX: 24,
  paddingY: 32,
  maxWidth: "1120px",
  margin: "auto",

  "& h2": {
    marginBottom: 32,
  },
});

export const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
});

export const TabsList = styled(Tabs.List, {
  display: "flex",
  flexShrink: 0,
});

export const TabsTrigger = styled(Tabs.Trigger, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "transparent",
  color: "$gray500",
  borderBottom: "2px solid $gray500",
  overflowWrap: "break-word",
  padding: 2,
  paddingBottom: 16,
  width: "100%",
  cursor: "pointer",

  "&[data-state='active']": {
    color: "$white",
    borderColor: "$green400",
  },
});
