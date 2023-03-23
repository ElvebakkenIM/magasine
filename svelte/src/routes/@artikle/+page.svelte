<script>
    import Footer from "lib//components/footer.svelte";
    import Header from "lib//components/header.svelte";
    import ScrollMenu from "lib//components/scrollMenu.svelte";
    import TilTops from "lib//components/tilTops.svelte";
    import FullArtikkel from "lib//components/fullArtikkel.svelte";
    import DelLik from "lib//components/delLik.svelte";

    export let data;

    //Retrives builder from sanity through imbuilder. The uses this to create url for image. 
    let builder = data.img;
</script>

<Header/>
<ScrollMenu/>

<FullArtikkel builder={builder} data={data.post}/>
<DelLik/>

<Footer/>

<TilTops/>
