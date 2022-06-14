export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Untertitel",
      type: "string",
    },
  ],
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
};
