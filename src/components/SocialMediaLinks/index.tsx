import { GitHub, Linkedin } from "react-feather";
import { motion } from "framer-motion";

import * as Variants from "./animations";
import { Container } from "./styles";

interface SocialMediaLinksProps {
  variant?: "default" | "dislocated";
}

export function SocialMediaLinks({
  variant = "default",
}: SocialMediaLinksProps) {
  return (
    <Container
      position={variant}
      variants={Variants.list}
      initial="hidden"
      animate="show"
    >
      <motion.li variants={Variants.itemFromBottom}>
        <a href="https://github.com/avnerjose" target="_blank">
          <GitHub />
        </a>
      </motion.li>
      <motion.li variants={Variants.itemFromBottom}>
        <a href="https://linkedin.com/in/avnerjose" target="_blank">
          <Linkedin />
        </a>
      </motion.li>
    </Container>
  );
}
