<script>
  import Container from "@components/Container";
  import Carousel from "@components/Carousel";
  import CarouselItem from "./CarouselItem";

  const prefixImageURL = "/images/menu/";

  const carouselItems = [
    {
      imageURL: `${prefixImageURL}espresso.png`,
      name: "Эспрессо",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}latte-macchiato.png`,
      name: "Латте макиато",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}latte.png`,
      name: "Латте",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}espresso.png`,
      name: "Эспрессо-2",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}latte-macchiato.png`,
      name: "Латте макиато-2",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}latte.png`,
      name: "Латте-2",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}espresso.png`,
      name: "Эспрессо-3",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}latte-macchiato.png`,
      name: "Латте макиато-3",
      price: "от 110 Р",
    },
    {
      imageURL: `${prefixImageURL}latte.png`,
      name: "Латте-3",
      price: "от 110 Р",
    },
  ];
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
