<script>
  import Logo from "@components/Logo";
  import NavBar from "@components/NavBar";
  import CardIcon from "@components/icons/Card.svelte";
  import Container from "@components/Container";
</script>

<header class="header">
  <Container className="container">
    <Logo />
    <div class="flex navbar-container">
      <NavBar />
      <button class="flex card-button">
        <CardIcon />
      </button>
    </div>
  </Container>
</header>

<style lang="scss">
  @import "variables.scss";

  .header {
    padding: 48px 0;
    background-color: $secondaryColor;

    & > :global(.container) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .flex {
      align-items: center;
    }

    .navbar-container {
      grid-gap: 36px;
    }

    .card-button {
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }
  }
</style>
