<script>
  import Header from "@components/Header";
  import Footer from "@components/Footer";
</script>

<main>
  <Header />
  <slot />
  <Footer />
</main>

<style lang="scss">
  @import "variables.scss";

  main {
    background: $secondaryColor;
  }
</style>
