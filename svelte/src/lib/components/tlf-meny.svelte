


<div class="tlfMenyBox">
    <div class="tlfMenyGrid">
        <a href="/" class="noLink"><div class="tlfMenyItem" id="tlfMenyHjem">
            Hjem
        </div></a>
        <div class="tlfMenyItem">
            <a href="/bakka" id="tlfMenyBakka" class="noLink"><div>På Bakka</div></a>
            <a href="/bakka/5-pa-bakka" id="tlfMenyBakka" class="noLink"><div class="tlfMenyUnderitem">5 på Bakka</div></a>
        </div>
        <a href="/samf-og-debatt" class="noLink"><div class="tlfMenyItem" id="tlfMenySamf">
            Samf. & Debatt
        </div></a>
        <a href="/kreativt" class="noLink"><div class="tlfMenyItem" id="tlfMenyKrea">
            Kreativt
        </div></a>
        <div class="tlfMenyItem">
            <a href="/om" id="tlfMenyOm" class="noLink"><div>Om Oss</div></a>
            <a href="/om" id="tlfMenyOm" class="noLink"><div class="tlfMenyUnderitem">Kontakt</div></a>
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

    .noLink {
        text-decoration: none;
    }
</style>