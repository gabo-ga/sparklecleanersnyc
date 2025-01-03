import CarouselSection from "@/layout/Carousel";
import Contact from "@/layout/Contact";
import Header from "@/layout/Header/header";
import Hero from "@/layout/Hero/hero";

function HomePage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <CarouselSection></CarouselSection>
      <Contact></Contact>
    </>
  );
}

export default HomePage;
