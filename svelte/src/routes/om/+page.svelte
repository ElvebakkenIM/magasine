<script>
    import Header from '$lib/components/header.svelte';
    import Footer from 'lib//components/footer.svelte';
    import HvemErVi from 'lib//components/hvemErVi.svelte';
    import HvemUtviklere from 'lib//components/hvemUtviklere.svelte';
    import OmBoks from 'lib//components/omBoks.svelte';
    import ScrollMenu from 'lib//components/scrollMenu.svelte';
    import TilTops from 'lib//components/tilTops.svelte';


    export let data;
    console.log(data.about);
    
    let editors = data.editor;
    

    /**
     * @param {{ sorting: number; }} a
     * @param {{ sorting: number; }} b
     */
    function compare( a, b ) {
        if ( a.sorting < b.sorting ){
            return -1;
        }
        if ( a.sorting > b.sorting ){
            return 1;
        }
        return 0;
    }
    let infoSorted = data.about.sort(compare);

</script>

{#each Array(infoSorted.length) as _, i}
    <OmBoks info={infoSorted[i]}/>
{/each}

<HvemErVi info={editors}/>

<HvemUtviklere info={editors}/>

<Footer/>

