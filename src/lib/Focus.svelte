<script lang="ts">
  import { focusData, overlay } from "./stores";
  import { swipe } from "svelte-gestures";
  import { fly } from "svelte/transition";

  let place;
  focusData.subscribe((value) => {
    place = value;
  });

  let direction;
  function onSwipe(event) {
    direction = event.detail.direction;
    if (direction == "bottom") {
      overlay.set("none");
    }
  }
</script>

<main
  class="focus"
  use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: "" }}
  on:swipe={onSwipe}
  transition:fly={{ y: 800, duration: 600 }}
>
  <div
    class="focus__image"
    style="background-image: url({place.imgSrc});"
    transition:fly={{ y: 500, duration: 600 }}
  />
  <article class="focus__wrapper">
    <header class="focus__header">
      <div class="focus__headerContainer">
        <h1 class="focus__title">{place.name}</h1>
        <img src="/src/assets/img/icons/like_active.svg" alt="like icon" />
      </div>
      <div class="focus__headerContainer">
        <div class="focus__location focus__iconWrapper">
          <img
            src="/src/assets/img/icons/location_icon.svg"
            alt=""
            class="focus__icon"
          />
          <span>{place.namePlace}</span>
        </div>
        <div class="focus__distance focus__iconWrapper">
          <img
            src="/src/assets/img/icons/distance.svg"
            alt=""
            class="focus__icon"
          />
          <span>Y aller</span>
        </div>
      </div>
    </header>
    <section class="focus__descriptionWrapper">
      <h2 class="focus__descriptionTitle">Description</h2>
      <p class="focus__description">{place.description}</p>
    </section>
  </article>
</main>
