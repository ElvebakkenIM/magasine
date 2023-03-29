<script>
    import RedaktorBoks from "./redaktorBoks.svelte";

    export let info;
    let utvVedlike = []
    for (let person of info) {
        if (person.team == 'utv-vedlike') {
            utvVedlike.push(person);
            console.log(person);
        }
    }

    let innerWidth = 0;
</script>


<div class="midItem">

    <div class="omBox pic" style="margin-bottom: {innerWidth <= 775 ? '12' : '5'}vw; width: {innerWidth <= 775 ? '100' : '75'}%; font-size: {innerWidth <= 775 ? '3.5' : '1.75'}vw;">
        <b>Nettsiden sine utviklere og vedlikeholdere!</b><br/><br/>
        Denne nettsiden vedlikeholdes i år (2022/2023) av disse elevene:
        <div class="hvemGrid" style="grid-template-columns: auto {innerWidth > 775 ? 'auto' : ''};">
            {#each utvVedlike as person}
                <RedaktorBoks editor={person}/>
            {/each}
            
        </div>
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


    .hvemGrid {
        display: grid;
        grid-gap: 2vw;
        margin-top: 2vw;
    }
</style>
