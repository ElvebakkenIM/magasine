

<script>

import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: "bbtj980d",
    dataset: "production",
    apiVersion: "2023-02-27",
    useCdn: false,
    token: 'skDEbjdaZ8pKIiX2UYLgja42kHpeXRJ62rGCyJP8oiY4itWO0FY8WjfaQGNVfXGJVp1ptIP9V6QYmxU6yVfMwj1SSPWFPvYbQmmVvWmAciOChU4SzP8f65pMYbGyn3sj1oKjsPbnT1HScvgL7oXC2hTqSaPcTJAbKckOainHp0umGEkZMv3v'
  });

  export async function updateDocumentlikes(_id, likes) {
          client.patch(_id).set({Likes: likes})
    .commit()
    .then  ((Updatelikes) =>{
      console.log("it was updated")
      console.log(Updatelikes)

    })
    

    .catch((err) =>{
      console.error('oh no, the update has failed', err.message)
    })

  }
  

export let data;





import {page} from '$app/stores'; 

import { onMount } from 'svelte';

let url = ``;

onMount(() => url = window.location.href);

let pathlists = String($page.url).split('/');
let slug_finder = pathlists[(pathlists.length - 1)];
console.log(slug_finder)

let postpage

for(let post of data.post){
    if(post.slug.current == (slug_finder)) {
        postpage = post;
        break;
    }
}

console.log(postpage)



let author = postpage.author;
    


    let body = postpage.body;

    let like = postpage.Likes
    
    let title = postpage.title;

    //Retrives builder from sanity through imbuilder. The uses this to creat url for image. 
    let img;
    if(postpage.hasOwnProperty('mainImage')){
        img = postpage.mainImage.asset._ref;
    }
    
    let builder = data.imgBuilder;
    
    let date = postpage.publishedAt

    function urlFor(source) {
        return builder.image(source)
    }


    function oneLike() {
        like += 1;
        updateDocumentlikes(postpage._id, like)

        console.log(like)
    }

   
</script>




<div class="post">
    
    <h1>Welcome to making Magasine work {author}. Good Luck!!</h1>
    
    
    
    <h1>{title}</h1>
    
    <p>{date}</p>
    
     <div class="img"> 
        {#if postpage.hasOwnProperty('mainImage')}
        <img src={urlFor(img).width(500).url()} alt="">  
        {/if}
    </div>  
    
    <p>{like}</p>

    <button on:click={oneLike}>like button</button>


     
     <p>{body}</p> 
    
    
    </div>

<a href="/test/#/a">a</a>
<a href="/test/#/b">b</a>
<a href="/test/#/c">c</a>


<a href="/">back</a>

<p>Current URL: {url}</p>
<p>Current URL: {$page.url}</p>
