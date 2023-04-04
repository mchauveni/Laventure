<script>
    import test from "/public/scripts/place.json";
    import { overlay, focusData, search, tag } from "/src/lib/stores";
    import { fade } from "svelte/transition";
    import { allLikedPlaces } from "./stores";
    import { displayLikedPlaces } from "/public/scripts/localstorage.ts";

    export let showDeleteBtn = false;
    export let data = undefined || test.places;

    function placeClick(place) {
        overlay.set("focus");
        focusData.set(place);
    }

    let place;
    focusData.subscribe((value) => {
        place = value;
    });

    /* This is bs. It refresh the place component so it accurately shows the likes. */
    let visible = true;
    allLikedPlaces.subscribe((value) => {
        visible = false;
        setTimeout(() => {
            visible = true;
        }, 50);
    });

    function deleted() {
        const likedPlaces = JSON.parse(localStorage.getItem("places")) || [];
        const index = likedPlaces.indexOf(place.id);
        likedPlaces.splice(index, 1);
        localStorage.setItem("places", JSON.stringify(likedPlaces));
        displayLikedPlaces();
    }
</script>

{#each data as place}
    {#if (place.categorie.toUpperCase() === $tag || $tag === "TOUS") && (place.name.toUpperCase().includes($search.toUpperCase()) || place.namePlace.toUpperCase().includes($search.toUpperCase())) && visible == true}
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
                    <p class="localisationPlace" style="display:none;">{place.placeX} {place.placeY}</p>
                </div>
            </div>
            {#if showDeleteBtn}
                <img class="delete__btn" src="/src/assets/img/icons/trash.svg" alt="Supprimer des favoris" on:click|stopPropagation={deleted} on:keydown|stopPropagation={deleted} />
            {/if}
        </button>
    {/if}
{/each}
