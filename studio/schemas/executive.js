import { string } from "prop-types";
import { HiOutlineUserCircle } from "react-icons/hi";

export default {
  name: "executive",
  title: "Vorstand",
  icon: HiOutlineUserCircle,
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "mail",
      title: "E-Mail",
      type: "string",
    },
    {
      name: "tel",
      title: "Telofon",
      type: "string",
    },
    {
      name: "img",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "about",
      title: "Über mich",
      type: "text",
    },
  ],
};
