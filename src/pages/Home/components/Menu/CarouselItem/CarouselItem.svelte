<script>
  export let imageURL;
  export let name;
  export let price;
</script>

<div class="carousel-item">
  <img class="carousel-item__image" src={imageURL} alt={name} />
  <p class="carousel-item__name">{name}</p>
  <p class="carousel-item__price">{price}</p>
</div>

<style lang="scss">
  @import "variables.scss";

  .carousel-item {
    padding: 28px 34px 30px 34px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(255, 249, 216, 0.35);
    background: $secondaryColor;

    &__image {
      width: 185px;
      height: 212px;
      border-radius: 8px;
    }

    &__name,
    &__price {
      font-family: $mainFont;
      line-height: 20px;
      color: $mainColor;
    }

    &__name {
      margin-top: 18px;
      font-size: 15px;
      font-weight: 600;
    }

    &__price {
      margin-top: 16px;
      font-size: 14px;
      font-weight: 400;
    }
  }
</style>
