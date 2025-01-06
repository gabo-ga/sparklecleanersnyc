import { Button } from "@/components/ui/button";

const handleClick = () => {
  window.location.href = "https://wa.link/dmv3hy";
};

function Hero() {
  return (
    <div
      class="h-auto w-screen bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/background.jpg')] bg-cover bg-center bg-no-repeat opacity-90
              flex items-start justify-start px-2 py-4 md:h-96 md:px-6 md:py-12"
    >
      <div class="flex my-3 mx-6 py-4 flex-col items-start gap-1.5 h-56">
        <h1 class="text-lg font-medium font-Poppins md:text-2xl">
          EXPERT CLEANING AT YOUR DOORSTEP
        </h1>
        <p class="text-sm font-normal font-Poppins md:text-lg">
          Hi! we are a professional cleaning company <br />
          offering personalized cleaning services
        </p>
        <Button
          variant="destructive"
          className="font-Poppins md:text-lg"
          onClick={handleClick}
        >
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}

export default Hero;
