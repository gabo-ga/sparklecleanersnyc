import { Button } from "@/components/ui/button";
import Info from "../../components/Info/info";
import Logo from "../../components/Logo/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";

function Header() {
  return (
    <header class="w-full">
      <Info></Info>
      <div class="bg-blue-900 flex items-center justify-between h-12">
        <Logo></Logo>
        <div class="flex items-center gap-1">
          <Button variant="destructive" size="sm">
            BOOK NOW
          </Button>
          <SidebarTrigger />
        </div>
      </div>
    </header>
  );
}

export default Header;
