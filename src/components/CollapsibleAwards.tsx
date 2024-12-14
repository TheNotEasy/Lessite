import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "./ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

import { awards } from "@/data.json"

export default function CollapsibleAwards() {
  const [isOpen, setIsOpen] = React.useState(true)

  type AwardProps = {
    award: string
  }
  const Award = (props: AwardProps) => <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">{props.award}</div>

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Награды
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {awards.map((award: string) => <Award key={award} award={award} />)}

      </CollapsibleContent>
    </Collapsible>
  )
}
