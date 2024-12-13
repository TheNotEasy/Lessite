type EntryProps = {
  entry: string
}

export default (props: EntryProps) => <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">{props.entry}</div>

