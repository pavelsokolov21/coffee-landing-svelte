<script>
  import Logo, { TYPE_WHITE } from "@components/Logo";
  import Container from "@components/Container";
  import Button, { TYPE_TRANSPARENT_BG } from "@components/Button";

  const links = [
    {
      title: "Главная",
      href: "#",
    },
    {
      title: "О Нас",
      href: "#",
    },
    {
      title: "Меню",
      href: "#",
    },
    {
      title: "Доставка",
      href: "#",
    },
    {
      title: "Контакты",
      href: "#",
    },
    {
      title: "Кофейни",
      href: "#",
    },
    {
      title: "Новинки",
      href: "#",
    },
    {
      title: "Кофе",
      href: "#",
    },
    {
      title: "Десерты",
      href: "#",
    },
    {
      title: "Строп",
      href: "#",
    },
  ];
</script>

<footer class="footer">
  <Container class="footer__container flex">
    <Logo type={TYPE_WHITE} />
    <ul class="links grid">
      {#each links as { title, href }}
        <li class="links__item">
          <a class="link" {href}>{title}</a>
        </li>
      {/each}
    </ul>
    <div class="footer__contacts flex">
      <Button class="order-button" type={TYPE_TRANSPARENT_BG}>Заказать</Button>
      <a class="link" href="tel:+7(123)456-67-89">8(123)456-67-89</a>
      <a class="link" href="mailto: katyusha.karachinskaya@yandex.ru">
        katyusha.karachinskaya@yandex.ru</a
      >
    </div>
  </Container>
</footer>

<style lang="scss">
  @import "variables.scss";

  .footer {
    padding: 80px 0 100px 0;
    background: $mainColor;

    :global(&__container) {
      justify-content: space-between;
    }

    .links {
      grid-template-rows: repeat(6, 1fr);
      grid-auto-flow: column;
      grid-row-gap: 34px;
      grid-column-gap: 112px;
    }

    .link {
      font-family: $mainFont;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      color: $secondaryColor;
      transition: color 0.22s;

      &:hover {
        color: darken($secondaryColor, 7);
      }
    }

    &__contacts {
      flex-direction: column;
      align-items: flex-end;
      grid-row-gap: 28px;

      .link {
        font-weight: 300;
      }
    }

    :global(.order-button) {
      padding: 18px 66px;
      border: 1px solid $secondaryColor;
      border-radius: 10px;

      &:hover {
        border-color: darken($secondaryColor, 7);
        color: darken($secondaryColor, 7);
      }
    }
  }
</style>
