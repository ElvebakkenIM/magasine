<script>
    import footBG from "$lib/assets/footer/pc-footerBakgrunn.png";
</script>


<div  class="footer">
    <div class="footContent">
        <img src={footBG} alt=""/>
        <a href="https://magasine.sanity.studio/" target="_blank" rel="noreferrer" class="adminURL">
            Administrator
        </a><br>
    </div>
</div>

<div class="tlf footSpace"></div>


<style>
    .footer {
        margin-top: 18vw;
    }.footContent {
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
        right: 25vw; 
        color: rgba(255, 255, 255, .5);
    }.adminURL:hover {
        color: white;
    }
    .footSpace {
        height: 74px;
        width: 1px;
    }
</style>