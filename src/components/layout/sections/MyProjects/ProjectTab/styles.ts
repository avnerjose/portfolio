import { styled } from "stitches.config";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled(Tabs.Content, {
  "&[data-state='active']": {
    paddingY: 32,
  },

  display: "flex",
  flexDirection: "column",
  overflow: "hidden",

  "& ul": {
    display: "flex",
    gap: 16,
    marginTop: 16,
    listStyle: "none",
    alignSelf: "flex-end",
  },
});
