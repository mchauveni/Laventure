<script>
    import Header from "/src/lib/Header.svelte";
    import Footer from "/src/lib/Footer.svelte";
    import SearchBar from "/src/lib/SearchBar.svelte";
    import Places from "/src/lib/PlaceComponent.svelte";
    import datas from "/src/scripts/place.json";
    import { tag, placesNearYou } from "/src/lib/stores";
    import { get } from "svelte/store";

    let value = "";

    const allDatas = datas.places;
    allDatas.forEach((data) => {
        const dataName = data.name;
        const dataPlace = data.namePlace;
        (value = data.name), data.namePlace;
    });

    function changeTag(event) {
        tag.set(event.target.innerText.toUpperCase());
    }
</script>

<Header />
<main class="main">
    <h1 class="main__title">Où partez-vous ?</h1>
    <SearchBar />
    <section class="discover" style="z-index:999;">
        <div class="discover__txt">
            <h2 class="discover__title">Découvrir les lieux</h2>
            <li class="discover__liste">
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "TOUS"}>Tous</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "NATURE"}>Nature</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "RELIGION"}>Religion</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "PRODUCTION"}>Production</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "HISTORIQUE"}>Historique</a></ul>
            </li>
        </div>
        <div class="places__home">
            <Places />
        </div>
    </section>
    <section class="discover" style="z-index:999;">
        <div class="discover__txt">
            <h2 class="discover__title">Autour de vous</h2>
            <li class="discover__liste">
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "TOUS"}>Tous</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "NATURE"}>Nature</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "RELIGION"}>Religion</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "PRODUCTION"}>Production</a></ul>
                <ul><a href="." class="discover__tag" on:click|preventDefault={changeTag} class:selected={$tag === "HISTORIQUE"}>Historique</a></ul>
            </li>
        </div>
        <div class="places__home">
            <Places data={get(placesNearYou)} />
        </div>
    </section>
</main>
<Footer active="home" />
