import React from "react";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

export default function Layout(props: { children: any; siteProps: any }) {
  return (
    <div className={"h-screen flex flex-col"}>
      <div className={"relative flex-1 flex flex-col"}>
        <header className={"z-50 fixed h-20 lg:h-40 left-0 top-0 right-0 bg-white shadow-sm"}>
          <Header siteProps={props.siteProps} />
        </header>
        <main className={"relative flex-1 flex flex-col w-full mt-20 lg:mt-40 pt-6"}>{props.children}</main>
      </div>
      <div className={"relative mx-4"}>
        <Footer />
      </div>
    </div>
  );
}
