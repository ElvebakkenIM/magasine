<script>
    import { page } from '$app/stores';

    import Footer from "lib//components/footer.svelte";
    import Header from "lib//components/header.svelte";
    import ScrollMenu from "lib//components/scrollMenu.svelte";
    import TilTops from "lib//components/tilTops.svelte";
    import FullArtikkel from "lib//components/fullArtikkel.svelte";
    import DelLik from "lib//components/delLik.svelte";

    export let data;




    //Retrives builder from sanity through imbuilder. The uses this to create url for image. 
    let builder = data.img;

    let pathlists = String($page.url).split('/');
    let urlSlug = pathlists[(pathlists.length - 1)];

    let post;
    let source = [];
    for(let thisPost of data.post){
        if(thisPost.slug.current == (urlSlug)) {
            post = thisPost;
            if (thisPost.hasOwnProperty('sources')) {
                source = thisPost.sources;
            }
            break;
        }
    }
    
</script>


<FullArtikkel builder={builder} post={post}/>
<DelLik post={post}/>

<Footer sources={source}/>

