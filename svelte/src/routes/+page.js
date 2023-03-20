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
    const imgBuilder = imageUrlBuilder(client);
    if (data) {

      return {
        post: data,
        img: imgBuilder
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }

  

 