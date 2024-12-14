import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { contests } from "@/data.json"

export default function ProfessionalContestsTable() {
  return <>
    <h1 className="mx-auto text-2xl font-bold">Участие в профессиональных конкурсах на различных уровнях</h1>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Год</TableHead>
          <TableHead>Муниципальный</TableHead>
          <TableHead>Региональный</TableHead>
          <TableHead>Республиканский, Всероссийский</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contests.map((row) => <TableRow key={row.year}>
            <TableCell className="font-medium">{row.year}</TableCell>
            <TableCell dangerouslySetInnerHTML={{__html: row.mu as string}}></TableCell>
            <TableCell dangerouslySetInnerHTML={{__html: row.reg as string}}></TableCell>
            <TableCell dangerouslySetInnerHTML={{__html: row.vs as string}}></TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
  </>
}
