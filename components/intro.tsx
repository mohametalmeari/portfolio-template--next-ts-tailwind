import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/180/180658.png"
            alt="Personal Portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover bottom-[0.35rem] border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
