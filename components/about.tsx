"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 w-max-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        This paragraph should include your{" "}
        <span className="font-medium">elevator pitch.</span>
      </p>
      <p>
        This paragraph should include a <span className="italic">fun fact</span>{" "}
        about you.
      </p>
    </motion.section>
  );
};

export default About;
