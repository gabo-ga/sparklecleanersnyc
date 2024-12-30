import { Button } from "@/components/ui/button";
import Info from "../../components/Info/info";
import Logo from "../../components/Logo/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";

function Header() {
  return (
    <header>
      <Info></Info>
      <div class="bg-blue-900 flex items-center gap-16 h-12 w-full">
        <Logo></Logo>
        <div class="flex items-center gap-2">
          <Button variant="destructive">BOOK NOW</Button>
          <SidebarTrigger />
        </div>
      </div>
    </header>
  );
}

export default Header;
