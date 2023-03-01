<script >

    export let data;
    console.log("Data from Sanity: ", data.post)
    console.log("Data from post: test, ", data.post[4])


    let author = data.post[4].author;
    // console.log(author)

    let body = data.post[4].body;

    let img = data.post[4].mainImage.asset._ref;

    let title = data.post[4].title;

    //Retrives builder from sanity through imbuilder. The uses this to creat url for image. 
    let builder = data.imgBuilder;

    function urlFor(source) {
        return builder.image(source)
    }
    
  



    


</script>
    
    
    
<h1>Welcome to making Magasine work {author}. Good Luck!!</h1>

<h1>{title}</h1>


 <div class="img"> <img src={urlFor(img).width(200).url()} >  </div>  
 
 <p>{body}</p> 


<style>

.img{
    display: flex;
    border: 1px solid;
    width: 200px;
    
}
</style>







