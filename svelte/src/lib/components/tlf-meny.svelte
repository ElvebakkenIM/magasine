


<div class="tlfMenyBox">
    <div class="tlfMenyGrid">
        <div class="tlfMenyItem" id="tlfMenyHjem" onclick="location.href='index.html';">
            Hjem
        </div>
        <div class="tlfMenyItem" id="tlfMenyBakka">
            <div onclick="location.href='bakka/pa-bakka.html';">På Bakka</div>
            <div class="tlfMenyUnderitem" onclick="location.href='bakka/fem-pa-bakka/katFemBakka.html';">5 på Bakka</div>
        </div>
        <div class="tlfMenyItem" id="tlfMenySamf" onclick="location.href='samfunn/katSamf.html';">
            Samf. & Debatt
        </div>
        <div class="tlfMenyItem" id="tlfMenyKrea" onclick="location.href='kreativt/katKreativt.html';">
            Kreativt
        </div>
        <div class="tlfMenyItem" id="tlfMenyOm">
            <div onclick="location.href='om/om.html';">Om Oss</div>
            <div class="tlfMenyUnderitem" onclick="location.href='om/kont.html';">Kontakt</div>
        </div>
    </div>
</div>

<style>
    .tlfMenyBox {
        margin-left: 20vw;
        margin-bottom: 100px;
        bottom: 0px;
        position: absolute;

        width: 60vw;
        height: 75vw;
        background-color: #414042;
        border-radius: 3vw;
        
    }
    .tlfMenyGrid {
        width: 90%;
        height: 90%;
        margin: 3vw;

        font-size: 5.5vw;

        display: grid;
        grid-template-columns: auto;
        grid-row-gap: 1.5vw;
        
    } .tlfMenyItem {
        width: 84%;
        height: 55%;
        padding: 3%;
        padding-left: 7vw;

        background-color: white;
        border-radius: 1vw;
        position: relative;
        cursor: pointer;

    }.tlfMenyUnderitem {
        position: absolute;
        left: 30vw;
        top: 5vw;
        padding: 1vw;
        z-index: 3;

        font-size: smaller;
        border-radius: 1vw;
        background-color: white;
        box-shadow: 0 0 0 1vw #41404230;
        cursor: pointer;
    }

    #tlfMenyHjem {
        color: #414042;
    }
    #tlfMenyBakka {
        color: #FF3333;
        margin-bottom: 3vw;
    }
    #tlfMenySamf {
        color: #2E9DE8;
    }
    #tlfMenyKrea {
        color: #FFA727;
    }
    #tlfMenyOm {
        color: #414042;
    }
</style>