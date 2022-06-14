import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H2 } from "./Typography";

export interface ISponsor {
  img: string;
  href?: string | null;
}

export const Sponsors = (props: { isPage?: boolean; sponsorList: ISponsor[] }) => {
  const text = React.useMemo(() => {
    if (props.isPage) {
      return "Ein großen Dank an unsere Sponsoren";
    }

    return "Ein großen Dank an die Sponsoren unseres Vereins";
  }, [props.isPage]);
  return (
    <div className={"border-t-2 mt-16"}>
      <H2>{text}</H2>
      <div className={"flex flex-wrap justify-around"}>
        {props.sponsorList.map((v, i) => (
          <SponsorCard key={i} img={v.img} href={v.href} />
        ))}
      </div>
    </div>
  );
};

const SponsorCard = (props: ISponsor) => {
  const imgComponent = React.useMemo(() => {
    return <Image src={props.img} layout="fill" objectFit="contain" alt="loading .." />;
  }, [props.img]);

  return (
    <div className="relative h-24 w-48 my-2">
      {props.href ? (
        <Link href={props.href}>
          <a>{imgComponent}</a>
        </Link>
      ) : (
        imgComponent
      )}
    </div>
  );
};
