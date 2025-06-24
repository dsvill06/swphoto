'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/lib/motion';

interface TextProps {
  title: string;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TextProps) => (
  <motion.p
    variants={textContainer}
    className={`font-bold text-[20px] ${textStyles ?? ''}`}
  >
    {Array.from(title).map((letter: string, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[45px] text-[30px] text-palette-1 ${textStyles ?? ''}`}
  >
    {title}
  </motion.h2>
);
