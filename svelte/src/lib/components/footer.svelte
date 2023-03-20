<script>
    import footBG from "$lib/assets/footer/pc-footerBakgrunn.png";

    let innerWidth = 0;
</script>


<div style="margin-top: {innerWidth <= 775 ? '30' : '18'}vw;">
    <div class="footContent">
        <img src={footBG} alt=""/>
        <a href="https://magasine.sanity.studio/" target="_blank" rel="noreferrer" class="adminURL" style="{innerWidth <= 775 ? 'left' : 'right'}: 25vw;">
            Administrator
        </a><br>
    </div>
</div>

<div class="tlf footSpace"></div>

<svelte:window bind:innerWidth/>


<style>
    .footContent {
        width: 100vw; 
        height: 23vw;
        position: relative;
    }.footContent img {
        width: 100vw;
        bottom: 0;
    }
    .adminURL {
        position: absolute; 
        bottom: 5vw; 
         
        color: rgba(255, 255, 255, .5);
    }.adminURL:hover {
        color: white;
    }
    .footSpace {
        height: 74px;
        width: 1px;
    }
</style>