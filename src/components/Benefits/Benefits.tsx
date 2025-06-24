"use client"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Benefits: React.FC = () => {
  return (
    <div
      id="features"
      className="h-screen w-full  relative overflow-hidden flex flex-row md:justify-center"
    >
      {/* <div className="hidden sm:block">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent text-center p-10
                             bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                             dark:from-white dark:via-gray-200 dark:to-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pricing
      </motion.h1>
      </div> */}
      <Image
        src="/images/packages.png"
        alt="Background Image"
        width={1920}
        height={1080}
        className=" w-auto h-auto object-contain md:object-contain "
        quality={100}
      />
    </div>
  );
};

export default Benefits;
