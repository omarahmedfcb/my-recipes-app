import { InView, useInView } from "react-intersection-observer";
import CTA from "../CTA";
import Features from "../Features";
import HomeAbout from "../HomeAbout";
import HomeHero from "../HomeHero";

function Home() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  return (
    <>
      <HomeHero />
      <HomeAbout inView={inView} ref={ref} />
      <Features />
      <CTA inView={inView} ref={ref} />
    </>
  );
}

export default Home;
