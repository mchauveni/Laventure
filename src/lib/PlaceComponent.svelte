<script>
    import data from "/src/scripts/place.json";
    import { overlay, focusData, search, tag } from "./stores";
    import { fade } from "svelte/transition";
    let allplaces = data.places;

    function placeClick(place) {
        overlay.set("focus");
        focusData.set(place);
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
        </button>
    {/if}
{/each}
