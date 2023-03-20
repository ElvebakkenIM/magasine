<script>
    export let info;
    let title = info.title;

    let innerWidth = 0;
</script>



<div class="midItem">

    <a href="/bakka" class="noLink"><div class="femPaBakkaBox">
        <div class="overskriftTekst" style="font-size: {innerWidth <= 775 ? '12.5' : '20'}px;"><h3><b>5 på Bakka</b></h3></div>
        {title}
    </div></a>

</div>

<svelte:window bind:innerWidth/>


<style>
    .overskriftTekst {
        position: absolute; 
        top: -30px;
        left: 0;
        color: #414042;
    }h3 { /* No extra effects for h3 (kun der for universel utforming) */
        display: inline;
    }

    .femPaBakkaBox {
        border: 5px solid lightgray;
        border-radius: 2vw;
        width: 70vw;
        margin-top: 18%;
        cursor: pointer;

        text-align: center;
        padding: 0.7vw 0;

        font-size: 5vw;
        position: relative;
        transition: 0.25s;
    }.femPaBakkaBox:hover {
        width: 72vw;
        padding: 1.1vw 0;
    }

    .noLink {
        text-decoration: none;
        color: black;
    }
</style>