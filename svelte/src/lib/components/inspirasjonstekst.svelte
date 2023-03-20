<script>
    let title = 'Vil DU skrive for MagasinE?'
    let text = 'Du kan sende artikler, bilder, kortfilmer, podcaster og hva annet du vil til magasine.bakka@gmail.com eller på <a href="/kont">kontakt oss</a>.'

    let innerWidth = 0;
</script>


<div class="skriveForTextBox" style="font-size: {innerWidth <= 775 ? '4.2' : '2.5'}vw;">
    <hr style="width:25vw; border: 2.5px solid black; border-radius: 50vw;">
    <b>{title}</b><br>
    {@html text}
    <hr style="width:25vw; border: 2.5px solid black; border-radius: 50vw;">
</div>
<svelte:window bind:innerWidth/>


<style>
    .skriveForTextBox {
        text-align: center;
        margin-top: 9vw;
    }
</style>