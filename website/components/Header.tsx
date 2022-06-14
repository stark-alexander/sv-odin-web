import React, { useMemo } from "react";

import { Branding } from "@components/Branding";
import { Navbar } from "@components/navbar/navbar";
import { MobileNavbar } from "./navbar/mobile-navbar";

export function Header(props: { siteProps: { subtitle: string; mainMenu: any; branchesMenu: any; mobileMenu: any } }) {
  const { subtitle, mainMenu, mobileMenu, branchesMenu } = props.siteProps;

  return (
    <div className={"mx-auto max-w-5xl px-4 h-full select-none"}>
      <div className={"h-full flex justify-between items-center lg:items-end lg:h-auto lg:pt-2"}>
        <Branding subtitle={subtitle} />
        <Navbar menu={mainMenu} />
        <MobileNavbar menu={mobileMenu} />
      </div>
      <div className={"hidden pt-8 lg:flex justify-center flex-wrap"}>
        <Navbar menu={branchesMenu} />
      </div>
    </div>
  );
}
