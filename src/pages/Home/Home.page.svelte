<script>
  import Header from "./components/Header";
  import Preview from "./components/Preview";
  import OfferWeek from "./components/OfferWeek";
  import Menu from "./components/Menu";
  import Benefits from "./components/Benefits";
</script>

<main>
  <Header />
  <Preview />
  <OfferWeek />
  <Menu />
  <Benefits />
</main>

<style lang="scss">
  @import "variables.scss";

  main {
    background: $secondaryColor;
  }
</style>
