import Home from "@/pages/Home.tsx";

import { AppSidebar } from "@/components/AppSidebar.tsx";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import { useIsMobile } from "@/hooks/use-mobile.tsx";
import { Route, Routes } from "react-router";
import ArticlePage from "@/pages/Article.tsx";
import classNames from "classnames";
import MobileHeader from "@/components/MobileHeader.tsx";

function App() {
  const isMobile = useIsMobile()
  const className = classNames("w-full", {
    contents: isMobile,
    'flex-col': isMobile,
    'justify-between': true
  })

  return (
    <>
      <SidebarProvider className={className}>
        <MobileHeader />
        <AppSidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles/:file" element={<ArticlePage />}></Route>
        </Routes>
      </SidebarProvider>
    </>
  )
}

export default App
