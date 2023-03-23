<script>
    import { page } from '$app/stores';

    export let data;
    export let builder;


    let pathlists = String($page.url).split('/');
    let urlSlug = pathlists[(pathlists.length - 1)];
    
    let post = {title: 'Loading, venligst vent...', subtitle: 'Tar det lang tid? Prøv å refreshe'};

    for(let thisPost of data){
        if(thisPost.slug.current == (urlSlug)) {
            post = thisPost;
            break;
        }
    }
    console.log(post);


    //Retrives builder from sanity through imbuilder. The uses this to create url for image. 
    let img;
    if(post.hasOwnProperty('mainImage')){
        img = post.mainImage.asset._ref;
    }
    
    function urlFor(source) {
        return builder.image(source)
    }


    let cats = post.categories;
    let cattexts = [];
    if (post.hasOwnProperty('categories')) {
        for (let cat of cats) {
            switch (cat) {
                case 'pa-bakka':
                    cattexts.push('På Bakka');
                    break;
                case '5-pa-bakka':
                    cattexts.push('5 på Bakka');
                    break;
                case 'samf-og-debatt':
                    cattexts.push('Samf. & Debatt');
                    break;
                case 'kreativt':
                    cattexts.push('Kreativt');
                    break;
                default:
                    cattexts.push('whhaaa');
                    break;
            }
        }
    }
</script>

<div class="midItem" style="flex-direction: column;">
    <h1 style="font-size: 4vw;">{post.title}</h1>
    <h3 style="font-size: 2vw;">{post.subtitle}</h3>


    <div style="width: 90%">
        <div style="width: 100%; display: flex; justify-content: space-between;">
            <div style="display: flex;">
                {#each cattexts as cat}
                <p class="infoItem">{cat}</p>
                {/each}
            </div>
            <div style="display: flex;">
                <p class="infoItem">{post.publishedAt}</p>
                <p class="infoItem">Forfatter: {post.author}</p>
            </div>
        </div>

        {#if post.hasOwnProperty('mainImage')}
        <img class="pic" style="width: 100%" src={urlFor(img).url()} alt="">  
        {/if}

        <div style="font-style: italic;">{post.Caption}</div>
    </div>

    <div class="text">{post.body}</div>
</div>



<style>
    .infoItem {
        margin-right: 2vw;
    }

    .pic {
        border-radius: 2vw;
    }

    .text {
        margin-top: 5vw;
        width: 100%;
        font-family: Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.25rem;
        line-height: 2rem;
    }
</style>