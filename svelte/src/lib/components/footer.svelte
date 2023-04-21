<script>
    import footBG from "$lib/assets/footer/pc-footerBakgrunn.png";
    export let sources = [];

    let innerWidth = 0;
</script>


<div style="margin-top: {innerWidth <= 775 ? '30' : '18'}vw;">
    <div class="footContent" style="margin-bottom: {innerWidth <= 775 ? '74' : '0'}px;">
        <img src={footBG} alt=""/>

        <div class="sources" style="font-size: {innerWidth <= 775 ? '2.5' : '1.5'}vw;">
            <ul>
            {#each sources as kilde}
                <li>{kilde}</li>
            {/each}
            </ul>
        </div>

        <a href="https://magasine.sanity.studio/" target="_blank" rel="noreferrer" class="adminURL" style="{innerWidth <= 775 ? 'left' : 'right'}: 25vw; top: {innerWidth <= 775 ? '3' : '12'}vw;">
            Administrator
        </a>
    </div>
</div>



<svelte:window bind:innerWidth/>


<style>
    .sources {
        margin-top: -12%;
        line-height: 175%;
        color: white;
        background-color: #414042;
        width: 100%;
        padding-bottom: 4vw;
    } .sources ul {
        list-style: none;
        margin: 0;
    } 


    .footContent {
        width: 100vw; 
        height: fit-content;
        position: relative;
    }.footContent img {
        width: 100vw;
        top: 0px;
    }
    .adminURL {
        position: absolute;
         
        color: rgba(255, 255, 255, .5);
    }.adminURL:hover {
        color: white;
    }
</style>