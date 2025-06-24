import React from "react";
import Image from "next/image";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section id="hero" className=" h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_image.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover w-full object-center md:object-top"
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Blurred overlay */}
      <div className="absolute inset-0 left-0 h-1/5 align-middle my-auto md:w-1/3 rounded-3xl md:ml-5 bg-gray-50/60 backdrop-blur-lg z-10 hidden lg:block" />

      {/* Content container */}
      <div className="relative h-full flex items-center px-5">
        {/* Text content */}
        <div className="relative z-20 w-1/3 lg:flex justify-start md:ml-5 hidden">
          <div className="text-left">
            <h1 className="text-4xl md:text-2xl lg:text-3xl md:leading-tight font-bold text-foreground max-w-lg flex-wrap">
              {heroDetails.heading}
            </h1>
            <p className="mt-4 text-foreground max-w-lg mx-auto text-left">
              {heroDetails.subheading}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
