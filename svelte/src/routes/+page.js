import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


const client = sanityClient({
    projectId: "bbtj980d",
    dataset: "production",
    apiVersion: "2023-01-30",
    useCdn: false,
  });


  export async function load({ }) {
    const data = await client.fetch(`*[_type == "post"]`);
    const inspText = await client.fetch(`*[_type == "inspText" && page match "hjem"]`);
    const postType = await client.fetch(`*[_type == "post-type"]`);
    const imgBuilder = imageUrlBuilder(client);
    if (data) {

      return {
        post: data,
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

  

 