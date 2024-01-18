import React from "react";
import SectionHeading from "./section-heading";

const About = () => {
  return (
    <section className="mb-28 w-max-[45rem] text-center leading-8 sm:mb-40">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        This paragraph should include your{" "}
        <span className="font-medium">elevator pitch.</span>
      </p>
      <p>
        This paragraph should include a <span className="italic">fun fact</span>{" "}
        about you.
      </p>
    </section>
  );
};

export default About;
