<script>
  import Home from "@pages/Home";
</script>

<main>
  <Home />
</main>

<style lang="scss">
  :global(body, ul) {
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
</style>
