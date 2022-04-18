<script>
  import { TYPE_STANDARD } from "./constants";

  export let type = TYPE_STANDARD;
</script>

<button
  class="button {$$props.class ?? ''} {type === TYPE_STANDARD
    ? 'button_standard'
    : 'button_transparent-bg'}"
>
  <slot />
</button>

<style lang="scss">
  @import "variables.scss";

  .button {
    display: block;
    width: 100%;
    font-family: $mainFont;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    color: $secondaryColor;
    transition: all 0.22s;

    &_standard {
      padding: 24px 12px;
      box-sizing: border-box;
      border-radius: 8px;
      background-color: $mainColorDarken;

      &:hover {
        background-color: lighten($mainColorDarken, 5);
      }
    }

    &_transparent-bg {
      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
