<script>
    export let info;
    let title = info.title;
    let text = info.body;
</script>


<div class="midItem">

    <div class="pic omBox">
        <b>{title}</b><br/><br/>
        {text}
    </div>

</div>


<style>
    .pic {
        border-radius: 2vw;
    } 

    .omBox {
        background-color: #daeffe;

        width: 75%;
        height: fit-content;
        padding: 2vw;
        margin-bottom: 5vw;

        font-size: 1.75vw;
    }
</style>