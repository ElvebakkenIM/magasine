<script>
    export let showMore = 0;
</script>


<div style="width: 100vw; position: relative; margin-top: 5vw;">
    <button class="seMerKnapp" on:click={() => showMore+=4}><b>Se mer</b></button> <!--TODO Skal vise flere artikkler -->
</div>



<style>
    .seMerKnapp {
        width: 20vw; 
        height: 13vw; 
        position: absolute; 
        right: 10%; 

        background-color: white; 
        cursor: pointer;
        border: 5px solid lightgray; 
        border-radius: 2vw; 

        font-size: 4vw; 
        color: #414042;
    }
</style>