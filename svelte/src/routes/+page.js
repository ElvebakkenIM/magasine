import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'



const client = sanityClient({
    projectId: "bbtj980d",
    dataset: "production",
    apiVersion: "2023-02-27",
    token: 'skDEbjdaZ8pKIiX2UYLgja42kHpeXRJ62rGCyJP8oiY4itWO0FY8WjfaQGNVfXGJVp1ptIP9V6QYmxU6yVfMwj1SSPWFPvYbQmmVvWmAciOChU4SzP8f65pMYbGyn3sj1oKjsPbnT1HScvgL7oXC2hTqSaPcTJAbKckOainHp0umGEkZMv3v',
    useCdn: false,
  });


  export async function load({ }) {
    const data = await client.fetch(`*[_type == "post"]`);
    const builder = imageUrlBuilder(client);
  
    if (data) {
      return {
        post: data,
        imgBuilder: builder
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };


  }



  