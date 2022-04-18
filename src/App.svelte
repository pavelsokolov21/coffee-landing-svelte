<script>
  import Home from "@pages/Home";
</script>

<main>
  <Home />
</main>

<style lang="scss">
  :global(body, ul, h1, h2, h3, h4, h5, h6, p) {
    margin: 0;
    padding: 0;
  }

  :global(ul, li) {
    list-style-type: none;
  }

  :global(button) {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }

  :global(.flex) {
    display: flex;
  }

  :global(.grid) {
    display: grid;
  }
</style>
