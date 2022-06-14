import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowFilledRight } from "./icons/arrow-filled-right";
import { H2 } from "./Typography";
import { urlForImage } from "@common/sanity/sanity";

interface NewsData {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
}

export const LatestNews = (props: { data: NewsData[] }) => {
  return (
    <div className={"border-t-2 mt-16"}>
      <H2>Aktuelle Neuigkeiten</H2>
      <div className={"grid grid-cols-1 gap-6 pt-4"}>
        {props.data.map((v: any, i: number) => {
          return <NewsCard key={i} slug={v.slug} title={v.title} excerpt={v.excerpt} img={v.img} />;
        })}
      </div>
      <Link href={"/news"} passHref>
        <button className={"bg-odinblue text-white font-bold p-4 mt-4 flex items-center"}>
          Alle Neuigkeiten
          <ArrowFilledRight height={"32"} width={"32"} fill={"currentColor"} />
        </button>
      </Link>
    </div>
  );
};

export const NewsCard = (props: NewsData) => {
  const href = `/news/${props.slug}`;
  return (
    <div className={"bg-white shadow-lg whitespace-pre-line overflow-ellipsis flex flex-col md:flex-row md:h-60"}>
      <div className={"relative w-full h-60 md:w-80 md:h-full"}>
        <NewsCardImage href={href} src={props.img} />
      </div>
      <div className={"flex-1 flex flex-col p-4"}>
        <NewsCardHeader href={href} title={props.title} />
        <div className="relative flex-1 overflow-hidden">
          <NewsCardExcerpt excerpt={props.excerpt} />
        </div>
        <NewsCardFooter href={href} />
      </div>
    </div>
  );
};

function NewsCardImage(props: { href: string; src: any }) {
  const imgData = React.useMemo(() => {
    return { url: urlForImage(props.src).url(), blurUrl: urlForImage(props.src).blur(100).url() };
  }, [props.src]);

  return (
    <Link href={props.href}>
      <a>
        <Image
          className={"transform-gpu hover:scale-105 transition duration-500"}
          src={imgData.url}
          blurDataURL={imgData.blurUrl}
          placeholder="blur"
          alt={"loading"}
          layout={"fill"}
          objectFit={"cover"}
        />
      </a>
    </Link>
  );
}

function NewsCardHeader(props: { title: string; href: string }) {
  return (
    <Link href={props.href}>
      <a className="font-bold text-lg mb-2">{props.title}</a>
    </Link>
  );
}

function NewsCardFooter(props: { href: string }) {
  return (
    <Link href={props.href}>
      <a className={"underline float-right p-2 self-end text-odinred"}>zum Artikel</a>
    </Link>
  );
}

function NewsCardExcerpt(props: { excerpt: string }) {
  return <div className="md:absolute text-ellipsis	overflow-hidden">{props.excerpt}</div>;
}
