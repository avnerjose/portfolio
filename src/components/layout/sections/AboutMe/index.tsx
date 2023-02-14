import { Paragraph } from "@/components/Paragraph";
import { Avatar, Container, Content } from "./styles";
import Image from "next/image";
import { NumberedHeading } from "@/components/NumberedHeading";

export function AboutMeSection() {
  return (
    <Container>
      <Content>
        <div>
          <NumberedHeading number={1} label="About me" />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu
            diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit
            viverra amet a urna penatibus tortor tincidunt odio. Adipiscing
            aliquet arcu viverra neque leo neque fusce sed.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu
            diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit
            viverra amet a urna penatibus tortor tincidunt odio. Adipiscing
            aliquet arcu viverra neque leo neque fusce sed.
          </Paragraph>
        </div>
        <Avatar>
          <Image src="https://github.com/avnerjose.png" alt="Avner José" fill />
        </Avatar>
      </Content>
    </Container>
  );
}
