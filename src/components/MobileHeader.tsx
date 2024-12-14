import { useIsMobile } from "@/hooks/use-mobile.tsx";
import AppSidebarTrigger from "@/components/AppSidebarTrigger.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Home } from "lucide-react";
import { Link } from "react-router";


export default function MobileHeader() {
  const isMobile = useIsMobile();

  if (!isMobile) return <></>;

  return <div className="flex justify-between items-center p-5 sticky top-0 backdrop-blur-sm border-b-2 border-b-black z-[2]">
    <AppSidebarTrigger></AppSidebarTrigger>
    <Link to="/">
      <Button variant="ghost">
        <Home></Home>
      </Button>
    </Link>
  </div>
}