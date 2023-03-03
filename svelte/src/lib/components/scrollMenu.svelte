<script>
    import Sok from "./sok.svelte";



    export let cat = 'hjem';
    console.log(cat);

    let onFill = '#4A9CFF;';

    let onB = '#414042';
    let onfB = '#414042';
    let onS = '#414042';
    let onK = '#414042';
    let onOm = '#414042';
    let onKo = '#414042';
    switch(cat) {
    case 'bakka':
        onB = '#FF3333';
        onFill = '#FF3333';
        break;
    case 'fem':
        onfB = '#FF3333';
        onFill = '#FF3333';
        break;
    case 'samf':
        onS = '#2E9DE8';
        onFill = '#2E9DE8';
        break;
    case 'krea':
        onK = '#FFA727;';
        onFill = '#FFA727';
        break;

    case 'om':
        onOm = '#4A9CFF;';
        onFill = '#4A9CFF';
        break;
    case 'kont':
        onKo = '#4A9CFF;';
        onFill = '#4A9CFF';
        break;
    default:
        break;
    }
</script>





<div id="skrollMeny" class="usynlig">
    <a href="index.html" tabindex="-1">
        <img src="hovedBilder/pc/pc-menyLogoBakkabla.png" class="skrollMenyLogo pc" alt="Magasin E logo"/>
        <img src="hovedBilder/mobil/tlf-logoBakkaBla.png" class="skrollMenyLogo tlf" alt="Magasin E logo"/>
    </a>

    <div class="menyRight" style="padding-top: 15px;"> 


        <div class="dropdown">
            <a href="/bakka" class="noLink"><div class="menyKnapp skrollMenyKnappSize" style="--on: {onB}">På Bakka</div></a>  <!-- TODO role: og tabindex: -->
            <a href="/bakka" class="noLink"><div class="dropKnapp menyKnapp skrollUnderKnapp" style="--on: {onfB}">5 på Bakka</div></a>
        </div>
        
        <a href="/" class="noLink"><div style="--on: {onS}" class="menyKnapp skrollMenyKnappSize">Samf. og Debatt</div></a>
        
        <a href="/" class="noLink"><div class="menyKnapp skrollMenyKnappSize" style="--on: {onK}">Kreativt</div></a>

        <div class="dropdown">
            <a href="/om" class="noLink"><div style="--on: {onOm}" class="menyKnapp skrollMenyKnappSize">Om Oss</div></a>
            <a href="/om" class="noLink"><div style="--on: {onKo}" class="dropKnapp menyKnapp skrollUnderKnapp">Kontakt</div></a>
        </div>

        <Sok/>

        <div>
            <img src="" class="hamburgerMeny tlf hamMenyE" alt=""/>
            <img src="" class="hamburgerMeny tlf hamMenyX" style="width: 10vw;" alt=""/>
        </div>

    </div>
</div>



<style>
    div {
        background-color: var(--on);
    }


    .menyRight {
        float: right; 
        display: flex; 
        flex-direction: row;
    }


    #skrollMeny {
        width: 100%; 
        height: 75px; 
        padding: 0; 
        background-color: #414042; 
        position: fixed; 
        z-index: 2;
    }.skrollMenyLogo {
        height: 80%; 
        width: auto; 
        top: 10px; 
        padding-left: 25px;
        position: absolute;
    }


    .skrollMenyKnappSize {
        font-size: 25px;
    }.skrollUnderKnapp {
        background-color: #414042;
        font-size: 20px;
        margin: 0px;
    }

    .menyKnapp {
        border-radius: 10px;
        padding: 7px;
        margin-right: 1vw;
        width: fit-content;
        height: fit-content;
        color: white;
        cursor: pointer;

        font-size: 2.5vw;
    }.menyKnapp:hover {
        background-color: black;
    }

    .noLink {
        text-decoration: none;
        color: black;
    }


    .dropdown {
        background-color: none;
        width: fit-content;
    }.dropdown:hover .dropKnapp {
        display: block;
    }.dropKnapp {
        display: none;
    }
</style>



