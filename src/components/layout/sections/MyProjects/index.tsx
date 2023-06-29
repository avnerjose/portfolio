"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";

import { Categories } from "@/graphql/generated";
import { NumberedHeading } from "@/components/NumberedHeading";
import * as Variants from "./animations";
import { ProjectTab } from "./ProjectTab";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";

export function MyProjectsSection() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang, "home");
  const sectionRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <section className="bg-gray-800" id="projects" ref={sectionRef}>
      <motion.div className="flex flex-col min-h-[calc(100vh-85px)] px-6 py-8 max-w-[1120px] m-auto">
        <NumberedHeading
          variants={Variants.itemFromLeft}
          number={3}
          label={t("myProjects")}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
        />
        <div className="mb-8" />
        <Tabs.Root
          className="flex flex-col"
          defaultValue="tab1"
          value={selectedTab}
          onValueChange={(value) => setSelectedTab(value)}
        >
          <Tabs.List
            className="flex flex-shrink-0"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="flex justify-center items-center text-center bg-transparent text-white [overflow-wrap:break-word] p-[2px] pb-4 w-full cursor-pointer data-[state='active']:border-b data-[state='active']:border-green-400"
              value="tab1"
            >
              {t("personalProjectsAndChallenges")}
            </Tabs.Trigger>
            <Tabs.Trigger
              className="flex justify-center items-center text-center bg-transparent text-white [overflow-wrap:break-word] p-[2px] pb-4 w-full cursor-pointer data-[state='active']:border-b data-[state='active']:border-green-400"
              value="tab2"
            >
              {t("coursesAndEvents")}
            </Tabs.Trigger>
          </Tabs.List>
          <ProjectTab
            tabValue="tab1"
            categories={[Categories.PersonalProject, Categories.Challenge]}
            isSelected={selectedTab === "tab1"}
          />
          <ProjectTab
            tabValue="tab2"
            categories={[Categories.Event, Categories.Course]}
            isSelected={selectedTab === "tab2"}
          />
        </Tabs.Root>
      </motion.div>
    </section>
  );
}
