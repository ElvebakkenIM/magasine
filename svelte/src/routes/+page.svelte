<script>
    import Header from '$lib/components/header.svelte';
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';
    import ArtikkelFelt from 'lib//components/artikkelFelt.svelte';

    export let data;
    console.log(data.about[0])

    let postData = data.about;
    let artic = data.about[0];
    
</script>


<Header cat='hjem'/>
<NyestArtikkel artikkle={artic}/>

<ArtikkelFelt postdata={postData}/>