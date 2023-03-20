<script>
    import Header from '$lib/components/header.svelte';
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';
    import ArtikkelFelt from 'lib//components/artikkelFelt.svelte';
    import Footer from 'lib//components/footer.svelte';
    import InspText from 'lib//components/inspirasjonstekst.svelte';
    import Kategorier from 'lib//components/kategorier.svelte';
    import TilTops from 'lib//components/tilTops.svelte';
    import Nyeste5paBakka from 'lib//components/nyeste5paBakka.svelte';
    import MoreButton from 'lib//components/moreButton.svelte';
    import ScrollMenu from 'lib//components/scrollMenu.svelte';
    import TlfArtikkel from 'lib//components/tlf-artikkel.svelte';
    import TlfNyestArtikkel from 'lib//components/tlf-nyestArtikkel.svelte';
    import TlfMoreButton from 'lib//components/tlf-moreButton.svelte';

    export let data;
    console.log(data.post[0])

    let postData = data.post;
    let newest = data.post[0];

    // let img = data.post[7].mainImage.asset._ref;

    let builder = data.img;

    let author = data.about[0].author;
    console.log(author)

    let body = data.about[0].body

    let img = data.about[0].mainImage.asset._ref
    console.log(img)


    
</script>
   
    
    let newest5paBakka;
    for (let post of data.post) {
        if (post.categories.includes("5-pa-bakka")) {
            newest5paBakka = post;
            break;
        }
    }


    let showMore = 0;

    let innerWidth = 0;
    let innerHeight = 0;
    
</script>


<Header/>
<ScrollMenu/>

{#if innerWidth <= 775}
<TlfNyestArtikkel artikkle={newest}/>
{:else}
<NyestArtikkel artikkle={newest}/>
{/if}

<Kategorier/>

<Nyeste5paBakka info={newest5paBakka}/>

<p>{body}</p>

<img src="{img}" alt="">

<ArtikkelFelt builder={builder} placing='^' postdata={postData}/>
<InspText/>
<ArtikkelFelt builder={builder} bind:showMore={showMore} placing='v' postdata={postData}/>

{#if innerWidth <= 775}
<TlfMoreButton bind:showMore={showMore}/>
{:else}
<MoreButton bind:showMore={showMore}/>
{/if}


<Footer/>


<TilTops/>

<svelte:window bind:innerWidth bind:innerHeight/>
