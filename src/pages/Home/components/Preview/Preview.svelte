<script>
  import Container from "@components/Container";
  import Button, { TYPE_TRANSPARENT_BG } from "@components/Button";
  import { refsStore } from "@stores/refsStore";
  import Chevron from "@components/icons/Chevron.svelte";

  function handleScrollToMenu() {
    const menuRef = refsStore.getRefByName("menu");

    menuRef.scrollIntoView({ behavior: "smooth" });
  }
</script>

<section class="preview">
  <Container>
    <div class="titles-wrapper">
      <h1 class="title">горячий кофе -</h1>
      <h4 class="sub-title">всегда самый вкусный</h4>
    </div>
    <Button class="order-button">Заказать</Button>
    <Button
      class="button-chevron"
      type={TYPE_TRANSPARENT_BG}
      onClick={handleScrollToMenu}><Chevron /></Button
    >
  </Container>
</section>

<style lang="scss">
  @import "variables.scss";

  .preview {
    padding: 75px 0 100px 0;
    background: right top no-repeat url("/images/coffee-beans.png");

    :global(.order-button) {
      max-width: 322px;
      margin-top: 80px;
    }

    :global(.button-chevron) {
      max-width: 61px;
      margin: 168px auto 0 auto;
    }
  }

  .title,
  .sub-title {
    font-family: $mainFont;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: $mainColor;
  }

  .title {
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
  }

  .sub-title {
    margin-top: 5px;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
  }
</style>
