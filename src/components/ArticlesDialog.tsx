import {
  Dialog, DialogClose,
  DialogContent, DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button.tsx";

import { useIsMobile } from "@/hooks/use-mobile.tsx";
import { useSidebar } from "@/components/ui/sidebar.tsx";

export default function ArticlesDialog() {
  const isMobile = useIsMobile()
  const {setOpenMobile} = useSidebar()

  return <Dialog>
    <DialogTrigger asChild>
      <Button className="w-full">Мои статьи</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Статьи</DialogHeader>
      <p>Статьи можно прочитать через меню слева</p>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" onClick={() => {
            setOpenMobile(true)
          }} className='w-full'>{isMobile ? 'Открыть' : 'Закрыть'}</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
}