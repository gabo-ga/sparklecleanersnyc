import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div class="h-auto w-auto bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/background.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div class="flex my-3 mx-6 py-4 flex-col items-start gap-1.5 h-56">
        <h1 class="text-lg font-medium font-Poppins">
          EXPERT CLEANING AT YOUR DOORSTEP
        </h1>
        <p class="text-sm font-normal font-Poppins">
          Hi! we are a professional cleaning company offering personalized
          cleaning services
        </p>
        <Button variant="destructive" className="font-Poppins">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}

export default Hero;
