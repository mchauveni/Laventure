<script>
    import { get } from "svelte/store";
    import Header from "/src/lib/Header.svelte";
    import Footer from "/src/lib/Footer.svelte";
    import SearchBar from "/src/lib/SearchBar.svelte";
    import Places from "/src/lib/PlaceComponent.svelte";
    import datas from "/src/scripts/place.json";
    import { allLikedPlaces } from "/src/lib/stores";
    import { displayLikedPlaces, deleteAll } from "/src/scripts/localstorage.ts";

    let value = "";
    const allDatas = datas.places;
    allDatas.forEach((data) => {
        const dataName = data.name;
        const dataPlace = data.namePlace;
        (value = data.name), data.namePlace;
    });

    displayLikedPlaces();
</script>

<Header />
<main class="main">
    <h1 class="main__title">Vos lieux favoris</h1>
    <SearchBar />
    {#if get(allLikedPlaces).length > 0}
        <div class="places__list">
            <Places showDeleteBtn={true} data={$allLikedPlaces} />
        </div>
    {:else}
        <p style="padding-top: 2rem;">Aucun lieu favori pour le moment.</p>
    {/if}
    <button class="btn_deleteAll" on:click={deleteAll} on:keydown={deleteAll}> Supprimer tous mes favoris </button>
</main>
<Footer active="like" />
