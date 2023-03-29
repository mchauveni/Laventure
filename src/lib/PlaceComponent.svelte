<script>
  import data from "./../scripts/place.json"

  let allplaces = data.places;
</script>


{#each allplaces as place}
<div
  class="placeComponent placeComponent__background"
  style="background-image: url({place.imgSrc});"
>
  <div class="placeComponent__descWrapper">
    <h3 class="placeComponent__title">{place.name}</h3>
    <div class="placeComponent__locationWrapper">
      <img
        class="placeComponent__locationIcon"
        src="/src/assets/img/location_icon.svg"
        alt="location_icon"
      />
      <p class="placeComponent__location">{place.namePlace}</p>
    </div>
  </div>
  <p class="localisationPlace" style="display:none;"> {place.placeX}, {place.placeY} </p>
</div>
{/each}