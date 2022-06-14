export default {
  name: "gastroPage",
  title: "Gastronomie",
  type: "document",
  fields: [
    {
      name: "body",
      title: "Inhalt",
      type: "blockContent",
    },
  ],
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
};
