import Head from "next/head";
import Image from "next/image";

import React from "react";
import { groq } from "next-sanity";
import { getClient, urlForImage } from "@common/sanity/sanity";
import { BlockContent } from "@components/BlockContent";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const pageQuery = (slug: string) => groq`
*[_type == "post" && slug.current == "${slug}"]{
  "slug": slug.current,
  publishedAt,
  title,
  image, 
  excerpt, 
  body, 
}[0]
`;

export async function getStaticProps(context: any) {
  const { params } = context;
  const slug = params.slug;

  const data = await getClient(false).fetch(pageQuery(slug));
  if (!data) return { notFound: true };

  return {
    props: {
      title: data.title,
      content: data.body,
      img: data.image,
    },
    revalidate: 60,
  };
}

export default function PostBySlug(props: any) {
  const imgData = React.useMemo(() => {
    return { url: urlForImage(props.img).url(), blurUrl: urlForImage(props.img).blur(100).url() };
  }, [props.img]);

  return (
    <>
      <Head>
        <title>S.V. Odin - {props.title}</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 w-full flex-1">
        <div className={`relative -mx-4 h-60 lg:h-96`}>
          <Image
            src={imgData.url}
            blurDataURL={imgData.blurUrl}
            placeholder="blur"
            alt="loading .."
            layout={"fill"}
            objectFit={"cover"}
            loading={"eager"}
          />
        </div>
        <h1>{props.title}</h1>
        <BlockContent value={props.content} />
      </div>
    </>
  );
}
