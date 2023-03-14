<script>
    export let showMore = 0;
</script>


<div style="width: 100vw; position: relative; margin-top: 5vw;">
    <div class="seMerKnappBox">
        <button class="seMerKnapp" on:click={() => showMore+=4}><b>Se mer</b></button> <!--TODO Skal vise flere artikkler -->
    </div>
</div>



<style>
    .seMerKnappBox {
        width: 8.5vw; 
        height: 4.25vw; 
        position: absolute; 
        right: 10%; 
        display: flex; 
        justify-content: center;
    }
    .seMerKnapp {
        width: 8vw; 
        height: 4vw; 
        background-color: white; 
        cursor: pointer;

        border: 5px solid lightgray; 
        border-radius: 1vw; 

        font-size: 1.5vw; 
        color: #414042;

        transition: .25s;
    } .seMerKnapp:hover {
        width: 8.5vw;
        height: 4.25vw;
        font-size: 1.6vw;
    }
</style>