<script>
    export let info;
    let title = info.title;
    let text = info.body;

    let innerWidth = 0;

</script>


<div class="midItem">

    <div class="pic omBox" style="margin-bottom: {innerWidth <= 775 ? '12' : '5'}vw; width: {innerWidth <= 775 ? '100' : '75'}%; font-size: {innerWidth <= 775 ? '3.5' : '1.75'}vw;">
        <b>{title}</b><br/><br/>
        {text}
    </div>

</div>

<svelte:window bind:innerWidth/>


<style>
    .pic {
        border-radius: 2vw;
    } 

    .omBox {
        background-color: #daeffe;

        height: fit-content;
        padding: 2vw;
    }
</style>