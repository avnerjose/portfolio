import * as Tabs from "@radix-ui/react-tabs";

import { styled } from "stitches.config";

export const Container = styled("section", {
  background: "$gray800",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
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

export const TabsContent = styled(Tabs.Content, {
  display: "flex",
  flexDirection: "column",

  "&[data-state='active']": {
    paddingTop: 32,
  },

  "& ul": {
    display: "flex",
    gap: 16,
    marginTop: 16,
    listStyle: "none",
    alignSelf: "flex-end",
  },
});
