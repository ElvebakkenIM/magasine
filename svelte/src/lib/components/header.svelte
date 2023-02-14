<script>
    import Sok from '$lib/components/sok.svelte';

    // Bilder
    import topBg from '$lib/assets/header/-hjem-hovedbilde.png';
    import hjem from '$lib/assets/header/-hjem-ikon.png';
    import menyBg from '$lib/assets/header/pc-menyBakgrunn.png';
    import bakLogo from '$lib/assets/header/bakLogo.png';

    // Hvilken er man på?
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


<div class="header" style="margin-bottom: 15vw;"> 
    <div class="headImg">
        <img src={topBg} style="height: 100%;" alt="">
    </div>
    <a href="/" style="position: absolute; top: 10px; left: 10px;">
        <img src={hjem} style="width: 5%;" alt="Hjem">
    </a>
    
    <!--* Meny -->
    <img src={menyBg} id="menyBak" class="menyBakgrunn"  alt=""/>
    <a href="/" tabindex="-1">
        <img src={bakLogo} class="menyBakgrunnLogo" alt="Magasin E logo"/> 
        <svg class="menyBakgrunnLogo" style="--onFill:{onFill}" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950.02 301.7">
        <g>
            <path class="cls-1" d="M157.61,255.98l-27.77,.85,13.63-112.59-62.54,107.52-9.54,.42-30.5-106.25-13.8,110.27H0L20.45,89.2l33.57-.63,30.33,105.61,60.83-104.98,33.23,.21-20.79,166.57Z"/>
            <path class="cls-1" d="M253.05,256.19h-24.54l2.39-17.78c-7.84,12.49-18.4,19.89-30.84,19.89-20.45,0-33.74-19.05-33.74-47.62,0-37.67,19.94-68.57,49.76-68.57,10.73,0,19.6,6.35,24.03,17.78l3.07-20.11,25.9,.85-16.02,115.56Zm-35.1-83.6c-14.82,0-23.68,16.72-23.68,34.92,0,13.12,5.62,22.65,16.02,22.65,14.82,0,24.88-17.14,24.88-33.86,0-13.12-5.62-23.7-17.21-23.7Z"/>
            <path class="cls-1" d="M352.05,232.06c-6.3,41.48-20.62,69.63-55.55,69.63-12.61,0-24.37-4.44-33.06-13.33l11.25-26.03c6.3,6.35,15.34,10.16,23.86,10.16,15.85,0,23.17-14.18,26.75-36.19-7.33,9.52-16.02,15.24-27.94,15.24-20.28,0-33.4-19.47-33.4-45.93,0-35.13,19.43-65.19,48.22-65.19,10.39,0,19.43,5.93,24.37,16.3l3.24-19.26,26.41,.85-14.14,93.76Zm-38-62.01c-14.48,0-23,15.87-23,33.02,0,12.7,5.96,21.38,15.68,21.38,13.63,0,24.71-16.51,24.71-32.8,0-11.85-6.13-21.59-17.38-21.59Z"/>
            <path class="cls-1" d="M445.77,256.19h-24.54l2.39-17.78c-7.84,12.49-18.4,19.89-30.84,19.89-20.45,0-33.74-19.05-33.74-47.62,0-37.67,19.94-68.57,49.76-68.57,10.73,0,19.6,6.35,24.03,17.78l3.07-20.11,25.9,.85-16.02,115.56Zm-35.1-83.6c-14.82,0-23.68,16.72-23.68,34.92,0,13.12,5.62,22.65,16.02,22.65,14.82,0,24.88-17.14,24.88-33.86,0-13.12-5.62-23.7-17.21-23.7Z"/>
            <path class="cls-1" d="M519.05,178.52c-5.28-9.31-12.44-13.97-21.47-13.97-6.99,0-10.73,4.87-10.73,11.22,0,17.36,42.09,6.35,42.09,44.23,0,24.55-12.95,39.58-39.36,39.58-15.51,0-28.63-7.83-36.81-22.01l17.38-16.93c5.62,10.58,13.46,15.87,21.81,15.87,7.67,0,12.1-5.29,12.1-12.27,0-16.93-41.24-6.14-41.24-44.45,0-23.92,12.61-40,37.83-40,15.68,0,28.46,8.68,35.95,23.07l-17.55,15.66Z"/>
            <path class="cls-1" d="M558.07,253.86l-27.26,.85,13.29-110.69h27.6l-13.63,109.84Zm1.7-129.32c-8.18,0-13.12-7.2-13.12-16.08,0-12.49,7.67-21.17,17.72-21.17,8.01,0,12.95,6.77,12.95,15.87,0,12.49-7.67,21.38-17.55,21.38Z"/>
            <path class="cls-1" d="M655.2,254.5l-25.9-1.06c4.26-22.86,9.2-51.01,9.2-62.44,0-10.58-4.43-18.41-12.95-18.41-9.2,0-18.57,10.58-25.22,24.55l-7.5,57.36h-26.41l15.85-118.95,25.56-.85-3.75,28.78c8.86-13.97,20.11-21.8,32.89-21.8,19.26,0,29.82,15.66,29.82,40,0,14.18-6.65,49.1-11.59,72.81Z"/>
        </g>
        <g>
            <path class="cls-1" d="M826.45,249.85s100.3-100.3,110.17-106.4c9.87-6.1,14.95,.08,12.97,7.62-4.49,17.09-103.89,108.39-103.89,108.39,0,0-30.91,28.74-41.16,17.5-7.66-8.4-5.83-26.78,5.46-41.63,35.33-46.49,105.79-104.99,114.56-111.28l20.52,13.44c-10.29-1.47-20.61,10.76-20.61,10.76l-100.54,98.05s-2.3,2.16-1.31,3.72c1.36,2.12,3.82-.17,3.82-.17Z"/>
            <path class="cls-1" d="M759.23,0s-88.73,55.38-115.88,85.69c-4.02,4.49-9.52,12.29-9.52,23.01,0,13.95,11.43,23.61,11.43,23.61l152.33,141.37s-6.15-12.35,2.5-30.94c11.46-21.15,68.83-81.57,137.49-133.42L759.23,0Zm-36.39,126.22l-28.74-26.21s-12.54,10.09-13.4,17.47l28.13,24.07s-6.59,12.03-6.39,20.88l-47.62-43.33s-3.47-9.02,5.34-19.51c17.17-20.43,63.09-53.86,63.09-53.86l48.43,42.66-14.43,12.75-32.34-28.58-16.59,14.9,29.15,26.27-14.65,12.5Zm89.74,78.06l-72.08-63.01,4.72-4,73.13,60.75-5.77,6.27Zm14.66-14.33l-73.68-61.2,4.68-4.04,75.05,59.28-6.05,5.96Zm14.75-14.29l-74.13-59.2,4.62-4.08,75.8,57.51-6.29,5.77Zm17.08-12.9l-76.76-58.91,4.62-4.08,79.49,56.92-7.36,6.07ZM749,29.69l11.55-7.87,140.32,90.55-15.69,11.68L749,29.69Z"/>
        </g>
        </svg>
    </a>    
    <!-- Knapper i menyen -->
    <div class="menyInnhold"> 
        <div class="menyLeft">
            <div class="dropdown">
                <a href="/bakka" class="noLink"><div class="menyKnapp" style="--on: {onB}">På Bakka</div></a>  <!-- TODO role: og tabindex: -->
                <a href="/bakka" class="noLink"><div class="dropKnapp menyKnapp underKnapp" style="--on: {onfB}">5 på Bakka</div></a>
            </div>
            
            <a href="/" class="noLink"><div style="--on: {onS}" class="menyKnapp">Samf. og Debatt</div></a>
        
        </div>
        <div class="menyRight">

            <a href="/" class="noLink"><div class="menyKnapp" style="--on: {onK}">Kreativt</div></a>

            <div class="dropdown">
                <a href="/" class="noLink"><div style="--on: {onOm}" class="menyKnapp">Om Oss</div></a>
                <a href="/" class="noLink"><div style="--on: {onKo}" class="dropKnapp menyKnapp underKnapp">Kontakt</div></a>
            </div>
            
            <Sok />

            <div>
                <img src="" class="hamburgerMeny tlf hamMenyE" alt=""/>
                <img src="" class="hamburgerMeny tlf hamMenyX" style="width: 10vw;" alt=""/>
            </div>
        </div>
    </div>
</div>


<style>
    div {
        background-color: var(--on);
    }



    .header {
        width: 100vw;
        height: 250px;
        background-color: white;
        position: relative;
    }
    .headImg {
        display: flex; 
        justify-content: center;
        height: 100%; 
        width: 100vw; 
        overflow: hidden;
    }

    .menyBakgrunn {
        position: absolute; 
        width: 100vw; 
        top: 100%;
    }
    .menyBakgrunnLogo {
        position: absolute; 
        z-index: 1;
        width: 35vw; 
        top: 100%;
        margin-left: 32.5vw;
        transform: translateY(-65%);

        fill: var(--onFill, #4A9CFF);
    }

    .menyInnhold {
        width: 98vw;
        position: absolute;
        top: 250px;
        padding: 1vw;
    }.menyLeft {
        float: left; 
        display: flex; 
        flex-direction: row;
    }.menyRight {
        float: right; 
        display: flex; 
        flex-direction: row;
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
    }.underKnapp {
        font-size: 2vw;
        margin: 0px;
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
