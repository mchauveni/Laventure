<script>
  import Home from "./lib/Home.svelte";
  import Like from "./lib/Like.svelte";
  import List from "./lib/List.svelte";
  import Map from "./lib/Map.svelte";
  import PlaceComponent from "./lib/PlaceComponent.svelte";
  import Loader from "./lib/Loader.svelte";
  import { fly } from "svelte/transition";
  import { pageState, overlay, mapLoaded } from "./lib/stores";

  import heroimg from "/src/assets/img/hero_index_img.png";
  import logo from "/src/assets/img/logo_type.png";

  let pageStateValue;
  pageState.subscribe((value) => {
    pageStateValue = value;
  });

  let overlayValue;
  overlay.subscribe((value) => {
    overlayValue = value;
  });

  import { onMount } from "svelte";

  let mapLoadedValue;
  mapLoaded.subscribe((value) => {
    mapLoadedValue = value;
  });
</script>

<div
  class="page"
  class:visible={overlayValue === "loader"}
  transition:fly={{ x: -200, duration: 1000 }}
>
  <Loader />
</div>

<div class="page" class:visible={pageStateValue === "index"}>
  <header class="header">
    <section class="header__design">
      <div class="header__design--first" />
      <div class="header__design--second" />
      <div class="header__design--third" />
      <div class="header__design--fourth" />
    </section>
    <section class="header__logo">
      <img
        class="header__logo--img"
        srcset={logo}
        alt="Logo de notre application"
      />
    </section>
  </header>
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
