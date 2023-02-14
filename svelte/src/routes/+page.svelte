<script>
    import Header from '$lib/components/header.svelte';
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';

    export let data;
    console.log(data.about[0])

    let author = data.about[0].author;
    console.log(author)
    
</script>


<Header cat='hjem'/>
<h1>Welcome to making Magasine work {author}. Good Luck!!</h1>
<NyestArtikkel />