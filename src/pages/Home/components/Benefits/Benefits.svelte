<script>
  import Container from "@components/Container";
  import CoffeeCup from "@components/icons/CoffeeCup.svelte";
  import CoffeeBean from "@components/icons/CoffeeBean.svelte";
  import Barista from "@components/icons/Barista.svelte";

  const embeds = {
    coffeeCup: CoffeeCup,
    coffeeBean: CoffeeBean,
    barista: Barista,
  };

  const benefits = [
    {
      title: "можно взять с собой",
      component: "coffeeCup",
    },
    {
      title: "кофе на любой вкус",
      component: "coffeeBean",
    },
    {
      title: "профессиональный бариста",
      component: "barista",
    },
  ];
</script>

<section class="benefits">
  <Container>
    <h2 class="benefits__title">любовь и польза в каждом глотке</h2>
    <ul class="benefits__list flex">
      {#each benefits as { title, component }}
        <li class="benefits__item benefit">
          <div class="benefit__icon flex">
            <svelte:component this={embeds[component]} />
          </div>
          <p class="benefit__title">{title}</p>
        </li>
      {/each}
    </ul>
  </Container>
</section>

<style lang="scss">
  @import "variables.scss";

  .benefits {
    padding: 114px 0 104px 0;

    &__title {
      font-family: $mainFont;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      color: $mainColor;
      text-transform: uppercase;
    }

    &__list {
      justify-content: center;
      grid-gap: 125px;
      margin-top: 100px;
    }
  }

  .benefit {
    &__icon {
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 160px;
      box-shadow: 0px 0px 10px rgba(98, 69, 48, 0.6);
    }

    &__title {
      max-width: 140px;
      margin: 20px auto 0 auto;
      text-align: center;
      font-family: $mainFont;
      font-size: 13px;
      font-weight: 300;
      color: $black;
      text-transform: uppercase;
    }
  }
</style>
