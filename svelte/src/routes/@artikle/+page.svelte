<script>
    import Footer from "lib//components/footer.svelte";
    import Header from "lib//components/header.svelte";
    import ScrollMenu from "lib//components/scrollMenu.svelte";

    import FullArtikkel from "lib//components/fullArtikkel.svelte";

    export let data;

    //Retrives builder from sanity through imbuilder. The uses this to create url for image. 
    let builder = data.img;
</script>

<Header/>
<ScrollMenu/>

<FullArtikkel builder={builder} data={data.post}/>

<Footer/>
