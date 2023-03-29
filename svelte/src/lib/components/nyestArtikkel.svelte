<script>
    import catIcon from '$lib/assets/artikkles/-kategori-ikon.png';
    import placeholder from '$lib/assets/artikkles/placeholder.png';

    export let ptypes;

    export let artikkle;
    let ov = artikkle.title;
    let uov = artikkle.subtitle;
    let cats = artikkle.categories;
    let date = artikkle.publishedAt;
    let pType = artikkle.postType;
    
    if (pType) {
        for (let type of ptypes) {
            if (type._id == pType._ref) {
                pType = type;
                break;
            }
        }
    }

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

<div style="position:relative">
    {#if pType}
    <img src={builder.image(pType.image.asset._ref).url()} class="postType" alt="">
    <div class="pTypeText">{pType.title}</div>
    {/if}
    <div class="latestNewsBox pic">
        <div class="overskriftTekst"><h3><b>Siste nytt</b></h3></div>
        <a href="/@artikle/#/{artikkle.slug.current}">
        <div class="latestNewsBox-hiddencontent pic">

            <!-- Standard SVG-overlag -->
            <svg class="latestNewsOverlag" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420.4 539.4">
                <path style="fill: {color1}" d="M1200,539.4H0V267.54s184.48-65.06,433.88-51.95c248.09,13.04,384.19,87.27,384.19,87.27"/>
                <g>
                  <path style="fill: {color2}; opacity: 0.5;" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H482.07s101.2-193.54,336-236.53Z"/>
                  <path style="fill: {color2};" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H655.57s20.48-182.7,162.51-236.53Z"/>
                </g>
            </svg>
            
            <!-- Hover SVG-overlag -->
            <svg class="latestNewsHover" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420.4 539.4">
                <path d="M0,101.98S164.99,0,403.61,0s375.27,101.98,375.27,101.98c0,0,71.75-52.98,163.53-32.59,94.17,20.93,107.73,101.93,107.73,101.93,0,0,195.22-18.93,304.51,117.71,79.54,99.45,64.64,250.37,64.64,250.37H0V101.98Z"/>
            </svg>
            
            <div class="latestNewsTextBox">
                <div class="latestNewsOverskrift">{ov}</div>
                <div class="latestNewsUnderoverskrift">{uov}</div>
                <div class="articInfo">  <!-- Bruker CSS fra "alle artikklene"  -->
                    <div style="float: left; display: flex; flex-direction: row;">
                        {#if artikkle.hasOwnProperty('categories')}
                        {#each cattexts as cat}
                        <div class="articKat"><img src={catIcon} alt="Kategori">{cat}</div>
                        {/each}
                        {/if}
                    </div>
                    <div style="float: right;">{date}</div>
                </div>
            </div>
            {#if artikkle.hasOwnProperty('mainImage')}
            <img style="width: 100%" src={builder.image(artikkle.mainImage.asset._ref).width(1000).url()} alt=""/>
            {:else}
            <img style="width: 100%" src={placeholder} alt=""/>
            {/if}
        </div></a>
    </div>

</div></div>

<style>
    .postType {
        position: absolute;
        width: 10%;
        right: 0;
        margin: 3%;
        z-index: 1;
    }
    .pTypeText {
        position: absolute;
        right: 2.5%;
        top: 22%;
        background-color: #414042;
        color: white;
        font-size: 1.5vw;
        padding: 1%;
        border-radius: 1vw;
        display: none;
        z-index: 1;
    }
    .postType:hover + .pTypeText {
        display: block;
    }


    .pic {
        border-radius: 2vw;
    }
    .overskriftTekst {
        position: absolute; 
        top: -30px;
        left: 0;
        font-size: 20px;
        color: #414042;
    }h3 { /* No extra effects for h3 (kun der for universel utforming) */
        display: inline;
        font-size: 20px;
    }

    .articInfo {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: 1.25vw;
    }.articKat {
        padding-left: 1.5vw;
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
        width: 90%; 
        position: absolute; 
        bottom: 0px;
    }
    .latestNewsHover {
        width: 85%; 
        position: absolute; 
        bottom: 0px;

        fill: #414042;
        opacity: 0;
    }.latestNewsBox-hiddencontent:hover .latestNewsHover {
        opacity: 1;
    }

    .latestNewsTextBox {
        margin: 2%;
        width: 70%;
        height: 22.5%;
        color: white;

        position: absolute;
        bottom: 0;
    }
    .latestNewsOverskrift {
        font-size: 5.5vw;
    }.latestNewsUnderoverskrift {
        opacity: 0;
        font-size: 3vw;
    }
    .latestNewsBox-hiddencontent:hover .latestNewsTextBox {
        height: 35%;
    }.latestNewsBox-hiddencontent:hover .latestNewsUnderoverskrift {
        opacity: 1;
    }.latestNewsBox-hiddencontent:hover .latestNewsOverskrift {
        font-size: 5vw;
    }.latestNewsBox-hiddencontent:hover .articInfo {
        opacity: 0;
    }
</style>