<script>
    export let bokstav = '';
    export let style = 'normal';
</script>

<div class={style}>{bokstav}</div>

<style>
    div {
        border-radius: .5vw;
        width: 80%;
        min-height: .5vw;
        height: fit-content;
        margin: 10% 0px;
        text-align: center;
        font-size: 2.75vw;
    }

    .normal {
        background-color: #9d9b9e;
        color: #414042;
    }
    .correct {
        background-color: #53bb53;
        color: #22612f;
    }
    .wrong {
        background-color: #414042;
        color: #7b777d;
    }
    .selected {
        background-color: #4A9CFF;
        color: white;
    }
</style>