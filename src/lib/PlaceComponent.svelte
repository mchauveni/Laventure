<script>
    import test from "/src/scripts/place.json";
    import { overlay, focusData, search, tag } from "./stores";
    import { fade } from "svelte/transition";

  export let showDeleteBtn = false;
  export let data = undefined;

  let allplaces = data || test.places;

  function placeClick(place) {
    overlay.set("focus");
    focusData.set(place);
  }

  let place;
  focusData.subscribe((value) => {
    place = value;
  });

  function deleted() {
    const likedPlaces = JSON.parse(localStorage.getItem('places')) || []; 
    const index = likedPlaces.indexOf(place.id);
    likedPlaces.splice(index, 1);
    localStorage.setItem('places', JSON.stringify(likedPlaces));
  }

</script>

{#each allplaces as place}
    {#if (place.categorie.toUpperCase() === $tag || $tag === "TOUS") && (place.name.toUpperCase().includes($search.toUpperCase()) || place.namePlace.toUpperCase().includes($search.toUpperCase()))}
        <button
            class="placeComponent placeComponent__background"
            style="background-image: url({place.imgSrc});"
            on:click|preventDefault={() => {
                placeClick(place);
            }}
            transition:fade={{ duration: 200 }}
        >
            <div class="placeComponent__descWrapper">
                <h3 class="placeComponent__title">{place.name}</h3>
                <div class="placeComponent__locationWrapper">
                    <img class="placeComponent__locationIcon" src="/src/assets/img/icons/location_icon.svg" alt="location_icon" />
                    <p class="placeComponent__location">{place.namePlace}</p>
                </div>
            </div>
            {#if showDeleteBtn}
            <img class="delete__btn" src="/src/assets/img/icons/trash.svg" alt="Supprimer des favoris" on:click={deleted} on:keydown={deleted}>
            {/if}
        </button>
    {/if}

{/each}
