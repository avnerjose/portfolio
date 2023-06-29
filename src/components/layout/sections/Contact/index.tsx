"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import { Button } from "@/components/Button";
import { NumberedHeading } from "@/components/NumberedHeading";
import { Paragraph } from "@/components/Paragraph";
import particlesConfig from "./particles.json";
import * as Variants from "./animations";
import { ZodFormattedError, z } from "zod";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";
import { useMediaQuery } from "react-responsive";

const contactFormSchema = z.object({
  email: z.string().email("Invalid e-mail").nonempty("E-mail is required"),
  name: z.string().nonempty("Name is required"),
  message: z.string().nonempty("Message is required"),
});

export function ContactSection() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang, "home");
  const sectionRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<
    Array<{
      field: string;
      message: string;
    }>
  >([]);
  const [state, handleSubmit] = useForm("moqzrewg");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const extractErrorMessages = <T,>(errors: z.typeToFlattenedError<T>) => {
    const errorMessages: Array<{
      field: string;
      message: string;
    }> = [];
    const fieldErrors = errors["fieldErrors"];

    for (const key in fieldErrors) {
      if (fieldErrors.hasOwnProperty(key)) {
        errorMessages.push({
          field: key,
          message: fieldErrors[key as keyof typeof fieldErrors]![0],
        });
      }
    }

    setErrors(errorMessages);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const res = contactFormSchema.safeParse({
      email,
      name,
      message,
    });

    if (res?.success) {
      handleSubmit(e);
      setErrors([]);
      setEmail("");
      setName("");
      setMessage("");
    } else {
      extractErrorMessages(res.error.flatten());
    }
  };

  return (
    <section
      className="bg-gray-800 relative overflow-hidden"
      id="contact"
      ref={sectionRef}
    >
      {!isMobile && (
        <Particles
          id="tsparticles"
          className="absolute z-0 inset-0"
          init={particlesInit}
          options={JSON.parse(JSON.stringify(particlesConfig))}
        />
      )}

      <motion.div
        className="flex flex-col min-h-[calc(100vh-85px)] px-6 py-8 text-center max-w-[1120px] m-auto"
        variants={Variants.content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <NumberedHeading
          variants={Variants.itemFromLeft}
          number={5}
          label={t("contact")}
        />
        <motion.div className="flex gap-4 p-4 rounded-lg  flex-col items-center justify-center m-auto w-full md:w-[70%] z-[1]">
          <motion.h2
            className="font-bold text-4xl md:text-6xl"
            variants={Variants.itemFromBottom}
          >
            {t("letsGetInTouch")}
          </motion.h2>
          <Paragraph color="white" variants={Variants.itemFromBottom}>
            {t("gotAProposal")}
          </Paragraph>
          <form
            className="flex p-4 flex-col w-full gap-4 items-center max-w-[500px]"
            onSubmit={handleFormSubmit}
          >
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-900 p-4 text-white rounded-lg focus:outline focus:outline-green-400"
            />
            <ValidationError
              className="self-start text-red-500"
              field="name"
              errors={errors}
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 p-4 text-white rounded-lg focus:outline focus:outline-green-400"
            />
            <ValidationError
              className="self-start text-red-500"
              field="email"
              errors={errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-900 p-4 text-white rounded-lg focus:outline focus:outline-green-400 h-[120px] resize-none"
            />
            <ValidationError
              className="self-start text-red-500"
              field="message"
              errors={errors}
            />
            <Button type="submit" variants={Variants.itemFromBottom}>
              {t("contactMe")}
            </Button>
            <ValidationError errors={state.errors} />
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
