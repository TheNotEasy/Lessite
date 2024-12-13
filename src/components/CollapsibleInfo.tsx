import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "./ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

import { info } from "@/data.json"
import CollapsibleEntry from "@/components/CollapsibleEntry.tsx";

export default function CollapsibleInfo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Информация
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {info.map((info: string) => <CollapsibleEntry key={info} entry={info} />)}
      </CollapsibleContent>
    </Collapsible>
  )
}
