"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/180/180658.png"
              alt="Personal Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover bottom-[0.35rem] border-white shadow-lg"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl ">
        <span className="font-bold">{`Hello, I'm Mohamad. `}</span> {`I'm a `}
        <span className="font-bold">{`full-stack developer `}</span> {`with `}
        <span className="font-bold">{`2 years `}</span>
        {`of experience. I enjoy building `}
        <span className="italic">{`sites & apps `}</span> {`. My focus is `}
        <span className="underline">{`React (Next.js)`}</span>
      </p>
    </section>
  );
};

export default Intro;
