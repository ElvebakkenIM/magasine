<script>


</script>




<div class="midItem">

    <div class="latestNewsBox pic">
        <div class="overskriftTekst"><h3><b>Siste nytt</b></h3></div>
        <div class="latestNewsBox-hiddencontent pic">

            <svg class="latestNewsOverlag" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420.4 539.4">
                <path style="fill: blue" class="cls-3" d="M1200,539.4H0V267.54s184.48-65.06,433.88-51.95c248.09,13.04,384.19,87.27,384.19,87.27"/>
                <g>
                  <path style="fill: red; opacity: 0.5;" class="cls-2" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H482.07s101.2-193.54,336-236.53Z"/>
                  <path style="fill: red;" class="cls-1" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H655.57s20.48-182.7,162.51-236.53Z"/>
                </g>
            </svg>
            
            <svg class="latestNewsHover" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420.4 539.4">
                <path class="cls-3" d="M1200,539.4H0V267.54s184.48-65.06,433.88-51.95c248.09,13.04,384.19,87.27,384.19,87.27"/>
                <g>
                  <path class="cls-2" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H482.07s101.2-193.54,336-236.53Z"/>
                  <path class="cls-1" d="M818.07,302.87s143.52-31.65,261.59,42.99c104.82,66.27,120.34,193.54,120.34,193.54H655.57s20.48-182.7,162.51-236.53Z"/>
                </g>
            </svg>
            
        <div class="latestNewsTextBox">
                <div class="latestNewsOverskrift">Overskriftstekst</div>
                <div class="latestNewsUnderoverskrift">Underoverskriftstekst hei haei!</div>
                <div class="articInfo">  <!-- Bruker CSS fra "alle artikklene"  -->
                    <div style="float: left; display: flex; flex-direction: row;"><div class="articKat"><img src="hovedBilder/-kategori-ikon.png" alt="Kategori">Kategorier</div><div class="articKat"><img src="hovedBilder/-kategori-ikon.png" alt="Kategori">Kategorier</div></div>
                    <div style="float: right;">1. November 2022</div>
                </div>
            </div>
        </div>
    </div>

</div>

<style>
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
        width: 100%; 
        position: absolute; 
        bottom: 0px;
    }
    .latestNewsHover {
        width: 100%; 
        position: absolute; 
        bottom: 0px;

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