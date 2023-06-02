<script context="module">
    export function lagreScore(score) {
        localStorage.setItem('topScore', 'Scr:'+score+'Dat:'+String(new Date().toLocaleDateString()));
    }
</script>

<script>
    import { browser } from "$app/environment";

    function getScore() {
        if (browser) {
            return window.localStorage.getItem('topScore');
        }
    }

    let savedScore = String(getScore()).split('Scr:')[1];
    savedScore = String(savedScore).split('Dat:');
    
    let score = savedScore[0];
    let scoreDate = savedScore[1];
</script>

<div id="poengBoks">
    {#if score != 'undefined'}
    <h3>Din beste:</h3>
    <p>{score} feil, spillt {scoreDate}</p>
    {:else}
    <p>Her lagres din highscore</p>
    {/if}
</div>

<style>
    #poengBoks {
        margin: 0px 2vw;
        padding: 1vw;
        border-radius: 2vw;
        font-size: large;
        background-color: #daeffe;
    }
</style>