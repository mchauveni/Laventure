<script lang="ts">
  import { focusData, overlay } from "./stores";
  import { swipe } from "svelte-gestures";
  import localisationIcon from "/src/assets/img/icons/location_icon.svg";
  import unlikedimg from "/src/assets/img/icons/like_active.svg";
  import likedimg from "/src/assets/img/icons/like_fill.svg";
  import closeIcon from "/src/assets/img/icons/close.svg";
  import distanceImg from "/src/assets/img/icons/distance.svg";
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

  function liked(){
    const likedPlaces = JSON.parse(localStorage.getItem('places')) || []; 
    const index = likedPlaces.indexOf(place.id);
    const icon = document.getElementById('like');
    if (index === -1) {
      likedPlaces.push(place.id);
      icon.src = {likedimg};
    } else {
      likedPlaces.splice(index, 1);
      icon.src = {unlikedimg};
    }
    localStorage.setItem('places', JSON.stringify(likedPlaces));
  }

</script>

<main
  class="focus"
  use:swipe={{ timeframe: 500, minSwipeDistance: 100 }}
  on:swipe={onSwipe}
  transition:fly={{ y: 800, duration: 600 }}
>
  <div
    class="focus__image"
    style="background-image: url({place.imgSrc});"
    transition:fly={{ y: 500, duration: 600 }}
  >
    <img
      src={closeIcon}
      alt="Fermer"
      class="focus__close"
      on:click|preventDefault={() => overlay.set("none")}
      on:keydown={() => overlay.set("none")}
    />
  </div>
  <article class="focus__wrapper">
    <header class="focus__header">
      <div class="focus__headerContainer">
        <h1 class="focus__title">{place.name}</h1>
        <img id="like" src={unlikedimg} alt="like icon" on:click={liked} on:keydown={liked} />
      </div>
      <div class="focus__headerContainer">
        <div class="focus__location focus__iconWrapper">
          <img
            src={localisationIcon}
            alt=""
            class="focus__icon"
          />
          <span>{place.namePlace}</span>
        </div>
        <div class="focus__distance focus__iconWrapper">
          <img
            src= {distanceImg}
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
