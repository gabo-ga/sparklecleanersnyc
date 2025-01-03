import CarouselSection from "@/layout/Carousel";
import Contact from "@/layout/Contact";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/header";
import Hero from "@/layout/Hero/hero";

function HomePage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      {/*<CarouselSection></CarouselSection>*/}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
