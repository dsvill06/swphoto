import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";
import { Contact2 } from "@/components/ui/contact-2";
import About from "@/components/About/About";

const images = [
  {
    id: 1,
    type: "image",
    title: "App Mockup 1",
    desc: "A preview of our app interface.",
    url: "/images/image0.jpg",
    span: "col-span-1 row-span-4",
  },
  {
    id: 2,
    type: "image",
    title: "App Mockup 2",
    desc: "Another angle of the app.",
    url: "/images/image1.jpg",
    span: "col-span-1 row-span-4",
  },
  {
    id: 3,
    type: "image",
    title: "Hero Chart",
    desc: "Visual analytics in the app.",
    url: "/images/image2.jpg",
    span: "col-span-1 row-span-4 ",
  },
  {
    id: 4,
    type: "image",
    title: "Hero Transactions",
    desc: "Transaction history view.",
    url: "/images/image3.jpg",
    span: "md:col-span-1 md:row-span-4 ",
  },
  {
    id: 5,
    type: "image",
    title: "Hero Transactions",
    desc: "Transaction history view.",
    url: "/images/image4.jpg",
    span: "col-span-1 row-span-4 col-start-2",
  },
  {
    id: 6,
    type: "image",
    title: "Hero Transactions",
    desc: "Transaction history view.",
    url: "/images/image5.jpg",
    span: "col-span-1 row-span-4",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      {/* <Logos /> */}
      <div
        id="gallery"
        className="mb-16 bg-gradient-to-b from-primary to-background py-16"
      >
        <InteractiveBentoGallery
          mediaItems={images}
          title="Photography Gallery"
          description="Explore some of my recent work in photography and design."
        />
      </div>
      <div id="pricing" className="bg-gradient-to-b from-background  to-primary py-20 ">
        <Benefits />
      </div>

      {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
          classname="!bg-primary w-full p-10"
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}

      {/* <FAQ /> */}
      <div className="bg-primary h-full md:p-20" id="contact">
        <Contact2
          title="Contact Me"
          description="Have questions or want to work together? Reach out!"
          phone="‭+1 (908) 202-9923‬"
          email="stephwatersphotos@gmail.com"
        />
      </div>
    </>
  );
};

export default HomePage;
