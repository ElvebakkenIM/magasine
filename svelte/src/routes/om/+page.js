import sanityClient from "@sanity/client"

const client = sanityClient({
    projectId: "bbtj980d",
    dataset: "production",
    apiVersion: "2023-01-30",
    useCdn: false,
  });

  export async function load({ }) {
    const about = await client.fetch(`*[_type == "about"]`);
    const editors = await client.fetch(`*[_type == "editor"]`);
  
    if (about) {
      if (editors) {
        return {
          about: about,
          editor: editors
        };
      }
      return {
        about: about
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }

 