import { HiOutlineNewspaper } from "react-icons/hi";

export default {
  name: "report",
  title: "Reports",
  icon: HiOutlineNewspaper,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "file",
      title: "Report PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
  ],
};
