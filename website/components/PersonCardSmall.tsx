import React from "react";
import Image from "next/image";

import { urlForImage } from "@common/sanity/sanity";
import Link from "next/link";
import { BlockContent } from "./BlockContent";
import { PersonContact, PersonImage } from "./Persons";

export function PersonCardSmall(props: { data: any }) {
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
      <div className="flex flex-col p-6 gap-6">
        <div className="flex flex-col items-center">
          <PersonImage img={data.img} />
        </div>
        <div className="flex-1">
          <div className="font-bold">Kontakt</div>
          <PersonContact data={data} />
          {data.about ? (
            <div>
              <BlockContent value={data.about} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
