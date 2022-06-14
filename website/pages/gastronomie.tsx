import Head from "next/head";
import React from "react";

import { PortableText } from "@portabletext/react";

import { groq } from "next-sanity";
import { getClient } from "@common/sanity/sanity";
import { BlockContent } from "@components/BlockContent";

const query = groq`
  *[_type == "gastroPage"][0] {
    body,
  }
`;

export async function getStaticProps() {
  const data = await getClient(false).fetch(query);

  return {
    props: {
      content: data.body,
    },
    revalidate: 60,
  };
}

export default function GastroPage(props: any) {
  const { content } = props;

  return (
    <>
      <Head>
        <title>S.V. Odin von 1905 e.V.</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 w-full flex-1">
        <BlockContent value={content} />
      </div>
    </>
  );
}
