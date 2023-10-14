import { extendTheme } from "@chakra-ui/react";
import { primary, secondary } from "./colors";
import { cardTheme } from "./card";

export const theme = extendTheme({
  colors: { primary, secondary },
  components: { Card: cardTheme },
});
