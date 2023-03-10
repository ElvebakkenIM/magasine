<script >

    import {page} from '$app/stores'; 

    import { onMount } from 'svelte';

    let url = ``;

    onMount(() => url = window.location.href);


    export let data;
    console.log("Data from Sanity: ", data.post)
    console.log("Data from post: test, ", data.post[4])


    let author = data.post[7].author;
    // console.log(author)

    let slug = data.post[0].slug.current

    let body = data.post[7].body;

    let img = data.post[7].mainImage.asset._ref;

    let title = data.post[7].title;

    //Retrives builder from sanity through imbuilder. The uses this to creat url for image. 
    let builder = data.imgBuilder;

    let date = data.post[7].publishedAt

    function urlFor(source) {
        return builder.image(source)
    }
    
  



    


</script>
    
<p>Current URL: {url}</p>
<p>Current URL: {$page.path}</p>

<div class="post">
    
<h1>Welcome to making Magasine work {author}. Good Luck!!</h1>



<h1>{title}</h1>

<p>{date}</p>
<a href="/test/#/{slug}"> <div class="img"> <img src={urlFor(img).width(500).url()} >  </div>  </a>



 
 <p>{body}</p> 


</div>




<a href="/test/#/b">b</a>
<a href="/test/#/c">c</a>


<style>
    .post{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;

        

    }


</style>







