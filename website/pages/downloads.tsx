import { assetUrl, getClient } from "@common/sanity/sanity";
import { H1 } from "@components/Typography";
import { groq } from "next-sanity";
import Link from "next/link";

const query = groq`
  *[_type == "download"] {
    title,
    file
  }
`;

export async function getStaticProps() {
  const data = await getClient(false).fetch(query);

  const downloads = data.map((r: any) => {
    return {
      title: r.title,
      fileUrl: assetUrl(r.file),
    };
  });

  return {
    props: {
      downloads: downloads,
    },
    revalidate: 60,
  };
}

export default function ReportsPage(props: any) {
  const { downloads } = props;
  return (
    <div className="max-w-4xl mx-auto px-4 w-full flex-1">
      <H1>Informationen und Formulare</H1>
      <ul className="ml-8 list-disc">
        {downloads.map((r: any, i: number) => {
          return (
            <li key={i}>
              <Link href={r.fileUrl}>
                <a className="text-odinred">{r.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
