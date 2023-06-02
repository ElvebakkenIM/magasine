<script>
    import GenererOrd, {getWord} from "./genererOrd.svelte";
    import Footer from "lib//components/footer.svelte";
    import HangmanBokstav from "lib//components/hangmanBokstav.svelte";
    
    import B_0 from '$lib/assets/hangman/HangingMan_0.png';
    import B_1 from '$lib/assets/hangman/HangingMan_1.png';
    import B_2 from '$lib/assets/hangman/HangingMan_2.png';
    import B_3 from '$lib/assets/hangman/HangingMan_3.png';
    import B_4 from '$lib/assets/hangman/HangingMan_4.png';
    import B_5 from '$lib/assets/hangman/HangingMan_5.png';
    import B_6 from '$lib/assets/hangman/HangingMan_6.png';

    let tastaturBokstaver = 'QWERTYUIOPÅASDFGHJKLØÆZXCVBNM';

    let ordet = getWord(); // Maks 11 bokstaver (endre dette i CSS)
    let riktig = [];
    let feil = [];
    let skalGjette = '';
    let vunnet = false; 

    function bokstavKlikket(bokstav) {
        skalGjette = bokstav;
    }

    function gjettDette() {
        if (skalGjette && !feil.includes(skalGjette) && !riktig.includes(skalGjette)) {
            ordet.includes(skalGjette) ? riktig = [...riktig, skalGjette] : feil = [...feil, skalGjette];
        }
    }

    $: riktig, harVunnet();
    function harVunnet() {
        let igjenIOrdet = ordet;
        for (let bokstav of riktig) {
            igjenIOrdet = igjenIOrdet.replace(bokstav, '');
        }
        if (!igjenIOrdet) {
            vunnet = true;
        }
    }

    function reset() {
        riktig = [];
        feil = [];
        skalGjette = '';
        vunnet = false;
    }
</script>

<div id="centerGame">
    <div id="containGame">
        <div id="bilde"><img src={feil.length == 0 ? B_0 : feil.length == 1 ? B_1 : feil.length == 2 ? B_2 : feil.length == 3 ? B_3 : feil.length == 4 ? B_4 : feil.length == 5 ? B_5 : B_6} alt="{feil.length}/6"/></div>
        
        <div id="ikkeRiktig">
            {#each feil as bokstav}
                <HangmanBokstav bokstav={bokstav}/>
            {/each}
        </div>

        <div id="ordet">
            {#each ordet as bokstav}
                <HangmanBokstav bokstav={riktig.includes(bokstav) ? bokstav : ''} style={riktig.includes(bokstav) ? 'correct' : 'normal'}/>
            {/each}
        </div>

        <div id="tastatur">
            {#if feil.length < 6 && !vunnet}
            <div id="tastaturGrid">
                {#each tastaturBokstaver as bokstav}
                    <button on:click={() => bokstavKlikket(bokstav)} class="tastaturBokstaver"><HangmanBokstav bokstav={bokstav} style={skalGjette == bokstav ? 'selected' : feil.includes(bokstav) ? 'wrong' : riktig.includes(bokstav) ? 'correct' : 'normal'}/></button>
                {/each}
                <button on:click={gjettDette} id="guess">Guess</button>
            </div>
            {:else}
            <div class="spillSlutt">
                {#if vunnet}
                <h2>Godt jobbet!</h2>
                {:else}
                <h2 style="margin-bottom: 0px;">Bedre lykke neste gang!</h2>
                <p style="margin-top: 0px;">Ordet var: {ordet}</p>
                {/if}
                <button on:click={reset}>Spill igjen</button>
            </div>
            {/if}
        </div>
    </div>
</div>

<Footer/>

<style>
    #centerGame {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    #containGame {
        width: 50%;
        display: grid;
        grid-template-columns: 75% auto;
    }

    #bilde img {
        width:100%
    }

    #ikkeRiktig {
        background-color: #daeffe;
        height: fit-content;
        min-height: 1vw;
        border-radius: 1vw;
        padding: 2%;
        justify-items: center;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column: 2;
        grid-row: 1 / 3;
    }

    #ordet {
        height: 3.75vw;
        align-items: end;
        padding: 1% 2%;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; /* anntall bokstaver i ord */
    }

    #tastatur {
        grid-column: span 2;
        padding: .5% 1.5%;
        display: flex;
        justify-content: center;
    } #tastaturGrid {
        width: 75%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        justify-items: center;
    }
    button.tastaturBokstaver {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        width: 120%;
        height: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    #tastaturGrid button#guess {
        background-color: #4A9CFF;
        color: white;
        border: none;
        width: 92.5%;
        margin: 2% 0px;
        border-radius: .5vw;
        font-size: 2.75vw;
        cursor: pointer;

        grid-column: 9 / 12;
        grid-row: 3;
    }

    .spillSlutt {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .spillSlutt button {
        background-color: #4A9CFF;
        color: white;
        border: none;
        border-radius: 1vw;
        padding: .5vw;
        font-size: 1.5vw;
        cursor: pointer;
    }
</style>