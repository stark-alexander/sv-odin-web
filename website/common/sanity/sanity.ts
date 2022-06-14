import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { config } from "./config";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityAssetSource } from "@sanity/asset-utils";
import { getFile } from "@sanity/asset-utils";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}

export const urlForImage = (source: SanityImageSource) => {
  return imageUrlBuilder(client).image(source);
};

export const assetUrl = (source: SanityAssetSource) => {
  return getFile(source, config).asset.url;
};

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview?: boolean) => (usePreview ? previewClient : client);
export default client;
