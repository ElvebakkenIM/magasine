<script>

    import {page} from '$app/stores';
    let onURL = $page.url.pathname;

    let onColor = '#4A9CFF';
    let onHover = '#4083db';

    switch(onURL) {
    case '/bakka' || '/bakka/fem-pa-bakka':
        onColor = '#FF3333';
        onHover = '#d52127';
        break;
    case '/samf-og-debatt':
        onColor = '#2E9DE8';
        onHover = '#2891d7';
        break;
    case '/kreativt':
        onColor = '#FFA727';
        onHover = '#ee931d';
        break;
    default:
        break;
    }




    function tilTopps() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Endre 0 om man ønsker å endre hvor den ender
    }

</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="tilToppenKnapp" style="--on: {onColor}; --onHover: {onHover}" on:click={tilTopps}><span>Til Tops</span><img src="hovedBilder/mobil/tlf-tilTop-ikon.png" alt="Til Tops"/></div>



<style>
    .tilToppenKnapp {
        width: 140px;
        padding-top: 20px;
        padding-bottom: 20px;
        position: fixed;
        bottom: 50px;
        right: 50px;
        background-color: var(--on);
        border-radius: 15px;

        color: white;
        font-size: 40px;
        text-align: center;

        z-index: 2;
        cursor: pointer;

        transition: .25s;
    }
    .tilToppenKnapp:hover {
        background-color: var(--onHover);
    }
    
    .tilToppenKnapp img {
        display: none;
    }
</style>