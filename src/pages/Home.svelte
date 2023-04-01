<script>
    import Header from "/src/lib/Header.svelte";
    import Footer from "/src/lib/Footer.svelte";
    import SearchBar from "/src/lib/SearchBar.svelte";
    import Places from "/src/lib/PlaceComponent.svelte";
    import datas from "/src/scripts/place.json";

    let value = "";

    const allDatas = datas.places;
    allDatas.forEach((data) => {
        const dataName = data.name;
        const dataPlace = data.namePlace;
        (value = data.name), data.namePlace;
    });
</script>

<Header />
<main class="main">
    <h1 class="main__title">Où partez-vous ?</h1>
    <SearchBar />
    <section class="discover" style="z-index:999;">
        <div class="discover__txt">
            <h2 class="discover__txt--title">Découvrir les lieux</h2>
            <li class="discover__txt--liste">
                <ul>Tous</ul>
                <ul>Nature</ul>
                <ul>Religion</ul>
                <ul>Production</ul>
                <ul>Historique</ul>
            </li>
        </div>
        <div class="places__home">
            <Places />
        </div>
    </section>
    <section class="discover" style="z-index:999;">
        <div class="discover__txt">
            <h2 class="discover__txt--title">Autour de vous</h2>
            <li class="discover__txt--liste">
                <ul>Tous</ul>
                <ul>Nature</ul>
                <ul>Religion</ul>
                <ul>Production</ul>
                <ul>Historique</ul>
            </li>
        </div>
        <div class="places__home test">
            <Places />
        </div>
    </section>
    <p id="test" />
    <script src="/src/scripts/places.ts" type="module"></script>
</main>
<Footer active="home" />
