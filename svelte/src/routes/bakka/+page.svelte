<script>
    import Header from '$lib/components/header.svelte';
    import ArtikkelFelt from 'lib//components/artikkelFelt.svelte';
    import Footer from 'lib//components/footer.svelte';
    import InspText from 'lib//components/inspirasjonstekst.svelte';
    import Kategorier from 'lib//components/kategorier.svelte';
    import MoreButton from 'lib//components/moreButton.svelte';
    import NyestArtikkel from 'lib//components/nyestArtikkel.svelte';
    import Nyeste5paBakka from 'lib//components/nyeste5paBakka.svelte';
    import ScrollMenu from 'lib//components/scrollMenu.svelte';
    import TilTops from 'lib//components/tilTops.svelte';


    export let data;
    
    let postData = data.post;
    postData.sort(function(a, b) {
        return (new Date(a.publishedAt) - new Date(b.publishedAt))*-1;
    })
    let postTypes = data.ptype;
    let newest = data.post[0];

    let builder = data.img;


    /**
     * @type {any}
     */
    let newest5paBakka;
    for (let post of data.post) {
        if (post.categories.includes("5-pa-bakka")) {
            newest5paBakka = post;
            break;
        }
    }


    let showMore = 0;
</script>


<NyestArtikkel builder={builder} artikkle={newest} ptypes={postTypes}/>

<Nyeste5paBakka info={newest5paBakka}/>

<ArtikkelFelt builder={builder} placing='^' postdata={postData} ptype={postTypes}/>
<Kategorier/>
<InspText info={data.insp[0]}/>
<ArtikkelFelt builder={builder} bind:showMore={showMore} placing='v' postdata={postData} ptype={postTypes}/>

<MoreButton bind:showMore={showMore}/>


<Footer/>

