import { getClient, urlForImage } from "@common/sanity/sanity";
import { NewsCard } from "@components/News";
import { groq } from "next-sanity";
import Head from "next/head";

const query = groq`
  *[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    image,
    excerpt,
    publishedAt,
  }
`;

export async function getStaticProps() {
  const data = await getClient(false).fetch(query);

  const posts = data.map((post: any) => {
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      img: post.image,
    };
  });

  return {
    props: {
      posts: posts,
    },
    revalidate: 60,
  };
}

export default function All(props: any) {
  return (
    <>
      <Head>
        <title>S.V. Odin - News</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 w-full flex-1">
        <div className={"grid grid-cols-1 gap-6"}>
          {props.posts.map((v: any, i: number) => {
            return <NewsCard key={i} slug={v.slug} title={v.title} excerpt={v.excerpt} img={v.img} />;
          })}
        </div>
      </div>
    </>
  );
}
