<script>
  import Home from "./lib/Home.svelte";
  import Like from "./lib/Like.svelte";
  import List from "./lib/List.svelte";
  import Map from "./lib/Map.svelte";
  import Loader from "./lib/Loader.svelte";
  import Focus from "./lib/Focus.svelte";
  import Header from "./lib/Header.svelte";
  import { pageState, overlay, mapLoaded } from "./lib/stores";

  import heroimg from "/src/assets/img/hero_index_img.png";

  let pageStateValue;
  pageState.subscribe((value) => {
    pageStateValue = value;
    history.pushState(history.state, "", pageStateValue);
  });

  let overlayValue;
  overlay.subscribe((value) => {
    overlayValue = value;
  });

  let mapLoadedValue;
  mapLoaded.subscribe((value) => {
    mapLoadedValue = value;
  });
</script>

{#if overlayValue === "focus"}
  <div class="page" class:visible={overlayValue === "focus"}>
    <Focus />
  </div>
{/if}

{#if overlayValue === "loader"}
  <div class="page" class:visible={overlayValue === "loader"}>
    <Loader />
  </div>
{/if}

<div class="page" class:visible={pageStateValue === "index"}>
  <Header />
  <main class="main">
    <section class="main__title">
      <h1>
        La France est belle, <br />
        <span class="main__title--span">
          Découvrez la, avec son histoire !</span
        >
      </h1>
    </section>
    <section class="main__illustration">
      <img
        class="main__illustration--img"
        src={heroimg}
        alt="Illustration du voyage"
      />
    </section>
    <section class="main__btn">
      <a
        href="."
        class="main__btn--btn"
        on:click|preventDefault={() => pageState.set("home")}
      >
        Partir à l'aventure
      </a>
      <a href="." class="main__btn--mtn_legal"> Mentions légales</a>
    </section>
  </main>
</div>

<div class="page" class:visible={pageStateValue === "home"}>
  <Home />
</div>

<div class="page" class:visible={pageStateValue === "map"}>
  <Map />
</div>

<div class="page" class:visible={pageStateValue === "list"}>
  <List />
</div>

<div class="page" class:visible={pageStateValue === "like"}>
  <Like />
</div>
