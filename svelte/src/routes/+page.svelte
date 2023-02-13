<script>

    export let data;
    console.log(data.about[0])

    let author = data.about[0].author;
    console.log(author)

    let body = data.about[0].body

    let img = data.about[0].mainImage.asset._ref
    console.log(img)


    
</script>
    
    
    
<h1>Welcome to making Magasine work {author}. Good Luck!!</h1>

<p>{body}</p>

<img src="{img}" alt="">







