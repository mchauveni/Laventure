<script>
  import Footer from "./lib/Footer.svelte";
  import Home from "./lib/Home.svelte";
  import Like from "./lib/Like.svelte";
  import List from "./lib/List.svelte";
  import Map from "./lib/Map.svelte";
  import PlaceComponent from "./lib/PlaceComponent.svelte";

  import { pageState } from "./lib/stores";

  let pageStateValue;

  pageState.subscribe(value => {
		pageStateValue = value;
	});
</script>

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
        srcset="./src/assets/img/Logo_type.png 400w"
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
        srcset="
          ./src/assets/img/original-c48f63577ee2eb3dd211ce7065d80b72-removebg-preview.png 400w
        "
        alt="Illustration du voyage"
      />
    </section>
    <section class="main__btn">
      <a href="/src/pages/home.html" class="main__btn--btn">
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
