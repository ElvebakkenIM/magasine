<script>
    import Artikkel from "./artikkel.svelte";

    export let postdata = [''];
    let articData = postdata;
    console.log(articData)
</script>


<div class="midItem">

    <div class="gridContArticles" style="margin-top: 24vw;">
        <div class="overskriftTekst"><h3><b>Alle artikkler</b></h3></div>

        {#each Array(articData.length-1) as _, i}
        <Artikkel artikkle={articData[i+1]}/>
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