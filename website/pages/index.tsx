import Head from "next/head";
import React from "react";

import { BranchesCarousel } from "@components/branches/branches-carousel";
import { Sponsors } from "@components/Sponsors";
import { LatestNews } from "@components/News";

import { PortableText } from "@portabletext/react";

import { groq } from "next-sanity";
import { getClient, urlForImage } from "@common/sanity/sanity";
import { BlockContent } from "@components/BlockContent";

interface HomeProps {
  title: string;
  content: any;
  preview: { title: string; img: string; href: string }[];
  sponsors: { img: string; href: string }[];
  latesNews: any[];
}

const query = groq`
{
  "indexPage": *[_type == "indexPage"][0] {
    body,
    preview[]->{
      "slug": slug.current,    
      name, 
      image
    },
    sponsors[]->{name, link, logo}
  },
  "latestNews": *[_type == "post"] | order(publishedAt desc) [0..2] {
    "slug": slug.current,
    title,
    image,
    excerpt,
    publishedAt,
  }
}
`;

export async function getStaticProps() {
  const data = await getClient(false).fetch(query);
  const { indexPage, latestNews } = data;
  const sponsors = indexPage.sponsors.map((s: any) => {
    return {
      href: s.link ?? null,
      img: urlForImage(s.logo).url(),
    };
  });

  const preview = indexPage.preview.map((p: any) => {
    return {
      title: p.name,
      href: `/${p.slug}`,
      img: p.image,
    };
  });

  const posts = latestNews.map((post: any) => {
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      img: post.image,
    };
  });

  return {
    props: {
      content: indexPage.body,
      preview: preview,
      sponsors: sponsors,
      latesNews: posts,
    },
    revalidate: 60,
  };
}

export default function HomePage(props: HomeProps) {
  const { content, sponsors, preview } = props;

  return (
    <>
      <Head>
        <title>S.V. Odin von 1905 e.V.</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 w-full flex-1">
        <BranchesCarousel branches={preview} />
        <BlockContent value={content} />
        <LatestNews data={props.latesNews} />
        <Sponsors sponsorList={sponsors} />
      </div>
    </>
  );
}
