<svelte:head>
	<link rel="icon" href="/favicon.png"/> <!-- Farg ikonene etter  -->
</svelte:head>
<script>
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';
    import ArtikkelFelt from 'lib//components/artikkelFelt.svelte';
    import Footer from 'lib//components/footer.svelte';
    import InspText from 'lib//components/inspirasjonstekst.svelte';
    import Kategorier from 'lib//components/kategorier.svelte';
    import Nyeste5paBakka from 'lib//components/nyeste5paBakka.svelte';
    import MoreButton from 'lib//components/moreButton.svelte';
    import TlfNyestArtikkel from 'lib//components/tlf-nyestArtikkel.svelte';
    import TilHangman from 'lib//components/tilHangman.svelte';

    export let data;

    let postData = data.post;

    // https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
    postData.sort(function(a, b) {
        return (new Date(a.publishedAt) - new Date(b.publishedAt))*-1;   // Endre til ._createdAt for å få når de er laget
    })
    

    let postTypes = data.ptype;
    let newest = data.post[0];


    //**   Endre _createdAt til kun dato   **/

    // let date;
    // for (let post of postData) {
    //     date = '';
    //     for (let i = 0; i < 10; i++) {
    //         date += String(post._createdAt)[i];
    //     }
    //     post._createdAt = date;
    // }

    console.log(postData)

    let builder = data.img;

    let newest5paBakka;
    for (let post of postData) {
        if (post.hasOwnProperty('categories') && post.categories.includes("5-pa-bakka")) {
            newest5paBakka = post;
            break;
        }
    }


    let showMore = 0;

    let innerWidth = 0;
    let innerHeight = 0;
    
</script>

<TilHangman/>

{#if innerWidth <= 775}
<TlfNyestArtikkel builder={builder} artikkle={newest} ptypes={postTypes}/>
{:else}
<NyestArtikkel builder={builder} artikkle={newest} ptypes={postTypes}/>
{/if}

<Kategorier/>

<Nyeste5paBakka info={newest5paBakka}/>

<ArtikkelFelt builder={builder} placing='^' postdata={postData} ptype={postTypes}/>
<InspText info={data.insp[0]}/>
<ArtikkelFelt builder={builder} bind:showMore={showMore} placing='v' postdata={postData} ptype={postTypes}/>

<MoreButton bind:showMore={showMore} len={postData.length}/>


<Footer/>


<svelte:window bind:innerWidth bind:innerHeight/>
