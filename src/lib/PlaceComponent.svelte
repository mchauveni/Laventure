<script>
  import data from "./../scripts/place.json";
  import { overlay, focusData } from "./stores";
  let allplaces = data.places;

  export let showDeleteBtn = false;

  function placeClick(place) {
    overlay.set("focus");
    focusData.set(place);
  }

  let place;
  focusData.subscribe((value) => {
    place = value;
  });

  function deleted() {
    console.log(place)
  }

</script>

{#each allplaces as place}
  <button
    class="placeComponent placeComponent__background"
    style="background-image: url({place.imgSrc});"
    on:click|preventDefault={() => {
      placeClick(place);
    }}
  >
  {#if showDeleteBtn}
  <img class="delete__btn" src="/src/assets/img/icons/trash.svg" alt="Supprimer des favoris" on:click={deleted} on:keydown={deleted}>
{/if}
    <div class="placeComponent__descWrapper">
      <h3 class="placeComponent__title">{place.name}</h3>
      <div class="placeComponent__locationWrapper">
        <img
          class="placeComponent__locationIcon"
          src="/src/assets/img/icons/location_icon.svg"
          alt="location_icon"
        />
        <p class="placeComponent__location">{place.namePlace}</p>
        <p class="localisationPlace" style="display:none"> {place.placeX}, {place.placeY}</p>
      </div>
    </div>
    </button>
{/each}
