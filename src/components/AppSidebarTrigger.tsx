import { Button } from "@/components/ui/button.tsx";
import { useSidebar } from "@/components/ui/sidebar.tsx";
import { MenuIcon } from "lucide-react";

export default function AppSidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return <Button onClick={toggleSidebar} variant="outline" size="icon" className='shadow-lg'>
    <MenuIcon></MenuIcon>
  </Button>
}