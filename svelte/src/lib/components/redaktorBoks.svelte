<script>
    export let editor;

    let name = editor.name;
    let position = editor.position;
    let eClass = editor.class;
</script>

<div class="hvemGridItem">
    <div class="hvemPic"><img src="" alt="Portrett av elev"/></div>
    <div class="hvemText"><br>
        <b>{name}</b> {eClass}
        ({position})
    </div>
</div>


<style>
    

    .hvemGridItem {
        display: grid;
        grid-gap: 1vw;
        grid-template-columns: auto auto;
        margin-bottom: 5vw;

        height: fit-content;
    }

    .hvemPic {
        width: fit-content;
        height: fit-content;
    }.hvemPic img {
        width: 10vw;
        height: 10vw;
        border-radius: 1vw;
    }

    .hvemText {
        width: 100%;
    }
</style>