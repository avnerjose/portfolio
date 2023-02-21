"use client";

import { useState } from "react";
import { Categories } from "@/graphql/generated";
import { NumberedHeading } from "@/components/NumberedHeading";
import * as Variants from "./animations";
import { ProjectTab } from "./ProjectTab";
import { Container, Content, TabsList, TabsRoot, TabsTrigger } from "./styles";

export function MyProjectsSection() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <Container id="projects">
      <Content>
        <NumberedHeading
          variants={Variants.itemFromLeft}
          number={3}
          label="My Projects"
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
        />
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
          <ProjectTab
            tabValue="tab1"
            categories={[Categories.PersonalProject, Categories.Challenge]}
          />
          <ProjectTab
            tabValue="tab2"
            categories={[Categories.Event, Categories.Course]}
          />
        </TabsRoot>
      </Content>
    </Container>
  );
}
