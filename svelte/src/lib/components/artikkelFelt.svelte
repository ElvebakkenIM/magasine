<script>
    import Artikkel from "./artikkel.svelte";
    import TlfArtikkel from "./tlf-artikkel.svelte";

    export let placing;
    export let showMore = 0;
    export let builder;
    
    export let postdata = [''];
    let articData = postdata;
    console.log(articData)
    
    
    // if (placing == '^' && articData.length-1 < 6) {
    //     articShowLength = articData.length-1;
    // } 
    
    
    let innerWidth = 0;
    let innerHeight = 0;
    
    let articShowLength = 6;
    $: innerWidth, changeShowLengthOnScale();
    
    function changeShowLengthOnScale() {
        if (innerWidth <= 775) {
            articShowLength = 4;
        } else {
            articShowLength = 6;
        }
    }

    let shift = 0; // To show the 7th++ article if its the second component used
    $: innerWidth, isBottomFixOnScale();

    function isBottomFixOnScale() {
        if (placing == 'v') {
            shift = articShowLength;
        }
    }
</script>


<div class="midItem">

    <div class="gridContArticles" style="margin-top: 15vw; grid-template-columns: {innerWidth > 775 ? 'auto' : ''} auto;">
        {#if placing != 'v'}<div class="overskriftTekst" style="font-size: {innerWidth <= 775 ? '12.5' : '20'}px;"><h3><b>Alle artikkler</b></h3></div>{/if}

        {#each {length: articShowLength+showMore} as _, i}
        {#if i < articData.length-1-shift}

        {#if innerWidth <= 775}
        <TlfArtikkel builder={builder} artikkle={articData[i+1+shift]}/>
        {:else}
        <Artikkel builder={builder} artikkle={articData[i+1+shift]}/>
        {/if}
        
        {/if}
        {/each}

    </div>

</div>

<svelte:window bind:innerWidth bind:innerHeight/>


<style>
    .overskriftTekst {
        position: absolute; 
        top: -30px;
        left: 0;
        color: #414042;
    }h3 { /* No extra effects for h3 (kun der for universel utforming) */
        display: inline;
    }

    .gridContArticles {
        display: grid;
        grid-gap: 70px;
        width: 100%;
        position: relative;
        
    }
</style>