import { useParams } from "react-router";
import Markdown from "react-markdown"
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const {file} = useParams();
  if (!file) {
    throw new TypeError("File not passed to ArticlePage")
  }

  // const [loading, setLoading] = useState(true);
  const [md, setMd] = useState<string>()
  // const md = useRef<string>()

  console.log(file)

  useEffect(() => {
    setMd('Загрузка...');
    (async () => {
      const response = await fetch(`/${file}`);
      setMd(await response.text());
    })()
  }, [file]);

  return <Markdown className="w-full mx-auto p-5 md md-center-first">{md}</Markdown>;
}