import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@common/sanity/sanity";

export const BranchCard = (props: {
  children?: ReactNode;
  selected?: boolean;
  title: string;
  img: string;
  href: string;
}) => {
  const imgData = React.useMemo(() => {
    return { url: urlForImage(props.img).url(), blurUrl: urlForImage(props.img).blur(100).url() };
  }, [props.img]);

  // initial async hide/show transition
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true));
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={`${
        props.selected ? "opacity-100 z-10" : "opacity-0"
      } absolute h-full w-full transition-opacity duration-1000`}
    >
      <Image
        src={imgData.url}
        blurDataURL={imgData.blurUrl}
        placeholder="blur"
        alt="loading .."
        layout={"fill"}
        objectFit={"cover"}
        loading={"eager"}
      />

      <div
        className={`absolute left-0 bottom-0 right-0 bg-odinblue border-odinred border-t-8 transition-opacity ${
          props.selected && show ? "opacity-90 delay-1000 duration-2000" : "opacity-0 duration-200 pointer-events-none"
        }`}
      >
        <div className={"text-white mx-8 my-4 text-xl font-bold italic"}>
          <Link href={props.href}>
            <a className={"hover:text-gray-100 hover:underline"}>{props.title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
