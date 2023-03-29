<script lang="ts">
  import { focusData } from "./stores";
  let place;

  focusData.subscribe((value) => {
    place = value;
  });
</script>

<main class="focus">
  <article class="focus__wrapper">
    <div class="focus__image" />
    <header class="focus__header">
      <div class="focus__headerContainer">
        <h1 class="focus__title">{place.name}</h1>
        <img src="/src/assets/img/like_active.svg" alt="like icon" />
      </div>
      <div class="focus__headerContainer">
        <div class="focus__location">
          <img src="" alt="" />
          <span>{place.namePlace}</span>
        </div>
        <div class="focus__distance">
          <img src="" alt="" />
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
