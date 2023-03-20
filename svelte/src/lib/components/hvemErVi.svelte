<script>
    import RedaktorBoks from "./redaktorBoks.svelte";

    /**
     * @type {any}
     */
     export let info;

     let innerWidth = 0;
</script>


<div class="midItem">

    <div class="omBox pic" style="margin-bottom: {innerWidth <= 775 ? '12' : '5'}vw; width: {innerWidth <= 775 ? '100' : '75'}%; font-size: {innerWidth <= 775 ? '3.5' : '1.75'}vw;">
        <b>Hvem styrer MagasinE?</b><br/><br/>
        MagasinE er helt elevstyrt og styres i år (2022/2023) av disse redaktørene:
        <div class="hvemGrid" style="grid-template-columns: auto {innerWidth > 775 ? 'auto' : ''};">
            {#each info as editor}
                <RedaktorBoks editor={editor}/>
            {/each}
            
        </div>
    </div>

</div>

<svelte:window bind:innerWidth/>


<style>
    .pic {
        border-radius: 2vw;
    } 

    .omBox {
        background-color: #daeffe;

        height: fit-content;
        padding: 2vw;
    }


    .hvemGrid {
        display: grid;
        grid-gap: 2vw;
        margin-top: 2vw;
    }
</style>
