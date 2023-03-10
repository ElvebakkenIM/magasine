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

    export let data;
    console.log(data.post[0])

    let postData = data.post;
    let newest = data.post[0];

    // let img = data.post[7].mainImage.asset._ref;

    let builder = data.img;

    
    let newest5paBakka;
    for (let post of data.post) {
        if (post.categories.includes("5-pa-bakka")) {
            newest5paBakka = post;
            break;
        }
    }


    let showMore = 0;
    
</script>


<Header/>
<ScrollMenu/>

<NyestArtikkel artikkle={newest}/>

<Kategorier/>

<Nyeste5paBakka info={newest5paBakka}/>

<ArtikkelFelt builder={builder} placing='^' postdata={postData}/>
<InspText/>
<ArtikkelFelt builder={builder} bind:showMore={showMore} placing='v' postdata={postData}/>

<MoreButton bind:showMore={showMore}/>


<Footer/>


<TilTops/>