<script>
  import Header from "./components/Header";
  import Preview from "./components/Preview";
  import OfferWeek from "./components/OfferWeek";
  import Menu from "./components/Menu";
</script>

<main>
  <Header />
  <Preview />
  <OfferWeek />
  <Menu />
</main>

<style lang="scss">
  @import "variables.scss";

  main {
    background: $secondaryColor;
  }
</style>
