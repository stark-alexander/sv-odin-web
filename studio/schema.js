// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./schemas/customTypes/blockContent";
import contactContent from "./schemas/customTypes/contactContent";
import category from "./schemas/category";
import post from "./schemas/post";
import page from "./schemas/page";
import siteSettings from "./schemas/singletones/siteSettings";
import indexPage from "./schemas/singletones/home";
import gastroPage from "./schemas/singletones/gastro";
import contactPage from "./schemas/singletones/contact";
import impressumPage from "./schemas/singletones/impressum";
import sponsor from "./schemas/sponsor";
import person from "./schemas/person";
import report from "./schemas/report";
import download from "./schemas/download";
import navigation from "./schemas/navigation";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    indexPage,
    contactPage,
    impressumPage,
    gastroPage,
    page,
    post,
    report,
    download,
    sponsor,
    person,
    category,
    navigation,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    contactContent,
  ]),
});
