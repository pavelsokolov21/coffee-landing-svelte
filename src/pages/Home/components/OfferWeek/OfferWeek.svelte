<script>
  import Container from "@components/Container";
  const imagesUrlPrefix = "/images/offers-week/";

  const imageURLs = [
    `${imagesUrlPrefix}offer-week-1.png`,
    `${imagesUrlPrefix}offer-week-2.png`,
    `${imagesUrlPrefix}offer-week-3.png`,
  ];
</script>

<section class="offer-week">
  <Container>
    <h2 class="title">Предложение недели</h2>
    <ul class="images">
      {#each imageURLs as imageURL, index}
        <li class="image">
          <img src={imageURL} alt={`Offer of week number ${index + 1}`} />
        </li>
      {/each}
    </ul>
  </Container>
</section>

<style lang="scss">
  @import "variables.scss";

  .offer-week {
    padding-bottom: 86px;
  }

  .title {
    font-family: $mainFont;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: $mainColor;
  }

  .images {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
  }

  .image {
    & > img {
      width: 100%;
      height: 100%;
      max-width: 350px;
      max-height: 216px;
      border-radius: 10px;
    }
  }
</style>
