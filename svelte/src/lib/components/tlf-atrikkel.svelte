<script>
    import catIcon from '$lib/assets/artikkles/-kategori-ikon.png';
    import placeholder from '$lib/assets/artikkles/placeholder.png';

    export let builder;
    function urlFor(source) {
        return builder.image(source);
    }

    export let artikkle;
    let ov = artikkle.title;
    let uov = 'Hah hahahahah ahahha ha hiuhuhhahah haha ah hahahahah ahahha ha';
    let cats = artikkle.categories;
    let date = artikkle.publishedAt;

    let cattexts = [];
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

</script>


<a href="/bakka/#/{artikkle.slug.current}">
    <div class="gridItemArtic pic"><div class="articBox pic">
    
        <svg class="articImg" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 391.43">
            <path style="fill: #414042;" d="M1200,177.58v213.85H0V65.57S123.32,0,334.01,0s365.64,93.31,365.64,93.31c0,0,122.82-61.88,296.53-27.73,164.04,32.25,203.82,112.01,203.82,112.01Z"/>
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
        <!--TODO Dette er bildet, OBS: Lag artikkelene til bildestørrelse -->
    </div></div></a>
    
    <style>
        .articImg {
            width: 100%; 
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
            height: 25vw;
            overflow: hidden;
            position: relative;
            cursor: pointer;
        }
    
    
        .articTextBox {
            margin: 2%;
            width: 96%;
            height: 25%;
            color: white;
    
            position: absolute;
            bottom: 0;
        }
        .arcticOverskrift {
            font-size: 4vw;
        }.arcticUnderoverskrift {
            opacity: 0;
            font-size: 2vw;
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
    
    
        .articBox:hover .articInfo {
            opacity: 0;
        }.articBox:hover .articTextBox {
            height: 35%;
        }.articBox:hover .arcticOverskrift {
            font-size: 3vw;
        }.articBox:hover .arcticUnderoverskrift {
            opacity: 1;
        }
    

    </style>