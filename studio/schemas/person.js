import { string } from "prop-types";
import { HiOutlineUserCircle } from "react-icons/hi";

export default {
  name: "person",
  title: "Person",
  icon: HiOutlineUserCircle,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      required: true,
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
      type: "contactContent",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "img",
    },
  },
};
