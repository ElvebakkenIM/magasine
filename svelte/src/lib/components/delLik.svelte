
<script>

    let liked = false;
    function Like() {
        console.log('Like clicked');
        liked = !liked;
    }
</script>

<div>
    <a href="https://nb-no.facebook.com/" target="_blank" rel="noreferrer">
        <svg id="FaceBook" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 989.18 983.11">
            <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" class="cls-1" d="M989.18,494.5C989.13,221.34,767.65-.05,494.5,0,221.34,.05-.05,221.53,0,494.68c.04,243.27,176.99,450.38,417.27,488.42v-345.62h-125.59v-142.98h125.64v-108.96c0-123.95,73.79-192.41,186.8-192.41,37.1,.52,74.1,3.74,110.73,9.66v121.65h-62.39c-61.43,0-80.58,38.13-80.58,77.24v92.82h137.2l-21.98,142.98h-115.22v345.63c240.33-38.1,417.28-245.28,417.31-488.61Z"/>
        </svg>
    </a>
    <a href="https://twitter.com/?lang=nb" target="_blank" rel="noreferrer">
        <svg id="Twitter" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" class="cls-1" d="M897.21,304.77c.63,8.89,.63,17.77,.63,26.66,0,270.94-206.22,583.11-583.11,583.11-111.58,.29-220.87-31.66-314.72-92,16.42,1.81,32.92,2.66,49.44,2.54,92.26,.24,181.91-30.6,254.49-87.56-87.67-1.6-164.65-58.7-191.62-142.14,12.82,2.03,25.78,3.09,38.76,3.17,18.19-.07,36.29-2.43,53.89-7.02-95.67-19.35-164.43-103.48-164.35-201.1v-2.54c28.39,15.84,60.12,24.75,92.6,26.01C42.91,353.69,15.11,233.57,69.76,139.79c104.11,128.15,257.71,206.1,422.61,214.47-3.29-15.44-4.99-31.17-5.08-46.95,.11-113.3,92.04-205.06,205.34-204.95,56.58,.05,110.63,23.47,149.36,64.72,45.9-8.82,89.91-25.55,130.08-49.44-15.28,47.36-47.32,87.52-90.1,112.94,40.7-4.63,80.48-15.32,118.02-31.72-28.06,40.85-62.81,76.68-102.79,105.97v-.05Z"/>
        </svg>
    </a>
    <button on:click={Like}>
        <svg class="{liked ? 'liked' : 'notLiked'}" id="Like" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path id="Icon_awesome-star" data-name="Icon awesome-star" class="cls-1" d="M445.34,55.79l-121.8,246.94L51.04,342.47c-32.63,4.8-55.19,35.15-50.39,67.78,1.91,12.95,8.01,24.92,17.38,34.06l197.16,192.1-46.59,271.34c-5.55,32.47,16.28,63.3,48.75,68.85,12.91,2.21,26.19,.1,37.79-5.99l243.78-128.13,243.78,128.13c29.23,15.25,65.29,3.93,80.54-25.3,6-11.5,8.1-24.65,5.96-37.45l-46.59-271.34,197.12-192.21c23.61-23.03,24.08-60.84,1.04-84.45-9.14-9.37-21.11-15.48-34.06-17.38l-272.5-39.74-121.8-246.94c-14.64-29.56-50.48-41.66-80.04-27.01-11.72,5.8-21.21,15.29-27.01,27.01Z"/>
        </svg>
    </button>
</div>

<style>
    div {
        width: fit-content;
        margin-left: 6vw;
        margin-top: 3vw;

        display: grid;
        grid-template-columns: auto auto auto;
        gap: 1.5vw;
    }

    svg {
        fill: #4A9CFF;
        width: 4vw;
    }

    .liked {
        fill: rgb(255, 213, 0);
    }
    .notLiked {
        fill: #414042;
    }

    button {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 775px) {
        svg {
            width: 8vw;
        }
    }

</style>