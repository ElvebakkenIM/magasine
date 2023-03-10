




<script>

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
    // console.log(author)


    let body = postpage.body;

   
    
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
    
    
    
     
     <p>{body}</p> 
    
    
    </div>

<a href="/test/#/a">a</a>
<a href="/test/#/b">b</a>
<a href="/test/#/c">c</a>


<a href="/">back</a>

<p>Current URL: {url}</p>
<p>Current URL: {$page.url}</p>
