import Link from "next/link";
import React from "react";

import Logo from "@svg/Wappen_Odin_2020.svg";

export const Branding = (props: { subtitle: string }) => {
  return (
    <div className={"flex items-end"}>
      <Link href="/">
        <a>
          <Logo className="select-none h-16 lg:h-20" />
        </a>
      </Link>
      <span className="hidden text-odinred italic md:block">{props.subtitle}</span>
    </div>
  );
};
