export default {
  name: "contactPage",
  title: "Kontakt",
  type: "document",
  fields: [
    {
      title: "Geschäftsführender Vorstand",
      name: "executive",
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
      title: "Enger Vorstand",
      name: "close",
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
      title: "Erweiteter Vorstand",
      name: "extended",
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
  ],
  __experimental_actions: [/*"create", */ "update", /*'delete',*/ "publish"],
};
