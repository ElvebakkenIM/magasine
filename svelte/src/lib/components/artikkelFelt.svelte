<script>
    import Artikkel from "./artikkel.svelte";

    export let placing;
    export let showMore = 0;
    
    export let postdata = [''];
    let articData = postdata;
    console.log(articData)
    
    let articShowLength = 6;

    // if (placing == '^' && articData.length-1 < 6) {
    //     articShowLength = articData.length-1;
    // } 
    
    let shift = 0; // To show the 7th++ article if its the second component used
    if (placing == 'v') {
        // if (articData.length-1 < 12 && articData.length-1 >= 6) {
        //     articShowLength = (articData.length-1) - 6;
        // }
        shift = 6;
    }
</script>


<div class="midItem">

    <div class="gridContArticles" style="margin-top: 15vw;">
        <div class="overskriftTekst"><h3><b>Alle artikkler</b></h3></div>

        {#each {length: articShowLength+showMore} as _, i}
        {#if i < articData.length-1-shift}

        <Artikkel artikkle={articData[i+1+shift]}/> <!--TODO: Send kun passende til kategorien/siden man er på -->
        
        {/if}
        {/each}

    </div>

</div>


<style>
    .overskriftTekst {
        position: absolute; 
        top: -30px;
        left: 0;
        font-size: 20px;
        color: #414042;
    }h3 { /* No extra effects for h3 (kun der for universel utforming) */
        display: inline;
        font-size: 20px;
    }

    .gridContArticles {
        display: grid;
        grid-gap: 70px;
        grid-template-columns: auto auto;
        width: 100%;
        position: relative;
        
    }
</style>