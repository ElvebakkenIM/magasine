<script>

    import {page} from '$app/stores';
    let onURL = $page.url.pathname;

    let onColor = '#4A9CFF';
    let onHover = '#4083db';

    switch(onURL) {
    case '/bakka':
    case '/bakka/5-pa-bakka':
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

    let innerWidth = 0;
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="tilToppenKnapp" style="right: {innerWidth <= 775 ? '25' : '50'}px; bottom: {innerWidth <= 775 ? '100' : '50'}px; --on: {onColor}; --onHover: {onHover}" on:click={tilTopps}>
    <span>{#if innerWidth <= 775}^{:else}Til Tops{/if}</span>
</div>

<svelte:window bind:innerWidth/>



<style>
    .tilToppenKnapp {
        width: fit-content;
        padding: 20px;
        position: fixed;
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
</style>