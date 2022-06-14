export default {
  name: "impressumPage",
  title: "Impressum",
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
