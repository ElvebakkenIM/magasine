<script>
    import catIcon from '$lib/assets/artikkles/-kategori-ikon.png';
    import placeholder from '$lib/assets/artikkles/placeholder.png';

    export let ptypes;

    export let artikkle;
    let ov = artikkle.title;
    let uov = artikkle.subtitle;
    let cats = artikkle.categories;
    let pType = artikkle.postType;
    
    if (pType) {
        for (let type of ptypes) {
            if (type._id == pType._ref) {
                pType = type;
                break;
            }
        }
    }

    let date = artikkle.publishedAt;
    let lDate = date.split('-');
    let months = ['', 'Jan.', 'Feb.', 'Mars', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Des.']


    export let builder;

    let cattexts = [''];
    if (artikkle.hasOwnProperty('categories')) {
        for (let cat of cats) {
            cat === '' ? cats.shift() : '';
            switch (cat) {
                case 'pa-bakka':
                    cattexts.push('På Bakka');
                    break;
                case '5-pa-bakka':
                    cattexts.push('5 på Bakka');
                    break;
                case 'samf-og-debatt':
                    cattexts.push('Samf. & Debatt');
                    break;
                case 'kreativt':
                    cattexts.push('Kreativt');
                    break;
                default:
                    cattexts.push('whhaaa');
                    break;
            }
        }
    }
    cattexts[0] === '' ? cattexts.shift() : '';

    let color1 = '#414042';
    let color2 = '#414042';
    if (((cattexts[0] == 'På Bakka' || cattexts[0] == '5 på Bakka') && cattexts[1] == 'Samf. & Debatt') || ((cattexts[1] == 'På Bakka' || cattexts[1] == '5 på Bakka') && cattexts[0] == 'Samf. & Debatt')) {
        color1 = '#d52127';
        color2 = '#2891d7';
    } 
    else if ((cattexts[0] == 'Samf. & Debatt' && cattexts[1] == 'Kreativt') || (cattexts[1] == 'Samf. & Debatt' && cattexts[0] == 'Kreativt')) {
        color1 = '#2891d7';
        color2 = '#ee931d';
    }
    else if ((cattexts[0] == 'Kreativt' && (cattexts[1] == 'På Bakka' || cattexts[1] == '5 på Bakka')) || (cattexts[1] == 'Kreativt' && (cattexts[0] == 'På Bakka' || cattexts[0] == '5 på Bakka'))) {
        color1 = '#ee931d';
        color2 = '#d52127';
    }

    else if ((cattexts.length === 1 && cattexts[0] == 'På Bakka') || (cattexts.length === 1 && cattexts[0] == '5 på Bakka')) {
        color1 = '#d52127';
        color2 = '#d52127';
    }
    else if (cattexts.length === 1 && cattexts[0] == 'Samf. & Debatt') {
        color1 = '#2891d7';
        color2 = '#2891d7';
    }
    else if (cattexts.length === 1 && cattexts[0] == 'Kreativt') {
        color1 = '#ee931d';
        color2 = '#ee931d';
    }
    

</script>

<div class="midItem">

    <div class="latestNewsBox pic">
        {#if pType}
        <img src={builder.image(pType.image.asset._ref).url()} class="postType" alt="">
        {/if}
        <div class="overskriftTekst"><h3><b>Siste nytt</b></h3></div>
        
        <a href="/@artikle/#/{artikkle.slug.current}">
        <div class="latestNewsBox-hiddencontent pic">

            
            <svg class="latestNewsOverlag" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420.4 539.4">
                <path style="fill: {color1}" d="M1200,539.4H0V267.54s184.48-65.06,433.88-51.95c248.09,13.04,384.19,87.27,384.19,87.27"/>
                <g>
                  <path style="fill: {color2}; opacity: 0.5;" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H482.07s101.2-193.54,336-236.53Z"/>
                  <path style="fill: {color2};" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H655.57s20.48-182.7,162.51-236.53Z"/>
                </g>
            </svg>
            

            <div class="latestNewsTextBox">
                <div class="latestNewsOverskrift">{ov}</div>
                {#if uov}
                <div class="latestNewsUnderoverskrift">{uov}</div>
                {/if}
                <div class="articInfo">
                    <div style="float: left; display: flex; flex-direction: row;">
                        {#if artikkle.hasOwnProperty('categories')}
                        {#each cattexts as cat}
                        <div class="articKat"><img src={catIcon} alt="Kategori">{cat}</div>
                        {/each}
                        {/if}
                    </div>
                    <div style="float: right;">{parseInt(lDate[2])}. {months[parseInt(lDate[1])]} {lDate[0]}</div>
                </div>
            </div>
            {#if artikkle.hasOwnProperty('mainImage')}
            <img style="width: 100%" src={builder.image(artikkle.mainImage.asset._ref).width(1000).url()} alt=""/>
            {:else}
            <img style="width: 100%" src={placeholder} alt=""/>
            {/if}
        </div></a>
    </div>

</div>

<style>
    .postType {
        position: absolute;
        width: 15%;
        right: 0;
        margin: 3%;
        z-index: 1;
    }


    .pic {
        border-radius: 2vw;
    }
    .overskriftTekst {
        position: absolute; 
        top: -30px;
        left: 0;
        font-size: 12.5px;
        color: #414042;
    }h3 { /* No extra effects for h3 (kun der for universel utforming) */
        display: inline;
    }

    .articInfo {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: 2vw;
    }.articKat {
        padding-left: 1.5vw;
        padding-right: 2vw;
        position: relative;
    }.articKat img {
        width: 1.75vw;
        opacity: .25;
        position: absolute;
        left: .75vw;
    }



    .latestNewsBox {
        background-color: lightblue;
        height: 50vw;
        flex: 0 0 100%;
        position: relative;
        cursor: pointer;
    }
    .latestNewsBox-hiddencontent {
        overflow: hidden; 
        position: relative;
        height: 100%; 
        width: 100%; 
    }

    .latestNewsOverlag {
        width: 180%; 
        left: -3.5%;
        position: absolute; 
        bottom: 0px;
    }

    .latestNewsTextBox {
        margin: 2%;
        width: 95%;
        height: 47.5%;
        color: white;

        position: absolute;
        bottom: 0;
    }
    .latestNewsOverskrift {
        font-size: 6vw;
    }.latestNewsUnderoverskrift {
        opacity: 1;
        font-size: 3.5vw;
    }
    
</style>