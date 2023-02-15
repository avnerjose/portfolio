import { motion } from "framer-motion";

import * as Variants from "./animations";
import { Container, Content, Trail } from "./styles";
import { Paragraph } from "../Paragraph";

interface WorkExperienceItem {
  animationDelay: number;
}

export function WorkExperienceItem({ animationDelay }: WorkExperienceItem) {
  return (
    <Container>
      <Trail
        variants={Variants.itemFromBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={animationDelay}
      />
      <Content
        variants={Variants.content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={animationDelay}
      >
        <motion.h3 variants={Variants.itemFromLeft}>
          Frontend part-time contractor
        </motion.h3>
        <motion.span variants={Variants.itemFromLeft}>Viasat Inc.</motion.span>
        <Paragraph variants={Variants.itemFromLeft} color="white" size="small">
          Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu
          diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit
          viverra amet a urna penatibus tortor tincidunt odio. Adipiscing
          aliquet arcu viverra neque leo neque fusce sed. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Expedita modi amet mollitia nemo
          eius saepe explicabo dolorem unde non. Ipsam molestiae id excepturi
          perspiciatis commodi vitae veniam magnam, vero fugiat.
        </Paragraph>
        <Paragraph variants={Variants.itemFromLeft} color="white" size="small">
          Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu
          diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit
          viverra amet a urna penatibus tortor tincidunt odio. Adipiscing
          aliquet arcu viverra neque leo neque fusce sed.
        </Paragraph>
      </Content>
    </Container>
  );
}
