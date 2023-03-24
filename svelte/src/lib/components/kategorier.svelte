<script>
    import b_overbilde from '$lib/assets/categories/-katBakkaBildeoverlag.png';
    import b_overbilde_hover from '$lib/assets/categories/-katBakkaBildeoverlag-hover.png';

    import k_overbilde from '$lib/assets/categories/-katKreativtBildeoverlag.png';
    import k_overbilde_hover from '$lib/assets/categories/-katKreativtBildeoverlag-hover.png';

    import s_overbilde from '$lib/assets/categories/-katSamfBildeoverlag.png';
    import s_overbilde_hover from '$lib/assets/categories/-katSamfBildeoverlag-hover.png';

    import hoyrePil from '$lib/assets/categories/tlf-katPilHoyre-open.png';
    import venstrePil from '$lib/assets/categories/tlf-katPilVenstre-open.png';

    let on = 0; // 0-Bakka, 1-Samf, 2-Krea
    let leftPos = 0;
    function katRight() {
        if (on != 2) { // Ikke på Krea
            on ++;
            leftPos -= 55;
        } else {
            on = 0;
            leftPos += (55*2);
        }
    }
    function katLeft() {
        if (on != 0) { // Ikke på Krea
            on --;
            leftPos += 55;
        } else {
            on = 2;
            leftPos -= (55*2);
        }
    }


    let innerWidth = 0;
</script>


<div class="midItem">
    <div class="katSection">
        <button class="katButton" id="leftArrowBox" on:click={katLeft}>
            {#if on == 0}
            <img src={hoyrePil} id="leftArrowImgBack" alt="Forrige kategori i bildekarusellen"/>
            {:else}
            <img src={venstrePil} id="leftArrowImg" alt="Forrige kategori i bildekarusellen"/>
            {/if}
        </button>
        <button class="katButton" id="rightArrowBox" on:click={katRight}>
            {#if on == 2}
            <img src={venstrePil} id="rightArrowImgBack" alt="Neste kategori i bildekarusellen"/>
            {:else}
            <img src={hoyrePil} id="rightArrowImg"  alt="Neste kategori i bildekarusellen"/>
            {/if}
        </button>

        <div class="overskriftTekst" style="font-size: {innerWidth <= 775 ? '12.5' : '20'}px;"><h3><b>Kategorier</b></h3></div>
        <div class="slideshowCont">
            <div class="gridContKat" style="left: {leftPos}vw"> <!-- Beveges av pilene i mobilverson -->
                <a href="/bakka"><div class="GridItemKat"><div class="katBox pic" id="{on == 0 ? 'onKat' : ''}">
                    <!-- <img class="katBilde" src="hovedBilder/-katBakkaBilde.png" alt=""> -->
                    <img class="bakkaBilde katBilde" src={b_overbilde} alt="">
                    <img class="bakkaBildeHover katBilde" src={b_overbilde_hover} alt="">
                    <h1 class="katText katTextBakka">På Bakka</h1>
                </div></div></a>

                <a href="/samf-og-debatt"><div class="GridItemKat"><div class="katBox pic" id="{on == 1 ? 'onKat' : ''}">
                    <img class="samfBilde katBilde" src={s_overbilde} alt="">
                    <img class="samfBildeHover katBilde" src={s_overbilde_hover} alt="">
                    <h1 class="katText katTextSamf">Samf. & Debatt</h1>
                </div></div></a>

                <a href="/kreativt"><div class="GridItemKat"><div class="katBox pic" id="{on == 2 ? 'onKat' : ''}">
                    <img class="kreativtBilde katBilde" src={k_overbilde} alt="">
                    <img class="kreativtBildeHover katBilde" src={k_overbilde_hover} alt="">
                    <h1 class="katText katTextKreativt">Kreativt</h1>
                </div></div></a>
            </div>
        </div>

        <div class="fade"></div>
    </div>

</div>

<svelte:window bind:innerWidth/>


<style>
    .pic {
        border-radius: 2vw;
    } 
    .overskriftTekst {
        position: absolute; 
        top: -30px;
        left: 0;
        color: #414042;
    }h3 { /* No extra effects for h3 (kun der for universel utforming) */
        display: inline;
    }  



    .katSection {
        margin-top: 17vw;
        width: 100%; 
        display: flex; 
        justify-content: center; 
        flex-wrap: wrap;
        position: relative;
    }
    .slideshowCont {
        width: 100%;
        height: auto;
    }

    .katButton {
        display: none;
    }

    #onKat {
        z-index: 1;
    }




    .gridContKat {
        display: grid;
        grid-template-columns: auto auto auto;
        width: 100%;
        height: 24vw;
        position: relative;
    }
    
    .katBox {
        background-color: #414042;
        width: 24vw;
        height: 24vw;
        overflow: hidden;
        position: relative;
        color: white;
        cursor: pointer;
    }


    /* Bildene til kategoriene */
    .katBilde {
        position: absolute;
        bottom: 0;
        width: 100%;
    }.katText {
        font-size: 2.5vw;
        position: absolute;
        text-align: left;
        padding: 20px;
        width: 100%;
        bottom: 10px;
    }
    .bakkaBildeHover {
        opacity: 0;
    }.katBox:hover .bakkaBilde {
        opacity: 0;
    }.katBox:hover .bakkaBildeHover {
        opacity: 1;
    }.katBox:hover .katTextBakka {
        left: 0px;
        width: 100%;
        bottom: 40px;
        padding: 0;
        text-align: center;
    }
    .samfBildeHover {
        opacity: 0;
    }.katBox:hover .samfBilde {
        opacity: 0;
    }.katBox:hover .samfBildeHover {
        opacity: 1;
    }.katBox:hover .katTextSamf {
        left: 0px;
        width: 100%;
        bottom: 40px;
        padding: 0;
        text-align: center;
    }
    .kreativtBildeHover {
        opacity: 0;
    }.katBox:hover .kreativtBilde {
        opacity: 0;
    }.katBox:hover .kreativtBildeHover {
        opacity: 1;
    }.katBox:hover .katTextKreativt {
        left: 0px;
        width: 100%;
        bottom: 40px;
        padding: 0;
        text-align: center;
    }




    @media only screen and (max-width: 775px) {

        .fade {
            position: absolute;
            width: 100vw;
            height: 100%;
            background: linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255,255,255,1) 10%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 75%, rgba(255,255,255,1) 90%, rgb(255, 255, 255) 100%);
        }

        .slideshowCont {
            width: 50vw;
            height: 50vw;
        }

        .katButton {
            display: block;
            width: 7vw;
            height: 25%;
            background-color: rgb(0,0,0,0);
            top: 37.5%;
            border: none;
            position: absolute;
            z-index: 1;
        }

        #leftArrowBox {
            left: 3vw;
        }#rightArrowBox {
            right: 3vw;
        }

        .katButton img {
            width: 4.5vw;
            cursor: pointer;
        }





        .gridContKat {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 5vw;
            width: 100%;
            height: 100%;
        }
        .katBox {
            width: 50vw;
            height: 50vw;
        }.katText {
            font-size: 4vw;
        }



    }
</style>