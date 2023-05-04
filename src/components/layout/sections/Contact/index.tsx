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
import { ContactForm, Container, Content, MainContent } from "./styles";
import { ZodFormattedError, z } from "zod";

const contactFormSchema = z.object({
  email: z.string().email("Invalid e-mail").nonempty("E-mail is required"),
  name: z.string().nonempty("Name is required"),
  message: z.string().nonempty("Message is required"),
});

export function ContactSection() {
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
    <Container id="contact" ref={sectionRef}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={JSON.parse(JSON.stringify(particlesConfig))}
      />

      <Content
        variants={Variants.content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <NumberedHeading
          variants={Variants.itemFromLeft}
          number={5}
          label="Contact"
        />
        <MainContent>
          <motion.h2 variants={Variants.itemFromBottom}>
            Let's get in touch
          </motion.h2>
          <Paragraph variants={Variants.itemFromBottom}>
            Got a question or proposal? Go ahead, I’ll try my best to get back
            to you!
          </Paragraph>
          <ContactForm onSubmit={handleFormSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ValidationError
              className="validation-error"
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
            />
            <ValidationError
              className="validation-error"
              field="email"
              errors={errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError
              className="validation-error"
              field="message"
              errors={errors}
            />
            <Button type="submit" background="gray900" variants={Variants.itemFromBottom}>
              Contact me
            </Button>
            <ValidationError errors={state.errors} />
          </ContactForm>
        </MainContent>
      </Content>
    </Container>
  );
}
