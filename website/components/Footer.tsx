import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer>
      <div className={"max-w-5xl mx-auto pt-20 text-center"}>
        <div className="p-4">
          <span>Copyright © 2022 SV Odin - </span>
          <Link href={"/impressum"}>
            <a className="underline">Impressum</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
