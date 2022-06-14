import { urlForImage } from "@common/sanity/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, H3, OrderedList, Text, UnorderedList } from "./Typography";

const serializer = {
  block: {
    h1: H1,
    h2: H2,
    h3: H3,
    normal: Text,
  },
  marks: {
    link: LinkMark,
  },
  list: {
    bullet: UnorderedList,
    number: OrderedList,
  },
  types: {
    image: BlockImage,
  },
};

function LinkMark(props: { value?: any; children?: React.ReactNode }) {
  const target = (props.value?.href || "").startsWith("http") ? "_blank" : undefined;
  return (
    <Link href={props.value?.href} passHref>
      <a target={target} className="text-odinred underline">
        {props.children}
      </a>
    </Link>
  );
}

function BlockImage(props: { value: { _type: string; _key: string; asset: { _ref: string; _type: string } } }) {
  const dimensions = props.value.asset._ref.split("-")[2];
  const [width, height] = dimensions.split("x").map((num: string) => parseInt(num, 10));

  if (!props.value?.asset?._ref) {
    return null;
  }

  return (
    <Image
      className="w-full"
      alt={" "}
      placeholder="blur"
      width={width}
      height={height}
      layout="responsive"
      src={urlForImage(props.value).url()}
      blurDataURL={urlForImage(props.value).blur(80).url()}
    />
  );
}

export function BlockContent(props: { value: any }) {
  return (
    <div className="article">
      <PortableText value={props.value} components={serializer} />
    </div>
  );
}
