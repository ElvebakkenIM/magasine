<script>
    function tilTopps() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Endre 0 om man ønsker å endre hvor den ender
    }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="tilToppenKnapp" on:click={tilTopps}><span>Til Tops</span><img src="hovedBilder/mobil/tlf-tilTop-ikon.png" alt="Til Tops"/></div>



<style>
    .tilToppenKnapp {
        width: 140px;
        padding-top: 20px;
        padding-bottom: 20px;
        position: fixed;
        bottom: 50px;
        right: 50px;
        background-color: #4A9CFF;
        border-radius: 15px;

        color: white;
        font-size: 40px;
        text-align: center;

        z-index: 2;
        cursor: pointer;

        transition: .25s;
    }
    .tilToppenKnapp:hover {
        background-color: #4083db;
    }
    
    .tilToppenKnapp img {
        display: none;
    }
</style>