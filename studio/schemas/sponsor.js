import { HiOutlinePresentationChartLine } from "react-icons/hi";

export default {
  name: "sponsor",
  title: "Sponsoren",
  icon: HiOutlinePresentationChartLine,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
