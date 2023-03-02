<script>
    import Header from '$lib/components/header.svelte';
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';
    import ArtikkelFelt from 'lib//components/artikkelFelt.svelte';
    import Footer from 'lib//components/footer.svelte';
    import InspText from 'lib//components/inspirasjonstekst.svelte';
    import Kategorier from 'lib//components/kategorier.svelte';
    import TilTops from 'lib//components/tilTops.svelte';

    export let data;
    console.log(data.post[0])

    let postData = data.post;
    let artic = data.post[0];
    
</script>


<Header cat='hjem'/>
<NyestArtikkel artikkle={artic}/>

<Kategorier/>

<ArtikkelFelt postdata={postData}/>
<InspText/>

<Footer/>


<TilTops/>