import React from "react";
import Image from "next/image";

import { urlForImage } from "@common/sanity/sanity";
import Link from "next/link";
import { BlockContent } from "./BlockContent";

export function Persons(props: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 gap-8">
      {props.data.map((d, i) => {
        return <PersonCard key={i} data={d} />;
      })}
    </div>
  );
}

export function PersonCard(props: { data: any }) {
  const { data } = props;

  return (
    <div className="overflow-hidden shadow-xl">
      <div className="relative bg-odinblue text-white py-2 pl-4 overflow-hidden">
        <div className="hidden xs:block absolute right-0 top-0 -rotate-45">
          <div className="absolute bottom-0 right-0 h-10 w-60 bg-white" />
          <div className="absolute top-0 right-0 h-16 w-60 bg-odinred" />
        </div>
        <div className="font-bold text-lg">{data.name}</div>
        <div>{data.position}</div>
      </div>
      <div className="flex flex-col sm:flex-row p-6 gap-6">
        <div className="flex flex-col items-center sm:items-start">
          <PersonImage img={data.img} />
        </div>
        <div className="flex-1 ">
          <div className="font-bold">Kontakt</div>
          <PersonContact data={data} />
          <div className="pt-4">
            <BlockContent value={data.about} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PersonImage(props: { img: any }) {
  const imgData = React.useMemo(() => {
    if (!props.img) {
      return null;
    }

    return { url: urlForImage(props.img).url(), blurUrl: urlForImage(props.img).blur(100).url() };
  }, [props.img]);

  return imgData ? (
    <div className="relative overflow-hidden shadow-lg w-60 h-80">
      <Image
        src={imgData.url}
        blurDataURL={imgData.blurUrl}
        placeholder="blur"
        alt="person-img"
        layout={"fill"}
        objectFit={"cover"}
        objectPosition={"top left"}
      />
    </div>
  ) : (
    <div className="relative overflow-hidden shadow-lg w-60 h-80">
      <NoPersonImage />
    </div>
  );
}

export function NoPersonImage() {
  return (
    <div className="flex h-full justify-center items-center">
      <span>Kein Bild :(</span>
    </div>
  );
}

export function PersonContact(props: { data: { tel?: string; mail?: string } }) {
  const { data } = props;
  return (
    <div>
      {data.mail ? (
        <div>
          <div className="inline-block w-16">E-Mail: </div>
          <Link href={`mailto:${data.mail}`}>
            <a className="text-odinred underline">{data.mail}</a>
          </Link>
        </div>
      ) : null}
      {data.tel ? (
        <div>
          <div className="inline-block w-16">Tel.: </div>
          <Link href={`tel:${data.tel}`}>
            <a className="text-odinred underline">{data.tel}</a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
