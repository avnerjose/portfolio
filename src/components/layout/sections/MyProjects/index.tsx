import { useState } from "react";

import { NumberedHeading } from "@/components/NumberedHeading";
import { ProjectItemMobile } from "@/components/ProjectItem/Mobile";
import { PaginationItem } from "@/components/PaginationItem";
import {
  Container,
  Content,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "./styles";

const PROJECTS = [
  {
    id: 1,
    category: "Personal project",
    name: "Project name",
    description:
      "Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit viverra amet a urna penatibus tortor tincidunt odio. Adipiscing aliquet arcu viverra neque leo neque fusce sed.",
    tags: ["ReactJS", "NextJS", "SCSS", "Storybook"],
    repoUrl: "jkfajsdkf",
    imageUrl:
      "data:image/jpeg;base64,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",
    webUrl: "gsdfgsdf",
  },
  {
    id: 2,
    category: "Personal project",
    name: "Project name",
    description:
      "Lorem ipsum dolor sit amet consectetur. Facilisi fermentum diam eu diam habitant sem odio donec at. Nisi purus sit et phasellus. Sit viverra amet a urna penatibus tortor tincidunt odio. Adipiscing aliquet arcu viverra neque leo neque fusce sed.",
    tags: ["ReactJS", "NextJS", "SCSS", "Storybook"],
    repoUrl: "jkfajsdkf",
    imageUrl:
      "data:image/jpeg;base64,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",
    webUrl: "gsdfgsdf",
  },
];

export function MyProjectsSection() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const projectsList = PROJECTS.map((project) => (
    <ProjectItemMobile key={project.id} project={project} />
  ));

  return (
    <Container>
      <Content>
        <NumberedHeading number={3} label="My Projects" />
        <TabsRoot
          defaultValue="tab1"
          value={selectedTab}
          onValueChange={(value) => setSelectedTab(value)}
        >
          <TabsList className="TabsList" aria-label="Manage your account">
            <TabsTrigger value="tab1">
              Personal projects & challenges
            </TabsTrigger>
            <TabsTrigger value="tab2">Courses & events</TabsTrigger>
          </TabsList>
          <TabsContent className="TabsContent" value="tab1">
            {projectsList}
            <ul>
              <li>
                <PaginationItem label={1} isActive />
              </li>
              <li>
                <PaginationItem label={2} />
              </li>
              <li>
                <PaginationItem label={3} />
              </li>
            </ul>
          </TabsContent>
          <TabsContent className="TabsContent" value="tab2">
            <h2>Tab 2</h2>
          </TabsContent>
        </TabsRoot>
      </Content>
    </Container>
  );
}
