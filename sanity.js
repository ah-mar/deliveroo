const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "qwoxusny",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export { client, urlFor };
