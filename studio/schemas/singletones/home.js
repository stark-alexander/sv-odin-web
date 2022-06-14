export default {
  name: "indexPage",
  title: "Startseite",
  type: "document",
  fields: [
    {
      name: "body",
      title: "Inhalt",
      type: "blockContent",
    },
    {
      title: "Vorschau",
      name: "preview",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }],
          options: {
            disableNew: true,
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
          options: {
            disableNew: true,
          },
        },
      ],
    },
  ],
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
};
