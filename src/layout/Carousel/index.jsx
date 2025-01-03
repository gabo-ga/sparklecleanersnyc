import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselSection() {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3"></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default CarouselSection;
