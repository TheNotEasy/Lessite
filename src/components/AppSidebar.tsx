import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"

import {articles} from "@/data.json"
import { Link } from "react-router";
import ThemeSwitcher from "@/components/ThemeSwitcher.tsx";
import { useIsMobile } from "@/hooks/use-mobile.tsx";

export function AppSidebar() {
  const {setOpenMobile} = useSidebar();
  const isMobile = useIsMobile();

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Навигация</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" onClick={() => setOpenMobile(false)}>
                    <span>Главная страница</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/articles/Вебинары.md" onClick={() => setOpenMobile(false)}>
                    <span>Участие в вебинарах</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/articles/Достижения_учащихся.md" onClick={() => setOpenMobile(false)}>
                    <span>Достижения учеников</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/articles/Сертификаты.md" onClick={() => setOpenMobile(false)}>
                    <span>Сертификаты</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Статьи</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.entries(articles).map(([name, file]) =>
              <SidebarMenuItem key={name}>
                <SidebarMenuButton asChild>
                  <Link to={`/articles/${file}`} onClick={() => setOpenMobile(false)}>
                    <span>{name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {!isMobile && <SidebarFooter>
        <SidebarGroup>
          <ThemeSwitcher/>
        </SidebarGroup>
      </SidebarFooter>}
    </Sidebar>
  )
}
