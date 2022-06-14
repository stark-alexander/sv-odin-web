import { HiOutlineDownload } from "react-icons/hi";

export default {
  name: "download",
  title: "Downloads",
  icon: HiOutlineDownload,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "type",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Allgemein", value: "general" },
          { title: "Formulare", value: "forms" },
        ],
      },
    },
    {
      name: "file",
      title: "Datei",
      type: "file",
    },
  ],
};
