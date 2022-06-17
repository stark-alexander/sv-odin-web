import { getClient } from "@common/sanity/sanity";
import { Persons } from "@components/Persons";
import { H2 } from "@components/Typography";
import { groq } from "next-sanity";

const query = groq`
*[_type == "contactPage"][0] {
  executive[]->{position, name, mail, tel, img, about},
  close[]->{position, name, mail, tel, img, about},
  extended[]->{position, name, mail, tel, img, about},
}
`;

export async function getStaticProps() {
  const data = await getClient(false).fetch(query);

  return {
    props: data,
    revalidate: 60,
  };
}

export default function ContactPage(props: any) {
  const { executive, close, extended } = props;
  return (
    <div className="max-w-4xl mx-auto px-4 w-full flex-1">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <H2>Verwaltung</H2>
          <Persons data={executive} />
        </div>
        <div>
          <H2>Geschäftsführender Vorstand</H2>
          <Persons data={close} />
        </div>
        <div>
          <H2>Erweiterter Vorstand</H2>
          <Persons data={extended} />
        </div>
      </div>
    </div>
  );
}
