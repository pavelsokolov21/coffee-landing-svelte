<script>
  let items = ["Главная", "О нас", "Заказать", "Отзывы", "Продукция"];
</script>

<nav class="nav">
  <ul class="nav__items">
    {#each items as item}
      <li class="nav__item">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">{item}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import "variables.scss";

  .nav__items {
    display: flex;
    grid-gap: 60px;
  }

  .nav__item > a {
    font-family: $mainFont;
    font-weight: 300;
    font-size: 16px;
    color: $mainColor;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: lighten($mainColor, 20);
    }
  }
</style>
