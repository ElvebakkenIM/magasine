<svelte:head>
	<link rel="icon" href="/favicon.png"/> <!-- Farg ikonene etter  -->
</svelte:head>
<script>
    import Header from '$lib/components/header.svelte';
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';
    import ArtikkelFelt from 'lib//components/artikkelFelt.svelte';
    import Footer from 'lib//components/footer.svelte';
    import InspText from 'lib//components/inspirasjonstekst.svelte';
    import Kategorier from 'lib//components/kategorier.svelte';
    import TilTops from 'lib//components/tilTops.svelte';
    import Nyeste5paBakka from 'lib//components/nyeste5paBakka.svelte';
    import MoreButton from 'lib//components/moreButton.svelte';
    import ScrollMenu from 'lib//components/scrollMenu.svelte';
    import TlfNyestArtikkel from 'lib//components/tlf-nyestArtikkel.svelte';
    import TlfMoreButton from 'lib//components/tlf-moreButton.svelte';

    export let data;

    let postData = data.post;
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
    console.log(postData[0]._createdAt, postData[1]._createdAt, postData[0]._createdAt > postData[1]._createdAt);
    
    // let sortedPosts = [];

    // for (let post of postData) {
    //     if (sortedPosts.length > 0) {
    //         for (let i = 0; i < sortedPosts.length -1; i++) {
    //             if (post._createdAt > sortedPosts[i]._createdAt) {
    //                 console.log(sortedPosts[i]._createdAt, post._createdAt)
    //             }
    //             else if (post._createdAt > sortedPosts[i+1]._createdAt && post._createdAt < sortedPosts[i]._createdAt) {
    //                 if () {

    //                 }
    //                 console.log(sortedPosts[i+1]._createdAt, post._createdAt, sortedPosts[i]._createdAt)
    //             }
    //         }
    //     } else {
    //         sortedPosts.push(post);
    //     }
    // }
    

    // let img = data.post[7].mainImage.asset._ref;

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


<Header/>
<ScrollMenu/>

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

{#if innerWidth <= 775}
<TlfMoreButton bind:showMore={showMore}/>
{:else}
<MoreButton bind:showMore={showMore}/>
{/if}


<Footer/>


<TilTops/>

<svelte:window bind:innerWidth bind:innerHeight/>
