<script>
  import Container from "@components/Container";
  import Carousel from "@components/Carousel";
  import CarouselItem from "./CarouselItem";
  import { carouselItems } from "./data";
</script>

<section class="menu">
  <Container>
    <h2 class="title">Меню</h2>
    <Carousel class="menu-carousel" maxSlidesOnPage={3}>
      {#each carouselItems as item}
        <CarouselItem {...item} />
      {/each}
    </Carousel>
  </Container>
</section>

<style lang="scss">
  @import "variables.scss";

  .menu {
    padding: 50px 0 60px 0;
    background: $mainColor;

    :global(.menu-carousel) {
      margin-top: 56px;
    }
  }

  .title {
    padding-bottom: 16px;
    border-bottom: 1px solid $secondaryColor;
    font-family: $mainFont;
    font-size: 24px;
    font-weight: 400;
    color: $secondaryColor;
  }
</style>
