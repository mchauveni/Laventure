<script>
    import placeDatas from "/src/scripts/place.json";
    import { overlay, focusData, search, tag } from "/src/lib/stores";
    import { fade } from "svelte/transition";
    import { allLikedPlaces, placesNearYou } from "./stores";
    import localisationIcon from "/src/assets/img/icons/location_icon.svg";
    import trashIcon from "/src/assets/img/icons/trash.svg";
    import { displayLikedPlaces } from "/src/scripts/localstorage.ts";
    import { get } from "svelte/store";

    export let showDeleteBtn = false;
    export let data = undefined || placeDatas.places;

    function placeClick(place) {
        overlay.set("focus");
        focusData.set(place);
    }

    let place;
    focusData.subscribe((value) => {
        place = value;
    });

    function deleted() {
        const likedPlaces = JSON.parse(localStorage.getItem("places")) || [];
        const index = likedPlaces.indexOf(place.id);
        likedPlaces.splice(index, 1);
        localStorage.setItem("places", JSON.stringify(likedPlaces));
        displayLikedPlaces();
    }

    /* This is bs. It refresh the place component so it accurately shows the likes & places near you. */
    let visible = true;
    function reload() {
        visible = false;
        setTimeout(() => {
            visible = true;
        }, 10);
    }
    allLikedPlaces.subscribe((value) => {
        reload();
    });

    placesNearYou.subscribe((value) => {
        console.log("Places near you updated ! Reloading ");
        console.log(get(placesNearYou));
        console.log(data);
        reload();
    });

    console.log(data);
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
                    <img class="placeComponent__locationIcon" src={localisationIcon} alt="location_icon" />
                    <p class="placeComponent__location">{place.namePlace}</p>
                    <p class="localisationPlace" style="display:none;">{place.placeX} {place.placeY}</p>
                </div>
            </div>
            {#if showDeleteBtn}
                <img class="delete__btn" src={trashIcon} alt="Supprimer des favoris" on:click|stopPropagation={deleted} on:keydown|stopPropagation={deleted} />
            {/if}
        </button>
    {/if}
{/each}
