import Link from "next/link";
import { H1 } from "@components/Typography";

export default function FourOhFour() {
  return (
    <div className="max-w-4xl mx-auto px-4 w-full flex-1">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <H1>Die Seite wurde nicht gefunden</H1>
        <Link href="/">
          <a className="underline">Zurück zur Startseite</a>
        </Link>
      </div>
    </div>
  );
}
