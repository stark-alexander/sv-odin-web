import { HiOutlineRss } from "react-icons/hi";

export default {
  name: "post",
  title: "Post",
  icon: HiOutlineRss,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      required: true,
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
      required: true,
    },
    {
      name: "categories",
      title: "Kategirien",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Datum der Veröffentlichung",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Ausschnitt",
      type: "text",
    },
    {
      name: "body",
      title: "Inhalt",
      type: "blockContent",
    },
  ],
};
