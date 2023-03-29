import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "bbtj980d",
    dataset: "production",
    apiVersion: "2023-01-30",
    useCdn: false,
  });

  export async function load({ }) {
    const posts = await client.fetch(`*[_type == "post" && categories match "pa-bakka"]`);
    const inspText = await client.fetch(`*[_type == "inspText" && page match "pa-bakka"]`);
    const postType = await client.fetch(`*[_type == "post-type"]`);
    const imgBuilder = imageUrlBuilder(client);
  
    if (posts) {
      return {
        post: posts,
        insp: inspText,
        img: imgBuilder,
        ptype: postType
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }

 