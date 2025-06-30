"use client";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import Picture from "@/components/Picture";
import styles from "@/styles";
import { fadeIn } from "@/lib/motion";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isDesktop = useMediaQuery({ maxWidth: 1024 });

  return (
    <section
      className={`p-0 lg:p-[100px] relative z-10 min-h-[1100px] flex flex-col justify-end lg:justify-center`}
      id="about"
    >
      <motion.div
        // variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-12`}
      >
        <div className="flex flex-col-reverse lg:items-center lg:flex-row gap-8 lg:gap-[100px] xl:gap-40 mt-[50px] w-fit h-fit">
          <motion.div
            variants={
              isDesktop
                ? fadeIn("up", "tween", 0.1, 1)
                : fadeIn("right", "tween", 0.1, 1)
            }
            className="relative z-50 h-[600px] xl:h-[700px] 2xl:h-[800px]"
          >
            <Picture
              // webp="/imgs/hedge-trimming-2.webp"
              src="/images/hero_image.jpg"
              alt="sarah"
              className="relative w-full lg:max-w-[350px] xl:max-w-[500px] min-h-[500px] h-full object-cover z-40 lg:rounded-lg shadow-xl"
            />

            <div className="hidden lg:block">
              <div className="absolute -top-[50px] -left-[50px] h-full w-full bg-palette-1 shadow-2xl z-0" />
              <div className="absolute -bottom-4 -right-4 h-full w-full bg-palette-5 z-20" />
              <div className="absolute -bottom-[50px] -right-[50px] h-full w-full border-4 border-palette-1 z-10" />
            </div>
          </motion.div>

          <motion.div
            variants={
              isDesktop
                ? fadeIn("up", "tween", 0.1, 1)
                : fadeIn("left", "tween", 0.1, 1)
            }
            className="px-6 sm:px-16 lg:px-0 sm:py-12 flex flex-col justify-center items-start gap-12 flex-1"
          >
            <motion.div
              variants={
                isMobile
                  ? fadeIn("up", "tween", 0.2, 1)
                  : fadeIn("left", "tween", 0.2, 1)
              }
              className="flex flex-col items-start"
            >
              <TypingText title="| About Me" textStyles="text-center" />
              <TitleText title={"Learn more about me"} />
            </motion.div>

            <div className="flex flex-col gap-8">
              <p className={`font-normal text-[16px] leading-7`}>
                Hi! My name is Stephanie Morrone Waters. I am a portrait
                photographer based in Middletown, Connecticut with a passion for
                capturing people who are authentically and unapologetically
                themselves. My style is colorful, bold, and dreamy. I especially
                love photographing couples, individual portraits, pets, and
                candid, genuine moments.
              </p>
              {/* <p className={`font-normal text-[16px] leading-7`}>
                I am passionate for bringing more women and youth from
                underrepresented communities into the area of technology. I know
                first-hand what it is like to be the only woman and/or only
                minority in these spaces. I serve as International Chairperson
                for Eco-Agric Uganda, Technical Administrator for Rescue Women
                Foundation Uganda, (past) Chair for the Stanford Black Alumni
                Association Seattle Chapter, Volunteer for the Technology Access
                Foundation, Industry Panelist for IGNITE Worldwide, and do
                speaking engagements throughout the Puget Sound. I bring my
                dedication to outreach into any workplace I am in as a 1:1
                career mentor and supporter of ERG activities. I am a believer
                that we can all make a difference through small acts every day.
              </p> */}
              <TitleText title={"About my business"} />
              <p>
                My photography journey began in 2008 when I picked up my first
                camera. Since then, my passion for taking photos has grown with
                me. I love being able to capture some of life's happiest moments
                colorfully. Each of my photo shoots is a safe space for
                self-expression and being exactly who you are!
              </p>

              {/* <p className={`font-normal text-[16px] leading-7`}>
                I believe that a great haircut is not just
                a service, but an experience. With a keen eye for detail and a
                commitment to personalized service, we tailor each appointment
                to suit your unique style and preferences. Whether you're
                looking for a classic gentlemen's cut, a modern fade, or a fresh
                new look, our barber is dedicated to helping you look and feel
                your absolute best.
              </p>

              <p className={`font-normal text-[16px] leading-7`}>
                Magna eget est lorem ipsum dolor. Justo laoreet sit amet cursus
                sit amet dictum sit amet. Vitae ultricies leo integer malesuada
                nunc vel risus commodo. Nulla facilisi nullam vehicula ipsum a
                arcu cursus. Amet luctus venenatis lectus magna. Vulputate
                sapien nec sagittis aliquam malesuada bibendum arcu. Eget felis
                eget nunc lobortis mattis aliquam.{" "}
              </p> */}
            </div>

            {/* <button className={`${styles.heroBtn} bg-palette-1 hover:border-palette-1`}>Learn More</button> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
