import { HiOutlineDocumentText, HiOutlineCalendar, HiOutlineAtSymbol } from "react-icons/hi";

export default {
  name: "page",
  title: "Page",
  icon: HiOutlineDocumentText,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "contacts",
      title: "Ansprechpartner",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      name: "dates",
      title: "Trainingszeiten",
      type: "array",
      of: [
        {
          type: "object",
          icon: HiOutlineCalendar,
          preview: {
            select: {
              day: "day",
              from: "from",
              until: "until",
            },
            prepare(selection) {
              const days = {
                1: "Montag",
                2: "Dienstag",
                3: "Mittwoch",
                4: "Donnerstag",
                5: "Freitag",
                6: "Samstag",
                7: "Sonntag",
              };
              const { day, from, until } = selection;
              return {
                title: days[day] ?? "Kein Wochentag ausgewählt",
                subtitle: `${from} - ${until}`,
              };
            },
          },
          fields: [
            {
              name: "day",
              title: "Tag",
              type: "number",
              initialValue: 1,
              options: {
                list: [
                  { title: "Montag", value: 1 },
                  { title: "Dienstag", value: 2 },
                  { title: "Mittwoch", value: 3 },
                  { title: "Donnerstag", value: 4 },
                  { title: "Freitag", value: 5 },
                  { title: "Samstag", value: 6 },
                  { title: "Sonntag", value: 7 },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "from",
              title: "von",
              type: "string",
              initialValue: "10:00",
              validation: (Rule) =>
                Rule.custom((time) => {
                  if (!time.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
                    return "Falsches Format. Geben Sie die Uhrzeit in dem Format hh:mm ein.";
                  }

                  return true;
                }),
            },
            {
              name: "until",
              title: "bis",
              type: "string",
              initialValue: "12:00",
              validation: (Rule) =>
                Rule.custom((time) => {
                  if (!time.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
                    return "Falsches Format. Geben Sie die Uhrzeit in dem Format hh:mm ein.";
                  }

                  return true;
                }),
            },
          ],
        },
      ],
    },
    {
      name: "socialMedia",
      title: "Soziale Medien",
      type: "array",
      of: [
        {
          type: "object",
          icon: HiOutlineAtSymbol,
          fields: [
            {
              name: "name",
              title: "Platform",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "url",
            },
          },
        },
      ],
    },
    {
      title: "Sponsoren",
      name: "sponsors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
        },
      ],
    },
    {
      name: "body",
      title: "Inhalt",
      type: "blockContent",
    },
  ],
};
