<script>
    import Header from '$lib/components/header.svelte';
    import ArtikkelFelt from 'lib//components/artikkelFelt.svelte';
    import Footer from 'lib//components/footer.svelte';
    import InspText from 'lib//components/inspirasjonstekst.svelte';
    import Kategorier from 'lib//components/kategorier.svelte';
    import MoreButton from 'lib//components/moreButton.svelte';
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';
    import Nyeste5paBakka from 'lib//components/nyeste5paBakka.svelte';
    import ScrollMenu from 'lib//components/scrollMenu.svelte';
    import TilTops from 'lib//components/tilTops.svelte';


    export let data;

    let builder = data.img;

    
    let postData = data.post;
    let newest = data.post[0];

    let showMore = 0;
</script>


<ScrollMenu/>
<Header/>

<NyestArtikkel builder={builder} artikkle={newest}/>

<ArtikkelFelt builder={builder} placing='^' postdata={postData}/>
<Kategorier/>
<InspText info={data.insp[0]}/>
<ArtikkelFelt builder={builder} bind:showMore={showMore} placing='v' postdata={postData}/>

<MoreButton bind:showMore={showMore}/>


<Footer/>


<TilTops/>