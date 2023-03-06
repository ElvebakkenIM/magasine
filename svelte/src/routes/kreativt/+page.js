import sanityClient from "@sanity/client"

const client = sanityClient({
    projectId: "bbtj980d",
    dataset: "production",
    apiVersion: "2023-01-30",
    useCdn: false,
  });

  export async function load({ }) {
    const data = await client.fetch(`*[_type == "post" && categories match "kreativt"]`);
  
    if (data) {
      return {
        post: data
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }

 