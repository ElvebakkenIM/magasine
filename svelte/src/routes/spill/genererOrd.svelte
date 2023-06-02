<script context="module">

    let words = [
        'Elvebakken',
        'Skole',
        'MagasinE',
        'Elevråd',
        'Eksamen'
    ];

    export function getWord(){
        let randomIndex = Math.floor(Math.random() * (words.length-1));
        return words[randomIndex].toUpperCase();
    }
</script>