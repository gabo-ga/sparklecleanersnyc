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
    <div class="max-w-screen overflow-hidden flex items-center justify-center">
      <Carousel className="py-8 px-3 h-auto w-8/12 max-w-[100vw]">
        <CarouselContent>
          <CarouselItem className="">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/houses.jpg')] bg-cover h-36 rounded-t-md"></CardContent>
              <CardFooter className="flex justify-around p-3 font-Poppins">
                Houses
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/apartments.jpg')] bg-cover h-36 rounded-t-md"></CardContent>
              <CardFooter className="flex justify-around p-3 font-Poppins">
                Apartments
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/offices.jpg')] bg-cover h-36 rounded-t-md"></CardContent>
              <CardFooter className="flex justify-around p-3 font-Poppins">
                Offices
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="">
            <Card>
              <CardContent className="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/postconstruction.jpg')] bg-cover h-36 rounded-t-md"></CardContent>
              <CardFooter className="flex justify-around p-3 font-Poppins">
                Postconstruction
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselSection;
