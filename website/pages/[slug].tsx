import { getClient, urlForImage } from "@common/sanity/sanity";
import { BlockContent } from "@components/BlockContent";
import { PersonCardSmall } from "@components/PersonCardSmall";
import { Sponsors } from "@components/Sponsors";
import { groq } from "next-sanity";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "fussball" } },
      { params: { slug: "jugger" } },
      { params: { slug: "petanque" } },
      { params: { slug: "verein" } },
    ],
    fallback: "blocking",
  };
}

const pageQuery = (slug: string) => groq`
*[_type == "page" && slug.current == "${slug}"]{
  name,  
  body, 
  sponsors[]{...}->,
  dates,
  contacts[]{...}->,
  socialMedia,
}[0]
`;

export async function getStaticProps(context: any) {
  const { params } = context;
  const slug = params.slug;

  const data = await getClient(false).fetch(pageQuery(slug));

  if (!data) return { notFound: true };

  const sponsors =
    data.sponsors && data.sponsors.length
      ? data.sponsors.map((s: any) => {
          return {
            href: s.link ?? null,
            img: urlForImage(s.logo).url(),
          };
        })
      : null;

  return {
    props: {
      name: data.name,
      body: data.body,
      sponsors: sponsors,
      dates: data.dates,
      contacts: data.contacts,
      socialMedia: data.socialMedia,
    },
    revalidate: 60,
  };
}

export default function PageByURL(props: any) {
  const { name, body, sponsors, dates, contacts, socialMedia } = props;

  const hasSideBar = React.useMemo(() => {
    return dates || socialMedia || contacts;
  }, [dates, socialMedia, contacts]);

  return (
    <>
      <Head>
        <title>S.V. Odin - {name}</title>
      </Head>
      <div className="w-full">
        <div
          className={`w-full flex flex-col ${hasSideBar ? "lg:flex-row lg:justify-center" : "items-center"} gap-8 px-4`}
        >
          <div className="col-span-2 w-full flex-1 max-w-4xl">
            <BlockContent value={body} />
          </div>
          {hasSideBar ? (
            <div className="lg:w-96 col-span-1 flex flex-col gap-4">
              {dates ? <Dates dates={dates} /> : null}
              {socialMedia ? <SocialMedia socialMedia={socialMedia} /> : null}
              {contacts ? <Contacts persons={contacts} /> : null}
            </div>
          ) : null}
        </div>
        {sponsors ? (
          <div className="px-4 mx-auto max-w-4xl">
            <Sponsors isPage sponsorList={sponsors} />
          </div>
        ) : null}
      </div>
    </>
  );
}

const days: Record<number, string> = {
  1: "Montag",
  2: "Dienstag",
  3: "Mittwoch",
  4: "Donnerstag",
  5: "Freitag",
  6: "Samstag",
  7: "Sonntag",
};

function Contacts(props: { persons: { name: string; position: string; email?: string; tel?: string }[] }) {
  return (
    <div>
      <div className="text-lg">Ansprechpartner</div>
      {props.persons.map((p, i) => {
        return <PersonCardSmall key={i} data={p} />;
      })}
    </div>
  );
}

function SocialMedia(props: { socialMedia: { name: string; url: string }[] }) {
  return (
    <div>
      <div className="text-lg">Soziale Medien</div>
      <ul>
        {props.socialMedia.map((d, i) => (
          <li key={i}>
            <Link href={d.url} passHref>
              <a target={"_blank"} className="text-odinred underline">
                {d.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dates(props: { dates: { day: number; from: "string"; until: "string" }[] }) {
  return (
    <div>
      <div className="text-lg">Trainingszeiten</div>
      <table>
        <tbody>
          {props.dates.map((d, i) => (
            <tr key={i}>
              <td>{`${days[d.day]}`}</td>
              <td className="w-3" />
              <td>{`${d.from} - ${d.until}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
