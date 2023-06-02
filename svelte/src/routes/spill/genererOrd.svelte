<script context="module">

    let words = [
        'Elvebakken',
        'Skole',
        'MagasinE',
        'Elevråd',
        'Eksamen',
        'Lekser',
        'Bibiliotek',
        'Oppgaver'
    ];

    export function getWord(){
        let randomIndex = Math.floor(Math.random() * (words.length));
        return words[randomIndex].toUpperCase();
    }
</script>