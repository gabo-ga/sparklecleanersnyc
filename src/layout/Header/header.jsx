import { Button } from "@/components/ui/button";
import Info from "../../components/Info/info";
import Logo from "../../components/Logo/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";

const handleClick = () => {
  window.location.href = "https://wa.link/dmv3hy";
  console.log(clic);
};

function Header() {
  return (
    <header class="w-full">
      <Info></Info>
      <div class="bg-blue-900 flex items-center justify-between h-12 md:h-16">
        <Logo></Logo>
        <div class="flex items-center gap-3 p-3 md:gap-8">
          <div class="text-white font-Poppins font-medium hidden md:block text-lg">
            ABOUT US
          </div>
          <div class="text-white font-Poppins font-medium hidden md:block text-lg">
            CONTACT US
          </div>
          <Button
            variant="destructive"
            size="sm"
            className="font-Poppins text-base md:text-lg"
            onClick={handleClick}
          >
            BOOK NOW
          </Button>

          <SidebarTrigger className="md:hidden" />
        </div>
      </div>
    </header>
  );
}

export default Header;
