<script>
  export let placeTitle;
  export let placeLocation;
  export let backgroundImageURL;
</script>

<div
  class="placeComponent placeComponent__background"
  style="background-image: url({backgroundImageURL});"
>
  <div class="placeComponent__descWrapper">
    <h3 class="placeComponent__title">{placeTitle}</h3>
    <div class="placeComponent__locationWrapper">
      <img
        class="placeComponent__locationIcon"
        src="/src/assets/img/location_icon.svg"
        alt="location_icon"
      />
      <p class="placeComponent__location">{placeLocation}</p>
    </div>
  </div>
</div>
