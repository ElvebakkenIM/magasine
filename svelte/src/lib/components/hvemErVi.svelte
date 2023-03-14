<script>
    import RedaktorBoks from "./redaktorBoks.svelte";

    /**
     * @type {any}
     */
     export let info;
</script>


<div class="midItem">

    <div class="omBox pic">
        <b>Hvem styrer MagasinE?</b><br/><br/>
        MagasinE er helt elevstyrt og styres i år (2022/2023) av disse redaktørene:
        <div class="hvemGrid">
            {#each info as editor}
                <RedaktorBoks editor={editor}/>
            {/each}
            
        </div>
    </div>

</div>


<style>
    .pic {
        border-radius: 2vw;
    } 

    .omBox {
        background-color: #daeffe;

        width: 75%;
        height: fit-content;
        padding: 2vw;
        margin-bottom: 5vw;

        font-size: 1.75vw;
    }


    .hvemGrid {
        display: grid;
        grid-gap: 2vw;
        grid-template-columns: auto auto;
        margin-top: 2vw;
    }
</style>
