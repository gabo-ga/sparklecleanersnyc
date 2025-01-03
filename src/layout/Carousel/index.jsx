import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CarouselSection() {
  return (
    <>
      <Carousel className="py-8 px-9">
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/background.jpg')] bg-cover h-36"></CardContent>
              <CardFooter>Houses</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/background.jpg')] bg-cover h-36"></CardContent>
              <CardFooter>Apartments</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/background.jpg')] bg-cover h-36"></CardContent>
              <CardFooter>Offices</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/background.jpg')] bg-cover h-36"></CardContent>
              <CardFooter>Postconstruction</CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default CarouselSection;
