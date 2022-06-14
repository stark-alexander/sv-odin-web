import { HiOutlineLink } from "react-icons/hi";

export default {
  name: "navigation",
  title: "Navigation",
  icon: HiOutlineLink,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "items",
      titel: "Items",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          icon: HiOutlineLink,
          fields: [
            {
              name: "name",
              type: "string",
            },
            {
              name: "url",
              type: "string",
            },
          ],
        },
        {
          title: "Seite oder Menu",
          type: "reference",
          to: [{ type: "page" }, { type: "navigation" }],
          options: {
            disableNew: true,
          },
        },
      ],
    },
  ],
};
