<script>
  import data from "./../scripts/place.json";
  import { overlay, focusData } from "./stores";
  let allplaces = data.places;

  function placeClick(place) {
    overlay.set("focus");
    focusData.set(place);
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
    <div class="placeComponent__descWrapper">
      <h3 class="placeComponent__title">{place.name}</h3>
      <div class="placeComponent__locationWrapper">
        <img
          class="placeComponent__locationIcon"
          src="/src/assets/img/icons/location_icon.svg"
          alt="location_icon"
        />
        <p class="placeComponent__location">{place.namePlace}</p>
      </div>
    </div>
  </div>
</div>
{/each}
