<div class="dropdown">
    <img class="sokSymbol menyKnapp pc" src="" alt="Søk">
    <div class="sokBox dropKnapp" id="mSok">
        <label for="menySok">Søkefelt</label>
        <input id="menySok" class="sokInp"/> <!-- input-en til søking -->
        <div class="sokKnapp"></div>
    </div>
</div>

<style>
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

    .sokBox {
        position: absolute;
        right: 1vw;

        width: 35vw;
        height: 6vw;
        border-radius: 10px;
        background-color: black;
    }
    .sokInp {
        font-size: 3vw;
        color: #414042;

        position: absolute;
        width: 80%;
        height: 4vw;
        top: 1vw;
        left: 1vw;
        border: none;
        border-radius: 5px;
    }

.sokKnapp {
    background-color: #4A9CFF;
    width: 4vw;
    height: 4vw;
    position: absolute;
    right: 1vw;
    top: 1vw;
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