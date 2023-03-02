<style>
  :global(body) {
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  :global(.midItem) {
    width: 80vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10vw;
    margin-right: 10vw;
  }


  :global(.pc) {
    display: block;
  }
  :global(.tlf) {
    display: none;
  }
  @media only screen and (max-width: 775px) {
    :global(.pc) {
        display: none;
    }
    :global(.tlf) {
        display: block;
    }
  }
</style>

<slot />