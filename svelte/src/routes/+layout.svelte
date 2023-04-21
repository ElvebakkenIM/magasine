<script>
  import Header from "lib//components/header.svelte";
  import ScrollMenu from "lib//components/scrollMenu.svelte";

  import {page} from '$app/stores';
    import TilTops from "lib//components/tilTops.svelte";
    import Footer from "lib//components/footer.svelte";
</script>

<svelte:head>
  <title>MagasinE</title>
  <!-- <link rel="icon" href="%sveltekit.assets%/favicon.png" /> -->
	<link rel="icon" href="/favicon.png"/>
</svelte:head>

<style>
  :global(body) {
    overflow-x: hidden;
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  :global(.midItem) {
    width: 80vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10vw;
    margin-right: 10vw;
  }


  :global(.pc) {
    display: block;
  }
  :global(.tlf) {
    display: none;
  }
  @media only screen and (max-width: 775px) {
    :global(.pc) {
        display: none;
    }
    :global(.tlf) {
        display: block;
    }
  }
</style>
{#key $page}
<Header/>
<ScrollMenu/>
<TilTops/>
{/key}

<slot />


