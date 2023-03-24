<script>
    import catIcon from '$lib/assets/artikkles/-kategori-ikon.png';
    import placeholder from '$lib/assets/artikkles/placeholder.png';

    export let builder;
    function urlFor(source) {
        return builder.image(source);
    }

    export let artikkle;
    let ov = artikkle.title;
    let uov = artikkle.subtitle;
    let cats = artikkle.categories;
    let date = artikkle.publishedAt;


    
    let cattexts = [];
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


<a href="/bakka/#/{artikkle.slug.current}">
    <div class="gridItemArtic pic">
        <div class="articBox pic" style="height: 50vw;">
    
            <svg class="articImg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 391.43">
                <path style="fill: {color1};" d="M1200,391.43H0V118.96S196.07,52.7,442.58,67.81c260.91,16,427.91,110.45,427.91,110.45"/>
                <g>
                  <path style="fill: {color2}; opacity: 0.5;" d="M870.49,178.27c90.42-24.68,167.29-15.04,186-11.33,68.24,13.53,117.12,43.5,143.51,62.49v162H465.45c105.55-94.93,221-162.93,405.04-213.16Z"/>
                  <path style="fill: {color2};" d="M870.49,178.27c89.13-29.02,167.29-15.04,186-11.33,68.24,13.53,117.12,43.5,143.51,62.49v162h-500.35s25.35-69.99,69.46-129c44.49-59.51,101.38-84.16,101.38-84.16Z"/>
                </g>
            </svg>
        
            <div class="articTextBox">
                <div class="arcticOverskrift">{ov}</div>
                <div class="arcticUnderoverskrift">{uov}</div>
                <div class="articInfo">
                    <div style="float: left; display: flex; flex-direction: row;">
                        {#each cattexts as cat}
                        <div class="articKat"><img src={catIcon} alt="Kategori">{cat}</div>
                        {/each}
                    </div>
                    <div style="float: right;">{date}</div>
                </div>
            </div>
        
        
            {#if artikkle.hasOwnProperty('mainImage')}
            <img style="width: 100%" src={urlFor(artikkle.mainImage.asset._ref).url()} alt=""/>
            {:else}
            <img style="width: 100%" src={placeholder} alt=""/>
            {/if}
            <!-- TODO Dette er bildet, OBS: Lag artikkelene til bildestørrelse -->
        </div>
    </div>
</a>
    
    <style>
        .articImg {
            width: 140%; 
            left: -30%;
            position: absolute; 
            bottom: 0px;
        }
    
        .pic {
            border-radius: 2vw;
        }
    
        .gridItemArtic {
            margin-top: 0;
            margin-bottom: 0;
            display: flex;
            justify-content: center;
        }
        .articBox {
            background-color: lightblue;
            width: 100%;   /* 35.65vw */
            overflow: hidden;
            position: relative;
            cursor: pointer;
        }
    
    
        .articTextBox {
            margin: 2%;
            width: 96%;
            height: 35%;
            color: white;
    
            position: absolute;
            bottom: 0;
        }
        .arcticOverskrift {
            font-size: 5vw;
        }.arcticUnderoverskrift {
            opacity: 1;
            font-size: 3.5vw;
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
            width: 2.5vw;
            opacity: .25;
            position: absolute;
            left: .25vw;
        }
    

    </style>