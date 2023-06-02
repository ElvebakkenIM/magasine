<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let closed = true;
    function closeOpen() {
        closed = !closed;
    }

    onMount(() => {
		closed = false;
	});
</script>

<div id="container" style="right: {closed ? '-360px' : '-1vw'};">
    <button on:click={closeOpen} id="closeOpen">{closed ? '<' : '>'}</button>
    <div id="textBox">
        <h2 style="margin: 0px;">Prøv spillet!</h2>
        <p style="margin-top: 0px;">Elvebakken hangman</p>
        <div style="display: flex; align-items: center;"><p style="margin-right: 10px; height: fit-content;">Hangman</p><button on:click={() => goto("/spill")} id="spill">Spill!</button></div>
    </div>
</div>

<style>
    #container {
        background-color: #414042; 
        width: 400px; 
        height: 250px; 
        position: fixed; 
        bottom: 20%; 
        z-index: 10; 
        border-radius: 1vw;
        transition: .5s;
    }

    #textBox {
        color: white;
        width: calc(100% - 1vw);
        font-size: x-large;

        display: flex;
        align-items: center;
        flex-direction: column;
    }

    button#closeOpen {
        background-color: rgba(0, 0, 0, 0);
        margin: 10px;
        font-size: 1.5rem;
        color: white;
        border: none;
        cursor: pointer;
    }

    button#spill {
        height: fit-content;
        padding: 10px;
        border-radius: .5vw;
        border: none;
        font-size: 1.5rem;
        background-color: #4A9CFF;
        color: white;
        cursor: pointer;
    }
</style>